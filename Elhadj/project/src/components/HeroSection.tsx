import React, { useEffect, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { COMPANY } from "../constants";

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: `center calc(50% + ${offset}px)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-slate-900"></div>
      
      <Container className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {COMPANY.name}
            <span className="block text-amber-500 mt-2">{COMPANY.tagline}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Delivering innovative energy solutions with a commitment to excellence, 
            safety, and environmental responsibility.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;