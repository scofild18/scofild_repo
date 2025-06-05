import type { Metadata } from "next"
import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import ProcessSection from "@/components/services/process-section"
import IndustriesSection from "@/components/services/industries-section"

export const metadata: Metadata = {
  title: "Our Services - Petrox",
  description: "Comprehensive oil and gas services including exploration, transportation, and equipment maintenance",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <IndustriesSection />
    </>
  )
}
