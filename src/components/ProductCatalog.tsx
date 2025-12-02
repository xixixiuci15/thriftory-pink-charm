import ProductCard from "./ProductCard";
import sweaterPink from "@/assets/sweater-pink.jpg";
import bagMini from "@/assets/bag-mini.jpg";
import cardiganCream from "@/assets/cardigan-cream.jpg";
import sneakers from "@/assets/sneakers.jpg";
import blouseFloral from "@/assets/blouse-floral.jpg";
import toteBag from "@/assets/tote-bag.jpg";

const ProductCatalog = () => {
  const products = [
    {
      image: sweaterPink,
      name: "Sequin Top H&M",
      price: "Rp 89.000",
      condition: "90% Like New",
    },
    {
      image: bagMini,
      name: "Tas Mini Lucu",
      price: "Rp 50.000",
      condition: "90% Like New",
    },
    {
      image: cardiganCream,
      name: "Cardigan Cream",
      price: "Rp 85.000",
      condition: "98% Like New",
    },
    {
      image: sneakers,
      name: "Sepatu Sneakers",
      price: "Rp 120.000",
      condition: "92% Like New",
    },
    {
      image: blouseFloral,
      name: "Blouse Floral",
      price: "Rp 60.000",
      condition: "95% Like New",
    },
    {
      image: toteBag,
      name: "Tote Bag Canvas",
      price: "Rp 45.000",
      condition: "100% Like New",
    },
  ];

  return (
    <section id="katalog" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Katalog Barang Preloved
          </h2>
          <p className="text-muted-foreground">
            Barang-barang lucu yang siap cari pemilik baru 💕
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
