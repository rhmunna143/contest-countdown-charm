import {
  Calendar,
  Clock,
  MapPin,
  Code2,
  Trophy,
  Sparkles,
  Award,
  Shirt,
  Coffee,
  Utensils,
  FileBadge,
  Cookie,
  Lock,
  Users,
  User,
  Mic,
  Gift,
  Music,
  Pause,
  Crown,
  Target,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import logo from "@/assets/rmu-logo.png";
import banner from "@/assets/contest-banner.jpg";
import castrolLogo from "@/assets/sponsors/castrol.jpeg";
import kushtiaIeltsLogo from "@/assets/sponsors/kushtia-ielts.jpeg";
import techpeaksLogo from "@/assets/sponsors/techpeaks.svg";
import theCakeStand from "@/assets/sponsors/cake-stand.jpeg";

const sponsors = [
  { name: "Castrol", logo: castrolLogo, url: "https://www.castrol.com" },
  {
    name: "Kushtia IELTS Care",
    logo: kushtiaIeltsLogo,
    url: "https://www.facebook.com/KushtiaIELTSCare",
  },
  { name: "TechPeaks", logo: techpeaksLogo, url: "https://techpeaks.io" },
  { name: "The Cake Stand", logo: theCakeStand, url: "https://www.facebook.com/TheCakeStandBD" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-primary/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="container mx-auto px-4 pt-6 sm:pt-8 flex items-center justify-between animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-xl rounded-2xl" />
              <img
                src={logo}
                alt="Rabindra Maitree University Logo"
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-glow"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Rabindra Maitree University
              </p>
              <p className="text-sm font-bold text-foreground">
                Department of CSE
              </p>
            </div>
          </div>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              Live Countdown
            </span>
          </div>
        </header>

        {/* Hero */}
        <main className="flex-1 container mx-auto px-4 py-10 sm:py-16 flex flex-col items-center justify-center text-center">
          <div
            className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-foreground/90">
              Intra-University Event
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block text-foreground">PROGRAMMING</span>
            <span className="block text-gradient">CONTEST 2026</span>
          </h1>

          <div
            className="relative inline-block mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="relative text-base sm:text-lg md:text-xl font-semibold text-foreground/80 italic px-6 py-2">
              "Code Today, Innovate Tomorrow"
            </p>
            <div className="absolute inset-0 animate-shimmer rounded-full" />
          </div>

          {/* Countdown */}
          <div
            className="mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <CountdownTimer />
          </div>

          {/* Event details */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { icon: Calendar, label: "Date", value: "7th May, 2026" },
              { icon: Clock, label: "Time", value: "9:00 AM" },
              { icon: MapPin, label: "Venue", value: "RMU, Kushtia-7000" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-5 hover:scale-105 hover:shadow-cyan transition-all duration-300 group"
              >
                <item.icon className="w-7 h-7 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base font-bold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10 animate-fade-up"
            style={{ animationDelay: "0.52s" }}
          >
            {[
              { icon: Sparkles, text: "Showcase Your Skills" },
              { icon: Crown, text: "Compete With The Best" },
              { icon: Target, text: "Solve Real Problems" },
              { icon: Trophy, text: "Win Exciting Prizes" },
            ].map((item) => (
              <div
                key={item.text}
                className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <p className="text-xs sm:text-sm font-semibold text-foreground/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Registration status */}
          <div
            className="mb-10 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/15 border border-destructive/40 backdrop-blur-md shadow-[0_0_30px_hsl(var(--destructive)/0.35)]">
              <Lock className="w-5 h-5 text-destructive" />
              <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-destructive">
                Registration Closed
              </span>
            </div>
          </div>

          {/* What we are offering */}
          <div
            className="w-full max-w-5xl mb-14 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-black text-gradient">
                We Are Offering
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Shirt, text: "T-Shirt" },
                { icon: Cookie, text: "Snacks" },
                { icon: Coffee, text: "Coffee (Unlimited)" },
                { icon: Utensils, text: "Lunch" },
                { icon: FileBadge, text: "Participation Certificate" },
                { icon: Award, text: "Crest & Winner Certificates" },
              ].map((item, i) => (
                <div
                  key={item.text}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:scale-105 hover:shadow-cyan transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      #{i + 1}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Schedule */}
          <div
            className="w-full max-w-3xl mb-14 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl sm:text-3xl font-black text-gradient">
                Time Schedule
              </h2>
            </div>
            <div className="glass rounded-2xl p-4 sm:p-6 space-y-2">
              {[
                {
                  icon: User,
                  label: "Token Distribution & Registration",
                  time: "8:30 – 9:30 AM",
                },
                {
                  icon: Mic,
                  label: "Opening Ceremony",
                  time: "9:45 – 10:30 AM",
                },
                {
                  icon: Code2,
                  label: "Programming Contest (Individual)",
                  time: "11:00 – 12:30 PM",
                },
                {
                  icon: Pause,
                  label: "Lunch & Prayer Break",
                  time: "12:30 – 1:30 PM",
                },
                {
                  icon: Users,
                  label: "Programming Contest (Group)",
                  time: "1:30 – 3:00 PM",
                },
                {
                  icon: Trophy,
                  label: "Prize Giving Ceremony",
                  time: "3:15 – 4:45 PM",
                },
                { icon: Pause, label: "Prayer Break", time: "4:45 – 5:15 PM" },
                {
                  icon: Music,
                  label: "Cultural Evening",
                  time: "5:15 – 6:25 PM",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                    <row.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-foreground/90 text-left flex-1">
                    {row.label}
                  </p>
                  <span className="text-xs sm:text-sm font-bold text-primary tabular-nums whitespace-nowrap">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Banner preview */}
          <div
            className="mt-14 w-full max-w-5xl animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-text rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity" />
              <img
                src={banner}
                alt="Programming Contest 2026 Banner"
                className="relative rounded-2xl w-full shadow-card border border-border"
              />
            </div>
          </div>
        </main>

        {/* Sponsored by */}
        <section className="container mx-auto px-4 pb-3">
          <div className="glass rounded-xl p-2.5 sm:p-3">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3 h-3 text-primary" />
              <h2 className="text-[10px] font-black text-gradient uppercase tracking-widest">
                Sponsored By
              </h2>
              <Sparkles className="w-3 h-3 text-primary" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {sponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="group relative bg-white rounded-md p-1 w-10 h-5 flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    loading="lazy"
                    width={40}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative mt-12 border-t border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Department of CSE,{" "}
              <a
                href="https://www.rmu.ac.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Rabindra Maitree University
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Developed by:{" "}
              <a
                href="https://munna-dev.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gradient hover:underline underline-offset-4"
              >
                @rhmunna143
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
