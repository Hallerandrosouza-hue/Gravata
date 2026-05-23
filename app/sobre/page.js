export const metadata = {
  title: "Sobre Nós | Hércules Gravataria",
  description: "Conheça a história e os valores da Hércules Gravataria, especialista em moda social masculina premium.",
};

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Hero Sobre */}
      <div className="relative h-[400px] mb-16 flex items-center justify-center bg-hercules-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">A Marca</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Tradição, elegância e corte impecável para o homem contemporâneo.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif text-hercules-black mb-6">Nossa História</h2>
            <div className="w-12 h-1 bg-hercules-gold mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A Hércules Gravataria nasceu da paixão pela alfaiataria clássica e do desejo de oferecer ao homem brasileiro uma experiência de vestuário verdadeiramente premium. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Selecionamos os melhores tecidos, desde as puras lãs frias Super 120s até os mais refinados algodões egípcios, garantindo que cada peça não apenas vista bem, mas conte uma história de sucesso.
            </p>
          </div>
          <div className="bg-gray-100 aspect-square">
            {/* Imagem representativa da marca */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div className="p-8 bg-hercules-pearl">
            <h3 className="text-xl font-serif text-hercules-black mb-4">Missão</h3>
            <p className="text-gray-600 text-sm">Elevar a autoestima masculina através de roupas sociais de altíssima qualidade e design sofisticado.</p>
          </div>
          <div className="p-8 bg-hercules-pearl">
            <h3 className="text-xl font-serif text-hercules-black mb-4">Visão</h3>
            <p className="text-gray-600 text-sm">Ser a principal referência em moda social masculina premium e atendimento de excelência no Brasil.</p>
          </div>
          <div className="p-8 bg-hercules-pearl">
            <h3 className="text-xl font-serif text-hercules-black mb-4">Valores</h3>
            <p className="text-gray-600 text-sm">Elegância atemporal, qualidade intransigente, respeito ao cliente e paixão por detalhes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
