import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { SEO } from "../seo";
import { SiteFooter } from "../components/layout/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <SEO
        title="404 — Page Not Found | Junior Jeconia"
        description="The requested page could not be found. Explore Junior Jeconia's portfolio, selected projects, and engineering notes."
      />

      <main className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span>404 Error</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The page <code className="text-primary font-mono text-xs">{location.pathname}</code> does not exist or may have been moved.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-background hover:bg-foreground/90 transition-all shadow-md"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-white/[0.08] transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
};

export default NotFound;
