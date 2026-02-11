"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const bannerSlides = [
  {
    id: 1,
    image:
      "/img1.png",
    heading: "Welcome to Arulmurgan Borewell Services",
    subheading: "Best Borewell Service in Tamil Nadu",
    location: "Nochiodaipatti, Dindigul, Tamil Nadu - 600002",
  },
  {
    id: 2,
    image:
      "/img2.png",
    heading: "Welcome to Arulmurgan Borewell Services",
    subheading: "Professional Neerotam & Water Solutions",
    location: "Nochiodaipatti, Dindigul, Tamil Nadu - 600002",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-none">
        {/* Increased Height */}
         <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] overflow-hidden">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: "0% 35%" }}
                  priority={index === 0}/>
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="text-white max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
                    {slide.heading}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary mb-4">
                    {slide.subheading}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base flex items-center gap-2 text-slate-200">
                    <span className="material-symbols-outlined text-lg">
                      location_on
                    </span>
                    {slide.location}
                  </p>
                </div>

                {/* Arrows Desktop */}
                <div className="hidden lg:flex items-center gap-3 ml-auto">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all"
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all"
                  >
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-10"
                    : "bg-white/50 hover:bg-white/70 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
