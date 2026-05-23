"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white">
      {/* Imagem do Produto */}
      <Link href={`/produto/${product.slug}`} className="relative aspect-[3/4] overflow-hidden bg-hercules-light">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-hercules-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
            Novo
          </span>
        )}
        <div className="w-full h-full bg-gradient-to-b from-transparent to-black/10 group-hover:scale-105 transition-transform duration-700">
          {/* Placeholder se a imagem não carregar - Na vida real usar <Image /> */}
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
            [Imagem do Produto]
          </div>
        </div>
        
        {/* Quick Add Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1, product.sizes[0], product.colors[0]);
            alert("Adicionado ao carrinho!");
          }}
          className="absolute bottom-0 left-0 right-0 bg-hercules-black/90 text-white py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-hercules-black"
        >
          <ShoppingBag size={18} /> Compra Rápida
        </button>
      </Link>

      {/* Informações do Produto */}
      <div className="pt-4 pb-2 px-2 flex flex-col flex-grow">
        <Link href={`/produto/${product.slug}`}>
          <h3 className="text-sm font-medium text-hercules-black line-clamp-2 hover:text-hercules-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto pt-2 flex items-center gap-3">
          <span className="text-lg font-serif font-semibold text-hercules-black">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
