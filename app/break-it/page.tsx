import type { Metadata } from "next";
import ShowBanner from "@/components/ShowBanner";

export const metadata: Metadata = {
  title: "Break it — Lucy Gray",
};

export default function BreakItPage() {
  return (
    <main className="home">
      <ShowBanner />
      <div className="home-stage music-stage">
        <img className="home-bg" src="/music-bg.jpg" alt="" />
        <img
          className="break-it-locked"
          src="/break-it-locked.png?v=2"
          alt="This level is locked until October 30th. We’ll see you soon."
        />
      </div>
    </main>
  );
}
