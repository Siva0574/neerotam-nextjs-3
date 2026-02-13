import Image from "next/image";
import { Facebook, Instagram, InstagramIcon, MessageCircle } from "lucide-react";


export default function Contact() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-900 scroll-mt-5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-10 text-sm sm:text-base">
             Looking for Neerotam water diviner service or motor control panel support? Reach out to us today.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {/* Phone */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">
                    call
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Call Us 24/7
                  </p>
                  <a
                    href="tel:+919566649871"
                    className="text-lg sm:text-xl font-bold hover:text-primary transition-colors"
                  >
                    +91 95666 49871
                  </a>
                  {/* <a
                    href="tel:+919566649871"
                    className="text-lg sm:text-xl font-bold hover:text-primary transition-colors"
                  >
                    +91 95666 49871 */}
                  {/* </a> */}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">
                    chat
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919566649871?text=Hi%20Arulmurgan%2C%20I%20need%20borewell%20Neerotam%20service.%20Please%20call%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold hover:text-primary transition-colors"
                  >
                    +91 95666 49871
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Our Office
                  </p>
                  <p className="text-lg sm:text-xl font-bold">
                    Arulmurgan Borewell Services, Natham Main Road,Nochiodaipatty, Dindigul-624003
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Email Support
                  </p>
                  <a
                    href="mailto:info@neerotam.com"
                    className="text-lg sm:text-xl font-bold hover:text-primary transition-colors"
                  >
                    arumugam1988p07@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
             <div className="mt-8 sm:mt-12 flex gap-3 sm:gap-4">
           <a
              href="https://www.facebook.com/profile.php?id=100069924137097&ref=PROFILE_EDIT_ig_profile_ac"
              className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>


            <a
              href="https://www.instagram.com/aarrumukm.62"
              className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Instagram">
            <svg
                  width={20}
                  height={20}
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill={"#000"} />
                  <path
                    fill="#fff"
                    d="M20 6h-8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-8a6 6 0 0 0-6-6Zm4.1 14c0 2.3-1.9 4.1-4.1 4.1h-8c-2.3 0-4.1-1.9-4.1-4.1v-8c0-2.3 1.9-4.1 4.1-4.1h8c2.3 0 4.1 1.9 4.1 4.1v8ZM16 11.2a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.3-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
              </svg>
            </a>
            
            <a
              href="https://wa.me/919566649871?text=Hi%20Arulmurgan%2C%20I%20need%20borewell%20Neerotam%20service.%20Please%20call%20me."
              target="_blank"
              className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="WhatsApp">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.73.45 3.42 1.3 4.92L2 22l5.29-1.39a9.86 9.86 0 004.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.77 14.28c-.24.67-1.4 1.29-1.92 1.36-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.66-.6-2.93-1.26-4.84-4.22-4.99-4.41-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.29.6-.36.8-.36h.58c.18 0 .43-.07.67.51.24.58.82 2.02.89 2.17.07.15.12.33.02.53-.1.2-.15.33-.29.51-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.07.18-.2.73-.85.92-1.14.2-.29.4-.24.67-.15.27.1 1.73.82 2.02.97.29.15.48.22.55.34.07.12.07.7-.17 1.37z"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCE1bTpD3kjsN8EPgh-zxPxw"
              className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="YouTube">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.7 2.5 12 2.5 12 2.5h0s-5.7 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 8.3.3 0 0 5.7 0 8.6-.3.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.6 14.7V7.9l6.3 3.4-6.3 3.4z" />
              </svg>
            </a>
          </div>
           </div>

          {/* Right Map */}
          
          <div className="flex-1 h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative  hover:grayscale-0 transition-all duration-700">
          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6486738!2d77.9876543!3d10.3856789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIzJzA4LjQiTiA3N8KwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Nochiodaipatty,+Dindigul,+Natham+Main+Road"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arulmurgan Borewell Services Location"
          ></iframe>

          {/* Directions Button */}
          <div className="absolute bottom-4 right-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Nochiodaipatty,+Dindigul,+Natham+Main+Road"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
