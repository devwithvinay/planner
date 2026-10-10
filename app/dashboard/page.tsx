"use client";

import  { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { plan, type TaskKey } from "@/lib/plan";
import {
  Activity,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  NotebookPen,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

type ProgressRow = {
  day_number: number;
  completed_tasks: string[];
  notes: string;
  updated_at?: string;
};

type ReviewRow = {
  week_number: number;
  wins: string;
  challenges: string;
  next_week: string;
  applications_count: number;
};

const taskMeta: Record<
  TaskKey,
  {
    label: string;
    icon: typeof BookOpen;
    color: string;
  }
> = {
  dsa: {
    label: "DSA practice",
    icon: BookOpen,
    color: "purple",
  },
  aptitude: {
    label: "Aptitude",
    icon: Target,
    color: "green",
  },
  development: {
    label: "Development",
    icon: BookOpen,
    color: "orange",
  },
  interview: {
    label: "Interview prep",
    icon: MessageCircle,
    color: "blue",
  },
  career: {
    label: "Career & applications",
    icon: BriefcaseBusiness,
    color: "pink",
  },
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [progress, setProgress] = useState<Record<number, ProgressRow>>({});

  const [reviews, setReviews] = useState<Record<number, ReviewRow>>({});

  const [activeDay, setActiveDay] = useState(1);

  const [tab, setTab] = useState<"today" | "plan" | "progress" | "review">(
    "today",
  );

  const [loadingData, setLoadingData] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [reviewWeek, setReviewWeek] = useState(1);

  const [reviewDraft, setReviewDraft] = useState({
    wins: "",
    challenges: "",
    next_week: "",
    applications_count: 0,
  });

  const supabase = useMemo(() => {
    try {
      return getSupabase();
    } catch {
      return null;
    }
  }, []);

  // Authentication and initial dashboard data
  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      setLoadingData(false);
      return;
    }

    let cancelled = false;

    async function loadDashboard() {
      try {
        const { data, error } = await supabase!.auth.getUser();

        if (cancelled) return;

        if (error || !data.user) {
          router.replace("/login");
          return;
        }

        setUser(data.user);
        setAuthLoading(false);

        const [progressResult, reviewResult] = await Promise.all([
          supabase!
            .from("daily_progress")
            .select("day_number,completed_tasks,notes,updated_at"),

          supabase!
            .from("weekly_reviews")
            .select("week_number,wins,challenges,next_week,applications_count"),
        ]);

        if (cancelled) return;

        if (progressResult.error) {
          setToast(
            "Could not load saved progress. Check the Supabase SQL setup.",
          );
        }

        if (reviewResult.error) {
          setToast(
            "Could not load weekly reviews. Check the Supabase SQL setup.",
          );
        }

        const progressMap: Record<number, ProgressRow> = {};

        ((progressResult.data ?? []) as ProgressRow[]).forEach((row) => {
          progressMap[row.day_number] = {
            day_number: row.day_number,
            completed_tasks: row.completed_tasks ?? [],
            notes: row.notes ?? "",
            updated_at: row.updated_at ?? undefined,
          };
        });

        setProgress(progressMap);

        const reviewMap: Record<number, ReviewRow> = {};

        ((reviewResult.data ?? []) as ReviewRow[]).forEach((row) => {
          reviewMap[row.week_number] = {
            week_number: row.week_number,
            wins: row.wins ?? "",
            challenges: row.challenges ?? "",
            next_week: row.next_week ?? "",
            applications_count: row.applications_count ?? 0,
          };
        });

        setReviews(reviewMap);
      } catch (error) {
        console.error("Dashboard loading failed:", error);

        if (!cancelled) {
          setToast("Unable to load your dashboard. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setAuthLoading(false);
          setLoadingData(false);
        }
      }
    }

    void loadDashboard();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (cancelled) return;

        if (!session) {
          setUser(null);
          router.replace("/login");
        } else {
          setUser(session.user);
        }
      },
    );

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const currentDay = plan[activeDay - 1];

  const allCompleted = Object.values(progress).reduce(
    (sum, row) => sum + (row.completed_tasks?.length ?? 0),
    0,
  );

  const totalTasks = 90 * 5;

  const completedDays = Object.values(progress).filter(
    (row) => (row.completed_tasks?.length ?? 0) >= 5,
  ).length;

  const percent = Math.round((allCompleted / totalTasks) * 100);

  const todayRow: ProgressRow = progress[activeDay] ?? {
    day_number: activeDay,
    completed_tasks: [],
    notes: "",
  };

  const completedForDay = todayRow.completed_tasks ?? [];
  const dayDone = completedForDay.length >= 5;

  // Save a day's checklist and notes
  const saveDay = useCallback(
    async (day: number, next: ProgressRow) => {
      if (!supabase || !user) return;

      setSaving(true);

      try {
        const { error } = await supabase.from("daily_progress").upsert(
          {
            user_id: user.id,
            day_number: day,
            completed_tasks: next.completed_tasks,
            notes: next.notes || "",
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "user_id,day_number",
          },
        );

        if (error) {
          setToast(
            "Save failed. Check your connection and Supabase table policies.",
          );
        } else {
          setToast("Progress saved");
        }
      } catch (error) {
        console.error("Saving daily progress failed:", error);
        setToast("Could not save progress. Please try again.");
      } finally {
        setSaving(false);
      }
    },
    [supabase, user],
  );

  async function toggleTask(key: TaskKey) {
    const row: ProgressRow = progress[activeDay] ?? {
      day_number: activeDay,
      completed_tasks: [],
      notes: "",
    };

    const taskIds = row.completed_tasks ?? [];

    const nextTasks = taskIds.includes(key)
      ? taskIds.filter((task) => task !== key)
      : [...taskIds, key];

    const next = {
      ...row,
      completed_tasks: nextTasks,
    };

    setProgress((previous) => ({
      ...previous,
      [activeDay]: next,
    }));

    await saveDay(activeDay, next);
  }

  async function saveNotes(value: string) {
    const row: ProgressRow = progress[activeDay] ?? {
      day_number: activeDay,
      completed_tasks: [],
      notes: "",
    };

    const next = {
      ...row,
      notes: value,
    };

    setProgress((previous) => ({
      ...previous,
      [activeDay]: next,
    }));

    await saveDay(activeDay, next);
  }

  function openDay(day: number) {
    setActiveDay(Math.min(90, Math.max(1, day)));
    setTab("today");
    setMobileMenu(false);
  }

  function openReview(week: number) {
    const safeWeek = Math.min(13, Math.max(1, week));
    const row = reviews[safeWeek];

    setReviewWeek(safeWeek);

    setReviewDraft(
      row
        ? {
            wins: row.wins,
            challenges: row.challenges,
            next_week: row.next_week,
            applications_count: row.applications_count,
          }
        : {
            wins: "",
            challenges: "",
            next_week: "",
            applications_count: 0,
          },
    );
  }

  async function saveReview() {
    if (!supabase || !user) return;

    setSaving(true);

    const payload = {
      user_id: user.id,
      week_number: reviewWeek,
      ...reviewDraft,
      updated_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from("weekly_reviews").upsert(payload, {
        onConflict: "user_id,week_number",
      });

      if (error) {
        setToast("Could not save review. Check your Supabase setup.");
        return;
      }

      setReviews((previous) => ({
        ...previous,
        [reviewWeek]: {
          week_number: reviewWeek,
          ...reviewDraft,
        },
      }));

      setToast("Weekly review saved");
    } catch (error) {
      console.error("Saving weekly review failed:", error);
      setToast("Could not save your review. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    if (supabase) {
      await supabase.auth.signOut();
    }

    router.replace("/login");
  }

  if (authLoading || loadingData) {
    return (
      <div className="loading-screen">
        <div className="loader" />
        <p>Getting your workspace ready…</p>
      </div>
    );
  }

  if (!supabase) {
    return (
      <div className="setup-error">
        <h1>Almost there</h1>
        <p>
          Add your Supabase URL and publishable/anon key to{" "}
          <code>.env.local</code>, then restart the dev server.
        </p>
        <Link className="button primary" href="/">
          Back home
        </Link>
      </div>
    );
  }

  const displayName =
    user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Developer";

  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <Link href="/" className="brand">
          <span className="brand-mark">d</span> daymark
        </Link>

        <div className="sidebar-label">WORKSPACE</div>

        <button
          className={`side-link ${tab === "today" ? "active" : ""}`}
          onClick={() => setTab("today")}
        >
          <LayoutDashboard size={18} /> Today
        </button>

        <button
          className={`side-link ${tab === "plan" ? "active" : ""}`}
          onClick={() => setTab("plan")}
        >
          <CalendarDays size={18} /> 90-day plan
        </button>

        <button
          className={`side-link ${tab === "progress" ? "active" : ""}`}
          onClick={() => setTab("progress")}
        >
          <TrendingUp size={18} /> My progress
        </button>

        <button
          className={`side-link ${tab === "review" ? "active" : ""}`}
          onClick={() => {
            setTab("review");
            openReview(Math.min(13, Math.ceil(activeDay / 7)));
          }}
        >
          <NotebookPen size={18} /> Weekly review
        </button>

        <div className="sidebar-bottom">
          <div className="sidebar-challenge">
            <div className="challenge-icon">
              <Flame size={17} />
            </div>
            <div>
              <strong>90-day challenge</strong>
              <small>{completedDays} of 90 days completed</small>
            </div>
          </div>

          <div className="user-mini">
            <div className="user-avatar">
              {String(displayName).slice(0, 1).toUpperCase()}
            </div>
            <div className="user-info">
              <strong>{displayName}</strong>
              <small>{user?.email}</small>
            </div>
            <button className="icon-button" onClick={logout} title="Log out">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {mobileMenu && (
        <button
          className="mobile-scrim"
          onClick={() => setMobileMenu(false)}
          aria-label="Close menu"
        />
      )}

      <section className="main-panel">
        <header className="app-header">
          <button
            className="mobile-menu-button icon-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div>
            <span className="breadcrumb">
              Workspace <ChevronRight size={13} />{" "}
              {tab === "today"
                ? "Today"
                : tab === "plan"
                  ? "90-day plan"
                  : tab === "progress"
                    ? "My progress"
                    : "Weekly review"}
            </span>

            <h1>
              {tab === "today"
                ? "Your daily focus"
                : tab === "plan"
                  ? "The 90-day plan"
                  : tab === "progress"
                    ? "Progress overview"
                    : "Weekly reflection"}
            </h1>
          </div>

          <div className="header-right">
            <span className="saved-indicator">
              <span />
              {saving ? "Saving…" : "Auto-save on"}
            </span>

            <button
              className="button outline small"
              onClick={() => openDay(activeDay)}
            >
              <CalendarDays size={15} /> Day {activeDay}
            </button>
          </div>
        </header>

        {toast && (
          <button className="toast" onClick={() => setToast("")}>
            <CheckCircle2 size={16} />
            {toast}
            <X size={14} />
          </button>
        )}

        {tab === "today" && (
          <div className="content-area">
            <div className="welcome-row">
              <div>
                <p className="eyebrow">
                  DAY {String(activeDay).padStart(2, "0")} OF 90 ·{" "}
                  {currentDay.phase.toUpperCase()}
                </p>

                <h2>
                  {activeDay === 1
                    ? "Let's get started,"
                    : activeDay === 90
                      ? "Look how far you've come,"
                      : "Keep the promise,"}{" "}
                  <span>{displayName.split(" ")[0]}.</span>
                </h2>

                <p className="muted">
                  Small steps today. Stronger skills tomorrow.
                </p>
              </div>

              <div className="date-badge">
                <CalendarDays size={18} />
                <div>
                  <strong>Day {activeDay}</strong>
                  <small>
                    Week {currentDay.week} · {currentDay.focus}
                  </small>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <StatCard
                icon={<TrendingUp size={18} />}
                label="Overall progress"
                value={`${percent}%`}
                sub={`${allCompleted} of ${totalTasks} tasks`}
                color="purple"
              />

              <StatCard
                icon={<CheckCircle2 size={18} />}
                label="Days completed"
                value={`${completedDays}/90`}
                sub="All five daily tasks checked"
                color="green"
              />

              <StatCard
                icon={<Flame size={18} />}
                label="Today's progress"
                value={`${completedForDay.length}/5`}
                sub={
                  dayDone
                    ? "All tasks complete — nice work!"
                    : "One task at a time"
                }
                color="orange"
              />
            </div>

            <div className="today-layout">
              <section className="panel task-panel">
                <div className="panel-heading">
                  <div>
                    <div className="eyebrow">YOUR CHECKLIST</div>
                    <h3>Today's actions</h3>
                  </div>

                  <span
                    className={`completion-pill ${dayDone ? "complete" : ""}`}
                  >
                    {completedForDay.length}/5 done
                  </span>
                </div>

                <div className="task-list">
                  {(Object.keys(taskMeta) as TaskKey[]).map((key) => {
                    const meta = taskMeta[key];
                    const task = currentDay.tasks[key];
                    const Icon = meta.icon;
                    const checked = completedForDay.includes(key);

                    return (
                      <button
                        className={`daily-task ${checked ? "task-complete" : ""}`}
                        key={key}
                        onClick={() => toggleTask(key)}
                      >
                        <span className={`task-icon ${meta.color}`}>
                          {checked ? <Check size={18} /> : <Icon size={18} />}
                        </span>

                        <span className="task-copy">
                          <span className="task-label">{meta.label}</span>
                          <strong>{task.title}</strong>
                          <small>{task.detail}</small>
                        </span>

                        <span
                          className={`checkbox-custom ${checked ? "checked" : ""}`}
                        >
                          {checked && <Check size={13} />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="day-navigation">
                  <button
                    className="button outline"
                    disabled={activeDay === 1}
                    onClick={() => openDay(activeDay - 1)}
                  >
                    <ChevronLeft size={16} /> Previous day
                  </button>

                  <button
                    className="button primary"
                    disabled={activeDay === 90}
                    onClick={() => openDay(activeDay + 1)}
                  >
                    Next day <ChevronRight size={16} />
                  </button>
                </div>
              </section>

              <aside className="right-column">
                <section className="panel consistency-panel">
                  <div className="panel-heading">
                    <div>
                      <div className="eyebrow">SHOW UP AGAIN</div>
                      <h3>Consistency over perfection</h3>
                    </div>
                    <Flame size={20} className="flame-icon" />
                  </div>

                  <p className="muted small-text">
                    A missed day isn't the end. Come back to the next planned
                    session.
                  </p>

                  <div className="consistency-quote">
                    “You don't need a perfect streak. You need to keep
                    returning.”
                  </div>

                  <button
                    className="text-button"
                    onClick={() => setTab("progress")}
                  >
                    See your progress <ArrowRight size={15} />
                  </button>
                </section>

                <section className="panel note-panel">
                  <div className="panel-heading">
                    <div>
                      <div className="eyebrow">QUICK REFLECTION</div>
                      <h3>What did you learn?</h3>
                    </div>
                    <NotebookPen size={18} className="muted-icon" />
                  </div>

                  <textarea
                    key={activeDay}
                    defaultValue={todayRow.notes || ""}
                    onBlur={(event) => saveNotes(event.currentTarget.value)}
                    placeholder="Write a mistake, a win, or tomorrow's first task…"
                    rows={5}
                  />

                  <div className="note-hint">
                    <span>Saved when you leave this field</span>
                    <span>{todayRow.notes?.length ?? 0} chars</span>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        )}

        {tab === "plan" && (
          <div className="content-area">
            <div className="page-intro">
              <div>
                <p className="eyebrow">90 DAYS · 13 WEEKS</p>
                <h2>Your roadmap, one day at a time.</h2>
                <p className="muted">
                  Select any day to open its checklist. Your progress is saved
                  to your account.
                </p>
              </div>

              <div className="overall-ring">
                <strong>{percent}%</strong>
                <small>complete</small>
              </div>
            </div>

            <div className="phase-strip">
              <div>
                <span className="phase-dot one" />
                Days 1–30 <strong>Foundation</strong>
              </div>
              <div>
                <span className="phase-dot two" />
                Days 31–60 <strong>Build & interview</strong>
              </div>
              <div>
                <span className="phase-dot three" />
                Days 61–90 <strong>Assess & apply</strong>
              </div>
            </div>

            <div className="weeks-grid">
              {Array.from({ length: 13 }, (_, index) => index + 1).map(
                (week) => {
                  const weekDays = plan.filter((day) => day.week === week);

                  return (
                    <section className="week-card" key={week}>
                      <div className="week-card-head">
                        <div>
                          <span className="week-number">
                            WEEK {String(week).padStart(2, "0")}
                          </span>
                          <h3>{weekDays[0]?.focus}</h3>
                        </div>

                        <span className="week-count">
                          {
                            weekDays.filter(
                              (day) =>
                                (progress[day.day]?.completed_tasks?.length ??
                                  0) >= 5,
                            ).length
                          }
                          /{weekDays.length}
                        </span>
                      </div>

                      <div className="day-grid">
                        {weekDays.map((day) => {
                          const count =
                            progress[day.day]?.completed_tasks?.length ?? 0;

                          return (
                            <button
                              key={day.day}
                              className={`day-tile ${day.day === activeDay ? "selected" : ""} ${count >= 5 ? "finished" : count > 0 ? "in-progress" : ""}`}
                              onClick={() => openDay(day.day)}
                            >
                              <span>{String(day.day).padStart(2, "0")}</span>

                              {count >= 5 ? (
                                <Check size={13} />
                              ) : (
                                <small>{count ? `${count}/5` : ""}</small>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        className="week-review-link"
                        onClick={() => {
                          setTab("review");
                          openReview(week);
                        }}
                      >
                        Weekly review <ArrowRight size={13} />
                      </button>
                    </section>
                  );
                },
              )}
            </div>
          </div>
        )}

        {tab === "progress" && (
          <div className="content-area">
            <div className="page-intro">
              <div>
                <p className="eyebrow">YOUR WORK ADDS UP</p>
                <h2>Progress, not perfection.</h2>
                <p className="muted">
                  Every checked task is saved to your account.
                </p>
              </div>
            </div>

            <div className="stats-grid progress-stats">
              <StatCard
                icon={<CheckCircle2 size={18} />}
                label="Tasks completed"
                value={`${allCompleted}`}
                sub={`Out of ${totalTasks} planned tasks`}
                color="purple"
              />

              <StatCard
                icon={<CalendarDays size={18} />}
                label="Fully completed days"
                value={`${completedDays}`}
                sub="All five categories complete"
                color="green"
              />

              <StatCard
                icon={<Activity size={18} />}
                label="Days started"
                value={`${Object.values(progress).filter((row) => (row.completed_tasks?.length ?? 0) > 0).length}`}
                sub="At least one task checked"
                color="orange"
              />
            </div>

            <section className="panel progress-panel">
              <div className="panel-heading">
                <div>
                  <div className="eyebrow">90-DAY COMPLETION</div>
                  <h3>Daily progress map</h3>
                </div>
                <span className="muted small-text">{percent}% complete</span>
              </div>

              <div className="progress-map">
                {plan.map((day) => {
                  const count = progress[day.day]?.completed_tasks?.length ?? 0;

                  return (
                    <button
                      key={day.day}
                      title={`Day ${day.day}: ${count}/5 tasks`}
                      className={`progress-square ${count >= 5 ? "full" : count > 0 ? "partial" : ""}`}
                      onClick={() => openDay(day.day)}
                    >
                      {day.day}
                    </button>
                  );
                })}
              </div>

              <div className="legend">
                <span>
                  <i className="legend-full" /> Complete
                </span>
                <span>
                  <i className="legend-partial" /> In progress
                </span>
                <span>
                  <i className="legend-empty" /> Not started
                </span>
              </div>
            </section>

            <section className="panel area-progress">
              <div className="panel-heading">
                <div>
                  <div className="eyebrow">BY SKILL AREA</div>
                  <h3>Where your effort goes</h3>
                </div>
              </div>

              {(Object.keys(taskMeta) as TaskKey[]).map((key) => {
                const count = Object.values(progress).filter((row) =>
                  (row.completed_tasks ?? []).includes(key),
                ).length;

                const meta = taskMeta[key];
                const Icon = meta.icon;

                return (
                  <div className="skill-row" key={key}>
                    <span className={`task-icon ${meta.color}`}>
                      <Icon size={17} />
                    </span>

                    <div className="skill-main">
                      <div className="skill-label">
                        <strong>{meta.label}</strong>
                        <span>{count}/90</span>
                      </div>

                      <div className="progress-track">
                        <span
                          className={`bar-${meta.color}`}
                          style={{
                            width: `${(count / 90) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        )}

        {tab === "review" && (
          <div className="content-area">
            <div className="page-intro">
              <div>
                <p className="eyebrow">PAUSE · REFLECT · ADJUST</p>
                <h2>Your weekly review.</h2>
                <p className="muted">
                  Review your progress honestly. Choose one improvement for next
                  week.
                </p>
              </div>
            </div>

            <section className="panel review-panel">
              <div className="review-select">
                <label>
                  Choose week
                  <select
                    value={reviewWeek}
                    onChange={(event) =>
                      openReview(Number(event.currentTarget.value))
                    }
                  >
                    {Array.from({ length: 13 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        Week {index + 1} · Days {index * 7 + 1}–
                        {Math.min(90, (index + 1) * 7)}
                      </option>
                    ))}
                  </select>
                </label>

                <span className="completion-pill">
                  {
                    plan.filter(
                      (day) =>
                        day.week === reviewWeek &&
                        (progress[day.day]?.completed_tasks?.length ?? 0) >= 5,
                    ).length
                  }
                  /{plan.filter((day) => day.week === reviewWeek).length} days
                  completed
                </span>
              </div>

              <div className="review-fields">
                <label>
                  What went well?
                  <span>Wins, problems solved, features shipped.</span>
                  <textarea
                    rows={4}
                    value={reviewDraft.wins}
                    onChange={(event) => {
                      const value = event.currentTarget.value;

                      setReviewDraft((previous) => ({
                        ...previous,
                        wins: value,
                      }));
                    }}
                    placeholder="This week I learned…"
                  />
                </label>

                <label>
                  What was difficult?
                  <span>Be honest; this is how you improve.</span>
                  <textarea
                    rows={4}
                    value={reviewDraft.challenges}
                    onChange={(event) => {
                      const value = event.currentTarget.value;

                      setReviewDraft((previous) => ({
                        ...previous,
                        challenges: value,
                      }));
                    }}
                    placeholder="I got stuck on…"
                  />
                </label>

                <label>
                  What will you change next week?
                  <span>Choose one or two specific actions.</span>
                  <textarea
                    rows={4}
                    value={reviewDraft.next_week}
                    onChange={(event) => {
                      const value = event.currentTarget.value;

                      setReviewDraft((previous) => ({
                        ...previous,
                        next_week: value,
                      }));
                    }}
                    placeholder="Next week I will…"
                  />
                </label>

                <label>
                  Applications sent this week
                  <input
                    type="number"
                    min="0"
                    value={reviewDraft.applications_count}
                    onChange={(event) => {
                      const value = Math.max(
                        0,
                        Number(event.currentTarget.value),
                      );

                      setReviewDraft((previous) => ({
                        ...previous,
                        applications_count: value,
                      }));
                    }}
                  />
                </label>
              </div>

              <div className="review-footer">
                <span className="muted small-text">
                  Your review is private to your account.
                </span>

                <button
                  className="button primary"
                  onClick={saveReview}
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Save weekly review"}{" "}
                  <ArrowRight size={16} />
                </button>
              </div>
            </section>
          </div>
        )}

        <footer className="app-footer">
          <span>
            daymark <span className="footer-dot">·</span> your next 90 days
          </span>
          <span>Small steps. Real progress.</span>
        </footer>
      </section>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
  color,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="stat-card">
      <span className={`stat-icon ${color}`}>{icon}</span>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}
