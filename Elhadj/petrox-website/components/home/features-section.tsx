import { Truck, Search, Wrench, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Oil Transport",
      description:
        "Safe and efficient transportation of petroleum products with our modern fleet and experienced logistics team.",
    },
    {
      icon: Search,
      title: "Exploration Services",
      description:
        "Advanced geological surveys and exploration services to identify new opportunities and optimize resource extraction.",
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Comprehensive maintenance and repair services for all types of industrial equipment and machinery.",
    },
    {
      icon: Zap,
      title: "Energy Solutions",
      description:
        "Innovative energy solutions and consulting services to optimize operations and reduce environmental impact.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet the diverse needs of the energy industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
