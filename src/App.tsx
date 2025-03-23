
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NGOPortal from "./pages/NGOPortal";
import DonorPortal from "./pages/DonorPortal";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import Terms from "./pages/Terms";
import NGOProfile from "./pages/NGOProfile";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/ngo/:id" element={<NGOProfile />} />
              
              {/* Protected routes */}
              <Route 
                path="/ngo-portal" 
                element={
                  <ProtectedRoute allowedRoles={['ngo', 'admin']}>
                    <NGOPortal />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/donor-portal" 
                element={
                  <ProtectedRoute allowedRoles={['donor', 'admin']}>
                    <DonorPortal />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
