import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

export default function TeamSection() {
  const executives = [
    {
      name: "Robert Johnson",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 25 years of experience in the energy sector, Robert has led Petrox through significant growth and innovation.",
      linkedin: "#",
    },
    {
      name: "Sarah Martinez",
      position: "Chief Operations Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah oversees all operational aspects of Petrox, ensuring efficiency, safety, and excellence across all projects.",
      linkedin: "#",
    },
    {
      name: "David Chen",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David leads our technology initiatives, driving innovation and digital transformation throughout the company.",
      linkedin: "#",
    },
    {
      name: "Emily Williams",
      position: "Chief Financial Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Emily manages Petrox's financial strategy, ensuring sustainable growth and value creation for stakeholders.",
      linkedin: "#",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals guiding Petrox's vision and strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image src={executive.image || "/placeholder.svg"} alt={executive.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{executive.name}</h3>
                <p className="text-yellow-600 font-medium mb-3">{executive.position}</p>
                <p className="text-gray-600 mb-4">{executive.bio}</p>
                <a
                  href={executive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Linkedin className="h-5 w-5 mr-1" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
