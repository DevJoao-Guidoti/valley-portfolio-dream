import AnimatedBackground from "@/components/AnimatedBackground";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Main Content Area */}
      <div className="relative z-10 p-6">
        {/* Hero Section */}
        <div className="text-center py-20 px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-stardew-brown animate-float">
              🌾 Bem-vindo ao meu Vale! 🌾
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aqui eu cultivo projetos incríveis, colho experiências valiosas e construo soluções que fazem a diferença. 
              Explore meu portfólio e descubra as sementes que plantei no mundo da tecnologia!
            </p>
            
            <div className="flex gap-4 justify-center mt-8">
              <div className="animate-twinkle">⭐</div>
              <div className="animate-twinkle" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="animate-twinkle" style={{ animationDelay: '1s' }}>🌟</div>
            </div>
          </div>
        </div>
        
        {/* Portfolio Content */}
        <Portfolio />
      </div>
    </div>
  );
};

export default Index;
