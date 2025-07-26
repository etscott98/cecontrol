import { motion } from 'motion/react';
import { 
  CircuitBoard, 
  Cpu, 
  Zap, 
  Code, 
  Bluetooth, 
  Wifi,
  Timer,
  Bug,
  CheckCircle,
  ArrowRight,
  Microchip,
  Radio
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function EmbeddedSystemsPage() {
  const programmingLanguages = [
    { name: 'C', description: 'Low-level system programming', level: 'Expert' },
    { name: 'C++', description: 'Object-oriented embedded development', level: 'Expert' },
    { name: 'C#', description: 'High-level application development', level: 'Advanced' },
    { name: 'Assembly', description: 'Direct hardware control', level: 'Expert' }
  ];

  const microcontrollers = [
    { name: 'TI Microcontrollers', description: 'MSP430, Tiva C Series, SimpleLink' },
    { name: 'Arduino', description: 'Rapid prototyping and development' },
    { name: 'Raspberry Pi', description: 'Linux-based embedded computing' },
    { name: 'ARM Cortex', description: 'High-performance 32-bit processors' },
    { name: 'PIC Microcontrollers', description: 'Microchip PIC family' },
    { name: 'ESP32/ESP8266', description: 'Wi-Fi enabled microcontrollers' }
  ];

  const communicationProtocols = [
    {
      category: 'Wireless',
      protocols: [
        { name: 'Bluetooth Low Energy (BLE)', icon: Bluetooth },
        { name: 'WiFi', icon: Wifi },
        { name: 'Sub-1 GHz', icon: Radio }
      ]
    },
    {
      category: 'Wired',
      protocols: [
        { name: 'SPI', icon: Zap },
        { name: 'I2C', icon: Zap },
        { name: 'UART/RS232', icon: Zap },
        { name: '1WIRE', icon: Zap }
      ]
    }
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: 'Real-Time Operating Systems (RTOS)',
      description: 'Implementation of RTOS for time-critical applications with deterministic behavior.'
    },
    {
      icon: Code,
      title: 'Single & Multi-threaded Systems',
      description: 'Efficient task management and resource allocation for both simple and complex systems.'
    },
    {
      icon: Timer,
      title: 'Timer Integration & Real Time Clock',
      description: 'Precise timing control and scheduling for time-sensitive embedded applications.'
    },
    {
      icon: CircuitBoard,
      title: 'Internet of Things (IoT)',
      description: 'Seamless integration of embedded systems with IoT platforms and cloud services.'
    },
    {
      icon: Bug,
      title: 'Product Debugging and Testing',
      description: 'Comprehensive debugging tools and methodologies to ensure reliable firmware.'
    },
    {
      icon: Microchip,
      title: 'Firmware Development',
      description: 'Custom firmware solutions optimized for your specific hardware requirements.'
    }
  ];

  const expertise = [
    'Microcontroller peripherals optimization',
    'Limited memory management',
    'RAM and ROM optimization',
    'CPU cycle efficiency',
    'Power management and low-power design',
    'Hardware abstraction layers',
    'Device drivers development',
    'Boot loaders and system initialization'
  ];

  return (
    <div className="min-h-screen dark bg-gray-900">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <CircuitBoard className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">Embedded Systems</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At CEControl, we consider ourselves experts when it comes to embedded systems.
            </p>
            
            <div className="bg-card p-8 rounded-lg border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Embedded systems have limitations and knowing these limitations is what makes us great. 
                We use this understanding of microcontrollers and their peripherals, our skill to handle 
                limited memory, and our knowledge of RAM, ROM, and CPU cycles to create efficient and 
                reliable firmware that exceeds expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Programming Languages</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We work with industry-standard programming languages to deliver optimal performance 
              and maintainability for your embedded systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{lang.name}</h3>
                    <Badge variant="secondary" className="mb-4">{lang.level}</Badge>
                    <p className="text-sm text-muted-foreground">{lang.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">What We Offer</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive embedded systems development services covering every aspect 
              of firmware and hardware integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <capability.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-4">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Microcontrollers & Platforms */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Supported Platforms</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We have extensive experience with a wide range of microcontrollers and development platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microcontrollers.map((micro, index) => (
              <motion.div
                key={micro.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium mb-2">{micro.name}</h3>
                <p className="text-sm text-muted-foreground">{micro.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Protocols */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Communication Protocols</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Expertise in both wireless and wired communication protocols for seamless device connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {communicationProtocols.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-medium mb-6 text-center">{category.category}</h3>
                    <div className="space-y-4">
                      {category.protocols.map((protocol, index) => (
                        <div key={protocol.name} className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <protocol.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium">{protocol.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Technical Expertise</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our deep understanding of embedded system constraints and optimization techniques 
                allows us to create firmware that maximizes performance while minimizing resource usage.
              </p>
              
              <Button size="lg" className="group">
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let our embedded systems expertise bring your hardware vision to life with 
              efficient, reliable, and scalable firmware solutions.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
            >
              Start Your Embedded Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}