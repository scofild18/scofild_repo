import Image from "next/image"

export default function CompanyHistory() {
  const milestones = [
    {
      year: "1985",
      title: "Company Founded",
      description: "Petrox was established in Houston, Texas with a focus on oil transportation services.",
    },
    {
      year: "1992",
      title: "Expansion into Exploration",
      description: "Added exploration services to our portfolio, marking our first major diversification.",
    },
    {
      year: "2001",
      title: "International Operations",
      description: "Expanded operations internationally with our first projects in the Middle East.",
    },
    {
      year: "2010",
      title: "Technology Innovation",
      description: "Launched our proprietary exploration technology, increasing discovery rates by 35%.",
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Introduced our comprehensive sustainability program to reduce environmental impact.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Completed company-wide digital transformation to enhance operations and client services.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership, our journey has been defined by innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Petrox early days"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">From Vision to Reality</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 1985 by a team of experienced engineers with a vision to transform the energy industry, Petrox
              began as a specialized oil transportation company serving the Texas oil fields.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the decades, we've grown from a small local operation to a global energy solutions provider with
              offices across North America and the Middle East. Through strategic expansion and a commitment to
              innovation, we've built a reputation for excellence in every aspect of our operations.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Key Milestones</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Timeline items */}
            <div className="space-y-24 relative">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-yellow-600 font-bold text-xl mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-600 z-10"></div>

                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 ? (
                      <>
                        <div className="text-yellow-600 font-bold text-xl mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
