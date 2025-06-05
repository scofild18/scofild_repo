import type { Metadata } from "next"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsGrid from "@/components/projects/projects-grid"
import ProjectStats from "@/components/projects/project-stats"

export const metadata: Metadata = {
  title: "Our Projects - Petrox",
  description: "Explore Petrox's successful projects and case studies in the energy sector",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectStats />
      <ProjectsGrid />
    </>
  )
}
