import { Metadata } from "next";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "All Projects - Neerotam Borewell Services",
  description:
    "Browse our complete portfolio of borewell drilling projects across residential, commercial, agricultural, and industrial sectors.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* <Banner /> */}
      <Header />
      <main className="pt-10">
        {/* Page Header */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-base sm:text-lg">
                  photo_library
                </span>
                Our Portfolio
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6">
                All Projects
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
               Explore our successful water finding and borewell service works. From homes to industrial sites, we provide accurate water detection and reliable motor control panel support.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
