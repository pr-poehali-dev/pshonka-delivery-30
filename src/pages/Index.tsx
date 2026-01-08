import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Чечевичный суп', description: 'Нежнейший крем-суп из отборной чечевицы и свежих овощей', price: 280, category: 'soups', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7eeda59-4b7b-4ff0-98ac-cbb869cae0e7.jpg' },
    { id: 2, name: 'Суп лапша', description: 'Нежный говяжье-куриный бульон с домашней лапшой', price: 250, category: 'soups', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7eeda59-4b7b-4ff0-98ac-cbb869cae0e7.jpg' },
    { id: 3, name: 'Том-ям с морепродуктами', description: 'Острый тайский суп с добавлением морепродуктов с рисом', price: 450, category: 'soups', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/45779fda-572c-4a32-b9d9-b9316262d39d.jpg' },
    { id: 4, name: 'Борщ', description: 'Настоящий славянский суп на говяжье-курином бульоне с добавлением сала', price: 270, category: 'soups', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7eeda59-4b7b-4ff0-98ac-cbb869cae0e7.jpg' },
    
    { id: 5, name: 'Индийский карри с морепродуктами', description: 'Остро-сливочное блюдо с добавлением свежих овощей и морепродуктов', price: 520, category: 'panasia', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/7038ab45-4327-49d7-909e-e7175fef8105.jpg' },
    { id: 6, name: 'Индийский чикен-карри', description: 'Остро-сливочное блюдо с добавлением свежих овощей и цыпленка', price: 480, category: 'panasia', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/7038ab45-4327-49d7-909e-e7175fef8105.jpg' },
    { id: 7, name: 'Пад-Тай с цыпленком', description: 'Острое блюдо с пряным послевкусием с добавлением молодого цыпленка', price: 460, category: 'panasia', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/7038ab45-4327-49d7-909e-e7175fef8105.jpg' },
    { id: 8, name: 'Пад-Тай с морепродуктами', description: 'Острое блюдо с пряным послевкусием с добавлением морепродуктов', price: 520, category: 'panasia', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/7038ab45-4327-49d7-909e-e7175fef8105.jpg' },
    
    { id: 9, name: 'Хинкали с говядиной-свининой', description: 'Сочнейшие хинкали с миксом фарша говядины и свинины в фирменном тесте собственного производства', price: 420, category: 'khinkali', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/5c2e7f51-f610-4715-a403-9a8e623ac14f.jpg' },
    { id: 10, name: 'Хинкали с ягненком', description: 'Сочнейшие хинкали с фаршем ягненка в фирменном тесте собственного производства', price: 480, category: 'khinkali', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/5c2e7f51-f610-4715-a403-9a8e623ac14f.jpg' },
    { id: 11, name: 'Хинкали с говядиной', description: 'Сочнейшие хинкали с фаршем говядины в фирменном тесте собственного производства', price: 450, category: 'khinkali', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/5c2e7f51-f610-4715-a403-9a8e623ac14f.jpg' },
    { id: 12, name: 'Хинкали с цыпленком и сыром', description: 'Сочнейшие хинкали с цыпленком и копченным сыром в фирменном тесте собственного производства', price: 440, category: 'khinkali', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/5c2e7f51-f610-4715-a403-9a8e623ac14f.jpg' },
    { id: 13, name: 'Хинкали с миксом сыров', description: 'Сочнейшие хинкали с миксом сыров в фирменном тесте собственного производства', price: 430, category: 'khinkali', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/5c2e7f51-f610-4715-a403-9a8e623ac14f.jpg' },
    
    { id: 14, name: 'Пицца Пепперони', description: 'Классическая пицца с воздушным тестом, ароматной пепперони и тянущимся сыром', price: 540, category: 'pizza', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/fd4f18ee-a68d-425a-9775-3b8150e4b1f9.jpg' },
    { id: 15, name: 'Пицца Маргарита', description: 'Классическая пицца с воздушным тестом, из рубленных томатов пелати, тянущейся моцареллой под соусом песто', price: 480, category: 'pizza', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/fd4f18ee-a68d-425a-9775-3b8150e4b1f9.jpg' },
    { id: 16, name: 'Пицца 4-сыра', description: 'Разнообразие сыров заставит вас посмотреть на классическую пиццу по новому', price: 520, category: 'pizza', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/fd4f18ee-a68d-425a-9775-3b8150e4b1f9.jpg' },
    { id: 17, name: 'Пицца Куриная карри', description: 'Пряная пицца с курицей и соусом карри', price: 560, category: 'pizza', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/fd4f18ee-a68d-425a-9775-3b8150e4b1f9.jpg' },
    { id: 18, name: 'Пицца с ростбифом', description: 'Пицца с нежным ростбифом и фирменным соусом', price: 620, category: 'pizza', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/fd4f18ee-a68d-425a-9775-3b8150e4b1f9.jpg' },
    { id: 19, name: 'Пицца Морская', description: 'Пицца с морепродуктами и нежным сливочным соусом', price: 640, category: 'pizza', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/fd4f18ee-a68d-425a-9775-3b8150e4b1f9.jpg' },
    
    { id: 20, name: 'Цезарь с курицей', description: 'Классический салат с курицей, пармезаном и сухариками', price: 380, category: 'salads', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/f3a74a3d-b915-49c8-831a-3f25206b24a0.jpg' },
    { id: 21, name: 'Цезарь с креветками', description: 'Салат Цезарь с тигровыми креветками', price: 480, category: 'salads', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/f3a74a3d-b915-49c8-831a-3f25206b24a0.jpg' },
    { id: 22, name: 'Хрустящие баклажаны', description: 'Салат с жареными баклажанами и свежими овощами', price: 320, category: 'salads', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/f3a74a3d-b915-49c8-831a-3f25206b24a0.jpg' },
    { id: 23, name: 'Салат Ростбиф', description: 'Салат с нежным ростбифом и овощами', price: 420, category: 'salads', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/f3a74a3d-b915-49c8-831a-3f25206b24a0.jpg' },
    { id: 24, name: 'Салат Ливанский', description: 'Салат с восточными специями и свежими овощами', price: 350, category: 'salads', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/f3a74a3d-b915-49c8-831a-3f25206b24a0.jpg' },
    
    { id: 25, name: 'Паста Карбонара', description: 'Классическая итальянская паста с беконом и сыром', price: 420, category: 'pasta', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/d24950fa-0f2d-4575-b0e9-386dfb1c9ab1.jpg' },
    { id: 26, name: 'Паста курица-грибы', description: 'Паста с курицей и грибами в сливочном соусе', price: 400, category: 'pasta', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/d24950fa-0f2d-4575-b0e9-386dfb1c9ab1.jpg' },
    { id: 27, name: 'Паста с морепродуктами', description: 'Паста с морепродуктами в томатном соусе', price: 480, category: 'pasta', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/d24950fa-0f2d-4575-b0e9-386dfb1c9ab1.jpg' },
    { id: 28, name: 'Паста классическая карбонара без сливок', description: 'Карбонара по классическому рецепту без сливок', price: 440, category: 'pasta', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/d24950fa-0f2d-4575-b0e9-386dfb1c9ab1.jpg' },
    
    { id: 29, name: 'Хачапури по-Аджарски', description: 'Лодочка с сыром, маслом и яйцом', price: 380, category: 'khachapuri', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7d405e2-399b-4221-8a6d-350858a00fa5.jpg' },
    { id: 30, name: 'Хачапури карбонара', description: 'Хачапури с беконом и сливочным соусом', price: 420, category: 'khachapuri', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7d405e2-399b-4221-8a6d-350858a00fa5.jpg' },
    { id: 31, name: 'Хачапури по-Мегрельски', description: 'Закрытый хачапури с сыром внутри и снаружи', price: 360, category: 'khachapuri', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7d405e2-399b-4221-8a6d-350858a00fa5.jpg' },
    { id: 32, name: 'Хачапури по-Имеретински', description: 'Круглый хачапури с сырной начинкой', price: 340, category: 'khachapuri', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/e7d405e2-399b-4221-8a6d-350858a00fa5.jpg' },
    
    { id: 33, name: 'Картофель Фри', description: 'Классическое фри, подойдет для детей', price: 180, category: 'snacks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/69589a4e-a387-4f22-94bc-a7bdd94e8602.jpg' },
    { id: 34, name: 'Наггетсы', description: 'Обжаренное куриное филе в панировочных сухарях', price: 220, category: 'snacks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/69589a4e-a387-4f22-94bc-a7bdd94e8602.jpg' },
    { id: 35, name: 'Сэндвич с креветками', description: 'Сэндвич с тигровыми креветками и овощами', price: 320, category: 'snacks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/69589a4e-a387-4f22-94bc-a7bdd94e8602.jpg' },
    { id: 36, name: 'Сэндвич с цыпленком', description: 'Сэндвич с куриным филе и свежими овощами', price: 280, category: 'snacks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/69589a4e-a387-4f22-94bc-a7bdd94e8602.jpg' },
    
    { id: 37, name: 'Морс ягодный', description: 'Домашний морс из лесных ягод', price: 120, category: 'drinks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/faa8516e-6d47-4480-b0fe-4269471fed15.jpg' },
    { id: 38, name: 'Морс облепихово-апельсиновый', description: 'Витаминный морс с облепихой и апельсином', price: 140, category: 'drinks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/faa8516e-6d47-4480-b0fe-4269471fed15.jpg' },
    { id: 39, name: 'Детокс', description: 'Детокс-напиток с имбирем и лимоном', price: 150, category: 'drinks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/faa8516e-6d47-4480-b0fe-4269471fed15.jpg' },
    { id: 40, name: 'Компот с сухофруктами', description: 'Домашний компот из натуральных сухофруктов', price: 110, category: 'drinks', image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/faa8516e-6d47-4480-b0fe-4269471fed15.jpg' }
  ];

  const categories = [
    { id: 'all', name: 'Всё меню', icon: 'UtensilsCrossed' },
    { id: 'soups', name: 'Супы', icon: 'Soup' },
    { id: 'panasia', name: 'Пан-Азия', icon: 'Flame' },
    { id: 'khinkali', name: 'Хинкали', icon: 'Beef' },
    { id: 'pizza', name: 'Пицца', icon: 'Pizza' },
    { id: 'salads', name: 'Салаты', icon: 'Salad' },
    { id: 'pasta', name: 'Паста', icon: 'UtensilsCrossed' },
    { id: 'khachapuri', name: 'Хачапури', icon: 'Cookie' },
    { id: 'snacks', name: 'Закуски', icon: 'Sparkles' },
    { id: 'drinks', name: 'Напитки', icon: 'Coffee' }
  ];

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const reviews = [
    { name: 'Алексей М.', text: 'Доставили за 25 минут! Всё горячее и вкусное', rating: 5 },
    { name: 'Мария К.', text: 'Отличное качество блюд, заказываем постоянно', rating: 5 },
    { name: 'Дмитрий С.', text: 'Большие порции, доставка быстрая. Рекомендую!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">
              П
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-foreground">Pshonka s Maslom</h1>
              <p className="text-xs text-muted-foreground">Доставка за 30 минут</p>
            </div>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative shadow-lg">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-0.5 min-w-5 h-5 flex items-center justify-center bg-secondary text-secondary-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-3 pb-3 border-b border-border">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, -1)}>
                              <Icon name="Minus" size={14} />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                              <Icon name="Plus" size={14} />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id)}>
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 space-y-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Итого:</span>
                        <span>{cartTotal} ₽</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0 shadow-md">🔥 Акция: первый заказ -20%</Badge>
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Многонациональная<br />кухня в Уфе
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Доставка за 30 минут или бесплатно! 🚀
          </p>
          <Button size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-xl text-lg px-8 py-6">
            Смотреть меню
          </Button>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">Наше меню</h3>
          
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 shadow-sm"
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          {activeCategory === 'all' ? (
            <div className="space-y-16">
              {categories.filter(c => c.id !== 'all').map(category => {
                const categoryItems = menuItems.filter(item => item.category === category.id);
                return (
                  <div key={category.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={category.icon as any} size={24} className="text-primary" />
                      </div>
                      <h4 className="font-heading text-3xl font-bold text-foreground">{category.name}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryItems.map(item => (
                        <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card border-border">
                          <div className="relative overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-secondary text-secondary-foreground shadow-md">{item.price} ₽</Badge>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="text-foreground">{item.name}</CardTitle>
                            <CardDescription className="text-muted-foreground line-clamp-2">{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button onClick={() => addToCart(item)} className="w-full shadow-md">
                              <Icon name="Plus" size={18} className="mr-2" />
                              Добавить в корзину
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card border-border">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-secondary text-secondary-foreground shadow-md">{item.price} ₽</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{item.name}</CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={() => addToCart(item)} className="w-full shadow-md">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">Отзывы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="bg-muted/50 border-border shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-foreground">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-4xl font-bold mb-4 text-foreground">О нас</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Мы — команда профессионалов, которая создает вкусные блюда из разных кухонь мира. 
            Быстрая доставка, свежие продукты и любовь к своему делу — наша визитная карточка.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2 text-foreground">30 минут</h4>
              <p className="text-muted-foreground">Доставка или бесплатно</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="ChefHat" size={32} className="text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2 text-foreground">Свежее</h4>
              <p className="text-muted-foreground">Готовим из лучших продуктов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2 text-foreground">С любовью</h4>
              <p className="text-muted-foreground">К каждому блюду и клиенту</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card text-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-bold text-xl mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (347) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@pshonka.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Уфа, ул. Ленина, д. 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl mb-4">График работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Воскресенье</p>
                <p className="font-semibold text-foreground">10:00 - 23:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Pshonka s Maslom. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
