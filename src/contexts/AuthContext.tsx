import React, { createContext, useContext, useState, useEffect } from 'react';

// Define user roles
export type UserRole = 'ngo' | 'donor' | 'admin';

// Define user type
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isVerified?: boolean;
  interests?: string[];
  location?: string;
  focusAreas?: string[];
  needs?: string[];
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock authentication functions - to be replaced with actual API calls
const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Admin credentials
  if (email === 'admin@mypsj.com' && password === 'password123') {
    return { 
      id: '3', 
      email, 
      name: 'Admin User', 
      role: 'admin' 
    };
  }
  
  // NGO credentials
  if (email === 'ngo1@mypsj.com' && password === 'password123') {
    return { 
      id: '1', 
      email, 
      name: 'Health Alliance', 
      role: 'ngo',
      isVerified: true,
      focusAreas: ['Healthcare', 'Medical Supplies'],
      needs: ['Funds', 'Medical Supplies'],
      location: 'New York'
    };
  } 
  
  // Donor credentials
  else if (email === 'donor1@mypsj.com' && password === 'password123') {
    return { 
      id: '2', 
      email, 
      name: 'John Donor', 
      role: 'donor',
      interests: ['Healthcare', 'Education'],
      location: 'New York'
    };
  } 
  
  // Other default cases from original code
  else if (email === 'ngo@example.com' && password === 'password') {
    return { 
      id: '4', 
      email, 
      name: 'Example NGO', 
      role: 'ngo',
      isVerified: true,
      focusAreas: ['Education', 'Children'],
      needs: ['Volunteers', 'School Supplies'],
      location: 'Chicago'
    };
  } else if (email === 'donor@example.com' && password === 'password') {
    return { 
      id: '5', 
      email, 
      name: 'John Donor', 
      role: 'donor',
      interests: ['Environment', 'Conservation'],
      location: 'Seattle'
    };
  }
  
  throw new Error('Invalid credentials');
};

const mockRegister = async (userData: Partial<User> & { password: string }): Promise<User> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // This is just for demo purposes
  return { 
    id: Math.random().toString(36).substr(2, 9), 
    email: userData.email || 'unknown@example.com', 
    name: userData.name || 'New User', 
    role: userData.role || 'donor',
    isVerified: userData.role === 'ngo' ? false : undefined,
    interests: userData.interests || [],
    location: userData.location || '',
    focusAreas: userData.focusAreas || [],
    needs: userData.needs || []
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Check for saved user in local storage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const loggedInUser = await mockLogin(email, password);
      setUser(loggedInUser);
      // Save user to local storage
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (userData: Partial<User> & { password: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      const newUser = await mockRegister(userData);
      setUser(newUser);
      // Save user to local storage
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
