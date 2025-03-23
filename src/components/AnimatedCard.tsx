
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  className, 
  children, 
  delay = 0 
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl transition-all duration-500 animate-slide-up opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
};
