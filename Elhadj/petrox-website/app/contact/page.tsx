import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationsSection from "@/components/contact/locations-section"

export const metadata: Metadata = {
  title: "Contact Us - Petrox",
  description: "Get in touch with Petrox for your energy solutions needs. Multiple locations worldwide",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <LocationsSection />
    </>
  )
}
