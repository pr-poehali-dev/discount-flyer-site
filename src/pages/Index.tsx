import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in">
              Специальное предложение
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight animate-fade-in">
            Скидка
          </h1>
          
          <div className="relative inline-block animate-scale-in">
            <div className="text-[120px] md:text-[180px] font-black text-primary leading-none">
              300₽
            </div>
            <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-2 rounded-lg text-sm font-bold rotate-12 shadow-lg">
              -25%
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Воспользуйтесь выгодным предложением прямо сейчас
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={scrollToForm}
            >
              Получить скидку
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('conditions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Условия акции
            </Button>
          </div>
        </div>
      </section>

      <section id="order-form" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Оформить заказ
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и получите скидку 300₽
            </p>
          </div>

          <Card className="shadow-lg animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6 hover-scale">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Условия акции
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-secondary/30 px-6 rounded-lg border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Срок действия
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-4">
                Акция действует до конца текущего месяца. Скидка применяется при оформлении заказа через форму на сайте.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-secondary/30 px-6 rounded-lg border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="ShoppingCart" size={24} className="text-primary" />
                  Минимальная сумма заказа
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-4">
                Скидка 300₽ действует на заказы от 1500₽. Скидка не суммируется с другими акциями.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-secondary/30 px-6 rounded-lg border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={24} className="text-primary" />
                  Для кого акция
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-4">
                Акция доступна для всех новых и существующих клиентов. Один промокод на одного клиента.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-secondary/30 px-6 rounded-lg border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Tag" size={24} className="text-primary" />
                  Как получить скидку
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-4">
                Заполните форму заказа выше. Наш менеджер свяжется с вами и применит скидку автоматически.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-background/80 text-lg">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-2">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg">Телефон</h3>
              <a href="tel:+79991234567" className="text-background/80 hover:text-background transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-2">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a href="mailto:info@example.com" className="text-background/80 hover:text-background transition-colors">
                info@example.com
              </a>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-2">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg">Адрес</h3>
              <p className="text-background/80">
                г. Москва, ул. Примерная, 1
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60">
            <p>© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
