import { motion } from "framer-motion";

const posts = [
  { title: "The Mystique of Cambodian Oud", date: "Feb 2026", read: "6 min", tag: "Origins" },
  { title: "Rose & Oud: A Timeless Pairing", date: "Jan 2026", read: "4 min", tag: "Blending" },
  { title: "Decoding Sillage: The Science of Projection", date: "Dec 2025", read: "5 min", tag: "Science" },
];

const OlfactoryBlog = () => (
  <section id="blog" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/60 mb-4">Insights & Stories</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">Olfactory Journal</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-gold rounded-lg p-8 group cursor-pointer hover:scale-[1.02] transition-transform duration-500"
          >
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/50 border border-gold/20 px-3 py-1 rounded-full">
              {post.tag}
            </span>
            <h3 className="font-display text-lg text-foreground mt-5 mb-3 group-hover:text-gold transition-colors duration-300">
              {post.title}
            </h3>
            <div className="flex gap-4 font-body text-xs text-muted-foreground">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.read} read</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default OlfactoryBlog;
