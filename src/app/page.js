import AIContent from "@/components/AiResult/AiResultSection";
import CustomersSections from "@/components/CustomersSections";
import DemoResultSection from "@/components/AiResult/DemoResultSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MainNavBar from "@/components/HeroSection/MainNavBar";
import ToolsSection from "@/components/ToolsSection";
import Image from "next/image";
import AiResultMainSection from "@/components/AiResult/AiResultMainSection";
import ServicesComponent from "@/components/Services/ServicesComponent";
import ClientReviews from "@/components/ClientReviews";
import Pricing from "@/components/Pricing";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#12141D] max-w-[1600px] mx-auto">
      <MainNavBar/>
      <HeroSection/>
      <CustomersSections/>
      <AiResultMainSection/>
      <ToolsSection/>
      <ServicesComponent/>
      <ClientReviews/>
      <Pricing/>
      <Banner/>
      <Footer/>
    </div>
  );
}
