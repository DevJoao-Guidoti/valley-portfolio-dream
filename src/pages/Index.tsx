import AnimatedBackground from "@/components/AnimatedBackground";
import PlayerCard from "@/components/PlayerCard";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-stardew-brown animate-float">
              🌾 Portfólio Valley 🌾
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Bem-vindo à minha fazenda de código! Aqui eu cultivo projetos incríveis e colho experiências valiosas.
            </p>
          </div>
          
          <PlayerCard />
          
          <div className="flex gap-4 justify-center mt-8">
            <div className="animate-twinkle">⭐</div>
            <div className="animate-twinkle" style={{ animationDelay: '0.5s' }}>✨</div>
            <div className="animate-twinkle" style={{ animationDelay: '1s' }}>🌟</div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Content */}
      <div className="relative z-10">
        <Portfolio />
      </div>
    </div>
  );
};

export default Index;
