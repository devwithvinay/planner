"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

type Props = { mode: "login" | "register" };

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true); setError(""); setMessage("");
    try {
      const supabase = getSupabase();
      if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { full_name: name.trim() } }
        });
        if (error) throw error;
        if (data.session) router.push("/dashboard");
        else setMessage("Account created. Check your email to confirm your account, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally { setBusy(false); }
  }

  return (
    <main className="auth-shell">
      <Link href="/" className="brand"><span className="brand-mark">d</span> daymark</Link>
      <section className="auth-card">
        <div className="eyebrow">YOUR NEXT 90 DAYS</div>
        <h1>{mode === "register" ? "Start showing up." : "Welcome back."}</h1>
        <p className="muted">{mode === "register" ? "Create your account and make progress visible." : "Pick up right where you left off."}</p>
        {error && <div className="alert error">{error}</div>}
        {message && <div className="alert success"><CheckCircle2 size={17}/>{message}</div>}
        <form onSubmit={submit} className="auth-form">
          {mode === "register" && <label>Your name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Vinay" autoComplete="name" required /></label>}
          <label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required /></label>
          <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters" minLength={6} autoComplete={mode === "register" ? "new-password" : "current-password"} required /></label>
          <button className="button primary full" disabled={busy}>{busy ? <LoaderCircle className="spin" size={18}/> : <>{mode === "register" ? "Create account" : "Log in"} <ArrowRight size={17}/></>}</button>
        </form>
        <p className="auth-switch">{mode === "register" ? "Already have an account?" : "New here?"} <Link href={mode === "register" ? "/login" : "/register"}>{mode === "register" ? "Log in" : "Create an account"}</Link></p>
      </section>
      <p className="auth-foot">Small steps. Real progress. One day at a time.</p>
    </main>
  );
}