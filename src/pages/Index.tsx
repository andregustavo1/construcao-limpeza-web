
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import RentalServices from "@/components/RentalServices";
import CleaningProducts from "@/components/CleaningProducts";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import LastCTA from "@/components/LastCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Values />
      <RentalServices />
      <CleaningProducts />
      <Projects />
      <WhyChooseUs />
      <Contact />
      <LastCTA />
      <Footer />
    </div>
  );
};

export default Index;
