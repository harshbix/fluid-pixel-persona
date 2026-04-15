import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
      isActive ? "bg-primary/10 text-primary" : "hover:bg-accent/20 text-foreground/80"
    }`;

  const mobileLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-md font-medium text-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
      isActive ? "bg-primary/10 text-primary" : "hover:bg-accent/20 text-foreground/80"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <div className="font-extrabold text-lg tracking-tight text-primary">
          <Link to="/" onClick={() => setOpen(false)}>Bixx Tech</Link>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={linkClassName}
                end={link.path === "/"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(o => !o)}
          type="button"
        >
          {open ? <X className="w-7 h-7 text-primary" aria-hidden="true" /> : <Menu className="w-7 h-7 text-primary" aria-hidden="true" />}
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <div
        id="mobile-navigation"
        className={`md:hidden fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-background shadow-xl border-l border-border/20 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border/20">
          <span className="font-extrabold text-lg tracking-tight text-primary">Bixx Tech</span>
          <button
            className="flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            type="button"
          >
            <X className="w-6 h-6 text-primary" aria-hidden="true" />
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-6">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={mobileLinkClassName}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
