import React from "react";
import Container from "./Container";
import { SERVICES } from "../constants";
import * as LucideIcons from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            We provide comprehensive solutions across the entire oil and gas value chain,
            from exploration to distribution, with a focus on innovation and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-8px]"
              >
                <div className="h-20 bg-slate-900 flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent size={40} className="text-amber-500" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-700">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;