import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { loveConfig } from "../data/loveConfig";

export default function HerGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const photos = loveConfig.photos;

  const closeGallery = () => setSelected(null);

  const previousPhoto = () => {
    if (selected === null) return;

    setSelected((selected - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    if (selected === null) return;

    setSelected((selected + 1) % photos.length);
  };

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") previousPhoto();
      if (event.key === "ArrowRight") nextPhoto();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="her-gallery" id="her-gallery">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-kicker">
          <Heart size={14} fill="currentColor" />
          A LITTLE COLLECTION OF YOU
        </span>

        <h2>
          Just <span>You</span> ♡
        </h2>

        <p>
          A little corner of this website dedicated to you.
        </p>
      </motion.div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.src}
            className={`photo-card photo-card-${(index % 6) + 1}`}
            onClick={() => setSelected(index)}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            whileHover={{ y: -9, rotate: 0, scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`View ${photo.alt}`}
          >
            <div className="photo-image-wrapper">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
            </div>

            <span className="photo-heart">♡</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="photo-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <button
              className="lightbox-close"
              onClick={closeGallery}
              aria-label="Close photo viewer"
            >
              <X />
            </button>

            <button
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                previousPhoto();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>

            <motion.img
              key={photos[selected].src}
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="lightbox-image"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            />

            <button
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                nextPhoto();
              }}
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>

            <span className="lightbox-counter">
              {selected + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}