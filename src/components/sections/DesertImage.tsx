import { motion } from "framer-motion";
import desertImg from "@/assets/desert-landscape.jpg";

const DesertImage = () => (
  <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
    <motion.div
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0"
    >
      <img src={desertImg} alt="Arabian desert golden amber landscape" className="w-full h-full object-cover" />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl lg:text-6xl text-center tracking-[0.15em] text-gold-gradient px-6"
      >
        Born From the Sands of Time
      </motion.p>
    </div>
  </section>
);

export default DesertImage;
