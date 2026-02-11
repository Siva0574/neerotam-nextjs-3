"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
  location: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Selva Kumar",
    image: "/reviews/arulmurugan.png",
    rating: 5,
    review:
      "Excellent Neerotam service! They identified the water point correctly and guided us with the right depth location. Very professional and accurate work. Highly recommended!",
    location: "Northern Suburbs",
  },
  {
    id: 2,
    name: "Arun kumar",
    image: "/reviews/arulmurugan.png",
    rating: 5,
    review:
      "Best water finding service! The Neerotam checking was very clear and accurate. Their guidance helped us choose the correct borewell point with confidence.",
    location: "Eastern Heights",
  },
  {
    id: 3,
    name: "Raja",
    image: "/reviews/arulmurugan.png",
    rating: 5,
    review:
      "Very satisfied with their Neerotam water diviner work. They checked multiple points and suggested the best location. Honest service and great experience.",
    location: "Green Belt Farms",
  },
  {
    id: 4,
    name: "Nithees kumar",
    image: "/reviews/arulmurugan.png",
    rating: 5,
    review:
      "Excellent motor control panel service! Quick response and clean work. They repaired the panel properly and explained everything clearly.",
    location: "Southern Valley",
  },
  {
    id: 5,
    name: "Raja",
    image: "/reviews/arulmurugan.png",
    rating: 5,
    review:
      "Good service and fair pricing. Their water diviner checking was accurate and they also helped us with motor panel connection work.",
    location: "Western Industrial",
  },
  {
    id: 6,
    name: "Hari",
    image: "/reviews/arulmurugan.png",
    rating: 5,
    review:
      "Highly professional Neerotam expert! They guided us properly for borewell water finding and gave clear explanation. Very genuine and experienced.",
    location: "Riverside Zone",
  },
];


export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // mobile
  };

  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-background-light dark:bg-background-dark overflow-hidden scroll-mt-5" id="CustomerReviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-base sm:text-lg">
              star
            </span>
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Don't just take our word for it - hear from our satisfied customers
            who trust us for their water needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-12 z-10 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-primary hover:text-white transition-all group"
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              arrow_back
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-12 z-10 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-primary hover:text-white transition-all group"
            aria-label="Next review"
          >
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              arrow_forward
            </span>
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Desktop Pagination Dots */}
          <div className="hidden lg:flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length - visibleCards + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="group h-full bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 hover:border-primary/30">
      
      {/* Customer Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base truncate">
            {review.name}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 truncate">
            <span className="relative   overflow-hidden material-symbols-outlined text-primary text-sm">
              location_on
            </span>
            {review.location}
          </p>
        </div>
      </div>
     <br></br>
      {/* Review Text */}
      <p className="text-slate-700  dark:text-slate-300 mb-6 leading-relaxed text-sm sm:text-base min-h-[80px] sm:min-h-[100px]">
        "{review.review}"
      </p>

      {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`material-symbols-outlined text-xl sm:text-2xl ${
                    index < review.rating
                      ? "text-yellow-400 fill-1"
                      : "text-slate-300 dark:text-slate-600"
                  }`}
                >
                  star
                </span>
        ))}
            </div>
    </div>
  );
}
