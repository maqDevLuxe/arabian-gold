import { motion } from "framer-motion";

const reviews = [
  { name: "Sheikh Hamdan Al-Maktoum", loc: "Dubai, UAE", text: "The Royal Oud Noir is unlike anything I have encountered. It lingers for days — a masterpiece worthy of its heritage.", stars: 5 },
  { name: "Sophia Laurent", loc: "Paris, France", text: "As a collector of niche fragrances, Maison d'Oud stands alone. The complexity and longevity are simply unmatched.", stars: 5 },
  { name: "James Whitfield", loc: "London, UK", text: "I've worn this to every important meeting. The compliments never cease. A true statement of refined taste.", stars: 5 },
];

const ConnoisseurReviews = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Connoisseur Reviews</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-gold rounded-lg p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.stars }).map((_, si) => (
                <span key={si} className="text-gold text-sm">★</span>
              ))}
            </div>
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">"{r.text}"</p>
            <div>
              <p className="font-display text-sm text-foreground">{r.name}</p>
              <p className="font-body text-xs text-muted-foreground">{r.loc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ConnoisseurReviews;
