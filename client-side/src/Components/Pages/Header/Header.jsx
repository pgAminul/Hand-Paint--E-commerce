import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Header = () => {
  const slides = [
    {
      id: 1,
      title: "Handcrafted Artistry",
      subtitle: "Unique Hand-Painted Designs",
      description:
        "Discover our exclusive collection of hand-painted clothing, each piece a wearable masterpiece.",
      image:
        "https://i.ibb.co/kV1JNdg0/Chat-GPT-Image-Aug-7-2025-11-14-58-PM.png",
      buttonText: "Shop Now",
      buttonLink: "/shop",
    },
    {
      id: 2,
      title: "Summer Collection",
      subtitle: "Fresh & Vibrant Colors",
      description:
        "Brighten your wardrobe with our limited edition summer hand-painted collection.",
      image: "https://i.ibb.co/B2WhS8BT/hand1.jpg",
      buttonText: "View Collection",
      buttonLink: "/summer-collection",
    },
    {
      id: 3,
      title: "Artisan Crafted",
      subtitle: "Ethically Made",
      description:
        "Each garment is carefully hand-painted by skilled artisans using eco-friendly materials.",
      image:
        "https://i.ibb.co/XN7Bpsy/Whats-App-Image-2025-08-07-at-23-45-06.jpg",
      buttonText: "Meet Our Artists",
      buttonLink: "/artisans",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <div className="relative overflow-hidden h-[60vh] max-h-[600px] min-h-[400px] w-full">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 flex items-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/85"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-lg"
            >
              <h3 className="text-xl md:text-2xl font-light mb-2">
                {slides[currentSlide].subtitle}
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg mb-6">{slides[currentSlide].description}</p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                {slides[currentSlide].buttonText}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-6" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
