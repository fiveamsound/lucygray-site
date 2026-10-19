import Link from "next/link";
import ShowBanner from "@/components/ShowBanner";

const navHits = [
  { href: "/music", label: "music", className: "nav-music" },
  {
    href: "https://www.fiveam.music/store/lucy-gray-break-it-t-shirt",
    label: "merch",
    className: "nav-merch",
  },
  {
    href: "https://www.futurenowmusic.com/lucygray",
    label: "shows",
    className: "nav-shows",
  },
  { href: "/contact", label: "contact", className: "nav-contact" },
] as const;

export default function HomePage() {
  return (
    <main className="home">
      <ShowBanner />
      <div className="home-stage cover-stage">
        <div className="cover-art">
          <img
            className="home-bg"
            src="/home-bg.jpg"
            alt="Lucy Gray — music, merch, shows, and contact"
          />

          <nav className="home-nav" aria-label="Main navigation">
            {navHits.map((item) => {
              if (item.href.startsWith("http")) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`nav-hit ${item.className}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{item.label}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-hit ${item.className}`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <button type="button" className="end-hit">
            <span>End</span>
          </button>
        </div>
      </div>
    </main>
  );
}
