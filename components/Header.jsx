"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hercules-black/95 backdrop-blur-md text-hercules-pearl shadow-lg py-4"
          : "bg-transparent text-hercules-black py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-center md:text-left">
            HÉRCULES <span className="text-hercules-gold">GRAVATARIA</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/catalogo" className="hover:text-hercules-gold transition-colors">Ternos</Link>
          <Link href="/catalogo" className="hover:text-hercules-gold transition-colors">Camisas</Link>
          <Link href="/catalogo" className="hover:text-hercules-gold transition-colors">Gravatas</Link>
          <Link href="/catalogo" className="hover:text-hercules-gold transition-colors">Sapatos</Link>
          <Link href="/catalogo" className="hover:text-hercules-gold transition-colors">Acessórios</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button 
            className="hover:text-hercules-gold transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={22} />
          </button>
          <Link href="/conta" className="hover:text-hercules-gold transition-colors hidden md:block">
            <User size={22} />
          </Link>
          <Link href="/carrinho" className="hover:text-hercules-gold transition-colors relative">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-hercules-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-hercules-black text-hercules-pearl border-t border-gray-800">
          <nav className="flex flex-col p-4 space-y-4 text-sm uppercase tracking-widest">
            <Link href="/catalogo" className="hover:text-hercules-gold transition-colors border-b border-gray-800 pb-2">Ternos</Link>
            <Link href="/catalogo" className="hover:text-hercules-gold transition-colors border-b border-gray-800 pb-2">Camisas</Link>
            <Link href="/catalogo" className="hover:text-hercules-gold transition-colors border-b border-gray-800 pb-2">Gravatas</Link>
            <Link href="/catalogo" className="hover:text-hercules-gold transition-colors border-b border-gray-800 pb-2">Sapatos</Link>
            <Link href="/catalogo" className="hover:text-hercules-gold transition-colors border-b border-gray-800 pb-2">Acessórios</Link>
            <Link href="/conta" className="hover:text-hercules-gold transition-colors flex items-center gap-2 pb-2">
              <User size={18} /> Minha Conta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
