import { 
  LayoutDashboard, Stethoscope, Apple, MapPin, 
  User, LogOut, Heart, LineChart, ChevronLeft, Menu, PanelLeftClose 
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  useSidebar 
} from '@/components/ui/sidebar';

const navItems = [
  { title: 'Command Center', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Neural Scan', url: '/dashboard/symptoms', icon: Stethoscope },
  { title: 'Bio-Fuel Guide', url: '/dashboard/food', icon: Apple },
  { title: 'Geo-Clinics', url: '/dashboard/clinics', icon: MapPin },
  { title: 'Bio-Metrics', url: '/dashboard/tracking', icon: LineChart },
  { title: 'User Profile', url: '/dashboard/profile', icon: User },
];

const DashboardSidebar = () => {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const navigate = useNavigate();
  const logout = useAppStore((s) => s.logout);

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r border-white/10 bg-black z-50 h-screen overflow-hidden flex flex-col"
    >
      {/* HEADER SECTION */}
      <SidebarHeader className="bg-black p-4 flex-shrink-0 min-h-[120px] flex flex-col justify-center">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] flex-shrink-0">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            {!isCollapsed && (
              <span className="font-black italic text-lg tracking-tighter uppercase text-white whitespace-nowrap">
                HEALTH<span className="text-cyan-400">AI</span>
              </span>
            )}
          </div>
        </div>

        {/* THE COLLAPSE/EXPAND BUTTON - Now in a dedicated high-visibility row */}
        <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-end'} w-full`}>
          <button 
            onClick={toggleSidebar}
            className="flex items-center justify-center p-2 rounded-md bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-sm"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </SidebarHeader>

      {/* NAVIGATION SECTION */}
      <SidebarContent className="flex-1 overflow-y-auto px-3 scrollbar-hide">
        <nav className="py-4 space-y-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) => `
                flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} gap-4 w-full p-3 rounded-xl border transition-all duration-200
                ${isActive 
                  ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]' 
                  : 'border-transparent text-white/30 hover:bg-white/5 hover:text-white'}
              `}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </SidebarContent>

      {/* FOOTER SECTION */}
      <SidebarFooter className="bg-black border-t border-white/5 p-4 flex-shrink-0">
        <button 
          onClick={() => { logout(); navigate('/'); }}
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} gap-4 w-full p-3 text-white/20 hover:text-red-400 transition-all group rounded-xl hover:bg-red-500/5`}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && (
            <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
              Terminate
            </span>
          )}
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;