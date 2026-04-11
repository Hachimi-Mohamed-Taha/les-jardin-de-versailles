import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/shared/CTASection";
import Reveal from "../components/shared/Reveal";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHero label="Ce que nous offrons" before="Nos" highlight="services" />

      <section className="section" style={{ paddingBottom: "2rem", textAlign: "center" }}>
        <Reveal>
          <p className="section-label">Un accompagnement complet</p>
        </Reveal>
        <Reveal>
          <h2 className="section-title" style={{ maxWidth: "700px", margin: "0 auto 1rem" }}>
            De la conception à l'entretien, nous gérons tout
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-intro" style={{ margin: "0 auto", textAlign: "center" }}>
            Verdura vous accompagne à chaque étape : étude de votre espace, conception du projet,
            réalisation sur le terrain et suivi régulier pour que votre jardin reste toujours au
            sommet de sa beauté.
          </p>
        </Reveal>
      </section>

      {services.map((service, index) => {
        const reverse = index === 1;

        return (
          <section
            key={service.id}
            className={`section service-detail ${reverse ? "service-alt" : ""}`}
          >
            <div className={`service-detail-grid ${reverse ? "service-detail-grid-rev" : ""}`}>
              <Reveal className="service-detail-visual">
                <div className="sdv-main">
                  <span>{service.icon}</span>
                  {service.badge ? <div className="sdv-badge">{service.badge}</div> : null}
                </div>

                <div className="sdv-accent">
                  <span>{service.accentIcon}</span>
                  <span>{service.accentText}</span>
                </div>
              </Reveal>

              <div className="service-detail-text">
                <Reveal>
                  <p className="section-label">Service {service.number}</p>
                </Reveal>
                <Reveal>
                  <h2 className="section-title">{service.title}</h2>
                </Reveal>
                <Reveal>
                  <div className="divider"></div>
                </Reveal>
                <Reveal>
                  <p>{service.description}</p>
                </Reveal>

                <Reveal>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span className="sf-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {service.contracts ? (
                  <Reveal>
                    <div className="contrats">
                      {service.contracts.map((contract) => (
                        <div key={contract.title} className="contrat-badge">
                          <span className="cb-title">{contract.title}</span>
                          <span className="cb-desc">{contract.description}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ) : null}

                <br />
                <br />

                <Link to="/contact" className="btn btn-primary">
                  Demander un devis
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section processus-section">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Reveal>
            <p className="section-label">Comment ça marche</p>
          </Reveal>
          <Reveal>
            <h2 className="section-title">Notre processus en 4 étapes</h2>
          </Reveal>
        </div>

        <div className="processus-steps">
          <Reveal className="step">
            <>
              <div className="step-num">01</div>
              <h4>Prise de contact</h4>
              <p>Vous nous décrivez votre projet. Nous planifions une visite gratuite sur site.</p>
            </>
          </Reveal>

          <div className="step-arrow">→</div>

          <Reveal className="step" delay="fade-in-delay-1">
            <>
              <div className="step-num">02</div>
              <h4>Étude & Devis</h4>
              <p>Nous établissons un plan détaillé et un devis transparent sous 48h.</p>
            </>
          </Reveal>

          <div className="step-arrow">→</div>

          <Reveal className="step" delay="fade-in-delay-2">
            <>
              <div className="step-num">03</div>
              <h4>Réalisation</h4>
              <p>Nos équipes interviennent avec soin, dans les délais convenus.</p>
            </>
          </Reveal>

          <div className="step-arrow">→</div>

          <Reveal className="step" delay="fade-in-delay-3">
            <>
              <div className="step-num">04</div>
              <h4>Suivi</h4>
              <p>Nous restons à vos côtés pour l'entretien et tout ajustement futur.</p>
            </>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Un projet en tête ?"
        text="Contactez-nous pour un devis gratuit."
        buttonText="Obtenir un devis"
      />
    </MainLayout>
  );
}