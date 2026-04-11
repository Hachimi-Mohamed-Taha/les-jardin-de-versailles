import MainLayout from "../components/layout/MainLayout";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/shared/Reveal";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHero
        label="Parlons de votre projet"
        before="Nous"
        highlight="contacter"
      />

      <section className="section contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <Reveal>
              <p className="section-label">Coordonnées</p>
            </Reveal>

            <Reveal>
              <h2 className="section-title">Discutons de votre espace vert</h2>
            </Reveal>

            <Reveal>
              <div className="divider"></div>
            </Reveal>

            <Reveal>
              <p className="contact-desc">
                Vous avez un projet d'aménagement, besoin d'entretien ou simplement
                envie de transformer votre espace extérieur ? Nous sommes là pour
                vous accompagner. Réponse garantie sous 48h.
              </p>
            </Reveal>

            <div className="info-items">
              <Reveal className="info-item">
                <>
                  <div className="info-icon">📍</div>
                  <div>
                    <span className="info-label">Adresse</span>
                    <span className="info-value">
                      Rabat, Maroc
                      <br />
                      Interventions dans tout le Grand Rabat
                    </span>
                  </div>
                </>
              </Reveal>

              <Reveal className="info-item" delay="fade-in-delay-1">
                <>
                  <div className="info-icon">📞</div>
                  <div>
                    <span className="info-label">Téléphone</span>
                    <a href="tel:+212600000000" className="info-value info-link">
                      +212 6 00 00 00 00
                    </a>
                  </div>
                </>
              </Reveal>

              <Reveal className="info-item" delay="fade-in-delay-2">
                <>
                  <div className="info-icon">✉️</div>
                  <div>
                    <span className="info-label">E-mail</span>
                    <a
                      href="mailto:contact@verdura.ma"
                      className="info-value info-link"
                    >
                      contact@verdura.ma
                    </a>
                  </div>
                </>
              </Reveal>

              <Reveal className="info-item">
                <>
                  <div className="info-icon">🕐</div>
                  <div>
                    <span className="info-label">Horaires</span>
                    <span className="info-value">Lun – Sam : 8h00 – 18h00</span>
                  </div>
                </>
              </Reveal>
            </div>

            <Reveal className="devis-badge">
              <>
                <div className="db-icon">🎁</div>
                <div>
                  <strong>Devis gratuit et sans engagement</strong>
                  <p>Visite sur site offerte pour tout nouveau projet.</p>
                </div>
              </>
            </Reveal>
          </div>

          <Reveal className="contact-form-wrap">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section map-section">
        <Reveal className="map-placeholder">
          <>
            <div className="map">
              <iframe
                src="https://www.google.com/maps?q=Rabat,Maroc&output=embed&z=13"
                loading="lazy"
                title="Carte Rabat"
              ></iframe>
            </div>

            <div className="map-label">
              <span>📍</span>
              <div>
                <strong>Les jardins de Versailles</strong>
                <span>Rabat, Maroc — Interventions dans tout le Grand Rabat</span>
              </div>
            </div>
          </>
        </Reveal>
      </section>
    </MainLayout>
  );
}