
import { useInView } from "react-intersection-observer";
import { Truck, Hammer, Wrench, Building, Forklift, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const RentalServices = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const equipmentCategories = [
    {
      title: "Equipamentos Pesados",
      description: "Retroescavadeiras, escavadeiras, tratores",
      icon: Truck,
    },
    {
      title: "Compactação",
      description: "Placas vibratórias, compactadores, rolos compressores",
      icon: Hammer,
    },
    {
      title: "Demolição",
      description: "Rompedores, marteletes, serras",
      icon: Wrench,
    },
    {
      title: "Concretagem",
      description: "Betoneiras, vibradores, bombas de concreto",
      icon: Building,
    },
    {
      title: "Elevação",
      description: "Guindastes, plataformas elevatórias, empilhadeiras",
      icon: Forklift,
    },
    {
      title: "Geradores",
      description: "Geradores de energia para diferentes potências",
      icon: Cpu,
    },
  ];

  return (
    <section id="locacao" className="section-padding bg-white relative overflow-hidden">
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-company-blue/5 -skew-x-12 transform origin-top-right z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Locação de Equipamentos</h2>
          <p className="section-subtitle">
            Máquinas e equipamentos de alta performance para sua obra
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {equipmentCategories.map((category, index) => {
            const delay = index * 0.1;
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className={cn(
                  "bg-white border border-gray-100 rounded-lg p-6 shadow-lg transition-all duration-700 transform hover:shadow-xl hover:-translate-y-1",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${delay}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-company-blue/10 p-4 rounded-full mr-4">
                    <Icon className="text-company-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-company-blue">{category.title}</h3>
                </div>
                <p className="text-gray-700">{category.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={`https://wa.me/${"[Número de Telefone]".replace(/\D/g, '')}?text=Olá! Gostaria de solicitar um orçamento para locação de equipamentos.`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            Solicitar Orçamento para Locação
          </a>
        </div>
      </div>
    </section>
  );
};

export default RentalServices;
