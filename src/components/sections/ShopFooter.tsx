import { motion } from "framer-motion";

const ShopFooter = () => (
  <>
    {/* CTA */}
    <section id="shop" className="section-padding bg-obsidian-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-6">
            Discover Your Signature
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Subscribe to receive exclusive access to limited releases, bespoke consultations,
            and complimentary samples with your first order.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-secondary border border-border px-6 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
            />
            <button className="w-full sm:w-auto whitespace-nowrap font-body text-xs tracking-[0.2em] uppercase bg-gold text-primary-foreground px-8 py-3.5 hover:bg-gold-light transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="font-body text-[10px] text-muted-foreground">
            Complimentary worldwide shipping on orders above $250
          </p>
        </motion.div>
      </div>
    </section>

    {/* Divider */}
    <div className="gold-divider" />

    {/* Footer */}
    <footer className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-lg tracking-[0.2em] text-gold-gradient mb-4">MAISON D'OUD</p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            The world's most exclusive Arabian Oud perfumery. Crafted for those who seek the extraordinary.
          </p>
        </div>

        {[
          { title: "House", links: ["Collections", "Limited Editions", "The Art", "Master Perfumer"] },
          { title: "Service", links: ["Bespoke Consultations", "Gift Wrapping", "Worldwide Shipping", "Returns"] },
          { title: "Connect", links: ["Instagram", "Contact", "Press", "Careers"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-foreground mb-4">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-[10px] text-muted-foreground tracking-wide">
          © 2026 Maison d'Oud. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#" className="font-body text-[10px] text-muted-foreground hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  </>
);

export default ShopFooter;
