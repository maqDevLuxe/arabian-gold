import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, target, { duration: 2.5, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { ctrl.stop(); unsub(); };
  }, [inView, target, count, rounded]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl text-gold-gradient">
        {display.toLocaleString()}{suffix}
      </p>
      <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

const SoldCounters = () => (
  <section className="section-padding bg-obsidian-gradient">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Our Legacy in Numbers</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Exclusive Bottles Sold</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Counter target={12847} label="Bottles Sold" />
        <Counter target={43} label="Countries" />
        <Counter target={156} label="Royal Clients" />
        <Counter target={98} label="Satisfaction" suffix="%" />
      </div>
    </div>
  </section>
);

export default SoldCounters;
