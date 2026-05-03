import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Mail, Linkedin, MapPin, Award, GraduationCap, Code2, Globe, Brain, Mic, MicOff, ArrowRight, Send } from "lucide-react";

const VAPI_PUBLIC_KEY = "fd4d2f7e-c8d7-471a-be2a-211c41c9d28c";
const VAPI_ASSISTANT_ID = "b021b514-1454-4a40-b81d-937b0d9277c3";

export const Route = createFileRoute("/")({
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold font-display text-base font-bold shadow-[var(--shadow-gold)] transition-transform group-hover:scale-105">
            NR
          </span>
          <span className="hidden sm:block font-display font-semibold tracking-tight">Nikhil R</span>
        </a>
        <button
          onClick={() => document.getElementById("vapi-button")?.click()}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
        >
          <Mic className="h-4 w-4" />
          <span className="hidden sm:inline">Talk to My AI</span>
          <span className="sm:hidden">AI</span>
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Available for collaboration
        </div>
        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          Nikhil <span className="text-gold">R</span>
        </h1>
        <p className="reveal mt-5 text-base md:text-xl text-muted-foreground font-medium">
          Computer Science Engineering Student | Technology &amp; Software Development
        </p>
        <p className="reveal mt-4 mx-auto max-w-2xl text-lg md:text-2xl font-display font-medium leading-snug">
          Passionate student building real-world solutions through coding and collaboration.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
            Get In Touch
          </a>
        </div>

        <div className="reveal mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: GraduationCap, value: "1st Year", label: "Experience Level" },
            { icon: Award, value: "First Class with Distinction", label: "Top Achievement" },
            { icon: MapPin, value: "Coimbatore, India", label: "Location" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-left">
              <s.icon className="h-5 w-5 text-gold mb-3" />
              <div className="font-display text-lg md:text-xl font-semibold leading-tight">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">About</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">A curious mind, learning to build.</h2>
        </div>
        <div className="reveal mt-8 glass rounded-3xl p-8 md:p-12">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium">Nikhil R</span> is a Computer Science Engineering student at Sri Krishna College of Engineering and Technology, Coimbatore, with a strong interest in technology and software development. He focuses on improving problem-solving skills through coding challenges and hands-on projects, with a particular interest in data structures and real-world application development.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            As a hackathon and tech events enthusiast, he enjoys collaboration, learning new approaches, and solving challenging problems. He is committed to continuous learning and becoming a skilled professional contributing to innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Code2, title: "Problem Solving & Coding Practice", desc: "Focus on improving logic through coding challenges and consistent practice." },
    { icon: Globe, title: "Web Development Foundations", desc: "Basic knowledge from HTML & CSS and interest in building applications." },
    { icon: Brain, title: "AI & Technology Learning", desc: "Exposure to Artificial Intelligence concepts and a continuous learning mindset." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Focus Areas</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">What I'm working on</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <div
              key={s.title}
              className="reveal glass rounded-3xl p-8 group hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 mb-6 group-hover:bg-gold/20 transition-colors">
                <s.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "3+", label: "Certifications" },
    { num: "5+", label: "Completed Courses" },
    { num: "100%", label: "Learning Commitment" },
    { num: "1", label: "Core Focus: Software Development" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal glass-strong rounded-3xl p-8 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-6xl font-bold text-gold tracking-tight">{s.num}</div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Let's build something together.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Open to internships, collaborations, hackathons, and any opportunity to learn and grow.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:c.radhakrishnan987@gmail.com" className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-gold/40 transition-colors group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-medium">c.radhakrishnan987@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nikhil-r-27842135a" target="_blank" rel="noreferrer" className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-gold/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                <Linkedin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</div>
                <div className="font-medium">nikhil-r-27842135a</div>
              </div>
            </a>
          </div>
        </div>

        <form
          className="reveal glass rounded-3xl p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input required maxLength={100} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" maxLength={255} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required maxLength={1000} rows={5} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]">
              {sent ? "Message Sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-semibold">Nikhil R</div>
          <div className="text-xs text-muted-foreground mt-1">
            Computer Science Engineering Student · Coimbatore, Tamil Nadu, India
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/nikhil-r-27842135a"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-gold/10 hover:border-gold/40 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

function VapiButton() {
  const vapiRef = useRef<Vapi | null>(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;
    vapi.on("call-start", () => { setActive(true); setLoading(false); });
    vapi.on("call-end", () => { setActive(false); setLoading(false); });
    vapi.on("error", (e) => { console.error("Vapi error", e); setLoading(false); });
    return () => { vapi.stop(); };
  }, []);

  const toggle = async () => {
    const vapi = vapiRef.current;
    if (!vapi) return;
    if (active) {
      vapi.stop();
    } else {
      try {
        setLoading(true);
        await vapi.start(VAPI_ASSISTANT_ID);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    }
  };

  return (
    <button
      id="vapi-button"
      onClick={toggle}
      aria-label={active ? "End voice call" : "Talk to my AI assistant"}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[var(--shadow-gold)] transition-transform hover:scale-110 active:scale-95 ${active ? "bg-red-500" : "bg-gold"}`}
      style={{ width: 56, height: 56 }}
    >
      {active ? <MicOff className="h-6 w-6 text-white" /> : <Mic className="h-6 w-6" />}
      <span className={`absolute inset-0 rounded-full -z-10 ${active || loading ? "animate-ping bg-gold/40" : ""}`} />
    </button>
  );
}

function Index() {
  useReveal();
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Contact />
      <Footer />
      <VapiButton />
    </main>
  );
}
