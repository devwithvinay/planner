import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, BrainCircuit, Target, CalendarDays, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <main className="landing">
      <nav className="top-nav">
        <Link href="/" className="brand"><span className="brand-mark">d</span> daymark</Link>
        <div className="nav-actions"><Link href="/login" className="nav-login">Log in</Link><Link href="/register" className="button primary">Get started <ArrowRight size={16}/></Link></div>
      </nav>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot"/> THE 90-DAY JOB READINESS CHALLENGE</div>
          <h1>Make your next<br/><span>90 days count.</span></h1>
          <p className="hero-text">One clear plan for DSA, aptitude, development, AI, interviews, and applications. Show up each day. Track the work. Build the career.</p>
          <div className="hero-actions"><Link href="/register" className="button primary large">Start your challenge <ArrowRight size={18}/></Link><span className="hero-note">Free personal planner · Save your progress</span></div>
          <div className="hero-proof"><div className="avatar-stack"><span>DS</span><span>JS</span><span>AI</span></div><p><strong>90 days.</strong> A little progress, every day.</p></div>
        </div>
        <div className="preview-wrap">
          <div className="preview-card">
            <div className="preview-top"><div><div className="preview-kicker">YOUR DASHBOARD</div><h3>Keep the promise.</h3></div><span className="day-pill">DAY 01 / 90</span></div>
            <div className="preview-progress"><div className="progress-label"><span>Overall progress</span><strong>12%</strong></div><div className="progress-track"><span style={{width:"12%"}}/></div></div>
            <div className="preview-task"><span className="task-icon purple"><Code2 size={17}/></span><div><strong>DSA practice</strong><small>Big-O basics + Two Sum</small></div><CheckCircle2 size={19} className="task-check"/></div>
            <div className="preview-task"><span className="task-icon green"><Target size={17}/></span><div><strong>Aptitude</strong><small>Number system and simplification</small></div><span className="empty-check"/></div>
            <div className="preview-task"><span className="task-icon orange"><CalendarDays size={17}/></span><div><strong>Build your project</strong><small>Responsive dashboard layout</small></div><span className="empty-check"/></div>
            <div className="preview-bottom"><span><TrendingUp size={16}/> Your consistency, visualized</span><span className="streak">✦ 0 day streak</span></div>
          </div>
          <div className="floating-note"><span className="float-icon"><BrainCircuit size={18}/></span><div><strong>Five focus areas</strong><small>One plan. No guesswork.</small></div></div>
        </div>
      </section>
      <section className="feature-section">
        <div className="section-heading"><div className="eyebrow">A PLAN YOU CAN FOLLOW</div><h2>Less planning. More progress.</h2><p>Everything you need for the next step in your developer journey, in one place.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon purple"><Code2 size={21}/></span><h3>Daily action list</h3><p>Specific DSA problems, aptitude topics, project tasks, interview practice, and career actions.</p></article>
          <article className="feature-card"><span className="feature-icon green"><CheckCircle2 size={21}/></span><h3>Progress that saves</h3><p>Register once. Your daily checkmarks and notes stay attached to your account.</p></article>
          <article className="feature-card"><span className="feature-icon orange"><TrendingUp size={21}/></span><h3>Build consistency</h3><p>See completed days, review your week, and keep moving after imperfect days.</p></article>
        </div>
      </section>
      <footer className="landing-footer"><Link href="/" className="brand"><span className="brand-mark">d</span> daymark</Link><span>Built for the work behind the offer.</span><Link href="/register">Start your 90 days <ArrowRight size={14}/></Link></footer>
    </main>
  );
}