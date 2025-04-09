
import { useInView } from "react-intersection-observer";
import { Settings, Truck, Headset, Package, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const reasons = [
    {
      icon: Settings,
      title: "Equipamentos Modernos",
      description: "Nossa frota é constantemente atualizada e passa por rigorosas manutenções.",
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Contamos com logística eficiente para atender emergências e prazos ajustados.",
    },
    {
      icon: Headset,
      title: "Suporte Técnico",
      description: "Equipe especializada disponível para assistência durante toda a locação.",
    },
    {
      icon: Package,
      title: "Soluções Integradas",
      description: "Locação de equipamentos e produtos de limpeza em um só lugar.",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Produtos e equipamentos certificados, garantindo segurança e eficiência.",
    },
  ];

  return (
    <section className="section-padding bg-company-blue/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Por Que Nos Escolher?</h2>
        </div>
        
        <div 
          ref={ref}
          className="max-w-4xl mx-auto"
        >
          {reasons.map((reason, index) => {
            const delay = index * 0.1;
            const Icon = reason.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 transition-all duration-700 transform",
                  inView 
                    ? "opacity-100 translate-x-0" 
                    : isEven 
                      ? "opacity-0 -translate-x-12" 
                      : "opacity-0 translate-x-12"
                )}
                style={{ transitionDelay: `${delay}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="bg-company-purple/20 p-4 rounded-full">
                    <Icon className="text-company-blue" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-company-blue mb-2">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
