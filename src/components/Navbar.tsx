import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <div className="font-extrabold text-lg tracking-tight text-primary">
          <Link to="/">Bixx Tech</Link>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${location.pathname === link.path ? "bg-primary/10 text-primary" : "hover:bg-accent/20 text-foreground/80"}
                `}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
            {open ? (
              <line x1="18" y1="6" x2="6" y2="18" />
            ) : (
              <line x1="3" y1="6" x2="21" y2="6" />
            )}
            {open ? (
              <line x1="6" y1="6" x2="18" y2="18" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <div
        className={`md:hidden fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-background shadow-xl border-l border-border/20 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <ul className="flex flex-col gap-2 p-6">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-4 py-3 rounded-md font-medium text-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${location.pathname === link.path ? "bg-primary/10 text-primary" : "hover:bg-accent/20 text-foreground/80"}
                `}
                aria-current={location.pathname === link.path ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
