import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: i * 0.7,
  duration: 8 + (i % 5),
  size: 12 + (i % 4) * 5,
}));

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-15vh",
            opacity: [0, 0.65, 0.65, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♡
        </motion.span>
      ))}
    </div>
  );
}