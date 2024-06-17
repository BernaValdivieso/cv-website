import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/nav-bar";
import { AboutSection } from "./components/about-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
