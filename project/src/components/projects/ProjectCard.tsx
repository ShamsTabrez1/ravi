import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo
}: ProjectCardProps) {
  return (
    <Card>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-4">
          <a href={github} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Github size={20} />
            <span>Code</span>
          </a>
          <a href={demo} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ExternalLink size={20} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </Card>
  );
}