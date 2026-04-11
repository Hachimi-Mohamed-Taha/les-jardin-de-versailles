import { useMemo, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/shared/CTASection";
import Reveal from "../components/shared/Reveal";
import ProjectsFilter from "../components/projects/ProjectsFilter";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <MainLayout>
      <PageHero label="Notre portfolio" before="Nos" highlight="réalisations" />

      <section className="section projects-section">
        <div className="projects-header">
          <Reveal>
            <p className="section-label">350+ projets réalisés à Rabat et en région</p>
          </Reveal>
          <Reveal>
            <h2 className="section-title">Ce que nous avons créé</h2>
          </Reveal>
        </div>

        <ProjectsFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section temoignages-section">
        <Reveal>
          <p className="section-label" style={{ textAlign: "center" }}>
            Ce que disent nos clients
          </p>
        </Reveal>

        <Reveal>
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            Témoignages
          </h2>
        </Reveal>

        <div className="grid-3">
          <Reveal className="temoignage-card">
            <>
              <div className="stars">★★★★★</div>
              <p>
                « Équipe très professionnelle, à l'écoute et créative. Notre jardin est
                méconnaissable — en mieux ! »
              </p>
              <cite>— Nadia B., Villa Souissi</cite>
            </>
          </Reveal>

          <Reveal className="temoignage-card" delay="fade-in-delay-1">
            <>
              <div className="stars">★★★★★</div>
              <p>
                « Verdura gère l'entretien de nos espaces verts depuis 3 ans. Toujours impeccable et ponctuel. »
              </p>
              <cite>— Mohamed A., Directeur général</cite>
            </>
          </Reveal>

          <Reveal className="temoignage-card" delay="fade-in-delay-2">
            <>
              <div className="stars">★★★★★</div>
              <p>
                « Un devis clair, un travail soigné et un résultat qui dépasse nos attentes. Je recommande vivement. »
              </p>
              <cite>— Sara L., Résidence Hay Riad</cite>
            </>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Votre projet sera le prochain."
        text="Contactez-nous pour démarrer votre transformation."
        buttonText="Démarrer mon projet"
      />
    </MainLayout>
  );
}