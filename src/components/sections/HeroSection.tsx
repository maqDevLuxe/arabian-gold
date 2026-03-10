import { motion } from "framer-motion";
import heroPerfume from "@/assets/hero-perfume.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroPerfume} alt="Luxury Arabian Oud Perfume" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/70 mb-6">
            The Essence of Arabian Royalty
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] leading-tight mb-8"
        >
          <span className="text-gold-gradient">Where Oud</span>
          <br />
          <span className="text-foreground/90">Meets Eternity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Crafted from the rarest Oud essences, distilled through centuries of artistry.
          A fragrance that transcends time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#collections"
            className="font-body text-xs tracking-[0.2em] uppercase bg-gold/10 border border-gold/30 text-gold px-10 py-4 hover:bg-gold/20 transition-all duration-500 gold-glow"
          >
            Explore Collection
          </a>
          <a
            href="#the-art"
            className="font-body text-xs tracking-[0.2em] uppercase border border-foreground/20 text-foreground/70 px-10 py-4 hover:border-gold/30 hover:text-gold transition-all duration-500"
          >
            The Art of Oud
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
