import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";
import {
  Menu, X, Sun, Moon, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight,
  Phone, Mail, MapPin, Send, Check,
  ShieldCheck, Smartphone, Cloud, Code2, Layers, Database, Building2,
  Landmark, HeartPulse, Factory, ShoppingBag, GraduationCap, Truck, Wallet,
  Briefcase, Users, Rocket, Headphones, Handshake, Award, Target,
  Eye, Compass, Quote, Star, Search, Calendar, ArrowDown, Server, GitBranch,
  Settings2, Boxes, CreditCard, FileCheck, ScanFace, Network, Sparkles,
  TrendingUp, CheckCircle2, MonitorSmartphone, Workflow, Lock
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook
} from "react-icons/fa";

const LOGO = "data:image/jpeg;base64,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";

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

interface Stat { value: number; suffix: string; label: string; }
interface Service { icon: LucideIcon; title: string; desc: string; }
interface Industry { icon: LucideIcon; name: string; desc: string; }
interface Feature { icon: LucideIcon; title: string; desc: string; }
interface TechGroup { group: string; items: string[]; icon: LucideIcon; }
interface BankItem { icon: LucideIcon; title: string; }
interface Testimonial { name: string; role: string; rating: number; quote: string; }
interface JourneyItem { year: string; title: string; desc: string; }
interface Project { cat: string; title: string; desc: string; tags: string[]; }
interface Job { title: string; type: string; loc: string; tags: string[]; }
interface Post { cat: string; title: string; date: string; read: string; excerpt: string; }
interface ProfGroup { group: string; icon: LucideIcon; items: [string, number][]; }

type Theme = "light" | "dark";

const NAV = ["Home", "About", "Services", "Industries", "Technologies", "Portfolio", "Careers", "Blog", "Contact"] as const;
type PageName = (typeof NAV)[number];
type Go = (p: PageName) => void;
interface PageProps { go: Go; }

const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const SERVICES: Service[] = [
  { icon: Compass, title: "IT Consulting", desc: "Strategic technology advisory that aligns your roadmap, architecture and investments with measurable business outcomes." },
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke, scalable platforms engineered to your exact workflows — built clean, tested and ready for the long haul." },
  { icon: Smartphone, title: "Mobile Application Development", desc: "Native and cross-platform apps with secure, polished experiences that perform across every device." },
  { icon: MonitorSmartphone, title: "Android Development", desc: "Production-grade Android apps with hardened security, offline resilience and Play Store-ready delivery." },
  { icon: Layers, title: "React Native Development", desc: "One codebase, two platforms — fast iteration without compromising on native feel or security posture." },
  { icon: Boxes, title: "Web Application Development", desc: "Responsive, high-performance web apps built on modern frameworks with enterprise-grade engineering standards." },
  { icon: Building2, title: "Enterprise Application Development", desc: "Mission-critical systems that handle scale, compliance and complex integrations without breaking a sweat." },
  { icon: Landmark, title: "Banking & Fintech Solutions", desc: "Loan origination, lending, KYC and onboarding platforms purpose-built for regulated financial environments." },
  { icon: Cloud, title: "Cloud & DevOps Services", desc: "Cloud migration, CI/CD pipelines and infrastructure automation that make releases boring — in the best way." },
  { icon: Headphones, title: "Managed Services", desc: "Round-the-clock monitoring, maintenance and support so your platforms stay fast, secure and always available." },
];

const INDUSTRIES: Industry[] = [
  { icon: Landmark, name: "Banking", desc: "Core banking, lending and digital channels for scheduled and small finance banks." },
  { icon: Wallet, name: "Fintech", desc: "Payments, lending and embedded finance products built for speed and compliance." },
  { icon: ShieldCheck, name: "Insurance", desc: "Policy administration, claims and onboarding journeys with audit-ready controls." },
  { icon: HeartPulse, name: "Healthcare", desc: "Secure patient platforms and data systems that respect privacy and regulation." },
  { icon: Factory, name: "Manufacturing", desc: "Connected operations, MES integrations and analytics across the shop floor." },
  { icon: ShoppingBag, name: "Retail", desc: "Commerce, loyalty and omnichannel experiences that move with the customer." },
  { icon: GraduationCap, name: "Education", desc: "Learning platforms and administration systems built for scale and access." },
  { icon: Truck, name: "Logistics", desc: "Tracking, routing and fleet visibility that keep goods and data moving." },
];

const WHY: Feature[] = [
  { icon: Target, title: "Domain Expertise", desc: "Deep, hands-on experience in banking, fintech and regulated enterprise software — not surface knowledge." },
  { icon: Lock, title: "Enterprise Security", desc: "Security designed in from day one: encryption, attestation, RASP and VAPT-hardened delivery." },
  { icon: Workflow, title: "Agile Delivery", desc: "Short feedback loops, transparent progress and shippable increments every sprint." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Architectures that grow with you — from first ten users to your busiest day at scale." },
  { icon: Headphones, title: "Dedicated Support", desc: "A team that stays close after launch, with clear SLAs and responsive, human help." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We measure success by the relationships we keep, not the projects we close." },
];

const TECH: TechGroup[] = [
  { group: "Frontend", items: ["React", "Angular", "Vue", "TypeScript"], icon: Code2 },
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", ".NET"], icon: Server },
  { group: "Mobile", items: ["Android", "Kotlin", "Java", "React Native", "Flutter"], icon: Smartphone },
  { group: "Database", items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"], icon: Database },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"], icon: Cloud },
];

const BANKING: BankItem[] = [
  { icon: FileCheck, title: "Loan Origination Systems (LOS)" },
  { icon: Settings2, title: "Loan Management Systems (LMS)" },
  { icon: Smartphone, title: "Mobile Banking Applications" },
  { icon: ScanFace, title: "Digital KYC" },
  { icon: FileCheck, title: "eKYC Solutions" },
  { icon: Network, title: "Account Aggregator Integration" },
  { icon: CreditCard, title: "Collections Management" },
  { icon: Landmark, title: "MSME Lending Platforms" },
  { icon: Users, title: "Digital Onboarding Solutions" },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Rajesh Menon", role: "CTO, Regional Finance Bank", rating: 5, quote: "Their grasp of lending workflows and regulatory nuance is rare. The loan origination platform they delivered cut our turnaround time dramatically — and it just works." },
  { name: "Priya Nair", role: "Head of Digital, NBFC", rating: 5, quote: "From eKYC to collections, the team handled every layer of complexity with calm and clarity. Security was never an afterthought — it was the foundation." },
  { name: "Arun Krishnan", role: "VP Engineering, Fintech", rating: 5, quote: "We needed a partner who could move fast without cutting corners. Thiruchitrambalam Systems shipped a hardened mobile app that passed every audit on the first pass." },
  { name: "Lakshmi Sundaram", role: "Director, MSME Lender", rating: 5, quote: "Right people, right solution, right results — it's not just a tagline. They genuinely understood our business before writing a single line of code." },
];

const VALUES: Feature[] = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do what we say, protect what you trust us with, and tell you the truth even when it's hard." },
  { icon: Sparkles, title: "Craftsmanship", desc: "Clean architecture and code we're proud to sign — quality is a habit, not a milestone." },
  { icon: Users, title: "Partnership", desc: "Your goals become ours. We win together or not at all." },
  { icon: Rocket, title: "Momentum", desc: "We move with purpose, ship often, and learn fast." },
];

const JOURNEY: JourneyItem[] = [
  { year: "2018", title: "Founded", desc: "Started with a small team and a clear belief: technology should serve the business, not the other way around." },
  { year: "2020", title: "Banking Focus", desc: "Deepened our specialization in lending, KYC and regulated financial platforms." },
  { year: "2022", title: "Scale & Security", desc: "Built a dedicated security practice — VAPT hardening, attestation and RASP across mobile delivery." },
  { year: "2024", title: "Digital Transformation", desc: "Expanded into cloud, DevOps and enterprise modernization for clients across ten+ industries." },
  { year: "2026", title: "Trusted Partner", desc: "100+ projects delivered, 99% client satisfaction, and partnerships that keep growing." },
];

const CERTS: string[] = ["ISO 27001 Aligned", "OWASP Secure SDLC", "AWS Certified Teams", "Azure Certified Teams", "Agile / Scrum Practitioners", "PCI-DSS Aware Delivery"];

const PORTFOLIO: Project[] = [
  { cat: "Banking", title: "MSME Loan Origination System", desc: "End-to-end LOS with multi-stage approval, decisioning and integration to credit bureaus.", tags: ["Spring Boot", "React", "Go"] },
  { cat: "Mobile", title: "Secure Mobile Lending App", desc: "VAPT-hardened Android app with native security guard, key attestation and dynamic encryption.", tags: ["React Native", "C++/JNI", "Kotlin"] },
  { cat: "Banking", title: "Loan Management Platform", desc: "Servicing, collections and reporting platform for a small finance bank's retail portfolio.", tags: ["Java", "PostgreSQL", "AG Grid"] },
  { cat: "Cloud", title: "Cloud Migration & DevOps", desc: "Lifted a monolith to a containerized, auto-scaling estate with CI/CD and zero-downtime releases.", tags: ["AWS", "Docker", "Nginx"] },
  { cat: "Enterprise", title: "Admin & Case Management Web App", desc: "Role-based loan management console with assignment workflows and real-time dashboards.", tags: ["React TS", "Vite", "React Query"] },
  { cat: "Mobile", title: "Digital Onboarding & eKYC", desc: "Paperless onboarding with live KYC, document capture and Account Aggregator consent flows.", tags: ["Android", "Kotlin", "REST"] },
];

