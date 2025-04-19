import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart, items } = useCart();

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const isProductInCart = (productId: string) => {
    return items.some(item => item.product.id === productId);
  };

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-light mb-4">Наши продукты</h1>
        <p className="text-muted-foreground max-w-3xl">
          Выберите идеальный набор косметики, соответствующий вашим потребностям и бюджету.
          От базовых наборов до премиальной косметики с эксклюзивными компонентами.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Product Details Section */}
      <div className="mt-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">Базовый набор - 1000 ₽</h2>
            <p className="text-muted-foreground mb-4">
              Идеальный старт для тех, кто только начинает свой путь в мире косметики. 
              В набор входят все необходимые средства для базового ухода и макияжа.
            </p>
            <ul className="space-y-2 mb-6">
              {products[0].features?.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              size="lg" 
              onClick={() => addToCart(products[0])}
              variant={isProductInCart(products[0].id) ? "secondary" : "default"}
            >
              {isProductInCart(products[0].id) ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-2" />
                  В корзине
                </span>
              ) : (
                <span className="flex items-center">
                  <ShoppingBag size={16} className="mr-2" />
                  Добавить в корзину
                </span>
              )}
            </Button>
          </div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={products[0].image} 
              alt={products[0].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={products[1].image} 
              alt={products[1].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Премиум набор - 2500 ₽</h2>
            <p className="text-muted-foreground mb-4">
              Улучшенный набор для тех, кто ценит качество и эффективность. 
              Содержит продукты премиального качества для комплексного ухода.
            </p>
            <ul className="space-y-2 mb-6">
              {products[1].features?.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              onClick={() => addToCart(products[1])}
              variant={isProductInCart(products[1].id) ? "secondary" : "default"}
            >
              {isProductInCart(products[1].id) ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-2" />
                  В корзине
                </span>
              ) : (
                <span className="flex items-center">
                  <ShoppingBag size={16} className="mr-2" />
                  Добавить в корзину
                </span>
              )}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">Люкс набор - 5000 ₽</h2>
            <p className="text-muted-foreground mb-4">
              Эксклюзивный набор для истинных ценителей роскоши. 
              Включает полную коллекцию продуктов с редкими ингредиентами и инновационными формулами.
            </p>
            <ul className="space-y-2 mb-6">
              {products[2].features?.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              onClick={() => addToCart(products[2])}
              variant={isProductInCart(products[2].id) ? "secondary" : "default"}
            >
              {isProductInCart(products[2].id) ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-2" />
                  В корзине
                </span>
              ) : (
                <span className="flex items-center">
                  <ShoppingBag size={16} className="mr-2" />
                  Добавить в корзину
                </span>
              )}
            </Button>
          </div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={products[2].image} 
              alt={products[2].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;