import { motion } from 'motion/react';
import { CircuitBoard, Wrench, Wifi, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesSectionProps {
  onServiceClick?: (service: string) => void;
}

export function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  const services = [
    {
      icon: CircuitBoard,
      title: 'Embedded Systems',
      description: 'At CEControl, we consider ourselves experts when it comes to embedded systems. Embedded systems have limitations and knowing these limitations is what makes us great. We use this understanding to deliver robust, efficient solutions.',
      features: ['Hardware-Software Integration', 'Real-Time Performance', 'Low-Power Design', 'Custom Firmware Development'],
      pageKey: 'embedded',
      gradients: {
        card: 'from-orange-500/20 via-amber-500/15 to-yellow-500/20',
        cardHover: 'hover:from-orange-500/30 hover:to-yellow-500/30',
        icon: 'from-orange-400/40 to-amber-500/40',
        iconColor: 'text-orange-100',
        border: 'border-orange-400/40'
      }
    },
    {
      icon: Wifi,
      title: 'IoT Solutions',
      description: 'At CEControl, we are up to date with the current IoT trends and capabilities to keep your project ahead of the game. We are equipped to handle full-stack IoT development from device to cloud.',
      features: ['Cloud Connectivity', 'Remote Monitoring', 'Data Analytics', 'Firmware OTA Updates'],
      pageKey: 'iot',
      gradients: {
        card: 'from-blue-500/20 via-indigo-500/15 to-purple-500/20',
        cardHover: 'hover:from-blue-500/30 hover:to-purple-500/30',
        icon: 'from-blue-400/40 to-indigo-500/40',
        iconColor: 'text-blue-100',
        border: 'border-blue-400/40'
      }
    },
    {
      icon: Wrench,
      title: 'Testing Protocol',
      description: 'Here at CEControl, we put your project through rigorous testing to ensure efficient running. Unit Testing is a process where components of the application are individually tested to ensure reliability and performance.',
      features: ['Unit Testing', 'Integration Testing', 'Performance Validation', 'Quality Assurance'],
      pageKey: 'testing',
      gradients: {
        card: 'from-teal-500/20 via-cyan-500/15 to-emerald-500/20',
        cardHover: 'hover:from-teal-500/30 hover:to-emerald-500/30',
        icon: 'from-teal-400/40 to-cyan-500/40',
        iconColor: 'text-teal-100',
        border: 'border-teal-400/40'
      }
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-800/70 via-gray-900/90 to-gray-800">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
            Our Services
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Complete embedded programming services from concept to deployment. 
            We provide solutions that exceed expectations and push your products into the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${service.gradients.card} backdrop-blur-2xl p-10 rounded-xl border ${service.gradients.border} shadow-2xl hover:shadow-3xl ${service.gradients.cardHover} transition-all duration-300 flex flex-col`}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradients.icon} backdrop-blur-lg rounded-xl flex items-center justify-center mb-8 border ${service.gradients.border} shadow-xl`}>
                <service.icon className={`w-10 h-10 ${service.gradients.iconColor} drop-shadow-lg`} />
              </div>
              
              <div className="space-y-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full group mt-6 border-gray-400 text-white hover:bg-gray-800/50 font-medium"
                  onClick={() => onServiceClick?.(service.pageKey)}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}