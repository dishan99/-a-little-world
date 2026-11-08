
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { loveConfig } from "../data/loveConfig";

export default function LoveNotes() {
  return (
    <section className="love-notes-section" id="love-notes">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-kicker">
          <Sparkles size={14} />
          LITTLE REMINDERS
        </span>

        <h2>
          Open a Little <span>Love Note</span> ♡
        </h2>

        <p>Each card holds a little reminder just for you.</p>
      </motion.div>

      <div className="love-notes-grid">
        {loveConfig.loveNotes.map((note, index) => (
          <motion.div
            key={index}
            className="love-note-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -2 : 2 }}
          >
            <Heart size={22} fill="currentColor" />
            <p>{note}</p>
            <span>♡</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
