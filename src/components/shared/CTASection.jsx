import { Link } from "react-router-dom";

export default function CTASection({ title, text, buttonText }) {
  return (
    <section className="cta-band">
      <div className="cta-band-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to="/contact" className="btn btn-white">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}