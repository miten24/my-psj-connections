
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useMockData } from '@/hooks/useMockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Building, Check, ExternalLink, Calendar, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NGOProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { ngos } = useMockData();
  const { toast } = useToast();
  
  const ngo = ngos.find(n => n.id === id);
  
  if (!ngo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">NGO Not Found</h2>
            <p className="text-muted-foreground">The NGO you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleDonate = () => {
    toast({
      title: "Donation Process",
      description: "This would start the donation process to " + ngo.name,
    });
  };
  
  const handleContact = () => {
    toast({
      title: "Contact NGO",
      description: "This would contact " + ngo.name,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="bg-white dark:bg-gray-900 rounded-t-lg p-4 flex items-center gap-4 shadow-sm">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                  {ngo.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold">{ngo.name}</h1>
                    {ngo.isVerified && (
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{ngo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {ngo.name}</CardTitle>
                  <CardDescription>Our mission and purpose</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {ngo.description}
                  </p>
                  <p className="text-muted-foreground">
                    We are committed to making a difference in our community through targeted initiatives in 
                    {ngo.focusAreas.map((area, i) => (
                      <span key={area}>
                        {i === 0 ? ' ' : i === ngo.focusAreas.length - 1 ? ' and ' : ', '}
                        <span className="font-medium text-foreground">{area}</span>
                      </span>
                    ))}.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Current Needs</CardTitle>
                  <CardDescription>How you can help us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-muted-foreground">
                      We're currently looking for support in the following areas:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ngo.needs.map(need => (
                      <div key={need} className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-primary" />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Our Impact</CardTitle>
                  <CardDescription>What we've achieved so far</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">People Helped</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">20+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Years Active</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Support Us</CardTitle>
                  <CardDescription>Make a difference today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleDonate} className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Now
                  </Button>
                  <Button variant="outline" onClick={handleContact} className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{ngo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{ngo.location}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-md p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">Fundraising Gala</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Join us for our annual fundraising event with special guests and entertainment.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      June 15, 2023 • 7:00 PM
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">Community Workshop</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Learn how to get involved and make a difference in your community.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      July 8, 2023 • 10:00 AM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t text-center">
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <span>Powered by</span>
              <strong className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">My PSJ Foundation</strong>
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NGOProfile;
