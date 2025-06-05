"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/placeholder.svg?height=1080&width=1920')`,
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Welcome to Petrox</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Leading the future of energy with innovative solutions and professional excellence
        </p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}
