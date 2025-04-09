
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const phoneNumber = "6530291415";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=Olá! Gostaria de solicitar um orçamento.`;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);
    
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Locação", href: "#locacao" },
    { name: "Produtos de Limpeza", href: "#produtos" },
    { name: "Nossos Serviços", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 lg:px-16 py-4",
      scrolled ? "scrolled" : "bg-transparent"
    )}>
      <div 
        className="progress-bar" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img 
            src="/lovable-uploads/df104ca7-9fb1-4bae-b6ca-3ec4d9f638b9.png" 
            alt="De França" 
            className="h-14 md:h-16"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link text-sm font-medium transition-colors duration-300 hover:text-company-purple",
                scrolled ? "text-company-blue" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-company-purple hover:bg-company-purple/90 text-white px-6 py-3 rounded-md transition-colors duration-300"
        >
          <Phone size={18} className="mr-2 text-company-yellow" />
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
};

export default Header;
