
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Building, CheckCircle, Handshake, Globe, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NGOPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-8">
                <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-6 animate-fade-in">
                  <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
                  NGO Portal
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                  Connect with Donors Who Share Your Mission
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                  Join our platform to showcase your work, build trust with verified badges, and connect with donors who are passionate about your cause.
                </p>
                
                <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <Button asChild size="lg">
                    <Link to="/register">Register Your NGO</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 md:mt-0 md:w-1/2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="glass-card rounded-xl overflow-hidden border">
                  <div className="bg-primary/5 p-8 flex items-center justify-center">
                    <Building className="h-16 w-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">NGO Dashboard Preview</h3>
                    <p className="text-muted-foreground mb-4">Your control center for managing your profile, needs, and donor connections.</p>
                    <div className="bg-muted/40 rounded-lg p-4">
                      <div className="h-4 w-3/4 bg-muted rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-muted rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works for NGOs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've designed a streamlined process to help you connect with donors and showcase your impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard delay={100} className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Register & Verify</h3>
                <p className="text-muted-foreground">
                  Create your profile and undergo our verification process to earn a trust badge that builds donor confidence.
                </p>
              </AnimatedCard>
              
              <AnimatedCard delay={200} className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Share Your Needs</h3>
                <p className="text-muted-foreground">
                  List your specific requirements, whether it's funding, supplies, or volunteer support.
                </p>
              </AnimatedCard>
              
              <AnimatedCard delay={300} className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Connect with Donors</h3>
                <p className="text-muted-foreground">
                  Our matchmaking system connects you with donors who align with your mission and interests.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Features for NGOs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tools and services designed to help your organization thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Website Builder</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a professional website to showcase your mission, work, and impact without technical expertise.
                  </p>
                  <ul className="space-y-2">
                    {['Multiple design templates', 'Blog integration', 'Photo and video galleries', 'Mobile-responsive design'].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">SEO & Marketing Tools</h3>
                  <p className="text-muted-foreground mb-4">
                    Increase your visibility and reach more potential donors with our specialized tools.
                  </p>
                  <ul className="space-y-2">
                    {['Search engine optimization', 'Social media integration', 'Email campaign management', 'Performance analytics'].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect with Donors?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our growing community of NGOs and start making meaningful connections that advance your mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/register">Register Your NGO</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NGOPortal;
