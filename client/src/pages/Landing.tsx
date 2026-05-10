import { Link } from "react-router-dom";
import { ArrowRightIcon, UtensilsIcon, TargetIcon, SparklesIcon, ZapIcon } from "lucide-react";
import Button from "../components/ui/Button";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="size-10" />
          <span className="text-xl font-bold tracking-tight">Track Fit</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link to="/login">
            <Button className="hidden sm:flex size-sm">
              Get Started <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <SparklesIcon className="size-3" /> The Future of Fitness Tracking
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
            Elevate Your <span className="text-emerald-400">Potential</span> Beyond Limits
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the ultimate premium fitness tracker. AI-powered insights, deep analytics, and a state-of-the-art interface designed for high performers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/login" className="w-full sm:w-auto">
              <Button className="w-full h-14 px-8 text-lg rounded-2xl shadow-2xl shadow-emerald-500/20 size-lg">
                Start Your Journey <ArrowRightIcon className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image Mockup */}
        <div className="mt-20 relative rounded-[2.5rem] p-2 bg-linear-to-b from-white/10 to-transparent border border-white/10 shadow-2xl overflow-hidden group">
          <img
            src="/hero-dashboard.png"
            alt="Track Fit Dashboard"
            className="w-full rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Food Analysis",
              desc: "Simply snap a photo and let our advanced AI calculate your macros and calories instantly.",
              icon: UtensilsIcon,
              color: "emerald"
            },
            {
              title: "Deep Activity Tracking",
              desc: "Monitor every movement with high-precision logs and detailed physiological insights.",
              icon: ZapIcon,
              color: "purple"
            },
            {
              title: "Goal Engineering",
              desc: "Set advanced milestones and track your body metrics with professional-grade analytics.",
              icon: TargetIcon,
              color: "blue"
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 group">
              <div className={`size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="size-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="py-24 px-6 border-y border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          <div className="space-y-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 shadow-glow shadow-emerald-500/5">
              <UtensilsIcon className="size-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold">Effortless Logging</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Track your daily meals and snacks without the complexity. A clean interface designed for speed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 shadow-glow shadow-emerald-500/5">
              <ZapIcon className="size-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold">Activity Tracking</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Keep a detailed record of your workouts and daily movement. Simple logs for real progress.
            </p>
          </div>

          <div className="space-y-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 shadow-glow shadow-emerald-500/5">
              <TargetIcon className="size-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold">Visual Progress</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              See your journey unfold through intuitive charts and summaries. Understand your trends at a glance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Logo className="size-8" />
          <span className="font-bold">Track Fit</span>
        </div>
        <p className="text-slate-500 text-sm mb-2">© 2026 Track Fit Pro. Built for the elite. Verified by science.</p>
        <p className="text-emerald-500/60 text-xs font-medium tracking-widest uppercase">Made by Tanishq kushwah</p>
      </footer>
    </div>
  );
};

export default Landing;
