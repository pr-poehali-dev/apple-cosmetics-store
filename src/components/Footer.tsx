import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-muted/30 py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">BeautyBox</h3>
          <p className="text-sm text-muted-foreground">
            Премиальная косметика для ценителей красоты
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Навигация</h3>
          <nav className="flex flex-col space-y-2">
            <NavLink to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Главная
            </NavLink>
            <NavLink to="/products" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Продукты
            </NavLink>
            <NavLink to="/guide" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Инструкция
            </NavLink>
          </nav>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Контакты</h3>
          <p className="text-sm text-muted-foreground">
            Телефон: +7 (800) 123-45-67
          </p>
          <p className="text-sm text-muted-foreground">
            Email: info@beautybox.ru
          </p>
          <p className="text-sm text-muted-foreground">
            Адрес: г. Москва, ул. Косметическая, д. 8
          </p>
        </div>
        
        <div className="md:col-span-3 text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} BeautyBox. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;