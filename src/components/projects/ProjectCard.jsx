export default function ProjectCard({ project }) {
  return (
    <div className="project-card card">
      <div className="pc-visual">
        <img src={project.image} alt={project.title} />
        <div className="pc-overlay">
          <span className="pc-cat">{project.label}</span>
        </div>
      </div>
      <div className="pc-body">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  );
}