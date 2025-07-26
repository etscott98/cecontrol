import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ParticleSystem } from './ParticleSystem';

export function HeroSection() {
  const rotatingWords = ['CECONTROL', 'EXPERIENCED', 'DEDICATED', 'PROBLEM SOLVERS'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-gray-800 py-20">
      <ParticleSystem />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center space-y-12">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter text-white leading-[0.85] mb-6">
                WE ARE{' '}
                <div className="relative block mt-6 min-h-[3.5em] md:min-h-[3em] lg:min-h-[2.5em] xl:min-h-[2.2em] 2xl:min-h-[2em] w-full overflow-visible flex items-center justify-center">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 30, rotateX: -90, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, rotateX: 90, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="hero-title-rotating flex items-center justify-center transform-gpu whitespace-nowrap"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </div>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-medium mt-8"
              >
                Embedded programming specialists who build bulletproof IoT solutions. From concept to production, we deliver systems that work flawlessly in the real world.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Button size="lg" className="group bg-gradient-to-r from-purple-500/30 via-indigo-500/25 to-violet-500/30 backdrop-blur-xl border border-purple-400/50 text-white hover:from-purple-500/40 hover:via-indigo-500/35 hover:to-violet-500/40 hover:border-purple-300/60 font-bold text-lg px-10 py-5 h-auto shadow-2xl shadow-purple-500/30 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-300 hover:bg-purple-900/30 font-bold text-lg px-10 py-5 h-auto">
                Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="space-y-4 text-center">
                <div className="text-5xl md:text-6xl font-black text-purple-300" style={{ fontFamily: 'JetBrains Mono, monospace' }}>15+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="space-y-4 text-center">
                <div className="text-5xl md:text-6xl font-black text-purple-300" style={{ fontFamily: 'JetBrains Mono, monospace' }}>100+</div>
                <div className="text-gray-300 font-medium">Projects Delivered</div>
              </div>
              <div className="space-y-4 text-center">
                <div className="text-5xl md:text-6xl font-black text-purple-300" style={{ fontFamily: 'JetBrains Mono, monospace' }}>24/7</div>
                <div className="text-gray-300 font-medium">System Reliability</div>
              </div>
              <div className="space-y-4 text-center">
                <div className="text-5xl md:text-6xl font-black text-purple-300" style={{ fontFamily: 'JetBrains Mono, monospace' }}>&lt;1ms</div>
                <div className="text-gray-300 font-medium">Response Time</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}