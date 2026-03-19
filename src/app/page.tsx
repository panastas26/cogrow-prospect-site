import { simonCPAsConfig } from "@/config/simon-cpas";
import { Navbar } from "@/components/Navbar";
import { HeroProfessionalServicesA } from "@/components/HeroProfessionalServicesA";
import { TrustBarProfessional } from "@/components/TrustBarProfessional";
import { ServiceCardGrid } from "@/components/ServiceCardGrid";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ThreeStepProcessMini } from "@/components/ThreeStepProcessMini";
import { ServiceAreaCluster } from "@/components/ServiceAreaCluster";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { FAQAccordionLocal } from "@/components/FAQAccordionLocal";
import { FinalCTABanner } from "@/components/FinalCTABanner";
import { LocalBusinessFooter } from "@/components/LocalBusinessFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const config = simonCPAsConfig;

export default function Home() {
  return (
    <>
      <Navbar config={config} />
      <main>
        <HeroProfessionalServicesA config={config} />
        <TrustBarProfessional config={config} />
        <ServiceCardGrid config={config} />
        <WhyUsSection config={config} />
        <ThreeStepProcessMini config={config} />
        <TestimonialGrid config={config} />
        <ServiceAreaCluster config={config} />
        <FAQAccordionLocal config={config} />
        <FinalCTABanner config={config} />
      </main>
      <LocalBusinessFooter config={config} />
      <StickyMobileCTA config={config} />
    </>
  );
}
