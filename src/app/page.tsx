import HeroSection from "@/components/sections/HeroSection";
import CoupleIntro from "@/components/sections/CoupleIntro";
import WeddingEvents from "@/components/sections/WeddingEvents";
import CountdownTimer from "@/components/sections/CountdownTimer";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Guestbook from "@/components/sections/Guestbook";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ClientOverlays from "@/components/layout/ClientOverlays";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CoupleIntro />
        <WeddingEvents />
        <CountdownTimer />
        <PhotoGallery />
        <Guestbook />
      </main>
      <Footer />
      <ClientOverlays />
    </>
  );
}
