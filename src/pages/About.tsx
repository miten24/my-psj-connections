
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle, HeartHandshake, Globe, GraduationCap } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                About My PSJ Foundation
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                Making Progress, Shaping Journeys through transparent and impactful connections between donors and NGOs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At My PSJ Foundation, we believe in the power of connections. Our platform serves as a bridge between passionate donors and dedicated NGOs, making the donation process easy, transparent, and impactful.
                </p>
                <p className="text-muted-foreground mb-6">
                  We've built a community-driven ecosystem where trust and reliability are at the forefront, and where both donors and NGOs can find their perfect match to create meaningful change together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p>Facilitating transparent and trusted connections</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p>Making donation processes simple and efficient</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p>Creating meaningful impact through smart matchmaking</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="glass-card rounded-xl overflow-hidden border p-8 flex flex-col items-center">
                  <HeartHandshake className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-center">Making Progress, Shaping Journeys</h3>
                  <p className="text-muted-foreground text-center">
                    Our tagline represents our commitment to facilitating progress for NGOs and shaping meaningful journeys for donors who want to make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at My PSJ Foundation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard delay={100} className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
                <p className="text-muted-foreground">
                  We verify NGOs and provide clear insights into how donations are used, building a foundation of trust for all platform users.
                </p>
              </AnimatedCard>
              
              <AnimatedCard delay={200} className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach, Local Impact</h3>
                <p className="text-muted-foreground">
                  Our platform connects donors worldwide with local NGOs, ensuring that help reaches where it's needed most effectively.
                </p>
              </AnimatedCard>
              
              <AnimatedCard delay={300} className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  We're dedicated to continuously improving our platform, empowering NGOs with tools for success and donors with meaningful giving experiences.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>
        
        {/* Team Section (Optional) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind My PSJ Foundation who work tirelessly to create meaningful connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Placeholder for team members */}
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-muted rounded-full mb-4"></div>
                  <h3 className="font-semibold">Team Member {index}</h3>
                  <p className="text-sm text-muted-foreground">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission Today</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're an NGO looking for support or a donor wanting to make a difference, we invite you to become part of our growing community.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
