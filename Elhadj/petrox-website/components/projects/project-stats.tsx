export default function ProjectStats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">500+</div>
            <div className="text-lg text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">25+</div>
            <div className="text-lg text-gray-300">Countries</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">$2B+</div>
            <div className="text-lg text-gray-300">Project Value</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">98%</div>
            <div className="text-lg text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