const PORTFOLIO_CATS: string[] = ["All", "Banking", "Mobile", "Cloud", "Enterprise"];

const JOBS: Job[] = [
  { title: "Senior Full-Stack Engineer", type: "Full-time", loc: "Bengaluru / Hybrid", tags: ["React", "Spring Boot", "TypeScript"] },
  { title: "React Native Developer", type: "Full-time", loc: "Bengaluru / Remote", tags: ["React Native", "Android", "Security"] },
  { title: "Java Backend Engineer", type: "Full-time", loc: "Bengaluru / Hybrid", tags: ["Java", "Spring Boot", "PostgreSQL"] },
  { title: "DevOps Engineer", type: "Full-time", loc: "Bengaluru / Hybrid", tags: ["AWS", "Docker", "CI/CD"] },
  { title: "UI/UX Designer", type: "Full-time", loc: "Remote", tags: ["Figma", "Design Systems", "Web"] },
  { title: "QA Automation Engineer", type: "Full-time", loc: "Bengaluru / Hybrid", tags: ["Automation", "Security Testing"] },
];

const BENEFITS: Feature[] = [
  { icon: HeartPulse, title: "Health & Wellbeing", desc: "Comprehensive insurance for you and your family, plus wellness support." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Certifications, courses and conferences — we invest in your growth." },
  { icon: Compass, title: "Flexible Work", desc: "Hybrid and remote options. We care about outcomes, not hours at a desk." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear paths, real mentorship, and the chance to lead meaningful work." },
];

const POSTS: Post[] = [
  { cat: "Banking", title: "Building a Loan Origination System That Scales", date: "Jun 2026", read: "8 min", excerpt: "What it really takes to design an LOS that survives audits, integrations and your busiest lending day." },
  { cat: "Security", title: "Hardening Mobile Apps Against Reverse Engineering", date: "May 2026", read: "11 min", excerpt: "A practical walkthrough of native guards, attestation and the threats VAPT actually catches." },
  { cat: "Fintech", title: "eKYC and Account Aggregator: A Field Guide", date: "May 2026", read: "7 min", excerpt: "Designing consent-driven onboarding that's compliant, fast and genuinely user-friendly." },
  { cat: "Cloud", title: "Zero-Downtime Releases for Banking Workloads", date: "Apr 2026", read: "9 min", excerpt: "How we migrated a critical lending monolith to the cloud without a single maintenance window." },
  { cat: "Engineering", title: "Clean Architecture in Spring Boot Services", date: "Apr 2026", read: "10 min", excerpt: "Patterns that keep enterprise backends testable, readable and easy to evolve." },
  { cat: "Fintech", title: "Collections Management Without the Friction", date: "Mar 2026", read: "6 min", excerpt: "Designing collections workflows that recover value while respecting the customer relationship." },
];

const BLOG_CATS: string[] = ["All", "Banking", "Fintech", "Security", "Cloud", "Engineering"];

/* ------------------------------------------------------------------ */
/*  THEME                                                             */
/* ------------------------------------------------------------------ */

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} });

/* ------------------------------------------------------------------ */
/*  HOOKS                                                             */
/* ------------------------------------------------------------------ */

function useInView(options: IntersectionObserverInit = {}): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.unobserve(el); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCountUp(target: number, run: boolean, duration = 1600): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(target); return; }
    let raf = 0;
    let start: number | undefined;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return val;
}

interface RevealProps { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties; }
function Reveal({ children, delay = 0, className = "", style }: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STYLES                                                            */
/* ------------------------------------------------------------------ */

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.tcs-root{
  --blue:#0B2A6F; --blue-deep:#081f52; --blue-soft:#10357f;
  --gold:#C79A3B; --gold-lt:#E0BC6B; --gold-dp:#A87E2A;
  --navy:#102040;
  --bg:#FFFFFF; --bg-2:#F5F7FB; --bg-3:#ECF1FA;
  --surface:#FFFFFF; --surface-2:#F7F9FD;
  --text:#102040; --text-2:#4a5a78; --text-3:#7587a3;
  --border:#e4e9f3; --border-2:#d6deee;
  --shadow:0 18px 50px -22px rgba(11,42,111,.28);
  --shadow-sm:0 8px 26px -16px rgba(11,42,111,.30);
  --glass:rgba(255,255,255,.72);
  --ring:rgba(11,42,111,.10);
  font-family:'Inter',system-ui,sans-serif;
  color:var(--text); background:var(--bg);
  -webkit-font-smoothing:antialiased; line-height:1.6;
}
.tcs-root[data-theme="dark"]{
  --blue:#2d5bd6; --blue-deep:#0a1733; --blue-soft:#1d3f9e;
  --navy:#dce6fb;
  --bg:#070e1f; --bg-2:#0b1530; --bg-3:#0e1a3a;
  --surface:#0e1a38; --surface-2:#122148;
  --text:#e7eefb; --text-2:#a9b8d6; --text-3:#7589ad;
  --border:#1c2c52; --border-2:#26396a;
  --shadow:0 22px 60px -26px rgba(0,0,0,.7);
  --shadow-sm:0 10px 30px -18px rgba(0,0,0,.7);
  --glass:rgba(12,22,48,.72);
  --ring:rgba(255,255,255,.06);
}
.tcs-root *{box-sizing:border-box;margin:0;}
.tcs-root h1,.tcs-root h2,.tcs-root h3,.tcs-root h4,.tcs-root .display{font-family:'Sora','Inter',sans-serif;color:var(--text);letter-spacing:-.02em;line-height:1.12;font-weight:700;}
.tcs-root p{color:var(--text-2);}
.tcs-root a{color:inherit;text-decoration:none;}
.tcs-root button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;}
.tcs-root img{display:block;max-width:100%;}
.tcs-root ::selection{background:var(--gold);color:#1a1300;}

.wrap{width:100%;max-width:1200px;margin:0 auto;padding:0 24px;}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:'Sora',sans-serif;font-weight:600;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-dp);}
.tcs-root[data-theme="dark"] .eyebrow{color:var(--gold-lt);}
.eyebrow::before{content:"";width:22px;height:2px;background:linear-gradient(90deg,var(--gold),transparent);border-radius:2px;}
.gold-text{background:linear-gradient(120deg,var(--gold-dp),var(--gold),var(--gold-lt));-webkit-background-clip:text;background-clip:text;color:transparent;}
.muted{color:var(--text-2);}

