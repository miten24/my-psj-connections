
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Handshake } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-8 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Hero Text Content */}
          <div className="md:w-1/2 py-12 md:pr-8">
            <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-6 animate-fade-in">
              <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
              Making Progress, Shaping Journeys
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-slide-up">
              Connecting <span className="text-primary">NGOs</span> with <span className="text-secondary">Donors</span> for a Better World
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
              My PSJ Foundation makes the donation process easy, transparent, and impactful through intelligent matchmaking and verified NGO partners.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button asChild size="lg" className="rounded-full shadow-lg group">
                <Link to="/register" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Handshake className="h-5 w-5 text-primary" />
                </div>
                <span>100+ NGOs Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
                <span>1000+ Donations Made</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="relative glass-card rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-1">
                  <div className="bg-white rounded-2xl p-8 flex flex-col gap-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="h-8 w-32 bg-primary/10 rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="h-8 w-32 bg-secondary/10 rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="h-10 w-32 bg-primary/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
