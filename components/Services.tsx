export default function Services() {
 const services = [
  {
    icon: "water_drop",
    title: "Water Finding",
    description:
      "Accurate water finding service to identify the best underground water source for borewell locations.",
  },
  {
    icon: "explore",
    title: "Neerotam Service",
    description:
      "Professional Neerotam service with 15+ years of field experience for reliable water point identification.",
  },
  {
    icon: "search",
    title: "Water Diviner",
    description:
      "Expert water diviner service to locate underground water points with better accuracy and confidence.",
  },
  {
    icon: "electrical_services",
    title: "Motor Panel Service",
    description:
      "Complete motor control panel installation, repair, and servicing to ensure smooth motor performance.",
  },
];


  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white dark:bg-slate-900/50 scroll-mt-5" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Our Specialized Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-display text-sm sm:text-base">
            We provide expert water finding and motor control panel services for homes, farms, and commercial sites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 whitespace-nowrap">
            {service.title}
          </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
