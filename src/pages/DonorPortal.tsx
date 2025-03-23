
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Heart, Users, BarChart3, CheckCircle, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DonorPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-8">
                <div className="inline-flex items-center bg-secondary/10 text-secondary rounded-full px-3 py-1 text-sm font-medium mb-6 animate-fade-in">
                  <span className="bg-secondary h-2 w-2 rounded-full mr-2"></span>
                  Donor Portal
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                  Make an Impact with Your Donations
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                  Discover NGOs aligned with your values and interests. Support causes you care about and track the impact of your contributions.
                </p>
                
                <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/register">Create Donor Account</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 md:mt-0 md:w-1/2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="glass-card rounded-xl overflow-hidden border">
                  <div className="bg-secondary/5 p-8 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-secondary" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Donor Dashboard Preview</h3>
                    <p className="text-muted-foreground mb-4">Access your personalized dashboard to discover NGOs and track your impact.</p>
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
        
        {/* How It Works Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works for Donors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple process designed to help you find and support causes you care about.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard delay={100} className="p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up and indicate your donation interests, preferences, and the causes you're passionate about.
                </p>
              </AnimatedCard>
              
              <AnimatedCard delay={200} className="p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Handshake className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Get Matched with NGOs</h3>
                <p className="text-muted-foreground">
                  Our system automatically connects you with verified NGOs that align with your interests.
                </p>
              </AnimatedCard>
              
              <AnimatedCard delay={300} className="p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Make a Difference</h3>
                <p className="text-muted-foreground">
                  Donate funds or goods to your chosen NGOs and track the impact of your contributions over time.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Features for Donors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tools to help you find the right causes and maximize your impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6">
                <div className="bg-secondary/10 p-3 rounded-full h-fit">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verified NGO Listings</h3>
                  <p className="text-muted-foreground mb-4">
                    Donate with confidence knowing that all NGOs on our platform are verified for authenticity.
                  </p>
                  <ul className="space-y-2">
                    {['Government verification', 'Transparency badges', 'Detailed NGO profiles', 'Success stories and testimonials'].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="h-2 w-2 bg-secondary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-secondary/10 p-3 rounded-full h-fit">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
                  <p className="text-muted-foreground mb-4">
                    See how your donations are making a difference with detailed impact reports.
                  </p>
                  <ul className="space-y-2">
                    {['Donation history', 'Impact metrics', 'Regular NGO updates', 'Personalized donation certificates'].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="h-2 w-2 bg-secondary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* NGO Cards Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover NGOs That Match Your Interests</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here's a preview of how NGO matches will appear in your personalized dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Health Alliance",
                  category: "Healthcare",
                  needs: "Medical supplies, Funds",
                  match: "Perfect Match",
                  verified: true
                },
                {
                  name: "Education First",
                  category: "Education",
                  needs: "Books, School supplies",
                  match: "Strong Match",
                  verified: true
                },
                {
                  name: "Green Earth Initiative",
                  category: "Environment",
                  needs: "Volunteers, Funds",
                  match: "Good Match",
                  verified: false
                }
              ].map((ngo, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden hover:shadow-glass-hover transition-all duration-300 group">
                  <div className="h-40 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/30">{ngo.name.charAt(0)}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{ngo.name}</h3>
                      {ngo.verified && (
                        <div className="bg-secondary/10 p-1 rounded-full">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="inline-flex items-center bg-muted/50 text-muted-foreground rounded-full px-2 py-1 text-xs font-medium">
                        {ngo.category}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Needs:</strong> {ngo.needs}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center bg-secondary/10 text-secondary rounded-full px-2 py-1 text-xs font-medium">
                        {ngo.match}
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary group-hover:text-primary/80 transition-colors">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary/5 to-primary/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our community of donors and start supporting causes you're passionate about today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/register">Create Donor Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/browse-ngos">Browse NGOs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonorPortal;
