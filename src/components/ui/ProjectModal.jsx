import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tag from './Tag'

export default function ProjectModal({ project, isOpen, onClose }) {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [isOpen, project])

  if (!project) return null

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: 40,
      transition: { duration: 0.2 },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40,
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '40px 20px 80px',
              zIndex: 50,
              overflowY: 'auto',
            }}
          >
            {/* Modal content */}
            <motion.div
              onClick={e => e.stopPropagation()}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                maxWidth: 700,
                width: '100%',
              }}
            >
              {/* Header with close button */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 20px 0 20px',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <div style={{ flex: 1 }} />
                <button
                  onClick={onClose}
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--bg-subtle)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                  aria-label="Close modal"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cover image */}
              {project.externalLink ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{
                    display: 'block',
                    aspectRatio: '16/9',
                    background: 'var(--bg-subtle)',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                />
              ) : (
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: 'var(--bg-subtle)',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}

              {/* Content */}
              <div style={{ padding: '40px 32px' }}>
                {/* Title */}
                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    margin: '0 0 12px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h1>

                {/* Tagline */}
                <p
                  style={{
                    color: 'var(--accent)',
                    fontSize: 16,
                    fontWeight: 600,
                    margin: '0 0 12px',
                  }}
                >
                  {project.tagline}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                  {project.tags.map(tag => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                {/* Metadata grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 16,
                    marginBottom: 32,
                    padding: '24px 0',
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {[
                    { label: 'Role', value: project.role },
                    { label: 'Company', value: project.company },
                    { label: 'Period', value: project.period },
                    { label: 'Team', value: project.team },
                  ].map(item => (
                    <div key={item.label}>
                      <p style={{ fontSize: 12, textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.05em', margin: '0 0 6px', fontWeight: 600 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 14, color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key metrics — only show if they exist */}
                {project.keyMetrics && project.keyMetrics.length > 0 && (
                  <div style={{ marginBottom: 32 }}>
                    <p style={{ fontSize: 12, textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.05em', margin: '0 0 12px', fontWeight: 600 }}>
                      Key Metrics
                    </p>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 16,
                      }}
                    >
                      {project.keyMetrics.map((metric, idx) => (
                        <div key={idx} style={{ background: 'var(--bg)', padding: '16px', borderRadius: 'var(--radius-card)' }}>
                          <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {metric.label}
                          </p>
                          <p style={{ fontSize: 24, fontWeight: 700, color: 'var(--accent)', margin: 0 }}>
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Problem */}
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>
                    Problem
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>
                    Solution
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {project.solution}
                  </p>
                </div>

                {/* Results */}
                {project.results && (
                  <div style={{ marginBottom: 28 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
                      Results
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: 20, listStyle: 'none' }}>
                      {project.results.map((result, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: 15,
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: 8,
                            position: 'relative',
                            paddingLeft: 12,
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: 0,
                              color: 'var(--accent)',
                              fontWeight: 600,
                            }}
                          >
                            •
                          </span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* External link */}
                {project.externalLink && (
                  <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '12px 20px',
                        background: 'var(--accent)',
                        color: 'var(--accent-contrast)',
                        borderRadius: 'var(--radius-card)',
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
                    >
                      View Live
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
