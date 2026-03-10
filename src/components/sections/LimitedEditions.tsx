import { motion } from "framer-motion";
import limitedImg from "@/assets/limited-edition.jpg";

const LimitedEditions = () => (
  <section id="limited" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Rare & Numbered</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Limited Editions</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-gold rounded-lg overflow-hidden grid md:grid-cols-2"
      >
        <div className="relative">
          <img src={limitedImg} alt="Limited edition perfume" className="w-full h-full object-cover min-h-[400px]" />
          <div className="absolute top-6 left-6 bg-gold/90 text-primary-foreground font-body text-[10px] tracking-[0.3em] uppercase px-4 py-1.5">
            Only 99 Pieces
          </div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/60 mb-3">Edition 2024</p>
          <h3 className="font-display text-3xl text-gold-gradient mb-4">Al-Malik Supreme</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
            Encased in hand-blown crystal with 24k gold filigree. Each bottle contains oud aged
            for 50 years in the forests of Assam — a once-in-a-lifetime creation.
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <p className="font-display text-xl text-gold">$12,500</p>
              <p className="font-body text-[10px] text-muted-foreground tracking-wide mt-1">Per Bottle</p>
            </div>
            <div>
              <p className="font-display text-xl text-foreground">23</p>
              <p className="font-body text-[10px] text-muted-foreground tracking-wide mt-1">Remaining</p>
            </div>
          </div>
          <button className="self-start font-body text-xs tracking-[0.2em] uppercase bg-gold/10 border border-gold/30 text-gold px-8 py-3 hover:bg-gold/20 transition-all duration-500">
            Reserve Now
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LimitedEditions;
