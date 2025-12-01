import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-card">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎀</span>
          <h1 className="text-xl font-bold text-primary md:text-2xl">Thriftory</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          <button
            onClick={() => scrollToSection("beranda")}
            className="text-foreground transition-smooth hover:text-primary"
          >
            Beranda
          </button>
          <button
            onClick={() => scrollToSection("katalog")}
            className="text-foreground transition-smooth hover:text-primary"
          >
            Katalog Barang
          </button>
          <button
            onClick={() => scrollToSection("titip-jual")}
            className="text-foreground transition-smooth hover:text-primary"
          >
            Titip Jual
          </button>
          <a
            href="https://wa.me/62895385510246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-smooth hover:text-primary"
          >
            Kontak Admin
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-left text-foreground transition-smooth hover:text-primary"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("katalog")}
              className="text-left text-foreground transition-smooth hover:text-primary"
            >
              Katalog Barang
            </button>
            <button
              onClick={() => scrollToSection("titip-jual")}
              className="text-left text-foreground transition-smooth hover:text-primary"
            >
              Titip Jual
            </button>
            <a
              href="https://wa.me/62895385510246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-foreground transition-smooth hover:text-primary"
            >
              Kontak Admin
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
