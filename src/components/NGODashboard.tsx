
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Edit, Globe, Palette, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const NGODashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTheme, setActiveTheme] = useState('light');
  const [siteContent, setSiteContent] = useState({
    about: 'We are a non-profit organization dedicated to serving our community through various programs and initiatives.',
    mission: 'Our mission is to improve the lives of those in need by providing essential resources and support.',
    contact: 'contact@example.org | (123) 456-7890 | 123 Main St, City, State 12345'
  });
  const [editMode, setEditMode] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState('');

  const handleEdit = (field: string) => {
    setTempContent(siteContent[field as keyof typeof siteContent]);
    setEditMode(field);
  };

  const handleSave = () => {
    if (editMode) {
      setSiteContent({
        ...siteContent,
        [editMode]: tempContent
      });
      setEditMode(null);
      
      toast({
        title: "Content Updated",
        description: "Your website content has been updated successfully.",
      });
    }
  };

  const handleCancel = () => {
    setEditMode(null);
  };

  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme);
    
    toast({
      title: "Theme Changed",
      description: `Your website theme has been updated to ${theme}.`,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome, {user?.name}</h2>
        <p className="text-muted-foreground">Manage your organization profile and website.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Verification Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user?.isVerified ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Verified NGO</span>
              </div>
            ) : (
              <div className="text-yellow-600">Pending Verification</div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              Donor Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <div className="text-xs text-muted-foreground mt-1">
              2 perfect, 1 partial
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Globe className="h-5 w-5 text-orange-500" />
              Website Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">127</div>
            <div className="text-xs text-muted-foreground mt-1">
              Last 30 days
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="website" className="space-y-6">
        <TabsList>
          <TabsTrigger value="website">Website Customization</TabsTrigger>
          <TabsTrigger value="theme">Theme Settings</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="website" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Us</CardTitle>
              <CardDescription>
                Edit the "About Us" section of your NGO website
              </CardDescription>
            </CardHeader>
            <CardContent>
              {editMode === 'about' ? (
                <div className="space-y-4">
                  <textarea
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save</Button>
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <p className="text-muted-foreground">{siteContent.about}</p>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit('about')}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Edit the "Our Mission" section of your NGO website
              </CardDescription>
            </CardHeader>
            <CardContent>
              {editMode === 'mission' ? (
                <div className="space-y-4">
                  <textarea
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save</Button>
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <p className="text-muted-foreground">{siteContent.mission}</p>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit('mission')}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Edit your organization's contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              {editMode === 'contact' ? (
                <div className="space-y-4">
                  <textarea
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save</Button>
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <p className="text-muted-foreground">{siteContent.contact}</p>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit('contact')}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="theme" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Theme</CardTitle>
              <CardDescription>
                Choose a theme for your NGO website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ThemeCard
                  name="Light"
                  description="Clean, bright theme with emphasis on readability"
                  isActive={activeTheme === 'light'}
                  onClick={() => handleThemeChange('light')}
                  bgClass="bg-white"
                  textClass="text-black"
                />
                
                <ThemeCard
                  name="Dark"
                  description="Modern dark theme that reduces eye strain"
                  isActive={activeTheme === 'dark'}
                  onClick={() => handleThemeChange('dark')}
                  bgClass="bg-gray-900"
                  textClass="text-white"
                />
                
                <ThemeCard
                  name="Nature"
                  description="Green theme inspired by nature and growth"
                  isActive={activeTheme === 'nature'}
                  onClick={() => handleThemeChange('nature')}
                  bgClass="bg-green-50"
                  textClass="text-green-900"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Font Style</CardTitle>
              <CardDescription>
                Select a font style for your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="primary-font">Primary Font</Label>
                  <select 
                    id="primary-font" 
                    className="w-full p-2 border rounded-md mt-1"
                  >
                    <option>Sans Serif (Modern)</option>
                    <option>Serif (Traditional)</option>
                    <option>Rounded (Friendly)</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="font-size">Base Font Size</Label>
                  <select 
                    id="font-size" 
                    className="w-full p-2 border rounded-md mt-1"
                  >
                    <option>Small</option>
                    <option selected>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Font Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Preview</CardTitle>
              <CardDescription>
                Preview how your website will look to visitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`border rounded-md p-6 ${
                activeTheme === 'dark' ? 'bg-gray-900 text-white' : 
                activeTheme === 'nature' ? 'bg-green-50 text-green-900' : 
                'bg-white text-black'
              }`}>
                <h2 className="text-2xl font-bold mb-4">{user?.name}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">About Us</h3>
                  <p>{siteContent.about}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p>{siteContent.mission}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                  <p>{siteContent.contact}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">URL: mypsj.org/ngo/{user?.name?.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>
              <Button>Publish Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ThemeCardProps {
  name: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  bgClass: string;
  textClass: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({
  name,
  description,
  isActive,
  onClick,
  bgClass,
  textClass
}) => {
  return (
    <div 
      className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
        isActive ? 'ring-2 ring-primary ring-offset-2' : 'hover:border-primary/50'
      }`}
      onClick={onClick}
    >
      <div className={`h-20 ${bgClass} flex items-center justify-center`}>
        <Palette className={`h-6 w-6 ${textClass}`} />
      </div>
      <div className="p-3">
        <h4 className="font-medium flex items-center justify-between">
          {name}
          {isActive && <CheckCircle className="h-4 w-4 text-primary" />}
        </h4>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};
