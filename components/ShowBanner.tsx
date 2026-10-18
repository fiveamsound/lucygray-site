const TICKETS_URL = "https://www.futurenowmusic.com/lucygray";
const COPY = "MELBOURNE SYDNEY AUCKLAND SHOWS";
const repeats = Array.from({ length: 8 }, (_, i) => i);

export default function ShowBanner() {
  return (
    <a
      className="top-banner"
      href={TICKETS_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Tickets for Melbourne, Sydney and Auckland shows"
    >
      <span className="top-banner-track">
        {repeats.map((i) => (
          <span key={i}>{COPY}</span>
        ))}
      </span>
    </a>
  );
}
