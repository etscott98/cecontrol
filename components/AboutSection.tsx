import { motion } from 'motion/react';
import { Settings, Shield, Network, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pcbBoard3D from '../assets/components/pcb-board-3d.png';

export function AboutSection() {
  const highlights = [
    {
      icon: Settings,
      title: 'Real-Time Performance',
      description: 'Sub-microsecond response times with deterministic scheduling and zero-copy memory management',
      gradient: 'from-purple-500/25 via-indigo-500/20 to-violet-500/25',
      borderColor: 'border-purple-400/40',
      iconGradient: 'from-purple-400/50 to-indigo-500/50',
      iconBorder: 'border-purple-400/50'
    },
    {
      icon: Shield,
      title: 'Battle-Tested Solutions',
      description: 'Production-ready embedded systems with integrated testing frameworks and real-world validation',
      gradient: 'from-orange-500/25 via-amber-500/20 to-yellow-500/25',
      borderColor: 'border-orange-400/40',
      iconGradient: 'from-orange-400/50 to-amber-500/50',
      iconBorder: 'border-orange-400/50'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Seamless cloud integration with RESTful APIs, MQTT protocols, and secure OTA updates',
      gradient: 'from-blue-500/25 via-indigo-500/20 to-purple-500/25',
      borderColor: 'border-blue-400/40',
      iconGradient: 'from-blue-400/50 to-indigo-500/50',
      iconBorder: 'border-blue-400/50'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored embedded solutions designed to meet your specific requirements and constraints',
      gradient: 'from-violet-500/25 via-purple-500/20 to-pink-500/25',
      borderColor: 'border-violet-400/40',
      iconGradient: 'from-violet-400/50 to-purple-500/50',
      iconBorder: 'border-violet-400/50'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-800 via-gray-800/90 to-gray-800/70">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">About CEControl</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                At CEControl, we provide embedded programming services that encourage product 
                creativity and innovation. Our specialties include embedded systems and Internet 
                of Things (IoT) solutions.
              </p>
            </div>

            <div className="space-y-8 my-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                Embedded systems are devices that combine hardware and software to perform 
                specific tasks. These devices are now part of almost every aspect of our lives – 
                from your car and mobile device to refrigerators, washers, and even children's toys.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When programmed with IoT capabilities, these devices can establish internet 
                connections via Wi-Fi to IoT platforms (cloud), allowing remote access to 
                collect data, change settings, or update firmware.
              </p>
            </div>

            <div className="space-y-6 p-10 bg-gradient-to-br from-purple-500/25 via-indigo-500/20 to-violet-500/25 backdrop-blur-2xl rounded-xl border border-purple-400/40 shadow-2xl">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Our goal is to exceed your expectations when providing our services. We use the 
                latest technology in our embedded systems and IoT solutions that will push your 
                products ahead of the competition and into the future.
              </p>
            </div>
          </motion.div>

          {/* 3D PCB Board Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* 3D Container with perspective */}
              <div className="perspective-1000 transform-gpu">
                <motion.div
                  initial={{ rotateY: -15, rotateX: 10 }}
                  whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="transform-gpu preserve-3d relative"
                >
                  {/* Main PCB Board */}
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg p-8 shadow-2xl border border-purple-400/30">
                    <img 
                      src={pcbBoard3D} 
                      alt="3D PCB Board"
                      className="w-full h-auto rounded-lg shadow-xl opacity-90"
                    />
                    
                    {/* Glowing overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 rounded-lg pointer-events-none"></div>
                    
                    {/* Animated circuit traces */}
                    <div className="absolute inset-0 pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                      ></motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5 }}
                        className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                      ></motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                      ></motion.div>
                    </div>
                  </div>
                  
                  {/* 3D depth shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg transform translate-x-2 translate-y-2 -z-10 blur-sm"></div>
                </motion.div>
              </div>
              
              {/* Floating components around the PCB */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400/50 to-red-500/50 backdrop-blur-lg rounded border border-orange-400/50 shadow-xl flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-orange-300 rounded-full opacity-80"></div>
              </motion.div>
              
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-6 w-6 h-12 bg-gradient-to-br from-blue-400/50 to-cyan-500/50 backdrop-blur-lg rounded border border-blue-400/50 shadow-xl"
              >
                <div className="w-full h-2 bg-blue-300 rounded-t opacity-60 mt-1"></div>
              </motion.div>
              
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-2 w-10 h-6 bg-gradient-to-br from-purple-400/50 to-violet-500/50 backdrop-blur-lg rounded border border-purple-400/50 shadow-xl flex items-center justify-center"
              >
                <div className="w-6 h-2 bg-purple-300 rounded opacity-70"></div>
              </motion.div>
              
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 w-8 h-8 bg-gradient-to-br from-green-400/50 to-emerald-500/50 backdrop-blur-lg rounded-full border border-green-400/50 shadow-xl flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-green-300 rounded-full opacity-80"></div>
              </motion.div>
            </div>
            
            {/* Technical specifications overlay */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-gradient-to-r from-purple-500/30 via-indigo-500/25 to-violet-500/30 backdrop-blur-xl rounded-lg px-6 py-3 border border-purple-400/50 shadow-xl">
                <p className="text-white text-sm font-bold">ARM Cortex-M7 • 480MHz • Real-Time OS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}