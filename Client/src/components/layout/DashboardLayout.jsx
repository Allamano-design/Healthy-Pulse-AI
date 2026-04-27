import { Outlet, Navigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'; // Added Trigger
import DashboardSidebar from './DashboardSidebar';
import { useAppStore } from '@/lib/store';
import { Link } from 'react-router-dom';

const DashboardLayout = () => {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full bg-[#020617] text-white overflow-hidden font-sans">
        
        {/* SIDEBAR: Shadcn handles the responsive collapse logic here */}
        <DashboardSidebar />
        
        <div className="flex flex-col flex-1 min-w-0 h-full relative bg-[#020617]">
          
          {/* HEADER: Adjusted height and padding for mobile */}
          <header className="h-16 md:h-20 flex-shrink-0 flex items-center justify-between px-4 md:px-10 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl z-50">
            
            {/* Left Side: Logo + Mobile Toggle */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* SidebarTrigger: Visible on all screens so user can always collapse/expand */}
              <SidebarTrigger className="text-cyan-400 hover:bg-cyan-500/10 p-2 rounded-lg" />
              
              <div className="h-6 w-px bg-white/10 hidden xs:block" />
              
              <span className="font-black text-sm md:text-lg tracking-tighter uppercase italic text-white truncate">
                HEALTHLY<span className="text-blue-500 font-bold">PULSE</span>
              </span>
            </div>

            {/* Right Side: Responsive Nav */}
            <nav className="flex items-center gap-4 md:gap-8">
              {/* Hidden on mobile/tablet, appears on XL desktops */}
              <div className="hidden xl:flex items-center gap-6">
                {['Features', 'Healing Foods', 'Nearby Clinics'].map((link) => (
                  <Link 
                    key={link} 
                    to="#" 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {/* Status Indicator: Label hidden on mobile to save space */}
              <div className="flex items-center gap-2 md:gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                  Neural Link
                </span>
              </div>

              {/* Login/Sign In: Icon only or hidden on very small screens if needed */}
              <Link to="/login" className="px-3 md:px-4 py-1.5 border border-white/10 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all text-white/80">
                <span className="hidden xs:inline">Sign In</span>
                <span className="xs:hidden">Login</span>
              </Link>
            </nav>
          </header>

          {/* MAIN CONTENT: Scrollable area */}
          <main className="flex-1 overflow-y-auto relative custom-scrollbar">
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 right-0 w-full md:w-[800px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none" />
            
            {/* The Outlet: Responsive Padding (p-4 on mobile, p-16 on large desktops) */}
            <div className="p-4 sm:p-8 lg:p-12 xl:p-16 max-w-[1500px] mx-auto relative z-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;