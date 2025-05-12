import React from 'react';
import { Code, Laptop, Palette, Database, Layout, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Creating responsive, modern websites with clean code and optimal performance.',
    icon: Code,
    color: 'text-portfolio-blue',
    bgColor: 'bg-portfolio-blue/10',
  },
  {
    title: 'Frontend Frameworks',
    description:
      'Building interactive UIs with React, Next.js, and other modern frameworks.',
    icon: Laptop,
    color: 'text-portfolio-pink',
    bgColor: 'bg-portfolio-pink/10',
  },
  {
    title: 'UI/UX Design',
    description:
      'Transforming designs into pixel-perfect, responsive user interfaces.',
    icon: Palette,
    color: 'text-portfolio-mint',
    bgColor: 'bg-portfolio-mint/10',
  },
  {
    title: 'REST API Integration',
    description:
      'Connecting frontend applications with backend services and APIs.',
    icon: Database,
    color: 'text-portfolio-orange',
    bgColor: 'bg-portfolio-orange/10',
  },
  {
    title: 'Responsive Design',
    description:
      'Ensuring websites look and function perfectly across all devices and screen sizes.',
    icon: Layout,
    color: 'text-portfolio-purple',
    bgColor: 'bg-portfolio-purple/10',
  },
  {
    title: 'Web Performance',
    description:
      'Optimizing website speed and performance for better user experience and SEO.',
    icon: Globe,
    color: 'text-portfolio-green',
    bgColor: 'bg-portfolio-green/10',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-portfolio-darker relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

        {/* Curved line */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-portfolio-dark to-transparent"></div>

        {/* Tech stack visualization */}
        <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full border border-portfolio-mint/10 opacity-50"></div>
        <div className="absolute -left-10 top-1/3 w-20 h-20 rounded-full border border-portfolio-blue/10 opacity-50"></div>
        <div className="absolute right-10 bottom-20 w-32 h-32 rounded-md rotate-12 border border-portfolio-pink/10 opacity-50"></div>

        {/* Abstract wireframe */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-40 border-t border-l border-r border-white/5 rounded-t-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1 bg-portfolio-mint mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            I offer comprehensive frontend development services to bring your
            web projects to life.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -left-6 -top-6 bg-portfolio-dark text-white py-2 px-6 rounded-full border border-white/10 z-20">
            <span className="text-4xl font-bold">03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-portfolio-card rounded-lg p-6 border border-white/5 hover:border-white/20 transition-all hover:translate-y-[-5px] animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div
                  className={cn(
                    'w-14 h-14 rounded-lg flex items-center justify-center mb-4',
                    service.bgColor
                  )}
                >
                  <service.icon size={28} className={service.color} />
                </div>

                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
