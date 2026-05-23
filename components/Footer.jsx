import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-hercules-black text-hercules-pearl pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Sobre */}
          <div>
            <h2 className="text-2xl font-bold tracking-wider mb-6">
              HÉRCULES <span className="text-hercules-gold">GRAVATARIA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevando o padrão da moda social masculina. Especialistas em ternos, camisas e acessórios premium para homens que valorizam a elegância em cada detalhe.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/herculesgravataria" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-hercules-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-hercules-gold">Links Úteis</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/catalogo" className="hover:text-white transition-colors">Novidades</Link></li>
              <li><Link href="/catalogo" className="hover:text-white transition-colors">Mais Vendidos</Link></li>
              <li><Link href="/conta" className="hover:text-white transition-colors">Minha Conta</Link></li>
              <li><Link href="/carrinho" className="hover:text-white transition-colors">Acompanhar Pedido</Link></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-hercules-gold">Atendimento</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/politica-trocas" className="hover:text-white transition-colors">Trocas e Devoluções</Link></li>
              <li><Link href="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/suporte" className="hover:text-white transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contato Direto */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-hercules-gold">Contato</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-hercules-gold flex-shrink-0 mt-0.5" />
                <span>+55 89 8142-4736<br />Seg - Sex, 9h às 18h</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-hercules-gold flex-shrink-0 mt-0.5" />
                <span>megapromocoes007@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-hercules-gold flex-shrink-0 mt-0.5" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Hércules Gravataria. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {/* Payment Icons Placeholder */}
            <div className="h-6 w-10 bg-white/10 rounded"></div>
            <div className="h-6 w-10 bg-white/10 rounded"></div>
            <div className="h-6 w-10 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
