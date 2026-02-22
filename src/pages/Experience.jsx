import { useScrollRevealMultiple } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import './Experience.css';

function AnimatedStat({ value, suffix = '', prefix = '' }) {
  const { count, ref } = useCountUp(value);
  return <span ref={ref} className="animated-stat">{prefix}{count}{suffix}</span>;
}

function Experience() {
  const experiences = [
    {
      company: 'Nethermind',
      position: 'Software Engineering Intern',
      duration: 'Oct 2025 - Jan 2026',
      description: [
        'Engineered a high-throughput biometric enrollment pipeline using a Producer-Consumer architecture with Python threading and asyncio. Decoupled hardware I/O from NPU inference to minimize latency, employing a leaky-bucket queue strategy that guarantees real-time processing of the freshest frames while maintaining a non-blocking eventloop for the main application.',
        'Engineered TLS software layer with HSM private key operations.',
      ],
      technologies: ['C++', 'Python', 'Docker', 'Linux'],
    },
    {
      company: 'University of Edinburgh',
      position: 'AI Research Intern',
      duration: 'Summer 2025',
      description: [
        'Developed a multimodal machine learning system combining a pretrained image encoder (EfficientNet) and a pretrained text encoder (DistilBERT on OCR-extracted text) to improve fine-grained grocery product identification for visually impaired users.',
        'Designed a feature fusion pipeline to integrate visual and textual cues from product packaging, aiming to resolve visual ambiguities and ultimately improving accuracy by 6.2%.',
      ],
      technologies: ['Python', 'Pytorch', 'Transformer', 'Computer Vision'],
      stats: [{ value: 6.2, label: 'accuracy improvement', suffix: '%', decimals: true }],
    },
    {
      company: 'Metrol Technology',
      position: 'Firmware Engineer Intern',
      duration: 'Summer 2024',
      description: [
        'Architected scalable MRAM validation firmware in C using design patterns (dependency injection, strategy pattern) to support 8+ testing algorithms across 10+ chip variants, achieving 98%+ fault coverage while reducing code duplication by 60%',
      ],
      technologies: ['Python', 'C'],
      stats: [
        { value: 98, label: 'fault coverage', suffix: '%+' },
        { value: 60, label: 'less code duplication', suffix: '%' },
      ],
    },
  ];

  const setRef = useScrollRevealMultiple(experiences.length);

  return (
    <div className="container">
      <section className="experience-header">
        <h1>Work Experience</h1>
        <p className="experience-subtitle">
          My professional journey and internship experiences in software engineering.
        </p>
      </section>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={setRef(index)}
            className="timeline-item scroll-reveal fade-up"
            style={{ '--delay': `${index * 0.2}s` }}
          >
            <div className="timeline-marker"></div>
            <div className="experience-card">
              <div className="experience-title">
                <h3>{exp.position}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <ul className="description-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {exp.stats && (
                <div className="stats-row">
                  {exp.stats.map((stat, i) => (
                    <div key={i} className="stat-item">
                      <span className="stat-value">
                        <AnimatedStat value={Math.round(stat.value)} suffix={stat.suffix} />
                      </span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
