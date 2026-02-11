import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
          <Header />
       <main className="pt-16 sm:pt-20">
          <Banner />
      <div className="space-y-6 sm:space-y-8">
          <Hero />
          <Services />
          <Gallery />
          <CustomerReviews />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
