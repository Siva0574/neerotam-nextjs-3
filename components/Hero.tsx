"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Hero() {
    const router = useRouter();

    const handleViewAllClick = () => {
    router.push("/projects");
  };

      
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="hidden sm:inline">Available 24/7 for Emergency Services</span>
              <span className="sm:hidden">24/7 Emergency Service</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
              Reliable Water Solutions for{" "}
              <span className="text-primary">Every Depth.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
            Neerotam & Borewell Services offers expert borewell water detection and water diviner services with 15+ years of experience.
            We also provide complete motor control panel servicing to ensure reliable water finding and smooth motor performance.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button onClick={handleViewAllClick} className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                View Our Projects
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>


            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6">
              <div>
                <p className="text-xl sm:text-2xl font-black text-primary">15+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                  Years Exp
                </p>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-primary">2.5k+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                 Water Detection
                </p>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-primary">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 sm:border-8 border-white dark:border-slate-700 shadow-2xl relative z-10">
                <Image
                src="/img1.png"
                  // src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA"
                  alt="Heavy duty borewell drilling machine on a construction site"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
