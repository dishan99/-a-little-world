
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";
import { loveConfig } from "../data/loveConfig";

export default function SurpriseGift() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="surprise-section" id="surprise">
      <motion.div
        className="surprise-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-kicker">
          <Sparkles size={14} />
          ONE LAST SURPRISE
        </span>

        <h2>
          A Little Gift <span>For You</span>
        </h2>

        <p>There is something waiting inside. Tap to discover it.</p>

        <motion.button
          className={`gift-button ${opened ? "gift-opened" : ""}`}
          onClick={() => setOpened(!opened)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          aria-label={opened ? "Close the surprise gift" : "Open the surprise gift"}
        >
          <motion.div
            animate={opened ? { rotate: [0, -8, 8, 0], y: -10 } : { y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: opened ? 0 : Infinity }}
          >
            <Gift size={75} strokeWidth={1.3} />
          </motion.div>

          <span>{opened ? "Close Gift" : "Open Me!"}</span>
        </motion.button>

        <AnimatePresence>
          {opened && (
            <motion.div
              className="gift-message"
              initial={{ opacity: 0, y: 25, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Heart size={25} fill="currentColor" />
              <h3>For You, Always ♡</h3>
              <p>{loveConfig.closingMessage}</p>
              <span>Made with lots of love.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
