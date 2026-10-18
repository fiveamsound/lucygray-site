import type { Metadata } from "next";
import ShowBanner from "@/components/ShowBanner";
import ContactMailForm from "@/components/ContactMailForm";

export const metadata: Metadata = {
  title: "Contact — Lucy Gray",
};

export default function ContactPage() {
  return (
    <main className="home">
      <ShowBanner />
      <div className="home-stage">
        <img className="home-bg" src="/music-bg.jpg" alt="" />
        <ContactMailForm />
      </div>
    </main>
  );
}
