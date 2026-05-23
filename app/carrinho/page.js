"use client";

import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Carrinho() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isLoaded } = useCart();

  if (!isLoaded) return <div className="container mx-auto px-4 py-20 min-h-[50vh] flex items-center justify-center">Carregando...</div>;

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-serif text-hercules-black mb-10 border-b border-gray-200 pb-6">Sua Sacola</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-6 text-lg">Sua sacola está vazia.</p>
          <Link href="/catalogo" className="inline-flex items-center justify-center bg-hercules-black hover:bg-hercules-gold text-white uppercase tracking-wider text-sm font-semibold px-8 py-4 transition-colors">
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Itens do Carrinho */}
          <div className="w-full lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-4 mb-6">
              <div className="col-span-6">Produto</div>
              <div className="col-span-2 text-center">Preço</div>
              <div className="col-span-2 text-center">Quantidade</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="space-y-6">
              {cartItems.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6">
                  {/* Produto info */}
                  <div className="col-span-1 md:col-span-6 flex gap-4">
                    <div className="w-20 md:w-24 aspect-[3/4] bg-gray-100 flex-shrink-0"></div>
                    <div className="flex flex-col justify-center">
                      <Link href={`/produto/${item.slug}`} className="font-medium text-hercules-black hover:text-hercules-gold transition-colors line-clamp-2 mb-1">
                        {item.name}
                      </Link>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>Cor: {item.color}</p>
                        <p>Tamanho: {item.size}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="text-xs text-red-500 flex items-center gap-1 mt-3 hover:underline w-fit"
                      >
                        <Trash2 size={14} /> Remover
                      </button>
                    </div>
                  </div>

                  {/* Preço Mobile/Desktop */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-gray-500 text-sm">Preço:</span>
                    <span className="font-medium text-hercules-black">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                  </div>

                  {/* Quantidade */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-gray-500 text-sm">Qtd:</span>
                    <div className="flex items-center border border-gray-300 h-10 w-24">
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-hercules-black"
                      >-</button>
                      <span className="flex-1 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-hercules-black"
                      >+</button>
                    </div>
                  </div>

                  {/* Total item */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center">
                    <span className="md:hidden text-gray-500 text-sm">Total:</span>
                    <span className="font-medium text-hercules-black">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="w-full lg:w-1/3">
            <div className="bg-hercules-pearl p-6 md:p-8">
              <h2 className="font-serif text-xl md:text-2xl text-hercules-black mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-hercules-black">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-gray-500">Calculado no checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="font-semibold text-hercules-black uppercase tracking-widest">Total</span>
                <span className="text-2xl font-serif font-semibold text-hercules-black">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              
              <Link 
                href="/checkout"
                className="w-full bg-hercules-black text-white h-14 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold hover:bg-hercules-gold transition-colors mb-4"
              >
                Finalizar Compra <ArrowRight size={18} />
              </Link>
              
              <Link href="/catalogo" className="w-full block text-center text-sm text-gray-500 underline underline-offset-4 hover:text-hercules-black transition-colors">
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
