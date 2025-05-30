
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const whatsappLink = `https://wa.me/6530291415?text=Olá! Gostaria de conhecer seus serviços.`;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/c6ef7225-d3f7-49d4-9e1b-4fe2a51c5829.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center text-white z-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Soluções Completas para Construção Civil e Limpeza Profissional
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Equipamentos de Alta Performance e Produtos Especializados
        </p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block text-lg"
        >
          Conheça Nossos Serviços
        </a>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#sobre" className="text-white">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
