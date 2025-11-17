import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50);

  const projects = [
    {
      id: 1,
      title: 'Реконструкция жилого дома',
      location: 'Москва, Остоженка',
      before: 'https://cdn.poehali.dev/projects/736535f8-d780-4389-ab82-a1ede5c87e26/files/e1e5727f-7cfc-45a1-bedc-fc4169e6646d.jpg',
      after: 'https://cdn.poehali.dev/projects/736535f8-d780-4389-ab82-a1ede5c87e26/files/6aa0f2ae-050f-4423-b636-6490458cd6a6.jpg',
    },
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Строительство домов',
      description: 'Возведение коттеджей и загородных домов под ключ',
    },
    {
      icon: 'Hammer',
      title: 'Реконструкция',
      description: 'Полная реконструкция и модернизация зданий',
    },
    {
      icon: 'PaintBucket',
      title: 'Отделочные работы',
      description: 'Внутренняя и внешняя отделка любой сложности',
    },
    {
      icon: 'Ruler',
      title: 'Проектирование',
      description: 'Разработка индивидуальных архитектурных проектов',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">Stark Construction</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Строим будущее с качеством и надежностью
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональное строительство и реконструкция объектов любой сложности. 
                Более 15 лет успешной работы на рынке.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FolderOpen" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/736535f8-d780-4389-ab82-a1ede5c87e26/files/9aabc939-1dd5-4826-966f-dd6691b8524f.jpg"
                alt="Construction site"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground">Превращаем идеи в реальность</p>
          </div>

          {projects.map((project) => (
            <Card key={project.id} className="mb-12 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] overflow-hidden group">
                    <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}>
                      <img
                        src={project.after}
                        alt="После"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold">
                        ПОСЛЕ
                      </div>
                    </div>
                    <img
                      src={project.before}
                      alt="До"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-2 rounded-full font-semibold">
                      ДО
                    </div>
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                      style={{ left: `${beforeAfterPosition}%` }}
                      onMouseDown={(e) => {
                        const onMouseMove = (moveEvent: MouseEvent) => {
                          const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (rect) {
                            const x = moveEvent.clientX - rect.left;
                            const percentage = (x / rect.width) * 100;
                            setBeforeAfterPosition(Math.max(0, Math.min(100, percentage)));
                          }
                        };
                        const onMouseUp = () => {
                          document.removeEventListener('mousemove', onMouseMove);
                          document.removeEventListener('mouseup', onMouseUp);
                        };
                        document.addEventListener('mousemove', onMouseMove);
                        document.addEventListener('mouseup', onMouseUp);
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                        <Icon name="MoveHorizontal" size={24} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="text-3xl font-bold text-secondary mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 flex items-center gap-2">
                      <Icon name="MapPin" size={18} className="text-primary" />
                      {project.location}
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Полная реконструкция</div>
                          <div className="text-sm text-muted-foreground">Фасад, кровля, внутренняя отделка</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Срок: 8 месяцев</div>
                          <div className="text-sm text-muted-foreground">Сдано точно в срок</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Премиальные материалы</div>
                          <div className="text-sm text-muted-foreground">Европейское качество</div>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                      Подробнее о проекте
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Комплексное решение строительных задач</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stark Construction — это команда профессионалов с 15-летним опытом в строительной отрасли. 
                Мы специализируемся на возведении и реконструкции жилых и коммерческих объектов.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша миссия — создавать пространства, которые служат поколениям. 
                Мы используем только проверенные технологии и качественные материалы.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Лицензии и сертификаты</div>
                    <div className="text-sm text-muted-foreground">Все необходимые разрешения</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Квалифицированная команда</div>
                    <div className="text-sm text-muted-foreground">50+ специалистов</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">До 5 лет на все работы</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="bg-primary/5 rounded-2xl p-6 hover:bg-primary/10 transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">250+</div>
                <div className="text-foreground font-semibold">Реализованных проектов</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 hover:bg-primary/10 transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">15</div>
                <div className="text-foreground font-semibold">Лет на рынке</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 hover:bg-primary/10 transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-foreground font-semibold">Специалистов в команде</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 hover:bg-primary/10 transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-foreground font-semibold">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-white/90 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">Телефон</div>
                    <div className="text-xl font-semibold">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">Email</div>
                    <div className="text-xl font-semibold">info@stark-construction.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">Адрес</div>
                    <div className="text-xl font-semibold">Москва, ул. Строителей, 25</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Оставить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Расскажите о вашем проекте"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Building" size={32} className="text-primary" />
            <span className="text-2xl font-bold">Stark Construction</span>
          </div>
          <p className="text-white/80">
            © 2024 Stark Construction. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
