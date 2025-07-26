import { motion } from 'motion/react';
import { 
  TestTube, 
  CheckCircle, 
  Layers, 
  Settings, 
  Search,
  ArrowRight,
  Target,
  Clock,
  Shield,
  Zap,
  Bug,
  BarChart3
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function TestingProtocolPage() {
  const testingTypes = [
    {
      icon: TestTube,
      title: 'Unit Testing',
      description: 'A process where components of the application are individually tested to ensure seamless operation. This testing is one of the earliest forms of testing.',
      benefits: [
        'Early bug detection',
        'Code quality assurance',
        'Simplified debugging',
        'Documentation of code behavior'
      ],
      phase: 'Development',
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      icon: Layers,
      title: 'Integration Testing',
      description: 'Individual components of the application are combined and tested together. This type of testing helps expose interaction issues between code components.',
      benefits: [
        'Interface validation',
        'Data flow verification',
        'Module interaction testing',
        'System integration validation'
      ],
      phase: 'Integration',
      color: 'bg-green-500/10 text-green-600'
    },
    {
      icon: Settings,
      title: 'Functional Testing',
      description: 'The process where the application is checked to make sure that all functionality is present and is working within requirements.',
      benefits: [
        'Requirements validation',
        'User scenario testing',
        'Feature completeness verification',
        'Business logic validation'
      ],
      phase: 'System',
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      icon: Search,
      title: 'Exploratory Testing',
      description: 'Testing where there is no defined test protocol. Instead the functionality of the device is explored to find its limits. This testing is especially beneficial to find issues that have not yet been tested and to locate hard to find bugs in the code.',
      benefits: [
        'Edge case discovery',
        'Usability insights',
        'Unexpected behavior detection',
        'Risk-based testing approach'
      ],
      phase: 'Validation',
      color: 'bg-orange-500/10 text-orange-600'
    }
  ];

  const testingProcess = [
    {
      step: 1,
      title: 'Test Planning',
      description: 'Define testing strategy, scope, and requirements analysis',
      icon: Target
    },
    {
      step: 2,
      title: 'Test Design',
      description: 'Create test cases, test data, and testing environment setup',
      icon: Settings
    },
    {
      step: 3,
      title: 'Test Execution',
      description: 'Run tests systematically and document results',
      icon: Zap
    },
    {
      step: 4,
      title: 'Defect Analysis',
      description: 'Identify, classify, and prioritize issues found',
      icon: Bug
    },
    {
      step: 5,
      title: 'Reporting',
      description: 'Generate comprehensive test reports and metrics',
      icon: BarChart3
    }
  ];

  const qualityMetrics = [
    { metric: 'Code Coverage', target: '≥95%', description: 'Percentage of code exercised by tests' },
    { metric: 'Test Pass Rate', target: '≥99%', description: 'Percentage of tests passing consistently' },
    { metric: 'Defect Density', target: '<1 per KLOC', description: 'Number of defects per thousand lines of code' },
    { metric: 'Mean Time to Failure', target: '>1000 hours', description: 'Average time between system failures' }
  ];

  const testingTools = [
    'Unit test frameworks (CUnit, Unity)',
    'Static code analysis tools',
    'Hardware-in-the-loop (HIL) testing',
    'Automated test suites',
    'Code coverage analyzers',
    'Performance profiling tools',
    'Memory leak detection',
    'Real-time system analyzers'
  ];

  return (
    <div className="min-h-screen dark bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <TestTube className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">Testing Protocol</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Here at CEControl, we put your project through rigorous testing to ensure efficient running.
            </p>
            
            <div className="bg-card p-8 rounded-lg border">
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive testing approach combines multiple methodologies to validate every 
                aspect of your embedded system, from individual components to complete system integration, 
                ensuring reliability and performance that exceeds industry standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Our Testing Methodologies</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We employ a multi-layered testing approach to ensure your embedded systems 
              meet the highest standards of quality and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testingTypes.map((test, index) => (
              <motion.div
                key={test.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${test.color}`}>
                        <test.icon className="w-8 h-8" />
                      </div>
                      <Badge variant="outline">{test.phase}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-medium mb-4">{test.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {test.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm uppercase tracking-wide">Key Benefits</h4>
                      {test.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
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

      {/* Testing Process */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Our Testing Process</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A systematic approach to quality assurance that ensures comprehensive coverage 
              and reliable results throughout the development lifecycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {testingProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="font-medium mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Quality Metrics & Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We maintain stringent quality standards with measurable metrics to ensure 
                your embedded systems meet and exceed industry benchmarks for reliability and performance.
              </p>
              
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span>Industry-compliant testing standards</span>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <span>Continuous integration and testing</span>
              </div>
              <div className="flex items-center space-x-3 mb-8">
                <Target className="w-5 h-5 text-primary" />
                <span>Quantifiable quality objectives</span>
              </div>
              
              <Button size="lg" className="group">
                Learn About Our QA Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {qualityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg border"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{metric.metric}</h3>
                    <Badge variant="secondary">{metric.target}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Tools & Technologies */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Testing Tools & Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We utilize industry-leading tools and methodologies to provide comprehensive 
              testing coverage for your embedded systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testingTools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-4 rounded-lg border text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Ensure Your System's Reliability</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Don't leave quality to chance. Let our rigorous testing protocols validate 
              your embedded system's performance and reliability.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
            >
              Start Quality Assurance Testing
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}