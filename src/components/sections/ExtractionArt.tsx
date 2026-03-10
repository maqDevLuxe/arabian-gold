import { motion } from "framer-motion";
import oudExtraction from "@/assets/oud-extraction.jpg";

const ExtractionArt = () => (
  <section id="the-art" className="section-padding">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img src={oudExtraction} alt="Oud wood extraction" className="w-full aspect-square object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Ancient Craft</p>
        <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-6">The Art of Extraction</h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          For over 3,000 years, Oud has been revered as "liquid gold" across the Arabian Peninsula.
          Our extraction process honors this legacy — each batch requires 70 kilograms of infected
          Aquilaria wood to produce a single tola of pure Oud oil.
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
          Through hydro-distillation at precisely controlled temperatures, we capture every nuance —
          from the smoky, leathery top to the sweet, balsamic depths that define the world's most
          precious essence.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { num: "72h", label: "Distillation" },
            { num: "70kg", label: "Per Tola" },
            { num: "300+", label: "Years Tradition" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl text-gold-gradient">{stat.num}</p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExtractionArt;
