import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import CompanyHistory from "@/components/about/company-history"
import TeamSection from "@/components/about/team-section"
import ValuesSection from "@/components/about/values-section"
import CertificationsSection from "@/components/about/certifications-section"

export const metadata: Metadata = {
  title: "About Us - Petrox",
  description: "Learn about Petrox's history, mission, and the expert team driving innovation in the energy sector",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyHistory />
      <ValuesSection />
      <TeamSection />
      <CertificationsSection />
    </>
  )
}
