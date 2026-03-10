import { motion } from "framer-motion";

const pillars = [
  { icon: "🌿", title: "Sustainable Harvest", desc: "Our Aquilaria plantations follow regenerative forestry practices in Vietnam and Cambodia." },
  { icon: "🤝", title: "Fair Trade", desc: "Direct partnerships with local communities ensure equitable compensation and cultural preservation." },
  { icon: "🔬", title: "Lab Verified", desc: "Every batch is tested for purity, potency, and ethical compliance by independent laboratories." },
  { icon: "♻️", title: "Zero Waste", desc: "From distillation byproducts to recyclable packaging, we pursue a circular approach." },
];

const EthicalSourcing = () => (
  <section className="section-padding bg-obsidian-gradient">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Responsibility</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Ethical Sourcing</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-lg p-8"
          >
            <p className="text-2xl mb-4">{p.icon}</p>
            <h3 className="font-display text-base text-foreground mb-2">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EthicalSourcing;
