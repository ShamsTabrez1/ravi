import React from 'react';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}