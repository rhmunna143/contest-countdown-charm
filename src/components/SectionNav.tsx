import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "offerings", label: "Offerings" },
  { id: "schedule", label: "Schedule" },
  { id: "winners", label: "Winners" },
  { id: "certificates", label: "Certificates" },
  { id: "sponsors", label: "Sponsors" },
];

const SectionNav = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 120;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        scrolled ? "w-[95%] sm:w-auto" : "w-[95%] sm:w-auto",
      )}
      aria-label="Section navigation"
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5 shadow-glow border border-border/50">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className={cn(
              "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all",
              active === s.id
                ? "bg-primary text-primary-foreground shadow-cyan"
                : "text-foreground/70 hover:text-foreground hover:bg-primary/10",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="glass rounded-full px-4 py-2 flex items-center gap-2 shadow-glow border border-border/50 ml-auto"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-4 h-4 text-primary" /> : <Menu className="w-4 h-4 text-primary" />}
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            {sections.find((s) => s.id === active)?.label ?? "Menu"}
          </span>
        </button>
        {open && (
          <div className="mt-2 glass rounded-2xl p-2 shadow-glow border border-border/50 flex flex-col gap-1 animate-fade-up">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={cn(
                  "px-4 py-2 text-left text-sm font-bold uppercase tracking-wider rounded-xl transition-all",
                  active === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-primary/10",
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default SectionNav;
