import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, Minus, X, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CartWidget = () => {
  const { 
    items, 
    totalItems, 
    totalPrice, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen
  } = useCart();
  
  const [isVisible, setIsVisible] = useState(false);

  // Анимация появления и исчезновения
  useEffect(() => {
    if (isCartOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Задержка для анимации
      return () => clearTimeout(timeout);
    }
  }, [isCartOpen]);

  if (!isVisible && totalItems === 0) {
    return null;
  }

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 transform",
      isCartOpen ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="container px-4 md:px-6 pb-4">
        <div className="bg-background rounded-t-lg shadow-lg border overflow-hidden">
          {/* Заголовок */}
          <div className="flex items-center justify-between p-4 bg-muted/50">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} />
              <h3 className="text-lg font-medium">Корзина</h3>
              <span className="text-sm text-muted-foreground">{totalItems} товаров</span>
            </div>
            <div className="flex items-center space-x-2">
              {totalItems > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearCart} 
                  className="text-muted-foreground"
                >
                  Очистить
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCartOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>
          </div>
          
          {/* Содержимое корзины */}
          <div className="max-h-[300px] overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-6 text-muted-foreground">
                Ваша корзина пуста
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded bg-muted flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{item.product.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.product.price.toLocaleString('ru-RU')} ₽ × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => decreaseQuantity(item.product.id)}
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => increaseQuantity(item.product.id)}
                      >
                        <Plus size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Итоговая сумма и кнопка оформления */}
          {items.length > 0 && (
            <>
              <Separator />
              <div className="p-4 bg-muted/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Итого:</span>
                  <span className="font-medium text-lg">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button className="w-full">Оформить заказ</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartWidget;