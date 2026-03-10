import GoldParticles from "@/components/GoldParticles";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FragranceNotes from "@/components/sections/FragranceNotes";
import ExtractionArt from "@/components/sections/ExtractionArt";
import ScentMetrics from "@/components/sections/ScentMetrics";
import Collections from "@/components/sections/Collections";
import MasterPerfumer from "@/components/sections/MasterPerfumer";
import LimitedEditions from "@/components/sections/LimitedEditions";
import DesertImage from "@/components/sections/DesertImage";
import SoldCounters from "@/components/sections/SoldCounters";
import OlfactoryBlog from "@/components/sections/OlfactoryBlog";
import EthicalSourcing from "@/components/sections/EthicalSourcing";
import ConnoisseurReviews from "@/components/sections/ConnoisseurReviews";
import ShopFooter from "@/components/sections/ShopFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <GoldParticles />
      <Navbar />
      <HeroSection />
      <div className="gold-divider" />
      <FragranceNotes />
      <div className="gold-divider" />
      <ExtractionArt />
      <div className="gold-divider" />
      <ScentMetrics />
      <div className="gold-divider" />
      <Collections />
      <div className="gold-divider" />
      <MasterPerfumer />
      <div className="gold-divider" />
      <LimitedEditions />
      <DesertImage />
      <SoldCounters />
      <div className="gold-divider" />
      <OlfactoryBlog />
      <div className="gold-divider" />
      <EthicalSourcing />
      <div className="gold-divider" />
      <ConnoisseurReviews />
      <div className="gold-divider" />
      <ShopFooter />
    </div>
  );
};

export default Index;
