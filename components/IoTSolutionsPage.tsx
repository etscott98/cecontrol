import { motion } from 'motion/react';
import { 
  Wifi, 
  Shield, 
  Download, 
  Smartphone, 
  ArrowRight, 
  CheckCircle,
  Cloud,
  Lock,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function IoTSolutionsPage() {
  const offerings = [
    {
      icon: Shield,
      title: 'Security Protocols',
      description: 'Comprehensive security implementation to protect your IoT devices and data from threats.',
      features: ['End-to-end encryption', 'Secure authentication', 'Data integrity protection', 'Vulnerability assessment']
    },
    {
      icon: Download,
      title: 'Over-the-Air (OTA) Firmware Updates',
      description: 'Seamless remote firmware updates to keep your devices current and secure.',
      features: ['Remote deployment', 'Rollback capabilities', 'Version management', 'Update verification']
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Testing',
      description: 'Rigorous testing of mobile applications that interface with your IoT devices.',
      features: ['Cross-platform testing', 'Performance validation', 'User experience testing', 'Integration testing']
    }
  ];

  const capabilities = [
    'Cloud platform integration',
    'Real-time data streaming',
    'Device management portals',
    'Analytics and insights',
    'Scalable architecture',
    'Multi-protocol support',
    'Edge computing solutions',
    'API development'
  ];

  const technologies = [
    { name: 'WiFi', description: 'High-speed wireless connectivity' },
    { name: 'Bluetooth Low Energy', description: 'Energy-efficient short-range communication' },
    { name: 'LoRaWAN', description: 'Long-range, low-power wide area network' },
    { name: 'Cellular IoT', description: 'LTE-M and NB-IoT connectivity' },
    { name: 'Zigbee', description: 'Mesh networking for smart home applications' },
    { name: 'Thread', description: 'IPv6-based mesh networking protocol' }
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
              <Wifi className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">IoT Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At CEControl, we are up to date with the current IoT trends and capabilities 
              to keep your project ahead of the game.
            </p>
            
            <div className="bg-card p-8 rounded-lg border">
              <p className="text-muted-foreground leading-relaxed">
                We are equipped to handle full-stack development to get your project from point A to B 
                as efficiently as possible. Whether you need to integrate connectivity into an existing 
                product or have a new concept you are looking to implement, our comprehensive IoT 
                solutions will fit your project's needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-32">
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
              Our comprehensive IoT solutions cover every aspect of connected device development, 
              from security to deployment and ongoing maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <offering.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4">{offering.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {offering.description}
                    </p>
                    
                    <div className="space-y-3">
                      {offering.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
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

      {/* Full-Stack Capabilities */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Full-Stack IoT Development</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From device firmware to cloud infrastructure, we handle every layer of your IoT solution. 
                Our expertise spans the entire technology stack, ensuring seamless integration and optimal performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5 text-primary" />
                  <span>Cloud platform development and integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-primary" />
                  <span>Enterprise-grade security implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Real-time data processing and analytics</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card p-4 rounded-lg border text-center"
                >
                  <span className="text-sm font-medium">{capability}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connectivity Technologies */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Connectivity Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We work with all major IoT connectivity protocols and technologies to ensure 
              your devices can communicate effectively in any environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Connect Your Devices?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let's discuss how our IoT solutions can transform your product and 
              keep you ahead of the competition.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
            >
              Start Your IoT Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}