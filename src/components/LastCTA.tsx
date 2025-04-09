
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const LastCTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const whatsappLink = `https://wa.me/${"[Número de Telefone]".replace(/\D/g, '')}?text=Olá! Gostaria de solicitar um orçamento para meu projeto.`;

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(102, 51, 153, 0.85)), url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div 
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center text-white transition-all duration-700 transform",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Pronto para Iniciar seu Projeto?</h2>
          <p className="text-xl mb-10 text-white/90">
            Entre em contato e descubra como podemos otimizar sua obra
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block text-lg px-8 py-4"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastCTA;
