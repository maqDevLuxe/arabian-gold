import { motion } from "framer-motion";
import { useState } from "react";

const notes = [
  { layer: "Top Notes", items: ["Saffron", "Bergamot", "Pink Pepper"], desc: "The opening whisper — bright, spiced, ephemeral." },
  { layer: "Heart Notes", items: ["Rose Damascena", "Oud Wood", "Jasmine Sambac"], desc: "The soul of the fragrance — deep, floral, intoxicating." },
  { layer: "Base Notes", items: ["Amber", "Musk", "Sandalwood"], desc: "The lasting impression — warm, sensual, eternal." },
];

const FragranceNotes = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="section-padding bg-obsidian-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">The Olfactory Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Fragrance Notes</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {notes.map((note, i) => (
            <motion.div
              key={note.layer}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              onMouseEnter={() => setActive(i)}
              className={`glass-card-gold rounded-lg p-8 cursor-pointer transition-all duration-500 ${
                active === i ? "scale-105 gold-glow" : "opacity-70 hover:opacity-100"
              }`}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/50 mb-3">{note.layer}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {note.items.map((item) => (
                  <span
                    key={item}
                    className="font-display text-sm text-foreground/90 border border-gold/20 px-4 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{note.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FragranceNotes;
