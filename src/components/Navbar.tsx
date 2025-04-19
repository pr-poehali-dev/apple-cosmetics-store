import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Главная", path: "/" },
  { title: "Продукты", path: "/products" },
  { title: "Инструкция", path: "/guide" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-lg font-medium">BeautyBox</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors hover:text-accent",
                  isActive ? "text-accent font-medium" : "text-foreground"
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm">
          <nav className="container flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-lg transition-colors hover:text-accent",
                    isActive ? "text-accent font-medium" : "text-foreground"
                  )
                }
              >
                {item.title}
              </NavLink>
            ))}
            <Button
              variant="ghost"
              size="lg"
              onClick={toggleTheme}
              className="mt-4"
            >
              {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;