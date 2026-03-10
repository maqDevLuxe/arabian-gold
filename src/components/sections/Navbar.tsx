import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Collections", "The Art", "Limited", "Blog", "Shop"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-display text-xl md:text-2xl tracking-[0.3em] text-gold-gradient">
          MAISON D'OUD
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#shop"
          className="hidden md:block font-body text-xs tracking-[0.2em] uppercase border border-gold/30 px-6 py-2.5 text-gold hover:bg-gold/10 transition-all duration-300"
        >
          Discover
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
