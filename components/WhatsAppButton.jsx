import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "558981424736";
  const message = "Olá! Gostaria de um atendimento personalizado da Hércules Gravataria.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Atendimento via WhatsApp"
    >
      <Phone size={28} className="animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-hercules-black text-sm px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-medium">
        Fale com um consultor
      </span>
    </a>
  );
}
