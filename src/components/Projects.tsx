
import { useInView } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/f9f4943f-f2e1-407d-a3ef-75c1f2b64ac3.png"
    },
    {
      id: 2,
      image: "/lovable-uploads/ee0ca7f5-d391-4407-97a6-a463cba228b5.png"
    },
    {
      id: 3,
      image: "/lovable-uploads/658de8ea-95f7-4b71-b736-44dbaab3ce50.png"
    },
    {
      id: 4,
      image: "/lovable-uploads/5419326d-75b1-44b7-a67e-8357d1a86391.png"
    },
    {
      id: 5,
      image: "/lovable-uploads/34d0cef1-b778-48da-9fa1-040264373b9c.png"
    },
    {
      id: 6,
      image: "/lovable-uploads/2d906ab9-fae3-4c56-ab65-03dabb344340.png"
    },
  ];

  return (
    <section id="projetos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => {
            const delay = index * 0.1;
            
            return (
              <div
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform h-72",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${delay}s` }}
              >
                <img 
                  src={project.image} 
                  alt="Serviço" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
