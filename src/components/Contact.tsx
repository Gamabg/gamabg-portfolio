import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="gradient-text">Conversar?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades de colaboração
            </p>
          </div>

          <Card className="card-shadow animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:bruno.masseiras@example.com"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">bruno.masseiras@example.com</p>
                      </div>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/gamabg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/gamabg</p>
                      </div>
                    </a>

                    <a 
                      href="https://github.com/gamabg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">github.com/gamabg</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Localização</p>
                        <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Pronto para começar?</h3>
                    <p className="text-muted-foreground">
                      Entre em contato comigo para discutir seu próximo projeto ou oportunidade de colaboração.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full" 
                      asChild
                    >
                      <a href="mailto:bruno.masseiras@example.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Enviar Email
                      </a>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/gamabg/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        Conectar no LinkedIn
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center pt-4">
                    Normalmente respondo em até 24 horas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
