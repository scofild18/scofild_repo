import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Petrox, we are committed to delivering exceptional energy solutions that power progress and drive
              innovation. With decades of experience in the oil and gas industry, we combine cutting-edge technology
              with proven expertise to meet the evolving needs of our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of dedicated professionals works tirelessly to ensure safe, efficient, and sustainable operations
              across all our projects. We believe in building lasting partnerships based on trust, reliability, and
              mutual success.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-3"></div>
                <p className="text-gray-700">Excellence in every project we undertake</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-3"></div>
                <p className="text-gray-700">Commitment to safety and environmental responsibility</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-3"></div>
                <p className="text-gray-700">Innovation-driven solutions for complex challenges</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Petrox team and operations"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
