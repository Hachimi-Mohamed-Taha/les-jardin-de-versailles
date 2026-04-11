import { NavLink } from "react-router-dom";
import logo from "../../assets/photos/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Verdura logo" />
          </div>

          <p className="footer-desc">
            Expert en paysagisme à Rabat. Conception, aménagement et entretien
            d’espaces verts pour particuliers et professionnels.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/apropos">À propos</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/projets">Réalisations</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:0537657285">05 37.65.72.85</a></li>
            <li><a href="mailto:jardinsdeversailles@gmail.com">jardinsdeversailles@gmail.com</a></li>
            <li>Rabat, Maroc</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Les jardins de Versailles</span>
        <span>Tous droits réservés</span>
      </div>
    </footer>
  );
}