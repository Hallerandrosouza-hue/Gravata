import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contato | Hércules Gravataria",
  description: "Entre em contato conosco para dúvidas, suporte ou atendimento personalizado.",
};

export default function Contato() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 min-h-[70vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-hercules-black mb-4">Fale Conosco</h1>
        <div className="w-16 h-1 bg-hercules-gold mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Nossa equipe está à disposição para oferecer um atendimento de excelência. Envie sua mensagem ou entre em contato pelos nossos canais diretos.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Informações de Contato */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-hercules-pearl flex items-center justify-center text-hercules-gold rounded-full flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-serif text-hercules-black mb-1">Telefone / WhatsApp</h3>
              <p className="text-gray-600">+55 89 8142-4736</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-hercules-pearl flex items-center justify-center text-hercules-gold rounded-full flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-serif text-hercules-black mb-1">E-mail</h3>
              <p className="text-gray-600">megapromocoes007@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-hercules-pearl flex items-center justify-center text-hercules-gold rounded-full flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-serif text-hercules-black mb-1">Endereço</h3>
              <p className="text-gray-600">Brasil<br/>(Atendimento online para todo o país)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-hercules-pearl flex items-center justify-center text-hercules-gold rounded-full flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-serif text-hercules-black mb-1">Horário de Atendimento</h3>
              <p className="text-gray-600">Segunda a Sexta: 9h às 18h<br/>Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="w-full lg:w-2/3 bg-hercules-pearl p-8 md:p-10">
          <h2 className="text-2xl font-serif text-hercules-black mb-8">Envie uma Mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-widest text-gray-600 mb-2">Nome</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-hercules-gold transition-colors" />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-gray-600 mb-2">E-mail</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-hercules-gold transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-600 mb-2">Assunto</label>
              <input type="text" className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-hercules-gold transition-colors" />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-600 mb-2">Mensagem</label>
              <textarea rows="4" className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-hercules-gold transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="bg-hercules-black text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-hercules-gold transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
