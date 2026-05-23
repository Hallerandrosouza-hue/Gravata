"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, CreditCard, Lock } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Checkout() {
  const { cartItems, cartTotal, isLoaded, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isLoaded) return <div className="container mx-auto px-4 py-20 min-h-[50vh] flex items-center justify-center">Carregando...</div>;

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <Check size={40} />
        </div>
        <h1 className="text-3xl font-serif text-hercules-black mb-4">Pedido Confirmado!</h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Obrigado pela sua compra. Seu pedido #HERC{Math.floor(Math.random() * 10000)} foi recebido e está sendo processado. Enviamos os detalhes para o seu e-mail.
        </p>
        <Link href="/catalogo" className="bg-hercules-black hover:bg-hercules-gold text-white uppercase tracking-wider text-sm font-semibold px-8 py-4 transition-colors">
          Continuar Comprando
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[50vh] flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-6">Não há itens para finalizar compra.</p>
        <Link href="/catalogo" className="bg-hercules-black text-white px-8 py-3 hover:bg-hercules-gold transition-colors uppercase text-sm tracking-wider font-semibold">
          Voltar ao Catálogo
        </Link>
      </div>
    );
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    clearCart();
    setIsSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-serif text-hercules-black mb-10 border-b border-gray-200 pb-6">Finalizar Compra</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-2/3">
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-10">
            {/* Dados Pessoais */}
            <section>
              <h2 className="text-xl font-serif text-hercules-black mb-6">1. Dados Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Nome Completo *</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">CPF *</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">E-mail *</label>
                  <input required type="email" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Telefone/WhatsApp *</label>
                  <input required type="tel" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
              </div>
            </section>

            {/* Endereço */}
            <section>
              <h2 className="text-xl font-serif text-hercules-black mb-6">2. Endereço de Entrega</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-2">CEP *</label>
                  <div className="flex gap-4">
                    <input required type="text" className="w-1/2 border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                    <button type="button" className="bg-gray-100 px-6 py-3 text-sm hover:bg-gray-200 transition-colors">Buscar CEP</button>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-2">Endereço *</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Número *</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Complemento</label>
                  <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Bairro *</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Cidade/UF *</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                </div>
              </div>
            </section>

            {/* Pagamento (Mock) */}
            <section>
              <h2 className="text-xl font-serif text-hercules-black mb-6">3. Pagamento</h2>
              <div className="border border-gray-200 p-6 rounded-md">
                <div className="flex items-center gap-4 mb-6">
                  <input type="radio" id="cartao" name="pagamento" defaultChecked className="w-4 h-4 accent-hercules-black" />
                  <label htmlFor="cartao" className="font-medium flex items-center gap-2"><CreditCard size={20} /> Cartão de Crédito</label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-2">Número do Cartão</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-2">Nome Impresso no Cartão</label>
                    <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Validade (MM/AA)</label>
                    <input type="text" placeholder="MM/AA" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">CVV</label>
                    <input type="text" placeholder="123" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-hercules-black" />
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Resumo do Pedido Lateral */}
        <div className="w-full lg:w-1/3">
          <div className="bg-hercules-pearl p-6 md:p-8 sticky top-24">
            <h2 className="font-serif text-xl md:text-2xl text-hercules-black mb-6">Resumo</h2>
            
            <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-16 h-20 bg-gray-200 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                    <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                    <p className="text-sm font-medium mt-1">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 border-b border-gray-200 pb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-hercules-black">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frete (Grátis)</span>
                <span className="text-green-600 font-medium">R$ 0,00</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-8">
              <span className="font-semibold text-hercules-black uppercase tracking-widest">Total</span>
              <span className="text-2xl font-serif font-semibold text-hercules-black">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <button 
              type="submit"
              form="checkout-form"
              className="w-full bg-hercules-black text-white h-14 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold hover:bg-hercules-gold transition-colors mb-4"
            >
              <Lock size={16} /> Finalizar Pedido
            </button>
            
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 text-center">
              <ShieldCheck size={16} className="text-hercules-gold" />
              Ambiente 100% seguro. Suas informações estão protegidas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
