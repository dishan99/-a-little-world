import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { loveConfig } from "../data/loveConfig";

export default function LoveLetter() {
  return (
    <section className="love-letter-section" id="love-letter">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-kicker">
          <Sparkles size={14} /> WORDS FROM MY HEART
        </span>

        <h2>{loveConfig.messageTitle} <span>♡</span></h2>

        <p>There are a few things I want you to know...</p>
      </motion.div>

      <motion.article
        className="letter-card"
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="letter-decoration">✿</div>

        <div className="letter-top">
          <Heart size={22} fill="currentColor" />
          <span>A LITTLE LOVE LETTER</span>
          <Heart size={22} fill="currentColor" />
        </div>

        <h3>My Dearest,</h3>

        <p className="letter-text">{loveConfig.letter}</p>

        <div className="letter-signature">
          With lots of love,
          <strong>{loveConfig.senderName} ♡</strong>
        </div>

        <div className="letter-bottom-heart">♡</div>
      </motion.article>
    </section>
  );
}