const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        <img 
          src="https://cdn.poehali.dev/files/Дизайн без названия - Флаер.png" 
          alt="Altyn Kuzlasheva - Скидка 400 рублей"
          className="w-full h-auto block"
        />
        
        <div className="absolute bottom-0 left-0 w-full h-[25%] grid grid-cols-3 gap-0">
          <a 
            href="https://dikidi.ru/1945661"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
            aria-label="Онлайн-запись QR код"
            title="Онлайн-запись"
          />
          <a 
            href="https://vk.com/club234481155"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
            aria-label="ВКонтакте QR код"
            title="ВКонтакте"
          />
          <a 
            href="https://instagram.com/p/DRB7OSLCIsB/?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
            aria-label="Мои работы QR код"
            title="Мои работы"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;