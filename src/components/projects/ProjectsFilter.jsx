const filters = [
  { label: "Tous", value: "all" },
  { label: "Jardins privés", value: "prive" },
  { label: "Entreprises", value: "entreprise" },
  { label: "Collectivités", value: "collectivite" },
];

export default function ProjectsFilter({ activeFilter, setActiveFilter }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
          onClick={() => setActiveFilter(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}