/* buttons */
.btn{display:inline-flex;align-items:center;gap:9px;font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:14px 26px;border-radius:13px;transition:transform .2s ease,box-shadow .25s ease,background .25s ease;white-space:nowrap;}
.btn:active{transform:translateY(1px);}
.btn-primary{background:linear-gradient(135deg,var(--blue),var(--blue-deep));color:#fff;box-shadow:0 14px 30px -12px rgba(11,42,111,.6);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 20px 40px -12px rgba(11,42,111,.7);}
.btn-gold{background:linear-gradient(135deg,var(--gold-lt),var(--gold),var(--gold-dp));color:#1f1500;box-shadow:0 14px 30px -12px rgba(199,154,59,.55);}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 20px 42px -12px rgba(199,154,59,.7);}
.btn-ghost{background:transparent;color:var(--text);border:1.5px solid var(--border-2);}
.btn-ghost:hover{border-color:var(--blue);color:var(--blue);transform:translateY(-2px);}
.tcs-root[data-theme="dark"] .btn-ghost:hover{color:var(--gold-lt);border-color:var(--gold);}

/* nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:60;transition:all .35s ease;}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:74px;}
.nav.scrolled{background:var(--glass);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--border);box-shadow:var(--shadow-sm);}
.brand{display:flex;align-items:center;gap:11px;}
.brand img{width:42px;height:42px;border-radius:10px;background:#fff;padding:2px;box-shadow:0 4px 14px -6px rgba(11,42,111,.4);}
.brand-name{font-family:'Sora',sans-serif;font-weight:700;font-size:17px;line-height:1.05;color:var(--text);}
.brand-name small{display:block;font-size:10px;letter-spacing:.16em;color:var(--gold-dp);font-weight:600;text-transform:uppercase;}
.tcs-root[data-theme="dark"] .brand-name small{color:var(--gold-lt);}
.nav-links{display:flex;align-items:center;gap:4px;}
.nav-link{font-size:14.5px;font-weight:500;padding:9px 13px;border-radius:9px;color:var(--text-2);transition:.2s;position:relative;}
.nav-link:hover{color:var(--blue);background:var(--bg-2);}
.tcs-root[data-theme="dark"] .nav-link:hover{color:var(--gold-lt);}
.nav-link.active{color:var(--blue);}
.tcs-root[data-theme="dark"] .nav-link.active{color:var(--gold-lt);}
.nav-link.active::after{content:"";position:absolute;left:13px;right:13px;bottom:3px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--gold),var(--gold-dp));}
.nav-actions{display:flex;align-items:center;gap:10px;}
.icon-btn{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;color:var(--text-2);border:1px solid var(--border);background:var(--surface);transition:.22s;}
.icon-btn:hover{color:var(--blue);border-color:var(--blue);transform:translateY(-2px);}
.tcs-root[data-theme="dark"] .icon-btn:hover{color:var(--gold-lt);border-color:var(--gold);}
.burger{display:none;}
.mobile-menu{display:none;}

/* hero */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding:120px 0 80px;background:radial-gradient(120% 90% at 80% -10%,rgba(199,154,59,.10),transparent 55%),radial-gradient(100% 80% at 0% 0%,rgba(11,42,111,.07),transparent 50%),var(--bg);}
.tcs-root[data-theme="dark"] .hero{background:radial-gradient(120% 90% at 80% -10%,rgba(199,154,59,.10),transparent 55%),radial-gradient(110% 90% at 0% 0%,rgba(45,91,214,.14),transparent 55%),var(--bg);}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:40px;align-items:center;}
.hero h1{font-size:clamp(38px,5.6vw,68px);font-weight:800;}
.hero-sub{font-size:clamp(16px,1.4vw,18.5px);max-width:560px;margin-top:22px;color:var(--text-2);}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px;}
.hero-trust{display:flex;align-items:center;gap:18px;margin-top:34px;flex-wrap:wrap;color:var(--text-3);font-size:13.5px;}
.hero-trust b{color:var(--text);font-weight:600;}
.tag-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-family:'Sora',sans-serif;font-weight:600;font-size:12.5px;letter-spacing:.04em;color:var(--blue);box-shadow:var(--shadow-sm);}
.tcs-root[data-theme="dark"] .tag-pill{color:var(--gold-lt);}

/* cosmic ring signature */
.ring-stage{position:relative;aspect-ratio:1;display:flex;align-items:center;justify-content:center;}
.ring-stage .glow{position:absolute;width:70%;height:70%;border-radius:50%;background:radial-gradient(circle,rgba(199,154,59,.30),transparent 65%);filter:blur(8px);}
.ring{position:absolute;border-radius:50%;border:1.5px solid var(--ring);}
.orbit{position:absolute;inset:0;animation:spin 26s linear infinite;}
.orbit.r{animation-direction:reverse;animation-duration:34s;}
.orbit .dot{position:absolute;top:50%;left:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:linear-gradient(var(--gold-lt),var(--gold-dp));box-shadow:0 0 14px 2px rgba(199,154,59,.6);}
.ring-core{width:46%;height:46%;border-radius:50%;background:linear-gradient(150deg,var(--blue),var(--blue-deep));display:flex;align-items:center;justify-content:center;box-shadow:0 30px 70px -24px rgba(11,42,111,.7),inset 0 2px 14px rgba(255,255,255,.12);position:relative;z-index:2;}
.ring-core img{width:62%;height:62%;border-radius:18px;background:#fff;padding:8px;box-shadow:0 12px 30px -10px rgba(0,0,0,.4);}
.float-chip{position:absolute;background:var(--glass);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:14px;padding:11px 15px;box-shadow:var(--shadow);display:flex;align-items:center;gap:10px;z-index:3;font-size:13px;}
.float-chip .ic{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--blue),var(--blue-soft));color:#fff;flex-shrink:0;}
.float-chip b{font-family:'Sora',sans-serif;font-size:14px;color:var(--text);display:block;}
.float-chip span{color:var(--text-3);font-size:11.5px;}
.fc-1{top:8%;left:-6%;animation:floaty 6s ease-in-out infinite;}
.fc-2{bottom:12%;right:-8%;animation:floaty 7s ease-in-out infinite .6s;}
@keyframes spin{to{transform:rotate(360deg);}}
@keyframes floaty{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}

