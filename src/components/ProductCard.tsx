import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const isInCart = items.some(item => item.product.id === product.id);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    // Показываем анимацию добавления
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden bg-muted/50">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
            {product.badge}
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
          <p className="font-medium">{product.price.toLocaleString('ru-RU')} ₽</p>
          {product.oldPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {product.oldPrice.toLocaleString('ru-RU')} ₽
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full transition-all"
          variant={isInCart ? "secondary" : "default"}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            <span className="flex items-center">
              <Check size={16} className="mr-2" />
              Добавлено
            </span>
          ) : isInCart ? (
            <span className="flex items-center">
              <Check size={16} className="mr-2" />
              В корзине
            </span>
          ) : (
            <span className="flex items-center">
              <ShoppingBag size={16} className="mr-2" />
              В корзину
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;