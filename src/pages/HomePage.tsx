import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/types/product";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmetic-light/80 to-cosmetic-accent/20 dark:from-background/90 dark:to-cosmetic-accent/30 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter">
                Откройте для себя новый уровень ухода за собой
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Премиальная косметика, созданная с заботой о вас и вашей красоте.
                Минималистичный подход, максимальный результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/products">
                    Смотреть продукты
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/guide">
                    Узнать больше
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg bg-muted animate-float">
                <img
                  src="/placeholder.svg"
                  alt="Косметика BeautyBox"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light">Наша коллекция</h2>
              <p className="text-muted-foreground">Три уровня качества для разных потребностей</p>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link to="/products" className="flex items-center gap-2">
                Все продукты 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="group relative overflow-hidden rounded-lg bg-background border hover:shadow-md transition-all">
                <Link to="/products" className="block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                    <p className="mt-2 font-medium">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground">
              Мы совмещаем минималистичный подход с максимальной эффективностью
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 mb-4">
                ✨
              </div>
              <h3 className="text-xl font-medium mb-2">Натуральные ингредиенты</h3>
              <p className="text-muted-foreground">
                Мы используем только проверенные, натуральные компоненты высочайшего качества
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 mb-4">
                🌿
              </div>
              <h3 className="text-xl font-medium mb-2">Экологичность</h3>
              <p className="text-muted-foreground">
                Наша косметика не тестируется на животных и производится с заботой о природе
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 mb-4">
                💯
              </div>
              <h3 className="text-xl font-medium mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Мы уверены в своей продукции и гарантируем вам наилучший результат
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Готовы начать?</h2>
            <p className="text-muted-foreground mb-8">
              Выберите свой идеальный набор косметики и откройте новую главу в уходе за собой
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/products">
                Начать сейчас
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;