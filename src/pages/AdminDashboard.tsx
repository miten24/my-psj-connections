
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, BarChart3, Users, Building, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useMockData } from '@/hooks/useMockData';

const AdminDashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { ngos, donors, matches, approveNGO, rejectNGO } = useMockData();
  const [activeTab, setActiveTab] = useState("ngos");

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-muted-foreground">You don't have permission to access this page.</p>
      </div>
    );
  }

  const handleApprove = (id: string) => {
    approveNGO(id);
    toast({
      title: "NGO Approved",
      description: "The NGO has been verified and approved.",
    });
  };

  const handleReject = (id: string) => {
    rejectNGO(id);
    toast({
      title: "NGO Rejected",
      description: "The NGO has been rejected.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-2">Manage NGOs, donors, and platform data</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-2 bg-muted/30 rounded-md px-3 py-1.5">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Logged in as Admin</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  NGOs
                </CardTitle>
                <CardDescription>Total registered NGOs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{ngos.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {ngos.filter(ngo => ngo.isVerified).length} verified, {ngos.filter(ngo => !ngo.isVerified).length} pending
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Donors
                </CardTitle>
                <CardDescription>Total registered donors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{donors.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {matches.length} successful matches
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-orange-500" />
                  Donations
                </CardTitle>
                <CardDescription>Platform statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$12,480</div>
                <div className="text-xs text-muted-foreground mt-1">
                  From 32 transactions
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="ngos" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-3 w-full md:w-fit">
              <TabsTrigger value="ngos">NGOs</TabsTrigger>
              <TabsTrigger value="donors">Donors</TabsTrigger>
              <TabsTrigger value="matches">Matches</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ngos" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>NGO Verification</CardTitle>
                  <CardDescription>
                    Review and verify NGO applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Focus Area</TableHead>
                        <TableHead>Needs</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ngos.map((ngo) => (
                        <TableRow key={ngo.id}>
                          <TableCell className="font-medium">{ngo.name}</TableCell>
                          <TableCell>{ngo.email}</TableCell>
                          <TableCell>{ngo.focusAreas.join(', ')}</TableCell>
                          <TableCell>{ngo.needs.join(', ')}</TableCell>
                          <TableCell>
                            {ngo.isVerified ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Verified
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pending
                              </span>
                            )}
                          </TableCell>
                          <TableCell>
                            {!ngo.isVerified && (
                              <div className="flex space-x-2">
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="text-green-600 border-green-600 hover:bg-green-50"
                                  onClick={() => handleApprove(ngo.id)}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="text-red-600 border-red-600 hover:bg-red-50"
                                  onClick={() => handleReject(ngo.id)}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </div>
                            )}
                            {ngo.isVerified && "N/A"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="donors" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Registered Donors</CardTitle>
                  <CardDescription>
                    Monitor donor activity and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Interests</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Joined</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {donors.map((donor) => (
                        <TableRow key={donor.id}>
                          <TableCell className="font-medium">{donor.name}</TableCell>
                          <TableCell>{donor.email}</TableCell>
                          <TableCell>{donor.interests.join(', ')}</TableCell>
                          <TableCell>{donor.location}</TableCell>
                          <TableCell>{donor.joinedDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="matches" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Match Results</CardTitle>
                  <CardDescription>
                    Track successful donor-NGO matches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>NGO</TableHead>
                        <TableHead>Donor</TableHead>
                        <TableHead>Match Type</TableHead>
                        <TableHead>Resources</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {matches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell className="font-medium">
                            {ngos.find(ngo => ngo.id === match.ngoId)?.name}
                          </TableCell>
                          <TableCell>
                            {donors.find(donor => donor.id === match.donorId)?.name}
                          </TableCell>
                          <TableCell>
                            {match.matchType === 'perfect' ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Perfect Match
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Partial Match
                              </span>
                            )}
                          </TableCell>
                          <TableCell>{match.resources.join(', ')}</TableCell>
                          <TableCell>{match.date}</TableCell>
                          <TableCell>
                            {match.completed ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                In Progress
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
