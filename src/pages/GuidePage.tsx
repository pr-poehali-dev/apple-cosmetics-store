import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const GuidePage = () => {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light mb-4">Руководство по использованию</h1>
        <p className="text-muted-foreground mb-8">
          Подробные инструкции по правильному использованию наших косметических наборов для достижения максимального эффекта.
        </p>

        {/* Main Guide Content */}
        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
          <h2>Как выбрать подходящий набор</h2>
          <p>
            Выбор набора косметики зависит от ваших потребностей, типа кожи и бюджета. Ниже мы предлагаем рекомендации для каждого из наших наборов:
          </p>
          
          <div className="grid gap-6 my-6">
            <div className="bg-muted/50 rounded-lg p-4 border">
              <h3 className="text-xl font-medium mb-2">Базовый набор (1000 ₽)</h3>
              <p>Идеально подходит для:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Новичков в мире ухода за кожей</li>
                <li>Повседневного использования</li>
                <li>Базового ухода за любым типом кожи</li>
              </ul>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 border">
              <h3 className="text-xl font-medium mb-2">Премиум набор (2500 ₽)</h3>
              <p>Рекомендуется для:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Тех, кто уже знаком с базовым уходом</li>
                <li>Решения конкретных проблем кожи</li>
                <li>Более интенсивного и глубокого ухода</li>
              </ul>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 border">
              <h3 className="text-xl font-medium mb-2">Люкс набор (5000 ₽)</h3>
              <p>Создан для:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Ценителей премиальной косметики</li>
                <li>Профессионального ухода за кожей</li>
                <li>Антивозрастного и омолаживающего эффекта</li>
              </ul>
            </div>
          </div>

          <h2>Порядок применения</h2>
          <p>
            Для достижения максимального эффекта от использования наших косметических наборов, рекомендуем следовать указанному порядку применения продуктов:
          </p>
          
          <ol className="list-decimal pl-5 mt-4 space-y-4">
            <li>
              <strong>Очищение</strong>
              <p>Начните с тщательного очищения кожи с помощью нашего очищающего средства. Нанесите на влажную кожу, аккуратно помассируйте и смойте теплой водой.</p>
            </li>
            <li>
              <strong>Тонизирование</strong>
              <p>Нанесите тоник на очищенную кожу с помощью ватного диска или распылителя. Это подготовит кожу к дальнейшему уходу.</p>
            </li>
            <li>
              <strong>Сыворотка</strong>
              <p>Нанесите несколько капель сыворотки на лицо и шею, аккуратно вбивая подушечками пальцев до полного впитывания.</p>
            </li>
            <li>
              <strong>Увлажнение</strong>
              <p>Завершите уход, нанеся увлажняющий крем. Распределите по лицу и шее легкими массирующими движениями.</p>
            </li>
          </ol>

          <h2>Советы по использованию</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Всегда наносите средства на чистую кожу</li>
            <li>Двигайтесь от самых легких текстур к более плотным</li>
            <li>Дайте каждому продукту полностью впитаться перед нанесением следующего</li>
            <li>Используйте солнцезащитный крем в дневное время</li>
            <li>Регулярность применения — ключ к заметным результатам</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-light mb-6">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как часто использовать наборы?</AccordionTrigger>
              <AccordionContent>
                Рекомендуется использовать базовый уход дважды в день - утром и вечером. Специальные средства, такие как маски или пилинги, применяйте 1-2 раза в неделю или согласно инструкции на упаковке.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Подходят ли наборы для чувствительной кожи?</AccordionTrigger>
              <AccordionContent>
                Да, в нашем ассортименте есть наборы, специально разработанные для чувствительной кожи. Мы рекомендуем начать с базового набора, который подходит для всех типов кожи, включая чувствительную.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Можно ли смешивать продукты из разных наборов?</AccordionTrigger>
              <AccordionContent>
                Да, наши продукты разработаны так, чтобы быть совместимыми между собой. Вы можете создавать свой индивидуальный уход, комбинируя продукты из разных наборов в зависимости от потребностей вашей кожи.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Как долго хранятся открытые продукты?</AccordionTrigger>
              <AccordionContent>
                Срок годности открытых продуктов обычно составляет 6-12 месяцев в зависимости от типа средства. Рекомендуем проверять символ PAO (период после открытия) на упаковке.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Есть ли в составе продуктов потенциальные аллергены?</AccordionTrigger>
              <AccordionContent>
                Мы стремимся минимизировать содержание потенциальных аллергенов в наших продуктах. Полный состав каждого средства указан на упаковке. Если у вас есть аллергия на определенные компоненты, рекомендуем проконсультироваться с дерматологом перед использованием.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;