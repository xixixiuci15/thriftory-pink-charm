import { Button } from "@/components/ui/button";

const ConsignmentSection = () => {
  return (
    <section id="titip-jual" className="gradient-subtle py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 text-6xl">📦</div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Mau Titip Jual Barangmu?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Kamu mahasiswa STT NF dan punya barang lucu yang masih layak? Yuk titip jual di
            Thriftory! Kirim fotonya ke admin ya 💕
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground shadow-soft transition-smooth hover:scale-105 hover:bg-primary/90"
          >
            <a
              href="https://wa.me/62895385510246?text=Halo%20mince,%20aku%20mau%20titip%20jual%20barang!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Admin di WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsignmentSection;
