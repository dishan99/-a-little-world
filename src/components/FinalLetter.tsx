
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { loveConfig } from "../data/loveConfig";

export default function FinalLetter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="final-letter-section" id="final-letter">
      <motion.div
        className="final-letter-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-kicker">
          <Sparkles size={14} />
          A LITTLE SOMETHING FROM MY HEART
        </span>

        <h2>
          One Last <span>Thing...</span>
        </h2>

        <div className="final-letter-card">
          <div className="final-heart">♡</div>

          <h3>My Favorite Person,</h3>

          <p>{loveConfig.finalLetter}</p>

          <div className="final-signature">
            With all my love,
            <strong>{loveConfig.senderName} ♡</strong>
          </div>
        </div>

        <motion.p
          className="closing-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {loveConfig.closingMessage}
        </motion.p>

        <motion.button
          className="send-love-button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setSent(!sent)}
        >
          <Heart size={17} fill="currentColor" />
          {sent ? "Love received! 💗" : "Send a Little Love Back"}
        </motion.button>

        <AnimatePresence>
          {sent && (
            <motion.div
              className="love-response"
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7 }}
            >
              <span>💌</span>
              <p>You just made this little world even happier!</p>
              <div className="response-hearts">♡ ♥ ♡ ♥ ♡</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
