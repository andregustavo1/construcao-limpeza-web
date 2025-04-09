
import { useState } from "react";
import { useInView } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filters = [
    { id: "all", name: "Todos" },
    { id: "construction", name: "Construção Civil" },
    { id: "mining", name: "Mineração" },
    { id: "infrastructure", name: "Infraestrutura" },
    { id: "cleaning", name: "Limpeza Especializada" },
  ];

  const projects = [
    {
      id: 1,
      title: "Construção de Edifício Comercial",
      category: "construction",
      description: "Locação de equipamentos para construção de um edifício comercial de 12 andares.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Extração de Minério",
      category: "mining",
      description: "Fornecimento de equipamentos para projeto de extração mineral.",
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 3,
      title: "Reparo de Estradas",
      category: "infrastructure",
      description: "Locação de máquinas para reparo e manutenção de rodovia estadual.",
      image: "https://images.unsplash.com/photo-1573075175660-08fd45ac27a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Limpeza de Fachada Corporativa",
      category: "cleaning",
      description: "Fornecimento de produtos para limpeza e recuperação de fachada de vidro.",
      image: "https://images.unsplash.com/photo-1545043156-647893646916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Construção de Condomínio Residencial",
      category: "construction",
      description: "Equipamentos de construção para desenvolvimento de condomínio com 80 unidades.",
      image: "https://images.unsplash.com/photo-1590333748338-d629e4564ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 6,
      title: "Recuperação Ambiental de Mineradora",
      category: "mining",
      description: "Máquinas para projeto de recuperação ambiental em área de mineração.",
      image: "https://images.unsplash.com/photo-1518873247959-177e697efd2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projetos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Projetos Realizados</h2>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-4 py-2 m-1 rounded-md font-medium transition-colors",
                activeFilter === filter.id
                  ? "bg-company-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => {
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
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white opacity-100 md:opacity-90 md:group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
