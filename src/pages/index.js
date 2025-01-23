import CardClient from "@/components/CardClient";
import About from "@/components/organism/About";
import CardReason from "@/components/organism/CardReason";
import CardReview from "@/components/organism/CardReview";
import Footer from "@/components/organism/Footer";
import HeroSection from "@/components/organism/HeroSection";
import Navbar from "@/components/organism/Navbar";
import PanelCard from "@/components/organism/PanelCard";
import PanelCategoriesCard from "@/components/organism/PanelCategoriesCard";
import FormData from "@/components/organism/FormData";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <PanelCard />
      <PanelCategoriesCard />
      <CardReview />
      <CardReason />
      <CardClient />
      <FormData />
      <Footer />
    </>
  );
}
