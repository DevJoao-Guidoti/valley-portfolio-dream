import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamentos integrado.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Concluído",
      icon: "🛍️"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real.",
      tech: ["Vue.js", "Firebase", "TypeScript"],
      status: "Em Desenvolvimento",
      icon: "📝"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com visualizações interativas e previsões.",
      tech: ["React", "D3.js", "Weather API"],
      status: "Concluído",
      icon: "🌤️"
    }
  ];

  const achievements = [
    { title: "Certificação AWS", icon: "🏆", date: "2024" },
    { title: "Hackathon Winner", icon: "🥇", date: "2023" },
    { title: "Open Source Contributor", icon: "🌟", date: "2023" },
    { title: "Tech Speaker", icon: "🎤", date: "2022" }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-stardew-brown flex items-center justify-center gap-3">
            🌱 Meus Projetos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-2 border-stardew-green/30 hover:border-stardew-gold transition-all duration-300 hover:scale-105 group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-stardew-green/20 text-stardew-brown text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={project.status === "Concluído" ? "default" : "secondary"}
                      className={project.status === "Concluído" ? "bg-stardew-gold text-stardew-night" : "bg-stardew-coral/20 text-stardew-brown"}
                    >
                      {project.status}
                    </Badge>
                    <Button variant="outline" size="sm" className="border-stardew-green hover:bg-stardew-green/20 group-hover:scale-110 transition-all">
                      Ver Mais
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-stardew-brown flex items-center justify-center gap-3">
            🏅 Conquistas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-magic/20 backdrop-blur-sm border-2 border-stardew-gold/30 hover:border-stardew-gold transition-all duration-300 hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="p-4 text-center">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h3 className="font-bold text-sm text-foreground">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-gradient-earth/20 backdrop-blur-sm border-2 border-stardew-brown/30 max-w-md mx-auto">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-stardew-brown mb-4 flex items-center justify-center gap-2">
                📬 Vamos Conversar!
              </h2>
              <p className="text-muted-foreground mb-6">
                Interessado em trabalhar juntos? Entre em contato!
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-stardew-green hover:bg-stardew-green/80 text-card font-bold">
                  📧 Enviar E-mail
                </Button>
                <Button variant="outline" className="w-full border-stardew-brown hover:bg-stardew-brown/10">
                  💼 LinkedIn
                </Button>
                <Button variant="outline" className="w-full border-stardew-brown hover:bg-stardew-brown/10">
                  💻 GitHub
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;