import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import playerAvatar from "@/assets/player-avatar.png";

const PlayerCard = () => {
  const playerStats = [
    { label: "Nível", value: "Senior" },
    { label: "Experiência", value: "5+ anos" },
    { label: "Especialidade", value: "Full Stack" },
    { label: "Projetos", value: "50+" },
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "AWS", "PostgreSQL", "MongoDB", "Docker"
  ];

  return (
    <Card className="relative max-w-md mx-auto bg-card/95 backdrop-blur-sm border-2 border-stardew-brown shadow-2xl hover:shadow-stardew-gold/20 transition-all duration-300 hover:scale-105">
      {/* Header with decorative border */}
      <div className="bg-gradient-earth p-4 rounded-t-lg border-b-4 border-stardew-brown">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={playerAvatar} 
              alt="Player Avatar" 
              className="w-20 h-20 rounded-full border-4 border-card shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-stardew-gold rounded-full border-2 border-card flex items-center justify-center">
              <span className="text-xs font-bold text-stardew-night">⭐</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-card mb-1">João Silva</h2>
            <p className="text-card/80 text-sm">Desenvolvedor Full Stack</p>
            <div className="flex gap-1 mt-2">
              <div className="w-3 h-3 bg-stardew-gold rounded-full"></div>
              <div className="w-3 h-3 bg-stardew-gold rounded-full"></div>
              <div className="w-3 h-3 bg-stardew-gold rounded-full"></div>
              <div className="w-3 h-3 bg-stardew-gold rounded-full"></div>
              <div className="w-3 h-3 bg-stardew-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-stardew-brown mb-3 flex items-center gap-2">
          📊 Estatísticas
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {playerStats.map((stat, index) => (
            <div key={index} className="bg-muted/50 p-2 rounded border border-stardew-green/30">
              <div className="text-xs text-muted-foreground">{stat.label}</div>
              <div className="font-bold text-sm text-foreground">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <h3 className="font-bold text-stardew-brown mb-3 flex items-center gap-2">
            🛠️ Habilidades
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-stardew-green/20 text-stardew-brown border border-stardew-green/30 hover:bg-stardew-green/30 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 p-3 bg-stardew-sky/20 rounded border border-stardew-sky/30">
          <div className="text-xs text-muted-foreground mb-1">📧 Contato</div>
          <div className="text-sm">joao.silva@email.com</div>
          <div className="text-sm">📱 (11) 99999-9999</div>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;