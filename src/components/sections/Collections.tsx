import { motion } from "framer-motion";
import collectionImg from "@/assets/collection-bottles.jpg";

const collections = [
  { name: "Royal Oud Noir", price: "$480", desc: "Dark, smoky, leather-wrapped mystique" },
  { name: "Amber Majesty", price: "$520", desc: "Warm amber with rose and saffron" },
  { name: "Desert Twilight", price: "$450", desc: "Sandalwood meets the evening breeze" },
];

const Collections = () => (
  <section id="collections" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Curated Excellence</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Signature Collections</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden"
        >
          <img src={collectionImg} alt="Signature perfume collection" className="w-full object-cover aspect-[16/10]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        </motion.div>

        <div className="space-y-6">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-gold rounded-lg p-6 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-lg text-foreground group-hover:text-gold-gradient transition-colors">{c.name}</h3>
                <span className="font-display text-sm text-gold">{c.price}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Collections;
