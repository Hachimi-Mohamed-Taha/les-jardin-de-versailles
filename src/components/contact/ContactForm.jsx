import { useState } from "react";

const initialForm = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  service: "",
  message: "",
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccess("");
  }

  function validate() {
    const nextErrors = {};

    if (!form.prenom.trim()) {
      nextErrors.prenom = "Ce champ est obligatoire";
    } else if (form.prenom.trim().length < 2) {
      nextErrors.prenom = "Minimum 2 caractères";
    }

    if (!form.nom.trim()) {
      nextErrors.nom = "Ce champ est obligatoire";
    } else if (form.nom.trim().length < 2) {
      nextErrors.nom = "Minimum 2 caractères";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Ce champ est obligatoire";
    } else if (!validateEmail(form.email)) {
      nextErrors.email = "Email invalide";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Ce champ est obligatoire";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Minimum 10 caractères";
    }

    return nextErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccess("");
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSuccess("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data?.errors?.length) {
          const serverErrors = {};
          data.errors.forEach((err) => {
            if (err.field) {
              serverErrors[err.field] = err.message;
            }
          });

          setErrors(serverErrors);
          setSuccess("");
        } else {
          setSuccess("");
          setErrors({
            global: "Une erreur est survenue. Veuillez réessayer.",
          });
        }
        return;
      }

      setSuccess("✅ Message envoyé avec succès !");
      setForm(initialForm);
    } catch {
      setErrors({
        global: "Impossible d'envoyer le message. Vérifiez votre connexion.",
      });
      setSuccess("");
    } finally {
      setIsSubmitting(false);
    }
  }

  function getGroupClass(name) {
    if (errors[name]) return "form-group error";
    if (success && ["prenom", "nom", "email", "message"].includes(name)) {
      return "form-group success";
    }
    return "form-group";
  }

  return (
    <div className="form-card">
      <h3>Envoyer un message</h3>
      <p>Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className={getGroupClass("prenom")}>
            <label htmlFor="prenom">Prénom *</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <small className="error-msg">{errors.prenom || ""}</small>
          </div>

          <div className={getGroupClass("nom")}>
            <label htmlFor="nom">Nom *</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <small className="error-msg">{errors.nom || ""}</small>
          </div>
        </div>

        <div className={getGroupClass("email")}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <small className="error-msg">{errors.email || ""}</small>
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <small className="error-msg"></small>
        </div>

        <div className="form-group">
          <label htmlFor="service">Service souhaité</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">-- Choisir un service --</option>
            <option value="amenagement">Aménagement</option>
            <option value="entretien">Entretien</option>
            <option value="plantation">Plantation</option>
          </select>
          <small className="error-msg"></small>
        </div>

        <div className={getGroupClass("message")}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <small className="error-msg">{errors.message || ""}</small>
        </div>

        {errors.global ? <p className="error-msg" style={{ display: "block", marginBottom: "1rem" }}>{errors.global}</p> : null}

        <button
          type="submit"
          className="btn btn-primary full-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        {success && <p className="form-success">{success}</p>}
      </form>
    </div>
  );
}