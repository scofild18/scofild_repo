import Image from "next/image"

export default function CultureSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Petrox, we foster a culture of innovation, collaboration, and excellence. We believe that our people
              are our greatest asset, and we're committed to creating an environment where everyone can thrive
              professionally and personally.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We celebrate diversity and inclusion, recognizing that different perspectives drive better solutions. Our
              team members are encouraged to share ideas, take initiative, and contribute to our collective success.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3"></div>
                <p className="text-gray-700">Collaborative and supportive team environment</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3"></div>
                <p className="text-gray-700">Recognition and rewards for outstanding performance</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3"></div>
                <p className="text-gray-700">Opportunities to work on challenging, impactful projects</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3"></div>
                <p className="text-gray-700">Commitment to safety, integrity, and ethical practices</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Petrox team collaboration"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Petrox office environment"
              width={400}
              height={400}
              className="rounded-lg shadow-md mt-8"
            />
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Petrox field operations"
              width={400}
              height={400}
              className="rounded-lg shadow-md mt-8"
            />
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Petrox team event"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
