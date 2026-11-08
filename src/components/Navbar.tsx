
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Letter", href: "#love-letter" },
  { label: "Special", href: "#special" },
  { label: "Her Photos", href: "#her-gallery" },
  { label: "Love Notes", href: "#love-notes" },
  { label: "Surprise", href: "#surprise" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-navbar">
      <a href="#home" className="nav-logo" onClick={closeMenu}>
        <Heart size={19} fill="currentColor" />
        <span>A Little World</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
