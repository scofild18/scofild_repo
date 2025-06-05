import React, { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { COMPANY } from "../constants";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Have questions or want to learn more about our services? 
            Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                {submitSuccess && (
                  <p className="mt-4 text-green-600 text-center">
                    Your message has been sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
          
          <div className="bg-slate-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Address</h4>
                  <p className="text-slate-300">{COMPANY.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <p className="text-slate-300">
                    <a href={`tel:${COMPANY.phone}`} className="hover:text-amber-400 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-slate-300">
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-amber-400 transition-colors">
                      {COMPANY.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="font-medium text-lg mb-4">Business Hours</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;