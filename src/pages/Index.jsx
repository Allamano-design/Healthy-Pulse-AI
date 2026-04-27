import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import BiometricStats from '@/components/landing/BiometricStats';
import Exercise from '@/components/landing/Exercise';
import SecurityPipeline from '@/components/landing/SecurityPipeline';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      
      {/* These will now work because they are imported above */}
      <BiometricStats />
      <Exercise /> 
      <SecurityPipeline />
      
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;