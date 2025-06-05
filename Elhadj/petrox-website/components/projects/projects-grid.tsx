"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Gulf Coast Pipeline Expansion",
      category: "transport",
      location: "Texas, USA",
      year: "2023",
      description:
        "A 300-mile pipeline expansion project to increase capacity and improve distribution efficiency across the Gulf Coast region.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "gulf-coast-pipeline",
    },
    {
      title: "Offshore Exploration Platform",
      category: "exploration",
      location: "North Sea",
      year: "2022",
      description:
        "Development and deployment of an advanced exploration platform for deep-sea oil discovery in challenging conditions.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "offshore-exploration-platform",
    },
    {
      title: "Refinery Modernization",
      category: "maintenance",
      location: "Alberta, Canada",
      year: "2021",
      description:
        "Comprehensive modernization of a major refinery to improve efficiency, safety, and environmental performance.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "refinery-modernization",
    },
    {
      title: "Middle East Field Development",
      category: "exploration",
      location: "UAE",
      year: "2022",
      description:
        "Integrated field development project including exploration, drilling, and production infrastructure setup.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "middle-east-field",
    },
    {
      title: "Smart Pipeline Monitoring System",
      category: "transport",
      location: "Multiple Locations",
      year: "2023",
      description:
        "Implementation of IoT-based monitoring system across 1,200 miles of pipeline for real-time leak detection and maintenance alerts.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "smart-pipeline-monitoring",
    },
    {
      title: "Equipment Lifecycle Management",
      category: "maintenance",
      location: "Texas, USA",
      year: "2021",
      description:
        "Development of a comprehensive maintenance program for a major oil producer, extending equipment life by 35%.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "equipment-lifecycle",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-gray-900 hover:bg-gray-800" : ""}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "exploration" ? "default" : "outline"}
            onClick={() => setFilter("exploration")}
            className={filter === "exploration" ? "bg-gray-900 hover:bg-gray-800" : ""}
          >
            Exploration
          </Button>
          <Button
            variant={filter === "transport" ? "default" : "outline"}
            onClick={() => setFilter("transport")}
            className={filter === "transport" ? "bg-gray-900 hover:bg-gray-800" : ""}
          >
            Transport
          </Button>
          <Button
            variant={filter === "maintenance" ? "default" : "outline"}
            onClick={() => setFilter("maintenance")}
            className={filter === "maintenance" ? "bg-gray-900 hover:bg-gray-800" : ""}
          >
            Maintenance
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-60">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
