import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import SocialLink from './ui/SocialLink';
import GradientText from './ui/GradientText';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ravianp2004@gmail.com", label: "Email" }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <GradientText>Ravi Kumar</GradientText>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Web Developer
        </p>
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 animate-bounce cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </div>
  );
}