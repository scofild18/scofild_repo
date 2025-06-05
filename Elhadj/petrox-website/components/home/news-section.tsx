import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    {
      title: "Petrox Completes Major Pipeline Project Ahead of Schedule",
      excerpt:
        "Our team successfully delivered the 500-mile pipeline project three months ahead of schedule and under budget.",
      date: "May 15, 2024",
      image: "/placeholder.svg?height=400&width=600",
      slug: "pipeline-project-completion",
    },
    {
      title: "New Safety Milestone: 2 Million Hours Without Incidents",
      excerpt:
        "Petrox celebrates achieving 2 million work hours without a single safety incident across all operations.",
      date: "April 28, 2024",
      image: "/placeholder.svg?height=400&width=600",
      slug: "safety-milestone",
    },
    {
      title: "Petrox Expands Operations to Middle East",
      excerpt:
        "We're excited to announce the opening of our new regional office in Dubai to serve the growing Middle East market.",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=400&width=600",
      slug: "middle-east-expansion",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600 max-w-2xl">Stay updated with the latest developments at Petrox</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
          >
            <Link href="/news">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
