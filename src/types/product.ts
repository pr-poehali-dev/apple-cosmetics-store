export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  category: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Набор базовой косметики",
    description: "Полный набор базовой косметики для ежедневного макияжа и ухода за кожей.",
    price: 1000,
    image: "/placeholder.svg",
    category: "base",
    badge: "Бестселлер",
    features: ["Для всех типов кожи", "Гипоаллергенно", "Без тестов на животных"]
  },
  {
    id: "2",
    name: "Премиум набор косметики",
    description: "Премиальный набор косметики с натуральными ингредиентами для идеального макияжа.",
    price: 2500,
    oldPrice: 3000,
    image: "/placeholder.svg",
    category: "premium",
    features: ["Органические компоненты", "Для чувствительной кожи", "Длительный эффект"]
  },
  {
    id: "3",
    name: "Люкс набор косметики",
    description: "Эксклюзивный набор люксовой косметики с редкими компонентами и инновационными формулами.",
    price: 5000,
    image: "/placeholder.svg",
    category: "luxury",
    badge: "Новинка",
    features: ["Антивозрастной эффект", "Профессиональное качество", "Эксклюзивные компоненты"]
  }
];

export const categories = [
  { id: "all", name: "Все" },
  { id: "base", name: "Базовые" },
  { id: "premium", name: "Премиум" },
  { id: "luxury", name: "Люкс" }
];