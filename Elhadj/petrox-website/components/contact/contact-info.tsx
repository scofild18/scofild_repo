import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Our team of experts is ready to answer your questions and discuss how Petrox can help with your energy needs.
        </p>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
          <p className="text-gray-600">
            123 Energy Boulevard
            <br />
            Houston, TX 77002
            <br />
            United States
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
          <p className="text-gray-600">Main: +1 (555) 123-4567</p>
          <p className="text-gray-600">Support: +1 (555) 987-6543</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600">General: info@petrox.com</p>
          <p className="text-gray-600">Support: support@petrox.com</p>
          <p className="text-gray-600">Careers: careers@petrox.com</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
          <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM CST</p>
          <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM CST</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>

      {/* Google Maps Placeholder */}
      <div className="mt-8">
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Google Maps Integration</p>
        </div>
      </div>
    </div>
  )
}
