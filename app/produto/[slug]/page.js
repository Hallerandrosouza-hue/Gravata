"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingBag, Heart, Share2, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import products from "@/data/products.json";
import { useCart } from "@/contexts/CartContext";

export default function Produto({ params }) {
  const { slug } = params;
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  
  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("descricao");

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-hercules-black">Início</Link>
        <span>/</span>
        <Link href={`/catalogo?categoria=${product.category}`} className="hover:text-hercules-black capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-hercules-black">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Galeria de Imagens */}
        <div className="w-full lg:w-1/2 flex gap-4">
          <div className="hidden md:flex flex-col gap-4 w-24">
            {product.images.map((img, idx) => (
              <div key={idx} className="aspect-[3/4] bg-gray-100 border-2 border-transparent hover:border-hercules-gold cursor-pointer transition-colors relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">Thumb</div>
              </div>
            ))}
            {/* Simulando mais thumbs caso haja só 1 imagem */}
            {product.images.length === 1 && (
              <div className="aspect-[3/4] bg-gray-100 border-2 border-transparent hover:border-hercules-gold cursor-pointer transition-colors relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">Thumb 2</div>
              </div>
            )}
          </div>
          
          <div className="w-full bg-gray-100 aspect-[3/4] relative flex items-center justify-center">
            <div className="text-gray-400">[Imagem Principal do Produto: {product.name}]</div>
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-hercules-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                Novo
              </span>
            )}
          </div>
        </div>

        {/* Informações de Compra */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="text-3xl md:text-4xl font-serif text-hercules-black mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-hercules-gold">
              {"★".repeat(Math.floor(product.rating))}
              <span className="text-gray-300">{"★".repeat(5 - Math.floor(product.rating))}</span>
              <span className="text-gray-500 text-sm ml-2">({product.reviews} avaliações)</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-green-600 text-sm font-medium">Em Estoque</span>
          </div>

          <div className="flex items-end gap-4 mb-8">
            <span className="text-3xl font-serif font-semibold text-hercules-black">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through mb-1">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          {/* Seleção de Cor */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold uppercase tracking-widest text-sm">Cor: <span className="text-gray-500 font-normal">{selectedColor}</span></span>
            </div>
            <div className="flex gap-3">
              {product.colors.map(color => (
                <button 
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-xs ${selectedColor === color ? 'border-hercules-black' : 'border-gray-200'}`}
                  style={{ backgroundColor: color === 'Preto' ? '#111' : color === 'Azul Marinho' ? '#1B2A4A' : color === 'Branco' ? '#fff' : color === 'Café' ? '#4A3728' : '#ddd' }}
                  title={color}
                >
                  {color === 'Branco' && selectedColor === color && <span className="w-3 h-3 bg-hercules-black rounded-full"></span>}
                </button>
              ))}
            </div>
          </div>

          {/* Seleção de Tamanho */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold uppercase tracking-widest text-sm">Tamanho: <span className="text-gray-500 font-normal">{selectedSize}</span></span>
              <button className="text-hercules-gold text-sm underline underline-offset-4">Guia de Medidas</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-12 h-12 px-3 border flex items-center justify-center text-sm font-medium transition-colors ${selectedSize === size ? 'border-hercules-black bg-hercules-black text-white' : 'border-gray-300 text-hercules-black hover:border-gray-500'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Controle de Quantidade */}
            <div className="flex items-center border border-gray-300 h-14 w-full sm:w-32">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-full flex items-center justify-center text-xl text-gray-500 hover:text-hercules-black"
              >-</button>
              <span className="flex-1 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-full flex items-center justify-center text-xl text-gray-500 hover:text-hercules-black"
              >+</button>
            </div>
            
            {/* Adicionar ao Carrinho */}
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-hercules-black text-white h-14 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-semibold hover:bg-hercules-gold transition-colors"
            >
              <ShoppingBag size={18} /> Adicionar à Sacola
            </button>
            
            <button className="w-14 h-14 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Benefícios */}
          <div className="border-t border-gray-200 pt-6 mt-auto space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck size={20} className="text-hercules-gold" />
              <span>Frete grátis para compras acima de R$ 500</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RotateCcw size={20} className="text-hercules-gold" />
              <span>Primeira troca grátis em até 30 dias</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <ShieldCheck size={20} className="text-hercules-gold" />
              <span>Garantia de qualidade Hércules Gravataria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Abas de Detalhes */}
      <div className="border-t border-gray-200 pt-16 mb-20">
        <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-200">
          <button 
            className={`pb-4 font-serif text-xl ${activeTab === 'descricao' ? 'text-hercules-black border-b-2 border-hercules-gold' : 'text-gray-400 hover:text-hercules-black'}`}
            onClick={() => setActiveTab('descricao')}
          >
            Descrição do Produto
          </button>
          <button 
            className={`pb-4 font-serif text-xl ${activeTab === 'detalhes' ? 'text-hercules-black border-b-2 border-hercules-gold' : 'text-gray-400 hover:text-hercules-black'}`}
            onClick={() => setActiveTab('detalhes')}
          >
            Detalhes e Cuidados
          </button>
        </div>
        
        <div className="max-w-3xl text-gray-600 leading-relaxed">
          {activeTab === 'descricao' && (
            <p>{product.description}</p>
          )}
          {activeTab === 'detalhes' && (
            <ul className="list-disc pl-5 space-y-2">
              <li>Lavar a seco apenas (recomendado para alfaiataria)</li>
              <li>Passar em temperatura baixa com proteção</li>
              <li>Guardar em capa protetora (inclusa)</li>
              <li>Modelagem padrão brasileira</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
