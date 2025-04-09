
import { useState } from "react";
import { useInView } from "@/hooks/use-intersection-observer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CleaningProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const products = [
    {
      title: "Produtos Seven Clean",
      description: "Soluções especializadas para limpeza profissional, incluindo sabonetes líquidos em diferentes fragrâncias.",
      image: "/lovable-uploads/99b2648c-0f16-4ef5-9c67-485e22250fad.png",
      benefits: ["Alta qualidade", "Produtos concentrados", "Opções variadas de fragrâncias"]
    },
    {
      title: "Linha Star",
      description: "Linha completa de produtos para limpeza industrial e manutenção de equipamentos pesados em ambientes de construção.",
      image: "/lovable-uploads/6da1e389-121b-40d1-8f17-b86b1a91e57b.png",
      benefits: ["Alta performance", "Rendimento superior", "Variedade de fragrâncias"]
    },
    {
      title: "Linha Milla",
      description: "Produtos especializados para conservação e limpeza de ambientes, com várias opções de fragrâncias.",
      image: "/lovable-uploads/447c0fb7-a958-4516-aa48-efd3a41f55e8.png",
      benefits: ["Fragrâncias duradouras", "Fórmulas concentradas", "Opções para todos os ambientes"]
    },
    {
      title: "Produtos Específicos",
      description: "Produtos especializados como o limpa vidros, ideais para limpeza profissional de superfícies específicas.",
      image: "/lovable-uploads/5d9e1b56-b70e-4fed-b8f5-5461ec3eebc0.png",
      benefits: ["Ação rápida", "Não deixa resíduos", "Especialmente desenvolvido para vidros e superfícies"]
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section id="produtos" className="section-padding bg-gradient-to-br from-company-blue/10 to-company-purple/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Produtos de Limpeza Especializada</h2>
          <p className="section-subtitle">
            Soluções para limpeza pós-obra e manutenção profissional
          </p>
        </div>
        
        <div 
          ref={ref}
          className={cn(
            "relative transition-all duration-700 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-company-blue">
              {products[activeIndex].title}
            </h3>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-company-yellow/20 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-company-yellow/20 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:col-span-2 h-64 md:h-96">
              <img 
                src={products[activeIndex].image} 
                alt={products[activeIndex].title} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="md:col-span-3 p-6 md:p-8">
              <p className="text-gray-700 mb-6">{products[activeIndex].description}</p>
              
              <h4 className="text-lg font-semibold text-company-purple mb-3">Benefícios:</h4>
              <ul className="space-y-2 mb-8">
                {products[activeIndex].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-company-yellow/30 text-company-blue p-1 rounded-full mr-2 mt-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-end">
                <a 
                  href={`https://wa.me/6530291415?text=Olá! Gostaria de solicitar informações sobre ${products[activeIndex].title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-block"
                >
                  Solicitar Informações
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1",
                  index === activeIndex ? "bg-company-yellow" : "bg-gray-300"
                )}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={`https://wa.me/6530291415?text=Olá! Gostaria de solicitar o catálogo completo de produtos de limpeza.`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CleaningProducts;
