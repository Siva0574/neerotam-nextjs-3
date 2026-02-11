import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="flex items-center gap-2">
            <div className="text-primary">
              <span
              className="material-symbols-outlined leading-none"
              style={{ fontSize: "35px" }}>
              water_drop
            </span>

            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tighter text-primary uppercase leading-none">
                ARULMURUGAN
              </span>
              <span className="text-[9px] sm:text-[12px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                Borewell Services
              </span>
            </div>
          </Link>
          </div>
            <p className="text-sm leading-relaxed">
              Pioneering water solutions for the modern age with efficiency,
              transparency, and deep expertise.
            </p>
          </div>

          {/* Quick Links + Specializations (Mobile 2 Column Fix) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#CustomerReviews"
                    className="hover:text-primary transition-colors"
                  >
                   Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-primary transition-colors"
                  >
                    Work
                  </a>
                </li>
                 <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Location
                  </a>
                </li>
                
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="text-white font-bold mb-4">Specializations</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                   Neerotam Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Motor COntrol Panel Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Borewell Water Finding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Water Diviner
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
          © {new Date().getFullYear()} Arulmurugan Borewell Services. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <p className="text-xs">
             Designed By  Siva Freelancer | <a href="siva.dev5340@gmail.com" className="text-primary hover:underline">siva.dev5340@gmail.com</a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

