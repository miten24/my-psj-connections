
import React from 'react';
import { Handshake, Shield, BarChart, Globe } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Handshake className="h-6 w-6" />,
      title: 'Smart Matchmaking',
      description: 'Our intelligent system connects donors with NGOs that align with their interests and values.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Verified NGOs',
      description: 'Every NGO on our platform undergoes a thorough verification process to ensure authenticity.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Impact Tracking',
      description: 'Track how your donations are making a difference with transparent impact reporting.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'NGO Websites',
      description: 'NGOs can create customizable websites to better showcase their mission and work.'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose My PSJ Foundation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've reimagined the donation experience to create meaningful connections and maximize impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
