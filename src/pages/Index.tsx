import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const whatsappNumber = "79892606158";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const constructionSteps = [
    {
      title: "Фундамент",
      description: "Качественный фундамент - основа долговечного дома",
      image: "/img/dc902c79-174d-4654-ac21-6f5429e724db.jpg",
      features: ["Глубина до 2м", "Армирование", "Гидроизоляция"]
    },
    {
      title: "Кладка стен",
      description: "Профессиональная кладка кирпича с соблюдением технологии",
      image: "/img/f8914d58-61a5-4305-9401-dd167e7d37f3.jpg",
      features: ["Качественный кирпич", "Опытные мастера", "Точная геометрия"]
    },
    {
      title: "Готовый дом",
      description: "Дом под ключ с полной отделкой и благоустройством",
      image: "/img/cd7885d0-e69a-46dd-8bef-c2dcfc9e606d.jpg",
      features: ["Внутренняя отделка", "Коммуникации", "Ландшафт"]
    }
  ];

  const services = [
    { icon: "Home", title: "Частные дома", description: "Строительство домов любой сложности" },
    { icon: "Building", title: "Коттеджи", description: "Элитные коттеджи премиум класса" },
    { icon: "Hammer", title: "Под ключ", description: "Полный цикл строительства" },
    { icon: "Shield", title: "Гарантия", description: "5 лет гарантии на все работы" }
  ];

  const reviews = [
    { name: "Александр М.", text: "Отличная работа! Дом построили быстро и качественно.", rating: 5 },
    { name: "Елена К.", text: "Самая приятная цена в городе. Рекомендую!", rating: 5 },
    { name: "Михаил В.", text: "Профессиональная команда. Все сроки соблюдены.", rating: 5 }
  ];

  const projectGallery = [
    {
      category: "Фундаменты",
      images: [
        { src: "/img/dc902c79-174d-4654-ac21-6f5429e724db.jpg", title: "Котлован под фундамент" },
        { src: "/img/c4ca2897-e839-44f9-b6be-814e37fd73b9.jpg", title: "Армирование фундамента" },
        { src: "/img/e594ee06-3ba7-4be6-84c7-bc02cad797fb.jpg", title: "Блочный фундамент" }
      ]
    },
    {
      category: "Строительство",
      images: [
        { src: "/img/f8914d58-61a5-4305-9401-dd167e7d37f3.jpg", title: "Кирпичная кладка" },
        { src: "/img/3a7845ed-ba29-4e02-a536-24be93c510c6.jpg", title: "Блочное строительство" },
        { src: "/img/aba35ac6-d46b-4f95-a9b6-928c7876a471.jpg", title: "Коттедж в процессе" }
      ]
    },
    {
      category: "Готовые дома",
      images: [
        { src: "/img/cd7885d0-e69a-46dd-8bef-c2dcfc9e606d.jpg", title: "Кирпичный дом" },
        { src: "/img/10ee182d-70cc-4f00-bf07-be0c0648323d.jpg", title: "Элитный коттедж" },
        { src: "/img/6c2713eb-d497-4958-9769-dd0c7ddf3432.jpg", title: "Двухэтажный коттедж" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with WhatsApp */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Brick" className="text-primary" size={28} />
            <h1 className="text-xl font-bold text-gray-900">СтройДом Краснодар</h1>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-brick-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Строительство домов из кирпича
          </h1>
          <p className="text-xl mb-8 opacity-90">
            В Краснодаре и Краснодарском крае под ключ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Самая приятная цена в городе
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 text-white border-white">
              Гарантия 5 лет
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 text-white border-white">
              Быстро и качественно
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </a>
            <a href={`tel:+${whatsappNumber}`}>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (989) 260-61-58
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Процесс строительства</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {constructionSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Наши проекты</h2>
          {projectGallery.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">{category.category}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => (
                  <Card key={imageIndex} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 text-center">{image.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Наши гарантии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">5 лет гарантии</h3>
              <p className="text-gray-600">На все виды работ</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Точные сроки</h3>
              <p className="text-gray-600">Соблюдаем договор</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Качество</h3>
              <p className="text-gray-600">Только лучшие материалы</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Handshake" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Честность</h3>
              <p className="text-gray-600">Прозрачное ценообразование</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию и расчет стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center">
              <Icon name="Phone" size={24} className="mr-2" />
              <span className="text-lg">+7 (989) 260-61-58</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="MapPin" size={24} className="mr-2" />
              <span className="text-lg">Краснодар и край</span>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Brick" size={24} />
            <span className="text-lg font-bold">СтройДом Краснодар</span>
          </div>
          <p className="text-gray-400 mb-4">
            Строительство домов из кирпича под ключ в Краснодаре и Краснодарском крае
          </p>
          <div className="flex justify-center space-x-6">
            <a href={`tel:+${whatsappNumber}`} className="text-gray-400 hover:text-white">
              <Icon name="Phone" size={20} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;