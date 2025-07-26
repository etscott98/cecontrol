import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  onHomeClick?: () => void;
}

export function Navigation({ onHomeClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-500/25 via-indigo-500/20 to-violet-500/25 backdrop-blur-2xl border-b border-purple-400/40 shadow-2xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={onHomeClick}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400/50 to-indigo-500/50 backdrop-blur-lg rounded-lg flex items-center justify-center border border-purple-400/50 shadow-xl">
              <span className="text-white font-bold drop-shadow-md">C</span>
            </div>
            <span className="text-xl tracking-tight text-white font-bold">CEControl</span>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-purple-200 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="sm" className="border-purple-400/60 text-white hover:bg-purple-800/50 font-medium" onClick={() => window.location.href = '#contact'}>
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-purple-800/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-purple-400/40 mt-4 pt-4 bg-gradient-to-br from-purple-500/30 via-indigo-500/25 to-violet-500/30 backdrop-blur-xl rounded-lg shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-purple-200 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="w-fit border-purple-400/60 text-white hover:bg-purple-800/50 font-medium" onClick={() => window.location.href = '#contact'}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}