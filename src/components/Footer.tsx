
import { ArrowUp, Mail, Phone, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const contactInfo = {
    phone: "[Número de Telefone]",
    email: "[Email da Empresa]",
    instagram: "[Instagram da Empresa]",
  };

  const whatsappLink = `https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`;
  const emailLink = `mailto:${contactInfo.email}`;
  const instagramLink = `https://instagram.com/${contactInfo.instagram.replace('@', '')}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Locação", href: "#locacao" },
    { name: "Produtos", href: "#produtos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-company-blue text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">[Nome da Empresa]</h3>
            <p className="mb-6 text-white/80">
              Soluções integradas em locação de equipamentos para construção civil e venda de produtos de limpeza especializada.
            </p>
            <div className="flex space-x-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
              <a 
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="E-mail"
              >
                <Mail size={20} />
              </a>
              <a 
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-company-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-company-yellow" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-company-yellow" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="mr-2 text-company-yellow" />
                <span>{contactInfo.instagram}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">
            &copy; 2025 [Nome da Empresa]. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-company-yellow text-company-blue p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
