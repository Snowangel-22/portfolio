import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, revealVariants } from '../../hooks/useScrollReveal'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <>
      <section id="projects" className="w-full bg-bg-subtle" style={{ padding: '96px clamp(24px, 6vw, 80px)' }}>
        <div className="max-w-5xl mx-auto" ref={ref}>
          {/* Section header */}
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={revealVariants}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-3">
                Featured work
              </p>
              <h2
                className="font-display font-bold text-text-primary m-0"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}
              >
                Things I've built.
              </h2>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-text-primary inline-flex items-center gap-1 hover:text-accent transition-colors"
            >
              View all
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={revealVariants} custom={index}>
                <ProjectCard
                  project={project}
                  onOpen={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Non-featured projects list */}
          {projects.some(p => !p.featured) && (
            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={containerVariants}
              style={{ marginTop: 48, paddingTop: 48, borderTop: '1px solid var(--border)' }}
            >
              {projects
                .filter(p => !p.featured)
                .map((project, index) => (
                  <motion.button
                    key={project.id}
                    variants={revealVariants}
                    custom={index}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '24px 0',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'opacity 0.2s',
                      borderBottom: '1px solid var(--border)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 18,
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: '0 0 6px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      style={{
                        fontSize: 14,
                        color: 'var(--accent)',
                        fontWeight: 600,
                        margin: '0 0 10px',
                      }}
                    >
                      {project.tagline}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 12,
                            fontWeight: 500,
                            color: 'var(--accent)',
                            background: 'var(--accent-muted)',
                            padding: '3px 8px',
                            borderRadius: 4,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.button>
                ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Project modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
