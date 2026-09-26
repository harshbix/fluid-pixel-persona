import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/layout/Navbar";
import { ScrollToTop } from "./components/common/ScrollToTop";

import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Services = lazy(() => import("./pages/Services"));
const Notes = lazy(() => import("./pages/Notes"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { LanguageProvider } from "./context/LanguageContext";

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex items-center gap-3 text-muted-foreground text-xs font-mono uppercase tracking-widest">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span>Loading...</span>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Loader />
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-primary/20 selection:text-primary">
              <div className="relative z-10 flex flex-col flex-1">
                <Navbar />
              <div className="flex-1">
                <Suspense fallback={<PageFallback />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/blog" element={<Navigate to="/notes" replace />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
