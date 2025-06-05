export default function AboutHero() {
  return (
    <section
      className="py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg?height=800&width=1600')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Petrox</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          With over 35 years of experience, Petrox has established itself as a leader in the energy industry, delivering
          innovative solutions with a commitment to safety and excellence.
        </p>
      </div>
    </section>
  )
}
