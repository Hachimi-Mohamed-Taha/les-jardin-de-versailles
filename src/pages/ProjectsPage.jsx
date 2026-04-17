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

     

      <CTASection
        title="Votre projet sera le prochain."
        text="Contactez-nous pour démarrer votre transformation."
        buttonText="Démarrer mon projet"
      />
    </MainLayout>
  );
}
