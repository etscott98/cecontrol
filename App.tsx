import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { IoTSolutionsPage } from './components/IoTSolutionsPage';
import { EmbeddedSystemsPage } from './components/EmbeddedSystemsPage';
import { TestingProtocolPage } from './components/TestingProtocolPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'embedded' | 'iot' | 'testing'>('home');

  const handleServiceClick = (service: string) => {
    setCurrentPage(service as 'embedded' | 'iot' | 'testing');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'embedded':
        return <EmbeddedSystemsPage />;
      case 'iot':
        return <IoTSolutionsPage />;
      case 'testing':
        return <TestingProtocolPage />;
      default:
        return (
          <div>
            <HeroSection />
            <div className="py-12 bg-gradient-to-b from-gray-800 to-gray-800"></div>
            <AboutSection />
            <div className="py-12 bg-gradient-to-b from-gray-800/70 to-gray-800/70"></div>
            <ServicesSection onServiceClick={handleServiceClick} />
            <div className="py-12 bg-gradient-to-b from-gray-800 to-gray-800"></div>
            <ContactSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 dark">
      <Navigation onHomeClick={handleHomeClick} />
      <main>
        {renderPage()}
      </main>
      
      {/* Spacer before footer */}
      <div className="py-16 bg-gradient-to-b from-gray-800/70 to-gray-800/50"></div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-500/25 via-indigo-500/20 to-violet-500/25 backdrop-blur-2xl border-t border-purple-400/40 py-16">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400/50 to-indigo-500/50 backdrop-blur-lg rounded-lg flex items-center justify-center border border-purple-400/50 shadow-xl">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-xl tracking-tight text-white font-bold">CEControl</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Embedded programming services that encourage product creativity and innovation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-white">Solutions</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Embedded Systems</div>
                <div>IoT Solutions</div>
                <div>Testing Protocol</div>
                <div>Custom Development</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-white">Services</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Hardware-Software Integration</div>
                <div>Real-Time Performance</div>
                <div>Cloud Connectivity</div>
                <div>Quality Assurance</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>info@cecontrol.com</div>
                <div>(919) 699-7834</div>
                <div>Hillsborough, NC</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-400/30 mt-12 pt-12 text-center text-sm text-gray-400">
            <p>&copy; 2025 CEControl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}