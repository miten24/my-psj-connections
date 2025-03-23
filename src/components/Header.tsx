
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                My PSJ Foundation
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/ngo-portal" className="text-sm font-medium hover:text-primary transition-colors">
              For NGOs
            </Link>
            <Link to="/donor-portal" className="text-sm font-medium hover:text-primary transition-colors">
              For Donors
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Button asChild variant="outline">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Join Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="pt-2 pb-4 px-4 space-y-1 sm:px-6">
            <Link 
              to="/" 
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ngo-portal" 
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For NGOs
            </Link>
            <Link 
              to="/donor-portal" 
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Donors
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button asChild variant="outline" className="w-full">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
