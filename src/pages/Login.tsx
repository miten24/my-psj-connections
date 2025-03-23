
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, AtSign, Lock, ArrowRight, Building, User, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { login, isLoading, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'ngo') {
        navigate('/ngo-portal');
      } else if (user.role === 'donor') {
        navigate('/donor-portal');
      } else {
        navigate('/');
      }
    }
  }, [user, navigate]);
  
  // Check if there's a from location (used by ProtectedRoute)
  const from = location.state?.from?.pathname || '/';
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Simple validation
    if (!email || !password) {
      setFormError('Email and password are required');
      return;
    }
    
    try {
      await login(email, password);
      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.',
      });
      
      // Navigate will be handled by the useEffect above
    } catch (error) {
      console.error('Login error:', error);
      setFormError('Invalid email or password');
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
      });
    }
  };
  
  // Provide demo credentials for quick testing
  const fillDemoCredentials = (role: 'ngo' | 'donor' | 'admin') => {
    if (role === 'ngo') {
      setEmail('ngo1@mypsj.com');
      setPassword('password123');
    } else if (role === 'donor') {
      setEmail('donor1@mypsj.com');
      setPassword('password123');
    } else if (role === 'admin') {
      setEmail('admin@mypsj.com');
      setPassword('password123');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto my-12 px-4">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LogIn className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {formError && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">
                  {formError}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
              
              {/* Demo credentials for quick testing */}
              <div className="mt-8 pt-4 border-t">
                <p className="text-sm text-center text-muted-foreground mb-3">
                  <strong>Demo Accounts</strong> (for testing)
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fillDemoCredentials('admin')}
                    className="flex items-center justify-center gap-1.5 text-xs"
                  >
                    <Shield className="h-3.5 w-3.5 text-blue-600" />
                    Admin
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fillDemoCredentials('ngo')}
                    className="flex items-center justify-center gap-1.5 text-xs"
                  >
                    <Building className="h-3.5 w-3.5 text-green-600" />
                    NGO
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fillDemoCredentials('donor')}
                    className="flex items-center justify-center gap-1.5 text-xs"
                  >
                    <User className="h-3.5 w-3.5 text-orange-600" />
                    Donor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
