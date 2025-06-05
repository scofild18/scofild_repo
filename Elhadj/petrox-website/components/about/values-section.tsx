import { Shield, Users, Lightbulb, Globe } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Safety is our top priority in every operation. We maintain rigorous standards and protocols to ensure the wellbeing of our team, clients, and communities.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We build lasting relationships with our clients based on trust, transparency, and mutual success. Your goals become our goals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously seek new technologies and approaches to improve efficiency, reduce costs, and enhance outcomes for our clients.",
    },
    {
      icon: Globe,
      title: "Environmental Responsibility",
      description:
        "We are committed to sustainable practices that minimize environmental impact while maximizing resource utilization.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide our decisions and define our company culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
