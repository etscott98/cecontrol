import { motion } from 'motion/react';
import { Cpu, Factory, Zap, Thermometer, Gauge, Cog } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function SolutionsSection() {
  const solutions = [
    {
      icon: Cpu,
      title: 'Real-Time Kernel',
      description: 'Custom RTOS with preemptive scheduling, memory protection, and sub-100μs interrupt latency.',
      features: ['Zero-Copy IPC', 'Priority Inheritance', 'Deadlock Detection']
    },
    {
      icon: Factory,
      title: 'Hardware Abstraction',
      description: 'Write once, deploy everywhere. Our HAL supports 50+ MCU families with unified APIs.',
      features: ['Auto-Generated Drivers', 'Pin Multiplexing', 'Power Profiling']
    },
    {
      icon: Zap,
      title: 'Async Runtime',
      description: 'High-performance async/await framework for embedded systems. No heap allocations.',
      features: ['Stack Analysis', 'Async Timers', 'Event-Driven Architecture']
    },
    {
      icon: Thermometer,
      title: 'Debug Toolkit',
      description: 'Live memory inspection, real-time tracing, and remote debugging over WiFi/Ethernet.',
      features: ['Memory Profiler', 'Stack Overflow Detection', 'Performance Counters']
    },
    {
      icon: Gauge,
      title: 'Testing Framework',
      description: 'Unit tests, integration tests, and hardware-in-the-loop testing with CI/CD integration.',
      features: ['Mock Hardware', 'Code Coverage', 'Automated Testing']
    },
    {
      icon: Cog,
      title: 'DevOps Pipeline',
      description: 'Automated builds, OTA updates, and fleet management with rollback capabilities.',
      features: ['Continuous Deployment', 'A/B Testing', 'Remote Monitoring']
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-gray-800/50 via-slate-800/30 to-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            The Embedded Stack You've Been Waiting For
          </h2>
          <p className="text-muted-foreground text-lg">
            Production-ready tools and frameworks that eliminate the pain points of embedded development. 
            Built by engineers who've shipped millions of devices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400/40 to-cyan-500/40 backdrop-blur-lg rounded-lg flex items-center justify-center border border-teal-400/40 shadow-xl">
                    <solution.icon className="w-6 h-6 text-teal-100 drop-shadow-lg" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3>{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gradient-to-r from-teal-400/30 to-cyan-500/30 backdrop-blur-lg text-teal-100 px-2 py-1 rounded-md border border-teal-400/40 shadow-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}