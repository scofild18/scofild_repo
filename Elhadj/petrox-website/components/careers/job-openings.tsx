"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Building, ArrowRight } from "lucide-react"

export default function JobOpenings() {
  const [filter, setFilter] = useState("all")

  const jobs = [
    {
      title: "Senior Petroleum Engineer",
      department: "Engineering",
      location: "Houston, TX",
      type: "Full-time",
      description:
        "Lead engineering projects related to oil and gas production, reservoir management, and field development.",
      requirements: [
        "Bachelor's degree in Petroleum Engineering",
        "10+ years of experience in the oil and gas industry",
        "Strong knowledge of reservoir engineering principles",
        "Project management experience",
      ],
      slug: "senior-petroleum-engineer",
    },
    {
      title: "Safety Coordinator",
      department: "Operations",
      location: "Dallas, TX",
      type: "Full-time",
      description:
        "Ensure compliance with safety regulations and develop safety protocols for field operations and facilities.",
      requirements: [
        "Bachelor's degree in Occupational Safety or related field",
        "5+ years of experience in safety management",
        "OSHA certification",
        "Experience in the oil and gas industry preferred",
      ],
      slug: "safety-coordinator",
    },
    {
      title: "Data Analyst",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description:
        "Analyze operational data to identify trends, optimize processes, and support decision-making across the organization.",
      requirements: [
        "Bachelor's degree in Data Science, Statistics, or related field",
        "3+ years of experience in data analysis",
        "Proficiency in SQL, Python, and data visualization tools",
        "Experience with energy industry data preferred",
      ],
      slug: "data-analyst",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Calgary, AB",
      type: "Full-time",
      description:
        "Manage complex energy projects from initiation to completion, ensuring on-time delivery and budget compliance.",
      requirements: [
        "Bachelor's degree in Engineering or Project Management",
        "PMP certification preferred",
        "7+ years of project management experience",
        "Experience in oil and gas projects",
      ],
      slug: "project-manager",
    },
    {
      title: "Field Technician",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Perform maintenance, inspections, and repairs on oil and gas equipment in field locations.",
      requirements: [
        "High school diploma or equivalent",
        "Technical certification in mechanical or electrical systems",
        "2+ years of field experience",
        "Willingness to travel and work in various weather conditions",
      ],
      slug: "field-technician",
    },
    {
      title: "Environmental Specialist",
      department: "Engineering",
      location: "Houston, TX",
      type: "Full-time",
      description: "Ensure environmental compliance and develop sustainability initiatives for all company operations.",
      requirements: [
        "Bachelor's degree in Environmental Science or Engineering",
        "5+ years of environmental compliance experience",
        "Knowledge of EPA regulations",
        "Experience in the energy sector",
      ],
      slug: "environmental-specialist",
    },
  ]

  const departments = ["all", "Engineering", "Operations", "Technology"]
  const filteredJobs = filter === "all" ? jobs : jobs.filter((job) => job.department === filter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore exciting career opportunities and join our team of industry professionals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={filter === dept ? "default" : "outline"}
              onClick={() => setFilter(dept)}
              className={filter === dept ? "bg-gray-900 hover:bg-gray-800" : ""}
            >
              {dept === "all" ? "All Departments" : dept}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {job.department}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.requirements.slice(0, 2).map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Button asChild className="bg-gray-900 hover:bg-gray-800 w-full lg:w-auto">
                      <Link href={`/careers/${job.slug}`}>
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No openings found for the selected department.</p>
            <p className="text-gray-500 mt-2">Check back soon for new opportunities!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See the Right Position?</h3>
          <p className="text-lg text-gray-600 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
          >
            <Link href="/contact">Submit Your Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
