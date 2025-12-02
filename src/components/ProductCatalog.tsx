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
      name: "Cardigan Blue Colorbox",
      price: "Rp 75.000",
      condition: "80% Like New",
    },
    {
      image: cardiganCream,
      name: "Cardigan Yellow",
      price: "Rp 45.000",
      condition: "75% Like New",
    },
    {
      image: sneakers,
      name: "Sneakers",
      price: "Rp 700.000",
      condition: "100% New",
    },
    {
      image: blouseFloral,
      name: "jeans blue",
      price: "Rp 70.000",
      condition: "80% Like New",
    },
    {
      image: toteBag,
      name: "Tote Bag brown",
      price: "Rp 25.000",
      condition: "75% Like New",
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