/* sections */
.section{padding:96px 0;position:relative;}
.section.alt{background:var(--bg-2);}
.section.blue{background:linear-gradient(135deg,var(--blue-deep),var(--blue));color:#fff;}
.section.blue h2,.section.blue h3,.section.blue p,.section.blue .display{color:#fff;}
.section.blue p{color:rgba(255,255,255,.82);}
.sec-head{max-width:680px;margin:0 auto 56px;text-align:center;}
.sec-head.left{margin-left:0;text-align:left;}
.sec-head h2{font-size:clamp(28px,3.4vw,42px);margin-top:14px;font-weight:700;}
.sec-head p{margin-top:16px;font-size:16.5px;}

/* cards */
.grid{display:grid;gap:22px;}
.g-2{grid-template-columns:repeat(2,1fr);}
.g-3{grid-template-columns:repeat(3,1fr);}
.g-4{grid-template-columns:repeat(4,1fr);}
.card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px;transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;position:relative;overflow:hidden;}
.card::after{content:"";position:absolute;left:0;top:0;height:3px;width:100%;background:linear-gradient(90deg,var(--gold),var(--gold-dp));transform:scaleX(0);transform-origin:left;transition:transform .35s ease;}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow);border-color:var(--border-2);}
.card:hover::after{transform:scaleX(1);}
.card-ic{width:54px;height:54px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(11,42,111,.1),rgba(199,154,59,.14));color:var(--blue);margin-bottom:18px;transition:.3s;}
.tcs-root[data-theme="dark"] .card-ic{color:var(--gold-lt);background:linear-gradient(135deg,rgba(45,91,214,.18),rgba(199,154,59,.16));}
.card:hover .card-ic{background:linear-gradient(135deg,var(--blue),var(--blue-soft));color:#fff;transform:scale(1.05) rotate(-3deg);}
.card h3{font-size:19px;margin-bottom:9px;}
.card p{font-size:14.5px;line-height:1.62;}
.learn{display:inline-flex;align-items:center;gap:6px;margin-top:16px;font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;color:var(--blue);transition:gap .2s;}
.tcs-root[data-theme="dark"] .learn{color:var(--gold-lt);}
.card:hover .learn{gap:11px;}

/* stats */
.stat-band{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
.stat{text-align:center;padding:30px 16px;border-radius:18px;background:var(--glass);backdrop-filter:blur(10px);border:1px solid var(--border);box-shadow:var(--shadow-sm);}
.section.blue .stat{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.14);}
.stat-num{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(34px,4vw,52px);line-height:1;background:linear-gradient(120deg,var(--gold-lt),var(--gold-dp));-webkit-background-clip:text;background-clip:text;color:transparent;}
.section.blue .stat-num{background:linear-gradient(120deg,#ffe6a8,var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent;}
.stat-label{margin-top:10px;font-size:14px;font-weight:500;color:var(--text-2);}
.section.blue .stat-label{color:rgba(255,255,255,.82);}

/* why - compact */
.feature{display:flex;gap:16px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:22px;transition:.3s;}
.feature:hover{transform:translateY(-4px);box-shadow:var(--shadow-sm);border-color:var(--gold);}
.feature .fic{width:46px;height:46px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--blue),var(--blue-soft));color:#fff;}
.feature h3{font-size:17px;margin-bottom:6px;}
.feature p{font-size:14px;}

/* tech */
.tech-col{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px;transition:.3s;}
.tech-col:hover{box-shadow:var(--shadow-sm);transform:translateY(-4px);}
.tech-col .th{display:flex;align-items:center;gap:11px;margin-bottom:18px;}
.tech-col .th .ic{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(199,154,59,.18),rgba(11,42,111,.12));color:var(--blue);}
.tcs-root[data-theme="dark"] .tech-col .th .ic{color:var(--gold-lt);}
.tech-col .th h3{font-size:17px;}
.chip{display:inline-flex;align-items:center;gap:7px;padding:8px 14px;margin:0 8px 8px 0;border-radius:10px;background:var(--bg-2);border:1px solid var(--border);font-size:13.5px;font-weight:500;color:var(--text);transition:.22s;}
.chip:hover{background:var(--blue);color:#fff;border-color:var(--blue);transform:translateY(-2px);}
.chip .d{width:7px;height:7px;border-radius:50%;background:var(--gold);}
.chip:hover .d{background:var(--gold-lt);}

/* banking split */
.bank-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.bank-item{display:flex;align-items:center;gap:13px;padding:18px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);transition:.3s;}
.bank-item:hover{background:rgba(255,255,255,.11);transform:translateY(-3px);}
.bank-item .ic{width:42px;height:42px;border-radius:11px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold-lt),var(--gold-dp));color:#1f1500;}
.bank-item span{font-family:'Sora',sans-serif;font-weight:600;font-size:14.5px;color:#fff;}

/* testimonials */
.tcard{background:var(--surface);border:1px solid var(--border);border-radius:22px;padding:42px;max-width:780px;margin:0 auto;text-align:center;box-shadow:var(--shadow);position:relative;}
.tcard .q{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold-lt),var(--gold-dp));color:#1f1500;margin:0 auto 22px;}
.tcard blockquote{font-family:'Sora',sans-serif;font-weight:500;font-size:clamp(17px,2vw,22px);line-height:1.5;color:var(--text);}
.tstars{display:flex;gap:4px;justify-content:center;margin:22px 0 18px;color:var(--gold);}
.tcard .who{font-family:'Sora',sans-serif;font-weight:700;font-size:16px;color:var(--text);}
.tcard .role{font-size:13.5px;color:var(--text-3);margin-top:3px;}
.avatar{width:62px;height:62px;border-radius:50%;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif;font-weight:700;font-size:22px;color:#fff;background:linear-gradient(135deg,var(--blue),var(--blue-soft));}
.tnav{display:flex;gap:12px;justify-content:center;margin-top:30px;align-items:center;}
.tdots{display:flex;gap:8px;}
.tdot{width:9px;height:9px;border-radius:50%;background:var(--border-2);transition:.25s;cursor:pointer;}
.tdot.on{width:26px;border-radius:5px;background:linear-gradient(90deg,var(--gold),var(--gold-dp));}

/* CTA band */
.cta-band{position:relative;border-radius:28px;overflow:hidden;padding:64px 48px;text-align:center;background:linear-gradient(135deg,var(--blue-deep),var(--blue));box-shadow:var(--shadow);}
.cta-band::before{content:"";position:absolute;inset:0;background:radial-gradient(90% 120% at 80% -20%,rgba(199,154,59,.25),transparent 55%);}
.cta-band > *{position:relative;}
.cta-band h2{color:#fff;font-size:clamp(28px,3.6vw,44px);}
.cta-band p{color:rgba(255,255,255,.85);max-width:560px;margin:16px auto 0;font-size:17px;}
.cta-band .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:32px;}

/* footer */
.foot{background:var(--blue-deep);color:#fff;padding:72px 0 28px;}
.tcs-root[data-theme="dark"] .foot{background:#060c1c;border-top:1px solid var(--border);}
.foot-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1.4fr;gap:40px;}
.foot h4{color:#fff;font-size:15px;margin-bottom:18px;font-family:'Sora',sans-serif;letter-spacing:.02em;}
.foot a,.foot p,.foot li{color:rgba(255,255,255,.72);font-size:14px;}
.foot ul{list-style:none;display:flex;flex-direction:column;gap:11px;}
.foot ul a{transition:.2s;}
.foot ul a:hover{color:var(--gold-lt);padding-left:4px;}
.foot-brand img{width:46px;height:46px;border-radius:12px;background:#fff;padding:3px;}
.foot-brand .bn{font-family:'Sora',sans-serif;font-weight:700;font-size:18px;color:#fff;}
.foot-brand .bn small{display:block;font-size:10px;letter-spacing:.16em;color:var(--gold-lt);text-transform:uppercase;}
.news{display:flex;gap:8px;margin-top:14px;}
.news input{flex:1;padding:12px 14px;border-radius:11px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.07);color:#fff;font-size:14px;font-family:inherit;}
.news input::placeholder{color:rgba(255,255,255,.5);}
.news input:focus{outline:none;border-color:var(--gold);}
.news button{width:46px;height:46px;border-radius:11px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold-lt),var(--gold-dp));color:#1f1500;transition:.2s;}
.news button:hover{transform:translateY(-2px);}
.socials{display:flex;gap:10px;margin-top:18px;}
.socials a{width:40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);color:#fff;transition:.22s;}
.socials a:hover{background:var(--gold);color:#1f1500;transform:translateY(-3px);}
.foot-bot{margin-top:48px;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;}
.foot-bot p{color:rgba(255,255,255,.6);font-size:13px;}
.foot-tag{font-family:'Sora',sans-serif;font-weight:600;font-size:13px;letter-spacing:.08em;color:var(--gold-lt);}

/* scroll top */
.scrolltop{position:fixed;right:24px;bottom:24px;width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--blue),var(--blue-deep));color:#fff;box-shadow:0 16px 34px -12px rgba(11,42,111,.7);z-index:55;opacity:0;transform:translateY(16px) scale(.9);transition:.3s;pointer-events:none;}
.scrolltop.show{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}
.scrolltop:hover{transform:translateY(-3px);}

/* toast */
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);z-index:80;display:flex;align-items:center;gap:11px;padding:14px 20px;border-radius:14px;background:var(--surface);border:1px solid var(--border);box-shadow:var(--shadow);opacity:0;pointer-events:none;transition:.35s;}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
.toast .tk{width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;}
.toast span{font-family:'Sora',sans-serif;font-weight:600;font-size:14px;color:var(--text);}

/* forms */
.form-card{background:var(--surface);border:1px solid var(--border);border-radius:22px;padding:36px;box-shadow:var(--shadow);}
.field{margin-bottom:18px;}
.field label{display:block;font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;margin-bottom:8px;color:var(--text);}
.field input,.field textarea,.field select{width:100%;padding:13px 15px;border-radius:12px;border:1.5px solid var(--border);background:var(--bg-2);color:var(--text);font-size:14.5px;font-family:inherit;transition:.2s;}
.field input:focus,.field textarea:focus,.field select:focus{outline:none;border-color:var(--blue);background:var(--surface);box-shadow:0 0 0 4px rgba(11,42,111,.08);}
.field textarea{resize:vertical;min-height:120px;}
.field .err{color:#dc2626;font-size:12.5px;margin-top:6px;font-weight:500;}
.field input.bad,.field textarea.bad{border-color:#dc2626;}

/* misc page bits */
.page-hero{padding:140px 0 72px;background:radial-gradient(100% 90% at 85% -10%,rgba(199,154,59,.1),transparent 55%),var(--bg-2);text-align:center;}
.page-hero h1{font-size:clamp(34px,4.6vw,56px);font-weight:800;}
.page-hero p{max-width:620px;margin:18px auto 0;font-size:17px;}
.breadcrumb{font-size:13px;color:var(--text-3);margin-bottom:14px;font-weight:500;}
.breadcrumb b{color:var(--gold-dp);}
.tcs-root[data-theme="dark"] .breadcrumb b{color:var(--gold-lt);}

.split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:30px;box-shadow:var(--shadow-sm);}
.panel .pic{width:50px;height:50px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--blue),var(--blue-soft));color:#fff;margin-bottom:16px;}
.panel h3{font-size:21px;margin-bottom:10px;}

/* timeline */
.timeline{position:relative;padding-left:34px;}
.timeline::before{content:"";position:absolute;left:9px;top:6px;bottom:6px;width:2px;background:linear-gradient(var(--gold),var(--blue));}
.tl-item{position:relative;padding-bottom:34px;}
.tl-item:last-child{padding-bottom:0;}
.tl-item::before{content:"";position:absolute;left:-34px;top:4px;width:20px;height:20px;border-radius:50%;background:var(--surface);border:3px solid var(--gold);box-shadow:0 0 0 4px var(--bg);}
.tl-year{font-family:'Sora',sans-serif;font-weight:700;color:var(--blue);font-size:14px;}
.tcs-root[data-theme="dark"] .tl-year{color:var(--gold-lt);}
.tl-item h3{font-size:19px;margin:4px 0 7px;}

/* proficiency */
.prof{margin-bottom:18px;}
.prof-top{display:flex;justify-content:space-between;font-family:'Sora',sans-serif;font-weight:600;font-size:14.5px;margin-bottom:8px;}
.prof-top span:last-child{color:var(--gold-dp);}
.tcs-root[data-theme="dark"] .prof-top span:last-child{color:var(--gold-lt);}
.prof-bar{height:9px;border-radius:6px;background:var(--bg-3);overflow:hidden;}
.prof-fill{height:100%;border-radius:6px;background:linear-gradient(90deg,var(--blue),var(--gold));width:0;transition:width 1.1s cubic-bezier(.2,.7,.2,1);}

/* portfolio */
.pf-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;transition:.3s;}
.pf-card:hover{transform:translateY(-6px);box-shadow:var(--shadow);}
.pf-top{height:140px;background:linear-gradient(135deg,var(--blue),var(--blue-deep));position:relative;display:flex;align-items:flex-end;padding:18px;overflow:hidden;}
.pf-top::after{content:"";position:absolute;right:-30px;top:-30px;width:130px;height:130px;border-radius:50%;background:radial-gradient(circle,rgba(199,154,59,.35),transparent 70%);}
.pf-cat{font-family:'Sora',sans-serif;font-weight:600;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-lt);position:relative;z-index:2;}
.pf-body{padding:22px;}
.pf-body h3{font-size:18px;margin-bottom:8px;}
.pf-body p{font-size:14px;}
.pf-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px;}
.pf-tag{font-size:11.5px;font-weight:600;padding:5px 11px;border-radius:8px;background:var(--bg-2);border:1px solid var(--border);color:var(--text-2);}
.filter-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:38px;}
.filter-btn{padding:10px 20px;border-radius:11px;font-family:'Sora',sans-serif;font-weight:600;font-size:14px;border:1.5px solid var(--border);background:var(--surface);color:var(--text-2);transition:.22s;}
.filter-btn:hover{border-color:var(--blue);color:var(--blue);}
.filter-btn.on{background:linear-gradient(135deg,var(--blue),var(--blue-deep));color:#fff;border-color:transparent;}

/* jobs */
.job{display:flex;align-items:center;justify-content:space-between;gap:20px;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:22px 26px;transition:.3s;flex-wrap:wrap;}
.job:hover{border-color:var(--gold);box-shadow:var(--shadow-sm);transform:translateX(4px);}
.job-meta{display:flex;gap:14px;flex-wrap:wrap;margin-top:6px;font-size:13px;color:var(--text-3);}
.job-tags{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px;}

/* blog */
.search-box{position:relative;max-width:440px;margin:0 auto 28px;}
.search-box input{width:100%;padding:14px 16px 14px 46px;border-radius:13px;border:1.5px solid var(--border);background:var(--surface);color:var(--text);font-size:15px;font-family:inherit;}
.search-box input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(11,42,111,.08);}
.search-box .si{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--text-3);}
.post-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;transition:.3s;cursor:pointer;}
.post-card:hover{transform:translateY(-5px);box-shadow:var(--shadow);}
.post-top{height:120px;background:linear-gradient(135deg,var(--blue-soft),var(--blue-deep));display:flex;align-items:center;justify-content:center;}
.post-top .pc{font-family:'Sora',sans-serif;font-weight:700;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-lt);padding:6px 14px;border:1px solid rgba(255,255,255,.25);border-radius:999px;}
.post-body{padding:22px;}
.post-meta{display:flex;gap:12px;font-size:12.5px;color:var(--text-3);margin-bottom:10px;}
.post-body h3{font-size:18px;line-height:1.3;margin-bottom:9px;}
.post-body p{font-size:14px;}
.pager{display:flex;gap:8px;justify-content:center;margin-top:40px;}
.pager button{width:42px;height:42px;border-radius:11px;border:1.5px solid var(--border);background:var(--surface);font-family:'Sora',sans-serif;font-weight:600;color:var(--text-2);transition:.2s;}
.pager button.on{background:var(--blue);color:#fff;border-color:var(--blue);}
.pager button:hover:not(.on){border-color:var(--blue);color:var(--blue);}

/* contact */
.contact-info{display:flex;flex-direction:column;gap:18px;}
.ci-row{display:flex;gap:15px;align-items:flex-start;}
.ci-row .ic{width:48px;height:48px;border-radius:13px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--blue),var(--blue-soft));color:#fff;}
.ci-row b{font-family:'Sora',sans-serif;font-size:15px;color:var(--text);display:block;margin-bottom:3px;}
.ci-row span{font-size:14px;color:var(--text-2);}
.map{border-radius:18px;overflow:hidden;border:1px solid var(--border);height:280px;background:linear-gradient(135deg,var(--bg-3),var(--bg-2));display:flex;align-items:center;justify-content:center;position:relative;}
.map .mgrid{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:34px 34px;opacity:.5;}
.map .pin{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;}
.map .pin .pdot{width:52px;height:52px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:linear-gradient(135deg,var(--gold-lt),var(--gold-dp));display:flex;align-items:center;justify-content:center;box-shadow:0 12px 26px -8px rgba(199,154,59,.6);}
.map .pin .pdot svg{transform:rotate(45deg);color:#1f1500;}
.map .pin b{font-family:'Sora',sans-serif;font-size:14px;color:var(--text);}

/* reveal */
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease;}
.reveal.in{opacity:1;transform:none;}

