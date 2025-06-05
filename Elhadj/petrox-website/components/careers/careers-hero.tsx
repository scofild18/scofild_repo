export default function CareersHero() {
  return (
    <section
      className="py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg?height=800&width=1600')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Build your career with Petrox and be part of a team that's shaping the future of the energy industry with
          innovation and excellence.
        </p>
      </div>
    </section>
  )
}
