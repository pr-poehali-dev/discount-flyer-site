const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        <img 
          src="https://cdn.poehali.dev/files/Дизайн без названия - Флаер.png" 
          alt="Altyn Kuzlasheva - Скидка 400 рублей"
          className="w-full h-auto"
        />
        
        <div className="absolute bottom-[3%] right-[5%] w-[20%] h-[8%] bg-[#9b9b9b]" />
        
        <div className="absolute bottom-0 left-0 grid grid-cols-3 w-full">
          <a 
            href="https://dikidi.ru/1945661"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[23%] block hover:opacity-80 transition-opacity"
            aria-label="Онлайн-запись QR код"
            title="Онлайн-запись"
          />
          <a 
            href="https://vk.com/club234481155"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[23%] block hover:opacity-80 transition-opacity"
            aria-label="ВКонтакте QR код"
            title="ВКонтакте"
          />
          <a 
            href="https://instagram.com/p/DRB7OSLCIsB/?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[23%] block hover:opacity-80 transition-opacity"
            aria-label="Мои работы QR код"
            title="Мои работы"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;