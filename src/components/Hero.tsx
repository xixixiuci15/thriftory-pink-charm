import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToKatalog = () => {
    const element = document.getElementById("katalog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Tempat Barang Lucu Cari Pemilik Baru!
          </h2>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Temukan atau jual barang preloved yang masih super layak dan gemesin ✨
          </p>
          <Button
            onClick={scrollToKatalog}
            size="lg"
            className="bg-primary text-primary-foreground shadow-soft transition-smooth hover:scale-105 hover:bg-primary/90"
          >
            Lihat Katalog Sekarang
          </Button>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="text-8xl md:text-9xl">🛍️</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
