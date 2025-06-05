import { Shield, Heart, GraduationCap, DollarSign } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description:
        "We offer industry-leading salaries, performance bonuses, and profit-sharing opportunities to reward your contributions.",
    },
    {
      icon: Heart,
      title: "Comprehensive Healthcare",
      description:
        "Our benefits package includes medical, dental, and vision coverage for you and your family, with wellness programs to support your health.",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description:
        "We invest in your growth with training programs, education assistance, and clear career advancement pathways.",
    },
    {
      icon: Shield,
      title: "Work-Life Balance",
      description:
        "Enjoy flexible work arrangements, generous paid time off, and family leave policies that support your personal life.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Petrox, we value our team members and provide benefits that support their professional and personal
            growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
