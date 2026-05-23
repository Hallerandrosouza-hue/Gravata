import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

// In a real app, you would fetch these based on searchParams
export default function Catalogo({ searchParams }) {
  // We mock the filtering logic here for the MVP
  const categoria = searchParams?.categoria;
  
  const filteredProducts = categoria 
    ? products.filter(p => p.category === categoria)
    : products;

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Header do Catálogo */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-4xl font-serif text-hercules-black mb-2 capitalize">
            {categoria ? categoria : "Coleção Completa"}
          </h1>
          <p className="text-gray-500">Mostrando {filteredProducts.length} produtos</p>
        </div>
        
        {/* Filtros Básicos - Visual para MVP */}
        <div className="mt-6 md:mt-0 flex items-center gap-4 text-sm">
          <label className="text-gray-500">Ordenar por:</label>
          <select className="border-b border-gray-300 py-1 bg-transparent text-hercules-black focus:outline-none focus:border-hercules-gold cursor-pointer">
            <option>Lançamentos</option>
            <option>Menor Preço</option>
            <option>Maior Preço</option>
            <option>Mais Populares</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar de Filtros (Desktop) */}
        <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
          <div className="mb-8">
            <h3 className="font-semibold uppercase tracking-widest text-sm mb-4 border-b border-gray-200 pb-2">Categorias</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="/catalogo" className="hover:text-hercules-gold transition-colors">Todos</a></li>
              <li><a href="/catalogo?categoria=ternos" className="hover:text-hercules-gold transition-colors">Ternos</a></li>
              <li><a href="/catalogo?categoria=blazers" className="hover:text-hercules-gold transition-colors">Blazers</a></li>
              <li><a href="/catalogo?categoria=camisas" className="hover:text-hercules-gold transition-colors">Camisas</a></li>
              <li><a href="/catalogo?categoria=gravatas" className="hover:text-hercules-gold transition-colors">Gravatas</a></li>
              <li><a href="/catalogo?categoria=sapatos" className="hover:text-hercules-gold transition-colors">Sapatos</a></li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold uppercase tracking-widest text-sm mb-4 border-b border-gray-200 pb-2">Preço</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="text" placeholder="R$ 0" className="w-full border border-gray-300 p-2 text-center" />
              <span>-</span>
              <input type="text" placeholder="R$ 2000+" className="w-full border border-gray-300 p-2 text-center" />
            </div>
            <button className="w-full bg-hercules-black text-white mt-4 py-2 uppercase tracking-widest text-xs font-semibold hover:bg-hercules-gold transition-colors">
              Filtrar
            </button>
          </div>
        </aside>

        {/* Grid de Produtos */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl mb-4">Nenhum produto encontrado nesta categoria.</p>
              <a href="/catalogo" className="text-hercules-gold underline underline-offset-4 hover:text-hercules-black transition-colors">
                Ver todos os produtos
              </a>
            </div>
          )}
          
          {/* Paginação */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center mt-16">
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-400 cursor-not-allowed">
                  &lt;
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-hercules-black text-white">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-hercules-black transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-hercules-black transition-colors">
                  &gt;
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
