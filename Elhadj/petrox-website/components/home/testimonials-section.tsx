"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Petrox has been an invaluable partner in our operations. Their expertise and commitment to safety have significantly improved our efficiency and reduced downtime.",
      author: "Michael Johnson",
      position: "Operations Director",
      company: "Global Energy Corp",
    },
    {
      quote:
        "Working with Petrox on our exploration project exceeded all expectations. Their team's technical knowledge and innovative approach helped us discover new opportunities we wouldn't have found otherwise.",
      author: "Sarah Williams",
      position: "Chief Exploration Officer",
      company: "Horizon Petroleum",
    },
    {
      quote:
        "The maintenance services provided by Petrox have extended the life of our equipment by years. Their preventative approach and quick response times have saved us millions in potential replacement costs.",
      author: "David Chen",
      position: "Maintenance Manager",
      company: "Pacific Resources Ltd",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies in the energy sector worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <Quote className="h-12 w-12 text-yellow-600" />
              </div>
              <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-8">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-gray-300 hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${
                  index === currentIndex ? "bg-yellow-600" : "bg-gray-300"
                } hover:bg-yellow-600`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-gray-300 hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
