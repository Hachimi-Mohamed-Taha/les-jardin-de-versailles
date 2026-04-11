import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import CTASection from "../components/shared/CTASection";
import Reveal from "../components/shared/Reveal";

/* ✅ FIXED IMPORTS (use real file names) */
import bouregragImg from "../assets/photos/bouregragAvmarsa.png";
import cheikhZayedImg from "../assets/photos/cheikh zayed.png";
import gareRoutiereImg from "../assets/photos/gare routiere.jpg";

export default function HomePage() {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern"></div>
          <div className="hero-gradient"></div>
        </div>

        <div className="hero-content">
          <Reveal>
            <p className="hero-label">Paysagisme · Rabat, Maroc</p>
          </Reveal>

          <Reveal delay="fade-in-delay-1">
            <h1>
              L'art de <em>façonner</em>
              <br />
              la nature
            </h1>
          </Reveal>

          <Reveal delay="fade-in-delay-2">
            <p className="hero-desc">
              Expert en aménagement et entretien d'espaces verts pour
              <br />
              particuliers et professionnels à Rabat.
            </p>
          </Reveal>

          <Reveal delay="fade-in-delay-3">
            <div className="hero-cta">
              <Link to="/services" className="btn btn-primary">
                Découvrir nos services
              </Link>
              <Link to="/projets" className="btn btn-white">
                Voir nos réalisations
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="hero-badge">
          <span className="badge-num">12+</span>
          <span className="badge-txt">ans d'expertise</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <Reveal className="stat">
          <span className="stat-num">350+</span>
          <span className="stat-label">Projets réalisés</span>
        </Reveal>

        <div className="stat-sep"></div>

        <Reveal className="stat" delay="fade-in-delay-1">
          <span className="stat-num">12</span>
          <span className="stat-label">Années d'expérience</span>
        </Reveal>

        <div className="stat-sep"></div>

        <Reveal className="stat" delay="fade-in-delay-2">
          <span className="stat-num">98%</span>
          <span className="stat-label">Clients satisfaits</span>
        </Reveal>

        <div className="stat-sep"></div>

        <Reveal className="stat" delay="fade-in-delay-3">
          <span className="stat-num">15+</span>
          <span className="stat-label">Artisans experts</span>
        </Reveal>
      </section>

      {/* PROJECT PREVIEW (FIXED) */}
      <section className="section">
        <div className="section-header-row">
          <div>
            <Reveal>
              <p className="section-label">Portfolio</p>
            </Reveal>

            <Reveal>
              <h2 className="section-title">Quelques réalisations</h2>
            </Reveal>
          </div>

          <Link to="/projets" className="btn btn-outline">
            Tout voir
          </Link>
        </div>

        <div className="grid-3 projects-preview" style={{ marginTop: "2.5rem" }}>
          
          <Reveal className="card project-preview-card">
            <>
              <div className="ppc-img">
                <img src={bouregragImg} alt="Bouregreg Marina" />
              </div>

              <div className="ppc-body">
                <span className="ppc-tag">Jardin privé</span>
                <h4>Bouregreg Marina</h4>
                <p>Aménagement moderne avec végétation méditerranéenne.</p>
              </div>
            </>
          </Reveal>

          <Reveal className="card project-preview-card" delay="fade-in-delay-1">
            <>
              <div className="ppc-img">
                <img src={cheikhZayedImg} alt="Zone Cheikh Zayed" />
              </div>

              <div className="ppc-body">
                <span className="ppc-tag">Entreprise</span>
                <h4>Zone Cheikh Zayed</h4>
                <p>Espaces verts professionnels avec entretien régulier.</p>
              </div>
            </>
          </Reveal>

          <Reveal className="card project-preview-card" delay="fade-in-delay-2">
            <>
              <div className="ppc-img">
                <img src={gareRoutiereImg} alt="Gare Routière" />
              </div>

              <div className="ppc-body">
                <span className="ppc-tag">Collectivité</span>
                <h4>Gare Routière</h4>
                <p>Aménagement urbain avec zones vertes fonctionnelles.</p>
              </div>
            </>
          </Reveal>

        </div>
      </section>

      <CTASection
        title="Prêt à transformer votre espace ?"
        text="Demandez un devis gratuit et sans engagement."
        buttonText="Nous contacter"
      />
    </MainLayout>
  );
}