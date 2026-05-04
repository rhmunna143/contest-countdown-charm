import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-07T09:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calc = (): TimeLeft => {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Unit = ({ value, label }: { value: number; label: string }) => {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
        <div className="relative glass rounded-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center shadow-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border/50" />
          <span
            className={`relative text-5xl sm:text-6xl md:text-7xl font-black text-gradient tabular-nums ${
              flip ? "animate-flip" : ""
            }`}
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
};

const CountdownTimer = () => {
  const [time, setTime] = useState<TimeLeft>(calc);

  useEffect(() => {
    const i = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-6">
      <Unit value={time.days} label="Days" />
      <span className="text-4xl sm:text-5xl font-black text-primary/60 -mt-6">
        :
      </span>
      <Unit value={time.hours} label="Hours" />
      <span className="text-4xl sm:text-5xl font-black text-primary/60 -mt-6">
        :
      </span>
      <Unit value={time.minutes} label="Minutes" />
      <span className="text-4xl sm:text-5xl font-black text-primary/60 -mt-6">
        :
      </span>
      <Unit value={time.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
