import { Card, CardContent } from "@/components/ui/card"

export default function IndustriesSection() {
  const industries = [
    {
      name: "Upstream Oil & Gas",
      description: "Exploration and production companies focused on finding and extracting crude oil and natural gas.",
    },
    {
      name: "Midstream",
      description:
        "Companies involved in the transportation, storage, and wholesale marketing of crude or refined petroleum products.",
    },
    {
      name: "Downstream",
      description: "Refineries and distributors that process and purify raw crude oil and sell the finished products.",
    },
    {
      name: "Petrochemical",
      description:
        "Manufacturers that convert petroleum and natural gas into chemical products for various industries.",
    },
    {
      name: "Oilfield Services",
      description: "Companies that provide specialized equipment and expertise to support oil and gas operations.",
    },
    {
      name: "Renewable Energy",
      description: "Organizations focused on sustainable energy sources like solar, wind, and hydroelectric power.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across the entire energy sector, serving diverse clients with specialized solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
