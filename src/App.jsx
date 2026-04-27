import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Verify from './pages/Verify';


// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SymptomChecker from "./pages/SymptomChecker";
import FoodGuide from "./pages/FoodGuide";
import Clinics from "./pages/Clinics";
import Profile from "./pages/Profile";
import HealthTracking from "./pages/HealthTracking";
import PharmaPulse from "./pages/PharmaPulse"; 
import GuardianJourney from "./pages/GuardianJourney"; 
import NotFound from "./pages/NotFound";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';



// Components
import DashboardLayout from "./components/layout/DashboardLayout";
import FloatingChat from "./components/chat/FloatingChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* FloatingChat appears on all pages for instant AI support */}
        <FloatingChat /> 

        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<Index />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Visionary Modules - Top Level Access */}
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/food-guide" element={<FoodGuide />} />
          <Route path="/diagnosis" element={<SymptomChecker />} />
          <Route path="/tracking" element={<HealthTracking />} />
          <Route path="/pharma-pulse" element={<PharmaPulse />} /> {/* NEW */}
          <Route path="/guardian-journey" element={<GuardianJourney />} /> {/* NEW */}

          /* Email Verification Route */
           <Route path="/verify" element={<Verify />} />

           // Inside Auth Routes
            <Route path="/forgot-password" element={<ForgotPassword />} />
             <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="symptoms" element={<SymptomChecker />} />
            <Route path="food" element={<FoodGuide />} />
            <Route path="clinics" element={<Clinics />} />
            <Route path="tracking" element={<HealthTracking />} /> 
            <Route path="pharma" element={<PharmaPulse />} /> {/* NEW */}
            <Route path="recovery" element={<GuardianJourney />} /> {/* NEW */}
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;