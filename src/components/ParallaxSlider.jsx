import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, useTransform, useScroll } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import earthImageOne from "../assets/EarthImage.png"
import earthImageTwo from "../assets/demoOne.jpg";
import earthImageThree from "../assets/demoTwo.jpg";

const slides = [
  { id: 1, img: earthImageOne, title: "Sustainable Living" },
  { id: 2, img: earthImageTwo, title: "Green Energy" },
  { id: 3, img: earthImageThree, title: "Eco-Friendly Future" },
];

const ParallaxSlider = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
    
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ParallaxSlider;
