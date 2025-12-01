import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  condition: string;
}

const ProductCard = ({ image, name, price, condition }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Halo mince, aku mau pesan barang ini!\n\nNama: ${name}\nHarga: ${price}\nKondisi: ${condition}`
  );

  return (
    <Card className="group overflow-hidden shadow-card transition-smooth hover:scale-[1.02] hover:shadow-soft">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-110"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="mb-1 text-lg font-semibold text-foreground">{name}</h3>
          <p className="mb-1 text-xl font-bold text-primary">{price}</p>
          <p className="text-sm text-muted-foreground">{condition}</p>
        </div>
        <Button
          asChild
          className="w-full bg-primary text-primary-foreground transition-smooth hover:bg-primary/90"
        >
          <a
            href={`https://wa.me/62895385510246?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
