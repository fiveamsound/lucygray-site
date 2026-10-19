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

function NavHits({ className }: { className: string }) {
  return (
    <nav className={className} aria-label="Main navigation">
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
  );
}

export default function HomePage() {
  return (
    <main className="home">
      <ShowBanner />
      <div className="mobile-home">
        <img className="mh-tartan" src="/mh-tartan.png" alt="" />
        <img className="mh-type" src="/lucy-gray-type.png" alt="Lucy Gray" />
        <img className="mh-end" src="/mh-end.png" alt="" />
        <img className="mh-nav-art" src="/home-nav.png" alt="" />
        <img className="mh-keyboard" src="/mh-keyboard.png" alt="" />
        <img className="mh-figure" src="/mh-figure.png" alt="" />
        <NavHits className="mh-nav" />
      </div>
      <div className="home-stage cover-stage">
        <div className="cover-art">
          <img
            className="home-bg"
            src="/home-bg.jpg"
            width={8000}
            height={4500}
            alt="Lucy Gray — music, merch, shows, and contact"
          />
          <div className="home-nav-mask" aria-hidden="true" />
          <img className="home-nav-art" src="/home-nav.png" width={390} height={809} alt="" />
          <NavHits className="home-nav" />
          <button type="button" className="end-hit">
            <span>End</span>
          </button>
        </div>
      </div>
    </main>
  );
}
