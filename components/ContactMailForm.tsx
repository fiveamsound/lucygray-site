"use client";

const EMAIL = "lucygraymusicemail@gmail.com";

export default function ContactMailForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const body = String(data.get("body") || "").trim();
    const message = name ? `${name}\n\n${body}` : body;
    window.location.href = `mailto:${EMAIL}?body=${encodeURIComponent(message)}`;
  }

  return (
    <form className="contact-compose" onSubmit={handleSubmit}>
      <h1 className="contact-title">
        <img src="/contact-header.png?v=2" alt="contact" />
      </h1>
      <label>
        Name
        <input type="text" name="name" autoComplete="name" />
      </label>
      <label>
        Message
        <textarea name="body" rows={5} required />
      </label>
      <button className="button dark" type="submit">
        <span>Send</span>
      </button>
    </form>
  );
}
