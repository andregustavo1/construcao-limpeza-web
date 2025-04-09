
import { useInView } from "react-intersection-observer";
import { Badge, Check, Shield, Leaf, Lightbulb, Eye, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Values = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      title: "Qualidade",
      description: "Compromisso com a excelência em todos os serviços oferecidos.",
      icon: Badge,
    },
    {
      title: "Segurança",
      description: "Priorizar a segurança de nossos colaboradores e parceiros em todas as operações.",
      icon: Shield,
    },
    {
      title: "Sustentabilidade",
      description: "Atuar de forma responsável, respeitando o meio ambiente e promovendo práticas sustentáveis.",
      icon: Leaf,
    },
    {
      title: "Inovação",
      description: "Buscar constantemente novas soluções e tecnologias para melhor atender nossos clientes.",
      icon: Lightbulb,
    },
    {
      title: "Transparência",
      description: "Manter uma comunicação clara e honesta com nossos clientes, colaboradores e parceiros.",
      icon: Eye,
    },
    {
      title: "Comprometimento",
      description: "Dedicar-se ao sucesso dos projetos, superando expectativas e cumprindo prazos.",
      icon: Clock,
    },
  ];

  return (
    <section id="valores" className="section-padding bg-company-light">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Nossos Valores</h2>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {values.map((value, index) => {
            const delay = index * 0.1;
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-lg p-6 shadow-lg transition-all duration-700 transform",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${delay}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-company-yellow/20 p-3 rounded-full mr-4">
                    <Icon className="text-company-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-company-blue">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
