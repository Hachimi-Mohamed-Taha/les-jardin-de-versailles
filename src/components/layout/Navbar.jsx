import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/photos/logo.png";
import useStickyNav from "../hooks/useStickyNav";

const links = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/apropos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/projets" },
  { label: "Contact", to: "/contact", button: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isScrolled = useStickyNav(30);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <div className="logo-icon">
            <img src={logo} alt="Verdura logo" />
          </div>

          <div className="logo-text">
            <span className="logo-name">Les jardins de Versailles</span>
            <span className="logo-tagline">Paysagisme · Rabat</span>
          </div>
        </NavLink>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${link.button ? "btn-nav" : "nav-link"} ${isActive ? "active" : ""}`.trim()
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}