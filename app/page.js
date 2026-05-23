import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-center bg-hercules-black overflow-hidden">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594938298596-70f594f62bce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="block text-hercules-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 animate-fade-in-up">
            Nova Coleção
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A Excelência em<br />Moda Masculina
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Descubra nossa seleção exclusiva de ternos, camisas e acessórios premium para o homem moderno.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              href="/catalogo" 
              className="inline-flex items-center justify-center bg-hercules-gold hover:bg-white text-hercules-black font-semibold uppercase tracking-wider px-8 py-4 transition-colors duration-300"
            >
              Explorar Coleção
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias em Destaque */}
      <section className="py-20 bg-hercules-pearl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-hercules-black mb-4">Nossas Linhas</h2>
            <div className="w-16 h-1 bg-hercules-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Categoria 1 */}
            <Link href="/catalogo?categoria=ternos" className="group relative h-[400px] overflow-hidden bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-end p-8 z-20">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Ternos Premium</h3>
                  <span className="flex items-center text-hercules-gold text-sm uppercase tracking-wider font-semibold group-hover:text-white transition-colors">
                    Ver produtos <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Categoria 2 */}
            <Link href="/catalogo?categoria=camisas" className="group relative h-[400px] overflow-hidden bg-gray-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-end p-8 z-20">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Camisas Fio 120</h3>
                  <span className="flex items-center text-hercules-gold text-sm uppercase tracking-wider font-semibold group-hover:text-white transition-colors">
                    Ver produtos <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Categoria 3 */}
            <Link href="/catalogo?categoria=gravatas" className="group relative h-[400px] overflow-hidden bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-end p-8 z-20">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Gravatas de Seda</h3>
                  <span className="flex items-center text-hercules-gold text-sm uppercase tracking-wider font-semibold group-hover:text-white transition-colors">
                    Ver produtos <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-hercules-black mb-4">Destaques da Semana</h2>
              <div className="w-16 h-1 bg-hercules-gold"></div>
            </div>
            <Link href="/catalogo" className="hidden md:flex items-center text-hercules-black hover:text-hercules-gold transition-colors font-medium tracking-wider uppercase text-sm mt-6">
              Ver todos os produtos <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/catalogo" className="inline-flex items-center text-hercules-black font-medium tracking-wider uppercase text-sm">
              Ver todos os produtos <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Promocional */}
      <section className="py-20 bg-hercules-navy text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Atendimento Exclusivo</h2>
          <p className="text-gray-300 text-lg mb-8">
            Agende uma consultoria de estilo pelo WhatsApp. Nossa equipe de especialistas está pronta para ajudá-lo a encontrar o traje perfeito para qualquer ocasião.
          </p>
          <a 
            href="https://wa.me/558981424736?text=Olá!%20Gostaria%20de%20uma%20consultoria%20de%20estilo." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-hercules-gold text-hercules-gold hover:bg-hercules-gold hover:text-hercules-navy font-semibold uppercase tracking-wider px-8 py-4 transition-colors duration-300"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
}
