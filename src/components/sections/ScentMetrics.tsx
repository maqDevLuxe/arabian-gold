import { motion } from "framer-motion";

const metrics = [
  { label: "Longevity", value: 95, desc: "24+ hours on skin", icon: "⏳" },
  { label: "Sillage", value: 88, desc: "Strong projection radius", icon: "🌀" },
  { label: "Complexity", value: 92, desc: "Multi-layered evolution", icon: "◆" },
  { label: "Uniqueness", value: 97, desc: "One-of-a-kind blend", icon: "✦" },
];

const ScentMetrics = () => (
  <section className="section-padding bg-obsidian-gradient">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Performance</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Longevity & Sillage</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-gold rounded-lg p-6 text-center"
          >
            <p className="text-3xl mb-3">{m.icon}</p>
            <div className="relative w-20 h-20 mx-auto mb-4">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                <motion.circle
                  cx="40" cy="40" r="35" fill="none"
                  stroke="hsl(var(--gold))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 35}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 35 * (1 - m.value / 100) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display text-sm text-foreground">
                {m.value}
              </span>
            </div>
            <p className="font-display text-sm text-foreground mb-1">{m.label}</p>
            <p className="font-body text-[10px] text-muted-foreground tracking-wide">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScentMetrics;
