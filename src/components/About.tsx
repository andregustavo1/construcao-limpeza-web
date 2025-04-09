
import { Check } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });

  const differentials = [
    "Equipamentos de alta qualidade",
    "Soluções integradas",
    "Atendimento personalizado",
    "Compromisso com prazos"
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Sobre Nossa Empresa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div 
            ref={ref1} 
            className={cn(
              "transition-all duration-700 transform",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <p className="text-lg mb-6 text-gray-700">
              Soluções integradas em locação de equipamentos para construção civil e venda de produtos de limpeza especializada. Oferecemos qualidade, segurança e eficiência em todos os serviços.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-company-purple">Nossa Missão</h3>
              <p className="text-gray-700">
                Oferecer soluções integradas em locação de máquinas e equipamentos para construção civil, administração de mineradoras, serviços de construção e venda de produtos de limpeza. Garantindo qualidade, segurança e eficiência, sempre com foco na satisfação dos nossos clientes e no desenvolvimento sustentável.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-company-purple">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a líder no setor de locação e construção, destacando-se pela inovação e excelência nos serviços prestados, fazendo a diferença na vida das pessoas que servimos.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-company-purple">Nossos Diferenciais</h3>
              <ul className="space-y-2">
                {differentials.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={20} className="text-company-yellow mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div 
            ref={ref2}
            className={cn(
              "transition-all duration-700 transform",
              inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Equipe de profissionais" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
