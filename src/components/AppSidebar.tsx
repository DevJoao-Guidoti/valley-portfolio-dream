import { Home, User, Briefcase, Award, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import playerAvatar from "@/assets/player-avatar.png";

const menuItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Sobre", url: "/about", icon: User },
  { title: "Projetos", url: "/projects", icon: Briefcase },
  { title: "Conquistas", url: "/achievements", icon: Award },
  { title: "Contato", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-stardew-green/30 text-stardew-brown font-bold border border-stardew-green/50" : "hover:bg-stardew-green/10 text-foreground";

  const playerStats = [
    { label: "Nível", value: "Senior", icon: "⭐" },
    { label: "XP", value: "5+ anos", icon: "💫" },
    { label: "Classe", value: "Full Stack", icon: "🛠️" },
  ];

  const quickSkills = ["React", "Node.js", "TypeScript", "AWS"];

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-80"} bg-gradient-earth/10 backdrop-blur-sm border-r-4 border-stardew-brown/30`}
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end bg-stardew-gold/20 hover:bg-stardew-gold/40 border border-stardew-brown/30" />

      <SidebarContent className="p-2">
        {/* Player Card */}
        {!collapsed && (
          <Card className="mb-6 bg-card/95 backdrop-blur-sm border-2 border-stardew-brown/50 shadow-lg">
            <div className="bg-gradient-earth p-3 rounded-t-lg border-b-2 border-stardew-brown">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={playerAvatar} 
                    alt="Player Avatar" 
                    className="w-16 h-16 rounded-full border-3 border-card shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-stardew-gold rounded-full border-2 border-card flex items-center justify-center">
                    <span className="text-xs">⭐</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-card">João Silva</h2>
                  <p className="text-card/80 text-sm">Dev Full Stack</p>
                </div>
              </div>
            </div>

            <div className="p-3 space-y-3">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 gap-2">
                {playerStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 bg-muted/30 p-2 rounded text-sm">
                    <span>{stat.icon}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}:</span>
                    <span className="font-bold text-xs">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Quick Skills */}
              <div>
                <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  🛠️ Skills Principais
                </div>
                <div className="flex flex-wrap gap-1">
                  {quickSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-stardew-green/20 text-stardew-brown text-xs px-2 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="p-2 bg-stardew-sky/20 rounded border border-stardew-sky/30 text-center">
                <div className="text-xs text-muted-foreground">Status</div>
                <div className="text-sm font-bold text-stardew-green">🟢 Disponível para projetos</div>
              </div>
            </div>
          </Card>
        )}

        {/* Collapsed Player Info */}
        {collapsed && (
          <div className="mb-4 text-center">
            <img 
              src={playerAvatar} 
              alt="Player Avatar" 
              className="w-10 h-10 rounded-full border-2 border-stardew-gold mx-auto mb-2"
            />
            <div className="w-2 h-2 bg-stardew-green rounded-full mx-auto"></div>
          </div>
        )}

        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-stardew-brown font-bold">
            {collapsed ? "🎮" : "🎮 Menu Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`${getNavCls({ isActive: isActive(item.url) })} rounded-lg transition-all duration-200`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer Info */}
        {!collapsed && (
          <div className="mt-auto pt-4 text-center">
            <div className="text-xs text-muted-foreground">
              🌾 Portfólio Valley v1.0
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Feito com ❤️ e ☕
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}