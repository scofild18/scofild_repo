import type { Metadata } from "next"
import CareersHero from "@/components/careers/careers-hero"
import JobOpenings from "@/components/careers/job-openings"
import BenefitsSection from "@/components/careers/benefits-section"
import CultureSection from "@/components/careers/culture-section"

export const metadata: Metadata = {
  title: "Careers - Petrox",
  description: "Join the Petrox team and build your career in the energy industry",
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <BenefitsSection />
      <CultureSection />
      <JobOpenings />
    </>
  )
}
