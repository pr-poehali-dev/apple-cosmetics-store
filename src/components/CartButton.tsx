import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartButtonProps {
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

const CartButton = ({ variant = "default", className }: CartButtonProps) => {
  const { totalItems, setIsCartOpen } = useCart();
  
  return (
    <Button 
      variant={variant} 
      size="icon"
      onClick={() => setIsCartOpen(true)}
      className={cn("relative", className)}
    >
      <ShoppingBag size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center rounded-full bg-accent text-accent-foreground text-xs">
          {totalItems}
        </span>
      )}
    </Button>
  );
};

export default CartButton;