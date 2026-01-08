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
    {
      id: 1,
      name: 'Том Ям',
      description: 'Острый тайский суп с морепродуктами',
      price: 450,
      category: 'asian',
      image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/9447fd39-18fb-4b6b-a700-eda1ebe7bf51.jpg'
    },
    {
      id: 2,
      name: 'Удон с курицей',
      description: 'Японская лапша с овощами и нежной курицей',
      price: 380,
      category: 'asian',
      image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/ae94aa4c-b0a4-4f4a-bc7a-ff8ae5ca20c6.jpg'
    },
    {
      id: 3,
      name: 'Пицца Маргарита',
      description: 'Классическая итальянская пицца с моцареллой',
      price: 520,
      category: 'italian',
      image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/7ebf92ce-f920-4423-827a-0fe7ef546654.jpg'
    },
    {
      id: 4,
      name: 'Паста Карбонара',
      description: 'Сливочная паста с беконом и пармезаном',
      price: 420,
      category: 'italian',
      image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/9447fd39-18fb-4b6b-a700-eda1ebe7bf51.jpg'
    },
    {
      id: 5,
      name: 'Бургер BBQ',
      description: 'Сочная котлета с соусом барбекю и луковыми кольцами',
      price: 380,
      category: 'american',
      image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/ae94aa4c-b0a4-4f4a-bc7a-ff8ae5ca20c6.jpg'
    },
    {
      id: 6,
      name: 'Куриные крылышки',
      description: 'Хрустящие крылышки в остром соусе',
      price: 320,
      category: 'american',
      image: 'https://cdn.poehali.dev/projects/d7e439ad-4778-4327-8004-548df9218e2b/files/7ebf92ce-f920-4423-827a-0fe7ef546654.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'Всё меню', icon: 'UtensilsCrossed' },
    { id: 'asian', name: 'Азиатская', icon: 'Soup' },
    { id: 'italian', name: 'Итальянская', icon: 'Pizza' },
    { id: 'american', name: 'Американская', icon: 'Beef' }
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
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
              П
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-foreground">Pshonka s Maslom</h1>
              <p className="text-xs text-muted-foreground">Доставка за 30 минут</p>
            </div>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-0.5 min-w-5 h-5 flex items-center justify-center bg-secondary">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-3 pb-3 border-b">
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

      <section className="relative bg-gradient-to-r from-primary via-secondary to-primary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">🔥 Акция: первый заказ -20%</Badge>
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Многонациональная<br />кухня в Уфе
          </h2>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            Доставка за 30 минут или бесплатно! 🚀
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8" onClick={() => {
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Смотреть меню
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">30 минут</h3>
              <p className="text-muted-foreground text-sm">Или доставка бесплатно</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name="ShieldCheck" size={32} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">Качество</h3>
              <p className="text-muted-foreground text-sm">Свежие ингредиенты каждый день</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg">По всей Уфе</h3>
              <p className="text-muted-foreground text-sm">Доставляем в любой район</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">Наше меню</h2>
        <p className="text-center text-muted-foreground mb-8">Блюда разных стран мира</p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat.id)}
              className="gap-2"
            >
              <Icon name={cat.icon as any} size={18} />
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                  <Button onClick={() => addToCart(item)}>
                    <Icon name="Plus" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">О нас</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Pshonka s Maslom — это команда профессионалов, влюбленных в кулинарию со всего мира. 
            Мы готовим блюда азиатской, итальянской, американской и других кухонь с заботой о качестве и вкусе.
          </p>
          <p className="text-lg text-muted-foreground">
            Наше главное обещание — доставка за 30 минут по всей Уфе. Если опоздаем — доставка бесплатно!
          </p>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={18} />
                  +7 (347) 123-45-67
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={18} />
                  info@pshonka.ru
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MapPin" size={18} />
                  г. Уфа, ул. Ленина, 1
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Режим работы</h3>
              <p className="text-white/80">Ежедневно с 10:00 до 23:00</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Следите за нами</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Icon name="Twitter" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 Pshonka s Maslom. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
