import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CaliMind",
    description: "Aplicativo inovador de treinos de calistenia com IA que personaliza exercícios e oferece orientação individualizada para iniciantes.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    tech: ["React", "IA", "Next.js", "TypeScript"],
    liveUrl: "https://calimind.vercel.app/",
    features: ["30+ exercícios", "Treinos personalizados", "Integração com IA"]
  },
  {
    title: "Pokémon Cards",
    description: "Catálogo interativo de Pokémon com sistema de filtros avançado, busca e visualização detalhada de cards utilizando a PokeAPI.",
    image: "https://images.unsplash.com/photo-1542779283-429940ce8336?w=800&h=500&fit=crop",
    tech: ["React", "PokeAPI", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cp5-webdev-pokemon.vercel.app/",
    features: ["Filtros por tipo", "Busca em tempo real", "Design responsivo"]
  },
  {
    title: "Global Solution Cálculo",
    description: "Solução completa para cálculos complexos e análise de dados, desenvolvida para resolver problemas matemáticos avançados.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop",
    tech: ["Next.js", "TypeScript", "Matemática", "Vercel"],
    liveUrl: "https://globalsolutioncalculo.vercel.app/",
    features: ["Cálculos avançados", "Interface intuitiva", "Performance otimizada"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas desenvolvidas com as mais modernas tecnologias web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-shadow hover:card-hover-shadow transition-smooth hover:-translate-y-2 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-2">
                  <Button 
                    className="flex-1" 
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
