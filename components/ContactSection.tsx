import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';


export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@cecontrol.com',
      href: 'mailto:info@cecontrol.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(919) 699-7834',
      href: 'tel:+19196997834'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'PO Box 1452, Hillsborough, NC 27278',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-800 via-gray-900/90 to-gray-800/70">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">Get in Touch</h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Ready to bring your embedded project to life? Let's discuss how we can help 
            you exceed your goals with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're looking to update a device or starting from scratch, 
                we'll provide solutions to your toughest problems.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400/50 to-indigo-500/50 backdrop-blur-lg rounded-lg flex items-center justify-center border border-purple-400/50 shadow-xl">
                    <info.icon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="font-medium text-white hover:text-purple-200 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium text-white">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-purple-500/25 via-indigo-500/20 to-violet-500/25 backdrop-blur-2xl rounded-xl border border-purple-400/40 shadow-2xl p-10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <Input 
                      placeholder="Enter your full name" 
                      required 
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white">Company Name</label>
                  <Input 
                    placeholder="Your company name" 
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white">
                    Tell us about your project <span className="text-red-400">*</span>
                  </label>
                  <Textarea 
                    placeholder="Describe your embedded systems or IoT project requirements, timeline, and any specific challenges you're facing..."
                    className="min-h-32 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400"
                    required
                  />
                </div>

                <Button type="submit" className="w-full group bg-purple-600 hover:bg-purple-700 font-medium py-3 text-lg">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}