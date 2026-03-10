import { motion } from "framer-motion";
import perfumerImg from "@/assets/master-perfumer.jpg";

const MasterPerfumer = () => (
  <section className="section-padding bg-obsidian-gradient">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 md:order-1"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">The Visionary</p>
        <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-6">Master Perfumer</h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          Khalid Al-Rashid — a third-generation nose from the perfume houses of Grasse and the
          souks of Muscat. With 40 years of dedication, he bridges the ancient Arabian tradition
          with modern haute parfumerie.
        </p>
        <blockquote className="border-l-2 border-gold/40 pl-6 italic font-body text-sm text-foreground/70 mb-6">
          "A true Oud does not announce itself. It reveals, layer by layer, like a secret
          whispered across centuries."
        </blockquote>
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          — Khalid Al-Rashid, Maître Parfumeur
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 md:order-2"
      >
        <div className="relative rounded-lg overflow-hidden">
          <img src={perfumerImg} alt="Master Perfumer Khalid Al-Rashid" className="w-full aspect-square object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default MasterPerfumer;
