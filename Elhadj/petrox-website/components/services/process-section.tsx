import { Check } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with a thorough consultation to understand your specific needs, challenges, and objectives.",
    },
    {
      number: "02",
      title: "Assessment & Planning",
      description:
        "Our experts conduct a comprehensive assessment and develop a detailed plan tailored to your requirements.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We execute the plan with precision, keeping you informed throughout the process with regular updates.",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure all work meets our high standards and your specific requirements.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance to ensure long-term success and optimal performance.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-12 last:mb-0">
              <div className="mr-8">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {step.number}
                </div>
                {index !== steps.length - 1 && <div className="w-0.5 h-16 bg-gray-300 mx-auto mt-4"></div>}
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Service Guarantees</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">On-Time Delivery</h4>
                <p className="text-gray-600">We commit to meeting agreed timelines for all projects</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Transparent Pricing</h4>
                <p className="text-gray-600">No hidden fees or unexpected costs in our service agreements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Satisfaction Guarantee</h4>
                <p className="text-gray-600">We work until you're completely satisfied with the results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
