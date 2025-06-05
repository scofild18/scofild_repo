"use client"

import { useEffect, useState } from "react"

export default function StatsSection() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    experience: 0,
  })

  const finalCounts = {
    projects: 500,
    clients: 150,
    countries: 25,
    experience: 35,
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + increment, finalValue),
        }))
      }, stepDuration)
    })

    setTimeout(() => {
      timers.forEach((timer) => clearInterval(timer))
      setCounts(finalCounts)
    }, duration)

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">{Math.floor(counts.projects)}+</div>
            <div className="text-lg text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">{Math.floor(counts.clients)}+</div>
            <div className="text-lg text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">{Math.floor(counts.countries)}+</div>
            <div className="text-lg text-gray-300">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">{Math.floor(counts.experience)}+</div>
            <div className="text-lg text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
