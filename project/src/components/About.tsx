import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FeatureCard from './about/FeatureCard';

const features = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Crafting beautiful and responsive user interfaces using modern web technologies.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Globe,
    title: "Backend Development",
    description: "Building scalable server-side applications and RESTful APIs.",
    iconColor: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences through thoughtful design.",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}