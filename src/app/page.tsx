import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/home/hero";
import MainSection from "@/components/sections/home/main";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col max-lg:p-2 scroll">
      <Navbar />
      <HeroSection />
      <MainSection />
      <Footer />
    </main>
  );
}
