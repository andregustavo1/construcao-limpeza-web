
import { useInView } from "@/hooks/use-intersection-observer";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = {
    phone: "6530291415",
    email: "[Email da Empresa]",
    instagram: "[Instagram da Empresa]",
    location: "[Localização da Empresa]"
  };

  const whatsappLink = `https://wa.me/${contactInfo.phone.replace(/\D/g, '')}?text=Olá! Gostaria de solicitar um orçamento.`;
  const emailLink = `mailto:${contactInfo.email}`;
  const instagramLink = `https://instagram.com/${contactInfo.instagram.replace('@', '')}`;

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Solicite um orçamento personalizado para seu projeto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref}
            className={cn(
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="bg-company-light p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-company-blue mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="bg-company-blue/10 p-3 rounded-full mr-4 group-hover:bg-company-yellow/20 transition-colors">
                    <Phone className="text-company-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p className="text-lg font-medium text-company-blue group-hover:text-company-purple transition-colors">{contactInfo.phone}</p>
                  </div>
                </a>
                
                <a 
                  href={emailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="bg-company-blue/10 p-3 rounded-full mr-4 group-hover:bg-company-yellow/20 transition-colors">
                    <Mail className="text-company-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="text-lg font-medium text-company-blue group-hover:text-company-purple transition-colors">{contactInfo.email}</p>
                  </div>
                </a>
                
                <a 
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="bg-company-blue/10 p-3 rounded-full mr-4 group-hover:bg-company-yellow/20 transition-colors">
                    <Instagram className="text-company-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="text-lg font-medium text-company-blue group-hover:text-company-purple transition-colors">{contactInfo.instagram}</p>
                  </div>
                </a>
                
                <div className="flex items-start">
                  <div className="bg-company-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="text-company-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Localização</p>
                    <p className="text-lg font-medium text-company-blue">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-block w-full text-center"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Atendimento ao cliente" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
