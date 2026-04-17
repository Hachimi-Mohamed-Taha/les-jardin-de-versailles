import MainLayout from "../components/layout/MainLayout";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/shared/CTASection";
import Reveal from "../components/shared/Reveal";

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHero label="Notre entreprise" before="À propos de" highlight="Verdura" />

      <section className="section">
        <div className="story-grid">
          <div className="story-text">
            <Reveal>
              <p className="section-label">Notre histoire</p>
            </Reveal>
            <Reveal>
              <h2 className="section-title">Nés de la passion pour la nature</h2>
            </Reveal>
            <Reveal>
              <div className="divider"></div>
            </Reveal>
            <Reveal>
              <p style={{ marginBottom: "1.2rem" }}>
                Fondée en 2013 à Rabat, Verdura est née de la passion d'un paysagiste
                pour la nature et l'art du jardin. Ce qui a commencé comme une petite
                entreprise artisanale s'est transformé en une équipe de 15 experts
                dédiés à embellir les espaces verts de la région.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Nous croyons que chaque jardin raconte une histoire — celle de ceux
                qui l'habitent. Notre mission est de donner vie à vos envies, en
                harmonie avec le sol et le ciel du Maroc.
              </p>
            </Reveal>
          </div>

          <Reveal className="story-visual">
            <div className="story-card">
              <div className="story-card-inner">
                <span style={{ fontSize: "4rem" }}>🌿</span>
                <blockquote>
                  « Un jardin bien conçu est une conversation permanente entre l'homme et la nature. »
                </blockquote>
    </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section valeurs-section">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
          <Reveal>
            <p className="section-label">Ce qui nous guide</p>
          </Reveal>
          <Reveal>
            <h2 className="section-title">Nos valeurs</h2>
          </Reveal>
        </div>

        <div className="grid-3">
          <Reveal className="valeur-card card">
            <>
              <div className="valeur-icon">🌱</div>
              <h3>Durabilité</h3>
              <p>
                Nous privilégions des espèces locales et des pratiques respectueuses de
                l'environnement pour des jardins pérennes.
              </p>
            </>
          </Reveal>

          <Reveal className="valeur-card card" delay="fade-in-delay-1">
            <>
              <div className="valeur-icon">✨</div>
              <h3>Excellence</h3>
              <p>
                Chaque détail compte. Nous apportons le même soin à un petit balcon
                qu'à un vaste domaine paysager.
              </p>
            </>
          </Reveal>

          <Reveal className="valeur-card card" delay="fade-in-delay-2">
            <>
              <div className="valeur-icon">🤝</div>
              <h3>Proximité</h3>
              <p>
                Relation de confiance durable avec chaque client, de la conception à
                l'entretien au fil des saisons.
              </p>
            </>
          </Reveal>
        </div>
      </section>


      <CTASection
        title="Vous voulez en savoir plus ?"
        text="Rencontrons-nous pour parler de votre projet."
        buttonText="Prendre contact"
      />
    </MainLayout>
  );
}
