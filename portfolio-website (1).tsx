import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Brief description of your first data analysis project",
      technologies: ["Python", "Excel", "Power BI"]
    },
    {
      title: "Project 2", 
      description: "Brief description of your second data analysis project",
      technologies: ["Python", "Power BI", "Data Visualization"]
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">EDWIN MAINA</h1>
        <p className="text-xl text-gray-600">Data Analyst | Python Expert | Business Intelligence Specialist</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-700">
          I am a dedicated data analyst with expertise in Python, Excel, and Power BI. My professional goal is to transform complex data into actionable insights that drive business decision-making. I specialize in data cleaning, statistical analysis, and creating compelling data visualizations that tell a clear and impactful story.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {['Python', 'Excel', 'Power BI', 'Data Analysis', 'Data Visualization', 'Statistical Analysis'].map((skill, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 text-sm px-2.5 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-sm px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-700">
          Email: mainaedwin716@gmail.com<br />
          LinkedIn: linkedin.com/in/edwin-maina-a58661213/<br />
          Phone: +254702837431
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
