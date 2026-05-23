"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Search as SearchIcon } from "lucide-react";
import products from "@/data/products.json";

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-hercules-black/80 backdrop-blur-sm flex flex-col pt-20 px-4 md:px-8">
      <div className="w-full max-w-4xl mx-auto relative bg-hercules-pearl p-6 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-hercules-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center border-b-2 border-hercules-black py-4 mb-8 mt-4">
          <SearchIcon size={24} className="text-gray-400 mr-4" />
          <input 
            type="text" 
            placeholder="O que você está procurando?" 
            className="w-full bg-transparent text-xl md:text-2xl font-serif text-hercules-black focus:outline-none placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        {searchTerm.length > 1 && (
          <div className="max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Resultados ({results.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map(product => (
                    <Link 
                      key={product.id} 
                      href={`/produto/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-2 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-16 h-20 bg-gray-200 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-hercules-black line-clamp-1">{product.name}</h4>
                        <span className="text-hercules-gold font-serif text-sm">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Nenhum produto encontrado para "{searchTerm}".</p>
            )}
          </div>
        )}

        {searchTerm.length <= 1 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Buscas Populares</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/catalogo?categoria=ternos" onClick={onClose} className="px-4 py-2 bg-white border border-gray-200 text-sm hover:border-hercules-black transition-colors">Terno Azul Marinho</Link>
              <Link href="/catalogo?categoria=gravatas" onClick={onClose} className="px-4 py-2 bg-white border border-gray-200 text-sm hover:border-hercules-black transition-colors">Gravata de Seda</Link>
              <Link href="/catalogo?categoria=camisas" onClick={onClose} className="px-4 py-2 bg-white border border-gray-200 text-sm hover:border-hercules-black transition-colors">Camisa Fio 120</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