/* responsive */
@media(max-width:980px){
  .hero-grid{grid-template-columns:1fr;gap:48px;}
  .ring-stage{max-width:420px;margin:0 auto;}
  .split{grid-template-columns:1fr;gap:32px;}
  .foot-grid{grid-template-columns:1fr 1fr;gap:32px;}
  .g-4{grid-template-columns:repeat(2,1fr);}
  .bank-grid{grid-template-columns:repeat(2,1fr);}
  .stat-band{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:760px){
  .nav-links{display:none;}
  .burger{display:flex;}
  .nav-actions .desk-cta{display:none;}
  .mobile-menu{display:block;position:fixed;inset:74px 0 0;z-index:55;background:var(--bg);padding:24px;overflow-y:auto;}
  .mobile-menu a{display:block;padding:15px 14px;border-radius:12px;font-family:'Sora',sans-serif;font-weight:600;font-size:17px;color:var(--text);border-bottom:1px solid var(--border);}
  .mobile-menu a.active{color:var(--blue);}
  .g-2,.g-3{grid-template-columns:1fr;}
  .tech-grid{grid-template-columns:1fr;}
  .section{padding:70px 0;}
  .cta-band{padding:46px 24px;}
  .tcard{padding:30px 22px;}
}
@media(max-width:520px){
  .g-4,.bank-grid,.stat-band{grid-template-columns:1fr;}
  .foot-grid{grid-template-columns:1fr;}
  .wrap{padding:0 18px;}
  .float-chip{display:none;}
}
@media(prefers-reduced-motion:reduce){
  .orbit,.float-chip{animation:none!important;}
  .reveal{transition:none;opacity:1;transform:none;}
}
`;

/* ------------------------------------------------------------------ */
/*  SHARED UI                                                         */
/* ------------------------------------------------------------------ */

const ToastCtx = createContext<(msg: string) => void>(() => {});

function BrandMark({ footer }: { footer?: boolean }) {
  if (footer) {
    return (
      <div className="foot-brand" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <img src={LOGO} alt="Thiruchitrambalam Systems logo" />
        <div className="bn">Thiruchitrambalam<small>Systems</small></div>
      </div>
    );
  }
  return (
    <div className="brand">
      <img src={LOGO} alt="Thiruchitrambalam Systems logo" />
      <div className="brand-name">Thiruchitrambalam<small>Systems</small></div>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub, left }: { eyebrow?: string; title: string; sub?: string; left?: boolean }) {
  return (
    <Reveal className={`sec-head ${left ? "left" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

function Nav({ page, go, theme, toggle }: { page: PageName; go: Go; theme: Theme; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [page]);
  const click = (p: PageName) => { go(p); setOpen(false); };
  return (
    <nav className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <button onClick={() => click("Home")} aria-label="Home"><BrandMark /></button>
        <div className="nav-links">
          {NAV.map((n) => (
            <button key={n} className={`nav-link ${page === n ? "active" : ""}`} onClick={() => click(n)}>{n}</button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="btn btn-primary desk-cta" onClick={() => click("Contact")} style={{ padding: "11px 20px", fontSize: 14 }}>
            Let's Talk <ArrowRight size={16} />
          </button>
          <button className="icon-btn burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV.map((n) => (
            <a key={n} className={page === n ? "active" : ""} onClick={() => click(n)}>{n}</a>
          ))}
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 18 }} onClick={() => click("Contact")}>
            Schedule Consultation <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}

function Footer({ go }: { go: Go }) {
  const notify = useContext(ToastCtx);
  const [email, setEmail] = useState("");
  const sub = () => {
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { notify("Enter a valid email address"); return; }
    setEmail(""); notify("Subscribed — welcome aboard");
  };
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <BrandMark footer />
            <p style={{ maxWidth: 320, lineHeight: 1.7 }}>
              An enterprise technology partner specializing in banking, fintech, enterprise software, mobile, cloud and digital transformation.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={18} /></a>
              <a href="#" aria-label="GitHub"><FaGithub size={18} /></a>
              <a href="#" aria-label="Facebook"><FaFacebook size={18} /></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {(["Home", "About", "Services", "Portfolio", "Careers", "Contact"] as PageName[]).map((l) => (
                <li key={l}><a onClick={() => go(l)} style={{ cursor: "pointer" }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {["IT Consulting", "Software Development", "Mobile Apps", "Cloud & DevOps", "Banking Solutions"].map((l) => (
                <li key={l}><a onClick={() => go("Services")} style={{ cursor: "pointer" }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p style={{ lineHeight: 1.6 }}>Insights on banking tech, security and engineering — straight to your inbox.</p>
            <div className="news">
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" aria-label="Email" />
              <button onClick={sub} aria-label="Subscribe"><Send size={17} /></button>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 22, color: "rgba(255,255,255,.72)", fontSize: 13.5 }}>
              <Phone size={15} /> +91 80 4567 8900
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 10, color: "rgba(255,255,255,.72)", fontSize: 13.5 }}>
              <Mail size={15} /> hello@thiruchitrambalam.systems
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <p>© 2026 Thiruchitrambalam Systems. All rights reserved.</p>
          <span className="foot-tag">RIGHT PEOPLE • RIGHT SOLUTION • RIGHT RESULTS</span>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button className={`scrolltop ${show ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">
      <ArrowDown size={20} style={{ transform: "rotate(180deg)" }} />
    </button>
  );
}

function StatBand() {
  const [ref, inView] = useInView();
  return (
    <div className="stat-band" ref={ref}>
      {STATS.map((s, i) => <StatItem key={i} {...s} run={inView} />)}
    </div>
  );
}
function StatItem({ value, suffix, label, run }: Stat & { run: boolean }) {
  const v = useCountUp(value, run);
  return (
    <div className="stat">
      <div className="stat-num">{v}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO RING (signature)                                            */
/* ------------------------------------------------------------------ */

function CosmicRing() {
  const dots = (count: number, radius: number) =>
    Array.from({ length: count }).map((_, i) => {
      const a = (i / count) * Math.PI * 2;
      return { left: `${50 + Math.cos(a) * radius}%`, top: `${50 + Math.sin(a) * radius}%` };
    });
  return (
    <div className="ring-stage">
      <div className="glow" />
      <div className="ring" style={{ width: "100%", height: "100%" }} />
      <div className="ring" style={{ width: "78%", height: "78%" }} />
      <div className="ring" style={{ width: "56%", height: "56%" }} />
      <div className="orbit">
        {dots(8, 50).map((p, i) => <span key={i} className="dot" style={p} />)}
      </div>
      <div className="orbit r">
        {dots(6, 39).map((p, i) => <span key={i} className="dot" style={{ ...p, width: 7, height: 7 }} />)}
      </div>
      <div className="ring-core">
        <img src={LOGO} alt="Thiruchitrambalam Systems" />
      </div>
      <div className="float-chip fc-1">
        <div className="ic"><ShieldCheck size={18} /></div>
        <div><b>Bank-grade</b><span>Security by design</span></div>
      </div>
      <div className="float-chip fc-2">
        <div className="ic"><Landmark size={18} /></div>
        <div><b>LOS / LMS</b><span>Lending expertise</span></div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME                                                              */
/* ------------------------------------------------------------------ */

function Home({ go }: PageProps) {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[tIdx];

  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <Reveal>
            <span className="tag-pill"><Sparkles size={14} /> Enterprise Technology Partner</span>
            <h1 style={{ marginTop: 22 }}>
              Transforming Businesses Through <span className="gold-text">Technology</span>
            </h1>
            <p className="hero-sub">
              We deliver innovative software solutions, enterprise applications, mobile platforms,
              cloud services, and digital transformation initiatives that help businesses scale with confidence.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => go("Contact")}>
                Schedule Consultation <ArrowRight size={18} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("Contact")}>
                Contact Us
              </button>
            </div>
            <div className="hero-trust">
              <span><b>RIGHT PEOPLE</b> • <b>RIGHT SOLUTION</b> • <b>RIGHT RESULTS</b></span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <CosmicRing />
          </Reveal>
        </div>
      </header>

      {/* STATS */}
      <section className="section blue" style={{ padding: "70px 0" }}>
        <div className="wrap">
          <StatBand />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="What We Do"
            title="Services built for serious businesses"
            sub="From strategy to delivery to long-term support — full-spectrum engineering for regulated, high-stakes environments."
          />
          <div className="grid g-3">
            {SERVICES.map((s, i) => {
              const Ic = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 3) * 80} className="card">
                  <div className="card-ic"><Ic size={26} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <button className="learn" onClick={() => go("Services")}>Learn More <ArrowRight size={15} /></button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section alt">
        <div className="wrap">
          <SectionHead
            eyebrow="Industries We Serve"
            title="Deep expertise across regulated sectors"
            sub="We don't just write code — we understand the businesses we build for."
          />
          <div className="grid g-4">
            {INDUSTRIES.map((ind, i) => {
              const Ic = ind.icon;
              return (
                <Reveal key={ind.name} delay={(i % 4) * 70} className="card" >
                  <div className="card-ic"><Ic size={24} /></div>
                  <h3 style={{ fontSize: 18 }}>{ind.name}</h3>
                  <p style={{ fontSize: 13.5 }}>{ind.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Choose Us"
            title="A partner you can build a future on"
            sub="The qualities that show up in every engagement we take on."
          />
          <div className="grid g-3">
            {WHY.map((w, i) => {
              const Ic = w.icon;
              return (
                <Reveal key={w.title} delay={(i % 3) * 80} className="feature">
                  <div className="fic"><Ic size={22} /></div>
                  <div><h3>{w.title}</h3><p>{w.desc}</p></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH EXPERTISE */}
      <section className="section alt">
        <div className="wrap">
          <SectionHead
            eyebrow="Technology Expertise"
            title="A stack chosen to last, not to impress"
            sub="Proven, enterprise-grade tools across every layer of the modern technology stack."
          />
          <div className="grid g-3 tech-grid">
            {TECH.map((tg, i) => {
              const Ic = tg.icon;
              return (
                <Reveal key={tg.group} delay={(i % 3) * 80} className="tech-col">
                  <div className="th"><div className="ic"><Ic size={22} /></div><h3>{tg.group}</h3></div>
                  <div>
                    {tg.items.map((it) => <span key={it} className="chip"><span className="d" />{it}</span>)}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANKING SPECIALIZATION */}
      <section className="section blue">
        <div className="wrap">
          <SectionHead
            eyebrow="Banking & Fintech Specialization"
            title="Lending and digital finance, end to end"
            sub="Our home turf. We build the platforms that power modern lending and banking journeys."
          />
          <div className="bank-grid">
            {BANKING.map((b, i) => {
              const Ic = b.icon;
              return (
                <Reveal key={b.title} delay={(i % 3) * 70} className="bank-item">
                  <div className="ic"><Ic size={20} /></div>
                  <span>{b.title}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Client Testimonials" title="Trusted by the people we build for" />
          <Reveal>
            <div className="tcard">
              <div className="q"><Quote size={24} /></div>
              <div className="tstars">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={20} fill="currentColor" />)}</div>
              <blockquote>"{t.quote}"</blockquote>
              <div style={{ marginTop: 28 }}>
                <div className="avatar">{t.name.split(" ").map((w) => w[0]).join("")}</div>
                <div className="who">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
              <div className="tnav">
                <button className="icon-btn" onClick={() => setTIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous"><ChevronLeft size={18} /></button>
                <div className="tdots">
                  {TESTIMONIALS.map((_, i) => <span key={i} className={`tdot ${i === tIdx ? "on" : ""}`} onClick={() => setTIdx(i)} />)}
                </div>
                <button className="icon-btn" onClick={() => setTIdx((i) => (i + 1) % TESTIMONIALS.length)} aria-label="Next"><ChevronRight size={18} /></button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="cta-band">
            <span className="eyebrow" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>Let's Talk</span>
            <h2 style={{ marginTop: 14 }}>Let's Build Something Great Together</h2>
            <p>Tell us where you want to go. We'll bring the right people, the right solution, and the right results.</p>
            <div className="row">
              <button className="btn btn-gold" onClick={() => go("Contact")}>Request Consultation <ArrowRight size={18} /></button>
              <button className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }} onClick={() => go("Contact")}>Contact Sales</button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE HERO helper                                                  */
/* ------------------------------------------------------------------ */
function PageHero({ crumb, title, sub }: { crumb: string; title: string; sub: string }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Reveal>
          <div className="breadcrumb">Home <b>/</b> {crumb}</div>
          <h1>{title}</h1>
          <p>{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                             */
/* ------------------------------------------------------------------ */
function About({ go }: PageProps) {
  return (
    <>
      <PageHero crumb="About Us" title="The story behind the system"
        sub="We're an enterprise technology partner built on a simple idea: the right people, paired with the right solution, deliver the right results." />
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", margin: "14px 0 18px" }}>Built for the businesses where mistakes are expensive</h2>
            <p style={{ fontSize: 16, marginBottom: 14 }}>
              Thiruchitrambalam Systems was founded by engineers who spent their careers inside regulated environments —
              banks, NBFCs and fintech platforms where security, compliance and uptime aren't features, they're the whole job.
            </p>
            <p style={{ fontSize: 16 }}>
              We bring that hard-won discipline to every engagement: clean architecture, secure-by-design delivery, and a
              partnership that lasts well beyond go-live. Our name comes from Chidambaram — the cosmic dance of balance and
              renewal — a fitting metaphor for the transformation we help our clients achieve.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid g-2" style={{ gap: 16 }}>
              <div className="panel"><div className="pic"><Eye size={22} /></div><h3>Vision</h3><p>To be the most trusted technology partner for businesses transforming through software — recognized for integrity, craft and results.</p></div>
              <div className="panel"><div className="pic"><Target size={22} /></div><h3>Mission</h3><p>To deliver secure, scalable, enterprise-grade solutions that turn complex business challenges into lasting competitive advantage.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead eyebrow="Core Values" title="What we won't compromise on" />
          <div className="grid g-4">
            {VALUES.map((v, i) => {
              const Ic = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 4) * 70} className="card">
                  <div className="card-ic"><Ic size={24} /></div>
                  <h3 style={{ fontSize: 18 }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5 }}>{v.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Growth Journey</span>
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", margin: "14px 0 26px" }}>A steady climb, built on trust</h2>
            <div className="timeline">
              {JOURNEY.map((j) => (
                <div className="tl-item" key={j.year}>
                  <div className="tl-year">{j.year}</div>
                  <h3>{j.title}</h3>
                  <p style={{ fontSize: 14.5 }}>{j.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel" style={{ marginBottom: 20 }}>
              <div className="pic"><Users size={22} /></div>
              <h3>Leadership Team</h3>
              <p style={{ marginBottom: 16 }}>Seasoned technologists with decades of combined experience across banking, fintech and enterprise software delivery.</p>
              {[["Senior Architects", "Banking & enterprise systems"], ["Security Practice Lead", "VAPT, attestation & RASP"], ["Delivery Leads", "Agile, on-time, on-budget"]].map(([a, b]) => (
                <div key={a} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderTop: "1px solid var(--border)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: "linear-gradient(135deg,var(--gold-lt),var(--gold-dp))", display: "flex", alignItems: "center", justifyContent: "center", color: "#1f1500", flexShrink: 0 }}><Award size={18} /></div>
                  <div><b style={{ fontFamily: "'Sora',sans-serif", fontSize: 14.5, color: "var(--text)" }}>{a}</b><div style={{ fontSize: 13, color: "var(--text-3)" }}>{b}</div></div>
                </div>
              ))}
            </div>
            <div className="panel">
              <div className="pic"><ShieldCheck size={22} /></div>
              <h3>Certifications & Standards</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                {CERTS.map((c) => <span key={c} className="pf-tag" style={{ padding: "8px 13px", fontSize: 12.5 }}>{c}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaStrip go={go} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE                                                     */
/* ------------------------------------------------------------------ */
function Services({ go }: PageProps) {
  const detail = [
    { icon: Compass, title: "IT Consulting", desc: "Technology strategy, architecture review and modernization roadmaps that connect your investments to outcomes.", points: ["Architecture & tech audits", "Modernization roadmaps", "Vendor & platform selection", "Security & compliance advisory"] },
    { icon: Code2, title: "Software Development", desc: "Custom, enterprise-grade applications engineered to your workflows with clean, maintainable architecture.", points: ["Bespoke web & enterprise apps", "API & integration platforms", "Legacy modernization", "Strict TypeScript & testing"] },
    { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform apps with hardened security and polished, high-performance experiences.", points: ["Android (Kotlin / Java)", "React Native & Flutter", "Offline-first design", "VAPT-hardened delivery"] },
    { icon: Cloud, title: "Cloud Solutions", desc: "Migration, cloud-native architecture and cost-optimized infrastructure across AWS, Azure and GCP.", points: ["Cloud migration", "Containerization & Kubernetes", "Serverless architecture", "Cost optimization"] },
    { icon: GitBranch, title: "DevOps", desc: "CI/CD pipelines, infrastructure-as-code and observability that make releases safe and routine.", points: ["CI/CD automation", "Infrastructure as code", "Monitoring & observability", "Zero-downtime deployments"] },
    { icon: Landmark, title: "Banking Solutions", desc: "Lending, KYC and onboarding platforms purpose-built for regulated financial environments.", points: ["Loan origination (LOS)", "Loan management (LMS)", "Digital KYC & eKYC", "Collections & onboarding"] },
    { icon: Headphones, title: "Managed Services", desc: "Ongoing maintenance, monitoring and support so your platforms stay fast, secure and available.", points: ["24/7 monitoring", "SLA-backed support", "Proactive maintenance", "Security patching"] },
  ];
  return (
    <>
      <PageHero crumb="Services" title="Full-spectrum engineering services"
        sub="From first conversation to long-term partnership — everything you need to build, scale and secure modern software." />
      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {detail.map((s) => {
            const Ic = s.icon;
            return (
              <Reveal key={s.title} className="card" style={{ padding: 32 }}>
                <div className="split" style={{ gap: 32, alignItems: "flex-start" }}>
                  <div>
                    <div className="card-ic"><Ic size={26} /></div>
                    <h3 style={{ fontSize: 24, marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 15.5 }}>{s.desc}</p>
                    <button className="learn" onClick={() => go("Contact")}>Discuss your project <ArrowRight size={15} /></button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {s.points.map((p) => (
                      <div key={p} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 14 }}>
                        <CheckCircle2 size={18} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }} />
                        <span style={{ color: "var(--text-2)" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaStrip go={go} />
    </>
  );
}

/* shared CTA strip used across inner pages */
function CtaStrip({ go }: PageProps) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="cta-band">
          <h2>Let's Build Something Great Together</h2>
          <p>Bring us your hardest problem. We'll bring the right people, the right solution, and the right results.</p>
          <div className="row">
            <button className="btn btn-gold" onClick={() => go("Contact")}>Request Consultation <ArrowRight size={18} /></button>
            <button className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }} onClick={() => go("Contact")}>Contact Sales</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INDUSTRIES PAGE                                                   */
/* ------------------------------------------------------------------ */
function Industries({ go }: PageProps) {
  const detail = [
    { icon: Landmark, name: "Banking", desc: "Core banking integrations, lending platforms and secure digital channels for scheduled and small finance banks.", items: ["Loan origination & management", "Mobile & internet banking", "Collections & recovery", "Regulatory reporting"] },
    { icon: Wallet, name: "Fintech", desc: "Payments, embedded finance and lending products engineered for speed, scale and compliance.", items: ["Digital lending journeys", "Account Aggregator integration", "Payments & disbursements", "Risk & decisioning"] },
    { icon: HeartPulse, name: "Healthcare", desc: "Secure patient platforms and data systems that respect privacy and meet regulatory obligations.", items: ["Patient portals", "Practice management", "Data security & privacy", "Telehealth platforms"] },
    { icon: Factory, name: "Manufacturing", desc: "Connected operations and analytics that bring visibility across the shop floor and supply chain.", items: ["MES integrations", "Production dashboards", "Inventory & supply chain", "IoT data pipelines"] },
    { icon: ShoppingBag, name: "Retail", desc: "Commerce, loyalty and omnichannel experiences that move with the customer.", items: ["E-commerce platforms", "Loyalty & engagement", "Omnichannel POS", "Customer analytics"] },
    { icon: GraduationCap, name: "Education", desc: "Learning and administration platforms built for scale, access and engagement.", items: ["Learning management", "Student information systems", "Assessment platforms", "Admin automation"] },
  ];
  return (
    <>
      <PageHero crumb="Industries" title="Built for the sectors we know best"
        sub="Domain depth that turns generic software into genuine competitive advantage." />
      <section className="section">
        <div className="wrap grid g-2">
          {detail.map((ind, i) => {
            const Ic = ind.icon;
            return (
              <Reveal key={ind.name} delay={(i % 2) * 90} className="card" style={{ padding: 30 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 14 }}>
                  <div className="card-ic" style={{ margin: 0 }}><Ic size={26} /></div>
                  <h3 style={{ fontSize: 22 }}>{ind.name}</h3>
                </div>
                <p style={{ fontSize: 14.5, marginBottom: 16 }}>{ind.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {ind.items.map((it) => (
                    <div key={it} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13.5 }}>
                      <CheckCircle2 size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: "var(--text-2)" }}>{it}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaStrip go={go} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  TECHNOLOGIES PAGE                                                 */
/* ------------------------------------------------------------------ */
function Technologies({ go }: PageProps) {
  const prof: ProfGroup[] = [
    { group: "Frontend", icon: Code2, items: [["React / React 19+", 96], ["TypeScript", 94], ["Angular", 85], ["Vue", 80]] },
    { group: "Backend", icon: Server, items: [["Java / Spring Boot", 95], ["Node.js", 88], [".NET", 82], ["Go", 84]] },
    { group: "Mobile", icon: Smartphone, items: [["Android / Kotlin", 93], ["React Native", 95], ["Flutter", 82]] },
    { group: "Database", icon: Database, items: [["PostgreSQL", 92], ["MySQL / SQL Server", 90], ["MongoDB", 86]] },
    { group: "Cloud & DevOps", icon: Cloud, items: [["AWS", 90], ["Azure", 86], ["Docker / K8s", 91], ["CI/CD", 93]] },
    { group: "Security", icon: Lock, items: [["Encryption & PKI", 94], ["VAPT Hardening", 92], ["Key Attestation", 88]] },
  ];
  const ProfCol = ({ g }: { g: ProfGroup }) => {
    const [ref, inView] = useInView();
    const Ic = g.icon;
    return (
      <Reveal className="tech-col" style={{ padding: 28 }}>
        <div className="th"><div className="ic"><Ic size={22} /></div><h3>{g.group}</h3></div>
        <div ref={ref}>
          {g.items.map(([name, val]) => (
            <div className="prof" key={name}>
              <div className="prof-top"><span>{name}</span><span>{val}%</span></div>
              <div className="prof-bar"><div className="prof-fill" style={{ width: inView ? `${val}%` : 0 }} /></div>
            </div>
          ))}
        </div>
      </Reveal>
    );
  };
  return (
    <>
      <PageHero crumb="Technologies" title="The tools behind the trust"
        sub="A modern, battle-tested stack — and the proficiency that comes from shipping it in production." />
      <section className="section">
        <div className="wrap grid g-3 tech-grid">
          {prof.map((g) => <ProfCol key={g.group} g={g} />)}
        </div>
      </section>
      <CtaStrip go={go} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PORTFOLIO PAGE                                                    */
/* ------------------------------------------------------------------ */
function Portfolio({ go }: PageProps) {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === cat);
  return (
    <>
      <PageHero crumb="Portfolio" title="Work we're proud to put our name on"
        sub="A selection of platforms, apps and transformations delivered for banking, fintech and enterprise clients." />
      <section className="section">
        <div className="wrap">
          <div className="filter-row">
            {PORTFOLIO_CATS.map((c) => (
              <button key={c} className={`filter-btn ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="grid g-3">
            {items.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70} className="pf-card">
                <div className="pf-top"><span className="pf-cat">{p.cat}</span></div>
                <div className="pf-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="pf-tags">{p.tags.map((t) => <span key={t} className="pf-tag">{t}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip go={go} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  CAREERS PAGE                                                      */
/* ------------------------------------------------------------------ */
function Careers() {
  const notify = useContext(ToastCtx);
  const [form, setForm] = useState({ name: "", email: "", role: JOBS[0].title });
  const [err, setErr] = useState<Record<string, string>>({});
  const apply = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email";
    setErr(e);
    if (Object.keys(e).length) return;
    setForm({ name: "", email: "", role: JOBS[0].title });
    notify("Application received — we'll be in touch");
  };
  return (
    <>
      <PageHero crumb="Careers" title="Build a career, not just code"
        sub="Join a team that values craft, ownership and the people who do the work." />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Life Here" title="Why people stay" left />
          <div className="grid g-4">
            {BENEFITS.map((b, i) => {
              const Ic = b.icon;
              return (
                <Reveal key={b.title} delay={(i % 4) * 70} className="feature" style={{ flexDirection: "column" }}>
                  <div className="fic"><Ic size={22} /></div>
                  <div><h3>{b.title}</h3><p style={{ fontSize: 13.5 }}>{b.desc}</p></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <div>
            <SectionHead eyebrow="Open Positions" title="Roles we're hiring for" left />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {JOBS.map((j) => (
                <Reveal key={j.title} className="job">
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18 }}>{j.title}</h3>
                    <div className="job-meta"><span><Briefcase size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />{j.type}</span><span><MapPin size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />{j.loc}</span></div>
                    <div className="job-tags">{j.tags.map((t) => <span key={t} className="pf-tag">{t}</span>)}</div>
                  </div>
                  <button className="btn btn-ghost" style={{ padding: "10px 18px", fontSize: 14 }} onClick={() => setForm((f) => ({ ...f, role: j.title }))}>Apply <ArrowUpRight size={15} /></button>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="form-card" style={{ position: "sticky", top: 100 }}>
              <h3 style={{ fontSize: 22, marginBottom: 6 }}>Apply now</h3>
              <p style={{ fontSize: 14, marginBottom: 22 }}>Tell us a little about you and we'll take it from there.</p>
              <div className="field">
                <label>Full name</label>
                <input className={err.name ? "bad" : ""} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                {err.name && <div className="err">{err.name}</div>}
              </div>
              <div className="field">
                <label>Email</label>
                <input className={err.email ? "bad" : ""} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                {err.email && <div className="err">{err.email}</div>}
              </div>
              <div className="field">
                <label>Role</label>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  {JOBS.map((j) => <option key={j.title}>{j.title}</option>)}
                </select>
              </div>
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={apply}>Submit Application <Send size={16} /></button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  BLOG PAGE                                                         */
/* ------------------------------------------------------------------ */
function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 4;
  const filtered = POSTS.filter((p) =>
    (cat === "All" || p.cat === cat) &&
    (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
  );
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const cur = Math.min(page, pages);
  const shown = filtered.slice((cur - 1) * perPage, cur * perPage);
  useEffect(() => { setPage(1); }, [q, cat]);
  return (
    <>
      <PageHero crumb="Blog" title="Insights from the build"
        sub="Field notes on banking technology, security, cloud and the craft of enterprise engineering." />
      <section className="section">
        <div className="wrap">
          <div className="search-box">
            <Search size={18} className="si" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." />
          </div>
          <div className="filter-row">
            {BLOG_CATS.map((c) => <button key={c} className={`filter-btn ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          {shown.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)" }}>No articles match your search. Try a different term.</div>
          ) : (
            <div className="grid g-2">
              {shown.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 80} className="post-card">
                  <div className="post-top"><span className="pc">{p.cat}</span></div>
                  <div className="post-body">
                    <div className="post-meta"><span><Calendar size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />{p.date}</span><span>{p.read} read</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="learn">Read article <ArrowRight size={15} /></span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
          {pages > 1 && (
            <div className="pager">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Previous"><ChevronLeft size={18} /></button>
              {Array.from({ length: pages }).map((_, i) => (
                <button key={i} className={cur === i + 1 ? "on" : ""} onClick={() => setPage(i + 1)}>{i + 1}</button>
              ))}
              <button onClick={() => setPage((p) => Math.min(pages, p + 1))} aria-label="Next"><ChevronRight size={18} /></button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                      */
/* ------------------------------------------------------------------ */
function Contact() {
  const notify = useContext(ToastCtx);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Tell us a little more (10+ characters)";
    setErr(e);
    if (Object.keys(e).length) return;
    setForm({ name: "", email: "", company: "", message: "" });
    notify("Message sent — we'll respond within one business day");
  };
  const info = [
    { icon: MapPin, label: "Visit us", val: "Bengaluru, Karnataka, India" },
    { icon: Phone, label: "Call us", val: "+91 80 4567 8900" },
    { icon: Mail, label: "Email us", val: "hello@thiruchitrambalam.systems" },
  ];
  return (
    <>
      <PageHero crumb="Contact" title="Let's start a conversation"
        sub="Whether it's a new build, a rescue, or a roadmap — tell us where you're headed." />
      <section className="section">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <Reveal>
            <div className="form-card">
              <h3 style={{ fontSize: 22, marginBottom: 6 }}>Request a consultation</h3>
              <p style={{ fontSize: 14, marginBottom: 22 }}>Fill this in and the right person will reach out — no call centre, no runaround.</p>
              <div className="grid g-2" style={{ gap: 0, gridTemplateColumns: "1fr 1fr", columnGap: 16 }}>
                <div className="field">
                  <label>Full name</label>
                  <input className={err.name ? "bad" : ""} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  {err.name && <div className="err">{err.name}</div>}
                </div>
                <div className="field">
                  <label>Email</label>
                  <input className={err.email ? "bad" : ""} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                  {err.email && <div className="err">{err.email}</div>}
                </div>
              </div>
              <div className="field">
                <label>Company <span style={{ color: "var(--text-3)", fontWeight: 400 }}>(optional)</span></label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
              </div>
              <div className="field">
                <label>How can we help?</label>
                <textarea className={err.message ? "bad" : ""} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project or challenge..." />
                {err.message && <div className="err">{err.message}</div>}
              </div>
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={submit}>Send Message <Send size={16} /></button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="contact-info" style={{ marginBottom: 22 }}>
              {info.map((c) => {
                const Ic = c.icon;
                return (
                  <div className="ci-row" key={c.label}>
                    <div className="ic"><Ic size={20} /></div>
                    <div><b>{c.label}</b><span>{c.val}</span></div>
                  </div>
                );
              })}
            </div>
            <div className="map">
              <div className="mgrid" />
              <div className="pin">
                <div className="pdot"><MapPin size={22} /></div>
                <b>Thiruchitrambalam Systems</b>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {[Linkedin, Twitter, Github, Facebook].map((Ic, i) => (
                <a key={i} href="#" className="icon-btn" aria-label="Social"><Ic size={18} /></a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  ROOT APP                                                          */
/* ------------------------------------------------------------------ */
export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [page, setPage] = useState<PageName>("Home");
  const [toast, setToast] = useState<string | null>(null);
  const tref = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    if (tref.current) clearTimeout(tref.current);
    tref.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const go = useCallback((p: PageName) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const PAGES: Record<PageName, React.FC<PageProps>> = { Home, About, Services, Industries, Technologies, Portfolio, Careers, Blog, Contact };
  const Current = PAGES[page] || Home;

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      <ToastCtx.Provider value={notify}>
        <style>{STYLES}</style>
        <div className="tcs-root" data-theme={theme}>
          <Nav page={page} go={go} theme={theme} toggle={toggle} />
          <main>
            <Current go={go} />
          </main>
          <Footer go={go} />
          <ScrollTop />
          <div className={`toast ${toast ? "show" : ""}`}>
            <div className="tk"><Check size={17} /></div>
            <span>{toast}</span>
          </div>
        </div>
      </ToastCtx.Provider>
    </ThemeCtx.Provider>
  );
}
