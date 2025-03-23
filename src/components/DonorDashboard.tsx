
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, Heart, MapPin, Search } from 'lucide-react';
import { useMockData } from '@/hooks/useMockData';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const DonorDashboard = () => {
  const { user } = useAuth();
  const { ngos, matches } = useMockData();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("perfect-matches");
  
  // Get current donor's matches
  const donorMatches = matches.filter(match => 
    user && match.donorId === user.id
  );
  
  // Get perfect matches
  const perfectMatches = donorMatches.filter(match => match.matchType === 'perfect');
  
  // Get partial matches
  const partialMatches = donorMatches.filter(match => match.matchType === 'partial');
  
  // Get recommended NGOs based on donor interests
  const recommendedNGOs = ngos.filter(ngo => 
    ngo.isVerified && user && 
    user.role === 'donor' && 
    ngo.focusAreas.some(area => 
      user.interests && user.interests.includes(area)
    )
  );

  const handleNGOCardClick = (ngoId: string, ngoName: string) => {
    // In a real application, this would redirect to the NGO's custom website
    // For now, we'll use a toast to inform the user
    toast({
      title: "Visiting NGO Website",
      description: `You are now visiting ${ngoName}'s website.`,
    });
    
    // This would be the URL in a real application
    // window.location.href = `https://mypsj.org/ngo/${ngoName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome, {user?.name}</h2>
        <p className="text-muted-foreground">Find and support causes you care about.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Perfect Matches
            </CardTitle>
            <CardDescription>
              NGOs that match all your preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{perfectMatches.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              Partial Matches
            </CardTitle>
            <CardDescription>
              NGOs that match some of your preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{partialMatches.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              Local NGOs
            </CardTitle>
            <CardDescription>
              NGOs in your area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {ngos.filter(ngo => 
                ngo.isVerified && ngo.location === user?.location
              ).length}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs 
        defaultValue="perfect-matches" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="perfect-matches">Perfect Matches</TabsTrigger>
            <TabsTrigger value="partial-matches">Partial Matches</TabsTrigger>
            <TabsTrigger value="all-ngos">All NGOs</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="text-sm bg-transparent border-0 focus:ring-0">
              <option>Relevance</option>
              <option>Location</option>
              <option>Needs</option>
            </select>
          </div>
        </div>
        
        <TabsContent value="perfect-matches">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfectMatches.length > 0 ? (
              perfectMatches.map(match => {
                const ngo = ngos.find(n => n.id === match.ngoId);
                if (!ngo) return null;
                
                return (
                  <Card 
                    key={match.id} 
                    className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleNGOCardClick(ngo.id, ngo.name)}
                  >
                    <div className="h-24 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-3xl font-bold text-primary/30">{ngo.name.charAt(0)}</div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{ngo.name}</CardTitle>
                        {ngo.isVerified && (
                          <div className="bg-green-100 p-1 rounded-full">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {ngo.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {ngo.focusAreas.map(area => (
                          <span key={area} className="bg-muted rounded-full px-2 py-1 text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{ngo.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Perfect Match
                      </div>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <Heart className="h-12 w-12 text-muted stroke-1 mb-2" />
                <h3 className="text-lg font-semibold mb-1">No perfect matches yet</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We're looking for perfect matches based on your profile preferences.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="partial-matches">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partialMatches.length > 0 ? (
              partialMatches.map(match => {
                const ngo = ngos.find(n => n.id === match.ngoId);
                if (!ngo) return null;
                
                return (
                  <Card 
                    key={match.id} 
                    className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleNGOCardClick(ngo.id, ngo.name)}
                  >
                    <div className="h-24 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-3xl font-bold text-primary/30">{ngo.name.charAt(0)}</div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{ngo.name}</CardTitle>
                        {ngo.isVerified && (
                          <div className="bg-green-100 p-1 rounded-full">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {ngo.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {ngo.focusAreas.map(area => (
                          <span key={area} className="bg-muted rounded-full px-2 py-1 text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{ngo.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Partial Match
                      </div>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <Heart className="h-12 w-12 text-muted stroke-1 mb-2" />
                <h3 className="text-lg font-semibold mb-1">No partial matches yet</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We're working on finding NGOs that partially match your interests.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="all-ngos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngos.filter(ngo => ngo.isVerified).map(ngo => (
              <Card 
                key={ngo.id} 
                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleNGOCardClick(ngo.id, ngo.name)}
              >
                <div className="h-24 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-3xl font-bold text-primary/30">{ngo.name.charAt(0)}</div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{ngo.name}</CardTitle>
                    {ngo.isVerified && (
                      <div className="bg-green-100 p-1 rounded-full">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {ngo.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {ngo.focusAreas.map(area => (
                      <span key={area} className="bg-muted rounded-full px-2 py-1 text-xs">
                        {area}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{ngo.description}</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button size="sm" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
