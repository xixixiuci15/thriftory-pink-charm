import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import ConsignmentSection from "@/components/ConsignmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <ConsignmentSection />
      <Footer />
    </div>
  );
};

export default Index;
