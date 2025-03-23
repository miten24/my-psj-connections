
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Building, UserPlus, AtSign, Lock, User, Phone, MapPin, CircleCheck } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Define the form schema using zod
const formSchema = z.object({
  role: z.enum(['ngo', 'donor', 'admin'], {
    required_error: 'Please select a role',
  }),
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  phone: z.string().optional(),
  address: z.string().optional(),
  // NGO-specific fields
  registrationNumber: z.string().optional(),
  // Donor-specific fields
  interests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register: authRegister, isLoading } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: 'donor',
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      registrationNumber: '',
      interests: '',
    },
  });

  const handleRoleSelection = (role: UserRole) => {
    setSelectedRole(role);
    form.setValue('role', role);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      await authRegister({
        email: data.email,
        password: data.password,
        name: data.name,
        role: data.role,
      });
      
      toast({
        title: 'Registration successful!',
        description: data.role === 'ngo' 
          ? 'Your NGO account has been created and is pending verification.' 
          : 'Your donor account has been created successfully.',
      });
      
      // Redirect to appropriate page based on role
      navigate(data.role === 'ngo' ? '/ngo-portal' : '/donor-portal');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        variant: 'destructive',
        title: 'Registration failed',
        description: 'There was an error creating your account. Please try again.',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="max-w-2xl mx-auto my-12 px-4">
          <div className="border rounded-lg shadow-sm p-6">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
            
            {/* Role Selection */}
            {!selectedRole && (
              <div className="mb-8">
                <h2 className="text-lg font-medium text-center mb-4">I am a...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <button
                    onClick={() => handleRoleSelection('ngo')}
                    className="flex flex-col items-center p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <Building className="h-8 w-8 mb-2 text-primary" />
                    <span className="font-medium">NGO</span>
                    <span className="text-xs text-muted-foreground mt-1">Register your organization</span>
                  </button>
                  
                  <button
                    onClick={() => handleRoleSelection('donor')}
                    className="flex flex-col items-center p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <User className="h-8 w-8 mb-2 text-primary" />
                    <span className="font-medium">Donor</span>
                    <span className="text-xs text-muted-foreground mt-1">Support causes you care about</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Registration Form */}
            {selectedRole && (
              <div>
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    &larr; Change role
                  </button>
                  <div className="ml-4 flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                    {selectedRole === 'ngo' ? <Building className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    {selectedRole === 'ngo' ? 'NGO Registration' : 'Donor Registration'}
                  </div>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{selectedRole === 'ngo' ? 'Organization Name' : 'Full Name'}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-10" placeholder={selectedRole === 'ngo' ? 'Organization name' : 'Your full name'} {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-10" type="email" placeholder="you@example.com" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-10" type="password" placeholder="••••••••" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-10" placeholder="Your phone number" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input className="pl-10" placeholder="Your address or location" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* NGO-specific Fields */}
                    {selectedRole === 'ngo' && (
                      <FormField
                        control={form.control}
                        name="registrationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>NGO Registration Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CircleCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-10" placeholder="Your NGO registration number" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {/* Donor-specific Fields */}
                    {selectedRole === 'donor' && (
                      <FormField
                        control={form.control}
                        name="interests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interests</FormLabel>
                            <FormControl>
                              <Input placeholder="Health, Education, Environment, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Creating account...' : 'Create Account'}
                    </Button>
                  </form>
                </Form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
                
                {selectedRole === 'ngo' && (
                  <div className="mt-6 p-4 border border-primary/20 bg-primary/5 rounded-lg">
                    <h3 className="text-sm font-medium flex items-center gap-2">
                      <CircleCheck className="h-4 w-4 text-primary" />
                      NGO Verification Process
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      After registration, your NGO profile will undergo a verification process. Once verified, you'll receive a trust badge that will be displayed to potential donors.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
