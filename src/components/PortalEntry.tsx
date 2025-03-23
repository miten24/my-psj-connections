
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const PortalEntry = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Portal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're an NGO looking to reach donors or a donor wanting to make a difference, we have the perfect portal for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* NGO Portal Card */}
          <div className="portal-card ngo-portal-card group">
            <div className="flex flex-col h-full">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Building className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-2">NGO Portal</h3>
              
              <p className="text-muted-foreground mb-6">
                Register your organization, showcase your mission, and connect with donors who share your vision.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Get verified and earn trust badges', 'List your specific needs and interests', 'Create a customizable website', 'Receive targeted donations'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button asChild className="group/btn w-full">
                  <Link to="/ngo-portal" className="flex items-center justify-center">
                    Enter NGO Portal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Donor Portal Card */}
          <div className="portal-card donor-portal-card group">
            <div className="flex flex-col h-full">
              <div className="bg-secondary/10 p-3 rounded-full w-fit mb-6">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-2">Donor Portal</h3>
              
              <p className="text-muted-foreground mb-6">
                Discover organizations aligned with your values and make donations that create meaningful impact.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Create a personalized donor profile', 'Get matched with compatible NGOs', 'Track the impact of your donations', 'Connect directly with organizations'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                      <span className="h-2 w-2 bg-secondary rounded-full"></span>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button asChild variant="secondary" className="group/btn w-full">
                  <Link to="/donor-portal" className="flex items-center justify-center">
                    Enter Donor Portal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
