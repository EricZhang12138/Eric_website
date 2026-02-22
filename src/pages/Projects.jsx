import { useScrollRevealMultiple } from '../hooks/useScrollReveal';
import { useTilt } from '../hooks/useTilt';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Distributed Filesystem',
      description: `
        A distributed filesystem implementation built from scratch.
      `,
      technologies: ['C++/Python', 'Filesystem', 'Distributed Systems', 'Multithreading', 'CI/CD', 'gRPC', 'Docker'],
      status: 'In Development',
      link: 'https://github.com/EricZhang12138/Distributed_Filesystem'
    },
    {
      title: 'Ray Tracer',
      description: `
        A physically-based ray tracer built without external graphics libraries.
        Implements features like reflection, refraction, shadows, and various
        material types for realistic image rendering.
      `,
      technologies: ['C++', 'Computer Graphics', 'Linear Algebra'],
      status: 'Completed',
      link: 'https://github.com/EricZhang12138/Ray_Tracying'
    },
    {
      title: 'Distributed Orderbook',
      description: `
        A high-performance distributed orderbook system for trading applications.
        Designed to handle high-throughput order matching with low latency
        and strong consistency guarantees.
      `,
      technologies: ['Java/C++', 'Distributed Systems', 'Real-time Processing'],
      status: 'In Development',
    },
  ];

  const setRef = useScrollRevealMultiple(projects.length);
  const tilt = useTilt(6);

  return (
    <div className="container">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-subtitle">
          A collection of personal projects showcasing my skills in distributed systems,
          backend engineering and infrastructure.
        </p>
      </section>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={setRef(index)}
            className="project-card scroll-reveal fade-up"
            style={{ '--delay': `${index * 0.15}s` }}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
