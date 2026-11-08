
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Mail } from "lucide-react";

import FloatingHearts from "./components/FloatingHearts";
import LoveLetter from "./components/LoveLetter";
import SpecialReasons from "./components/SpecialReasons";
import HerGallery from "./components/HerGallery";
import LoveNotes from "./components/LoveNotes";
import SurpriseGift from "./components/SurpriseGift";
import Navbar from "./components/Navbar";
import FinalLetter from "./components/FinalLetter";
import { loveConfig } from "./data/loveConfig";

import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <AnimatePresence>
        {!opened && (
          <motion.section
            className="welcome-page"
            id="home"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <FloatingHearts />

            <div className="welcome-content">
              <motion.div
                className="welcome-decoration"
                animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles size={22} />
                <Heart size={35} fill="currentColor" />
                <Sparkles size={22} />
              </motion.div>

              <motion.div
                className="welcome-envelope"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Mail size={65} strokeWidth={1.2} />
                <Heart className="envelope-heart" size={23} fill="currentColor" />
              </motion.div>

              <motion.p
                className="welcome-kicker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                A LITTLE WORLD MADE JUST FOR YOU
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Hey, My
                <br />
                <span>{loveConfig.nickname}!</span>
                <span className="heading-heart">♡</span>
              </motion.h1>

              <motion.p
                className="welcome-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {loveConfig.welcomeSubtitle}
                <br />
                I hope it makes you smile. 💗
              </motion.p>

              <motion.button
                className="open-surprise-button"
                onClick={() => setOpened(true)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                Open Your Surprise
                <Heart size={17} fill="currentColor" />
              </motion.button>

              <p className="welcome-bottom-text">
                made with love, just for you ♡
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {opened && (
        <>
          <Navbar />

          <section id="home" className="main-intro">
            <FloatingHearts />

            <div className="main-intro-content">
              <span className="section-kicker">
                A LITTLE WORLD JUST FOR YOU ♡
              </span>

              <h1>
                Welcome to
                <br />
                <span>Our Little World</span>
              </h1>

              <p>Every little detail here is made with love. 💗</p>

              <a href="#love-letter" className="explore-button">
                Let's Explore <Heart size={16} />
              </a>
            </div>
          </section>

          <LoveLetter />
          <SpecialReasons />
          <HerGallery />
          <LoveNotes />
          <SurpriseGift />
          <FinalLetter />

          <footer className="site-footer">
            Made with <span>♥</span> and lots of love.
          </footer>
        </>
      )}
    </main>
  );
}

export default App;
