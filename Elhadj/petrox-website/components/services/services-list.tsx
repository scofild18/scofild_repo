import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesList() {
  const services = [
    {
      id: "exploration",
      title: "Oil Exploration",
      description:
        "Our exploration services utilize cutting-edge technology and experienced geologists to identify promising oil and gas reserves. We employ advanced seismic imaging, data analytics, and geological modeling to maximize discovery potential while minimizing environmental impact.",
      features: [
        "Advanced seismic imaging and interpretation",
        "Geological and geophysical surveys",
        "Reservoir characterization and modeling",
        "Environmental impact assessment",
        "Resource estimation and economic evaluation",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "transport",
      title: "Oil Transport",
      description:
        "Petrox provides safe, efficient, and reliable transportation solutions for petroleum products. Our modern fleet and experienced logistics team ensure timely delivery while maintaining the highest safety standards and regulatory compliance.",
      features: [
        "Pipeline transportation management",
        "Tanker truck logistics and scheduling",
        "Marine transport coordination",
        "Real-time shipment tracking",
        "Regulatory compliance management",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "maintenance",
      title: "Equipment Maintenance",
      description:
        "Our comprehensive maintenance services extend equipment life, reduce downtime, and ensure operational safety. From routine inspections to complex repairs, our certified technicians keep your operations running smoothly.",
      features: [
        "Preventative maintenance programs",
        "Emergency repair services",
        "Equipment performance optimization",
        "Compliance inspections and certification",
        "Parts inventory management",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "consulting",
      title: "Energy Consulting",
      description:
        "Leverage our industry expertise with our consulting services. We provide strategic guidance on operational efficiency, regulatory compliance, technology implementation, and sustainable practices to help you achieve your business objectives.",
      features: [
        "Operational efficiency assessment",
        "Regulatory compliance guidance",
        "Technology implementation planning",
        "Sustainability strategy development",
        "Risk management and mitigation",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            id={service.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index !== services.length - 1 ? "mb-24 pb-24 border-b" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gray-900 hover:bg-gray-800">
                <Link href={`/services/${service.id}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
