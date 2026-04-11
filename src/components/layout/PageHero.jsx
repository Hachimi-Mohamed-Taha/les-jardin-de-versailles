export default function PageHero({
  label,
  before,
  highlight,
  after = "",
  showText = true,
}) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg" />

      {showText && (
        <div className="page-hero-content">
          {label && <p className="page-hero-label">{label}</p>}

          {(before || highlight || after) && (
            <h1>
              {before} {highlight && <em>{highlight}</em>} {after}
            </h1>
          )}
        </div>
      )}
    </div>
  );
}