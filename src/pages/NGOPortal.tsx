
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NGODashboard } from '@/components/NGODashboard';
import { useAuth } from '@/contexts/AuthContext';

const NGOPortal = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {user && user.role === 'ngo' ? (
            <NGODashboard />
          ) : (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-4">Welcome to the NGO Portal</h2>
              <p className="text-muted-foreground mb-6">
                Please log in to access your organization dashboard.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NGOPortal;
