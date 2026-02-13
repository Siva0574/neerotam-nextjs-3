"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  
  const projects = [
    {
      title: "Industrial Complex - 800ft Deep",
      location: "Western Industrial Zone",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    },
    {
      title: "Residential Estate - 450ft",
      location: "Northern Suburbs",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    },
    {
      title: "Farm Irrigation - 600ft",
      location: "Green Belt Farms",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    },
  ];

  const handleViewAllClick = () => {
    router.push("/projects");
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900/50 scroll-mt-5" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Recent Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A showcase of our successful drilling operations across various
            sectors and depths.
          </p>
        </div>

        {/* 2-column grid on mobile, 3-column on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              
               <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 text-white">
        <h3 className="text-xs sm:text-sm lg:text-base font-bold mb-0.5 sm:mb-1 line-clamp-2">
          {project.title}
        </h3>
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <p className="text-[10px] sm:text-xs text-slate-200 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">
              location_on
            </span>
            <span className="line-clamp-1">{project.location}</span>
          </p>
        </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
          <button
            onClick={handleViewAllClick}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
          >
            View All Projects
            <span className="material-symbols-outlined text-lg sm:text-xl">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
