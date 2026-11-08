import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { loveConfig } from "../data/loveConfig";

export default function SpecialReasons() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="reasons-section" id="special">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-kicker">
          <Heart size={14} fill="currentColor" /> A FEW LITTLE REASONS
        </span>

        <h2>Why You're <span>So Special</span></h2>

        <p>Tap each card to discover something sweet. 💗</p>
      </motion.div>

      <div className="reasons-grid">
        {loveConfig.reasons.map((reason, index) => {
          const isActive = activeCard === index;

          return (
            <motion.button
              key={reason.title}
              className={`reason-card ${isActive ? "active" : ""}`}
              onClick={() =>
                setActiveCard(isActive ? null : index)
              }
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              aria-expanded={isActive}
            >
              <span className="reason-number">
                0{index + 1}
              </span>

              <span className="reason-emoji">
                {reason.emoji}
              </span>

              <h3>{reason.title}</h3>

              <span className="reason-toggle">
                {isActive ? "A little message ↑" : "Tap to reveal ↓"}
              </span>

              <motion.div
                className="reason-description"
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{reason.description}</p>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}