import React from "react";
import Container from "./Container";
import { COMPANY } from "../constants";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              A Leader in Sustainable Energy Solutions
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              {COMPANY.description}
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              {COMPANY.mission}
            </p>

            <h4 className="text-xl font-semibold text-slate-900 mb-4">
              Our Core Values
            </h4>
            <ul className="space-y-3">
              {COMPANY.values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Oil field at sunset"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-6 -right-6 w-full h-full bg-amber-500 rounded-lg -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;