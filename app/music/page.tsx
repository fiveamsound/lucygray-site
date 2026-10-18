import type { Metadata } from "next";
import ShowBanner from "@/components/ShowBanner";

export const metadata: Metadata = {
  title: "Music — Lucy Gray",
};

const BREAK_IT = "https://fiveam.lnk.to/Breakit";

export default function MusicPage() {
  return (
    <main className="home">
      <ShowBanner />
      <div className="home-stage music-stage">
        <img className="home-bg" src="/music-bg.jpg" alt="" />
        <a
          className="music-btn"
          href={BREAK_IT}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/break-it-stream.png?v=3" alt="Break it — Stream the album" />
        </a>
        <button className="music-btn" type="button">
          <img
            src="/break-it-game.png?v=12"
            alt="Explore the world of Break it — Press to enter"
          />
        </button>
      </div>
    </main>
  );
}
