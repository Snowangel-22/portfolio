import { useState } from 'react'
import Tag from './Tag'

export default function ProjectCard({ project, onOpen }) {
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        width: '100%',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderLeft: project.featured ? '3px solid var(--accent)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        transform: hover ? 'translateY(-6px)' : 'none',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        padding: 0,
        height: 'auto',
      }}
    >
      {/* Cover image */}
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-subtle)', position: 'relative' }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: hover ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{
        padding: '22px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        height: 340,
      }}>
        {/* Title + link icon */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6, flexShrink: 0 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 22,
            lineHeight: 1.2,
            margin: 0,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            textAlign: 'left',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}>
            {project.title}
          </h3>
          <span style={{ color: hover ? 'var(--accent)' : 'var(--text-tertiary)', transition: 'color 0.2s', flexShrink: 0 }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>

        {/* Tagline */}
        <p style={{
          color: 'var(--accent)',
          fontSize: 14,
          fontWeight: 600,
          fontFamily: 'var(--font-body)',
          margin: '0 0 10px',
          textAlign: 'left',
          flexShrink: 0,
        }}>
          {project.tagline}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: 10, flexShrink: 0 }}>
          {project.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>

        {/* Description */}
        <p style={{
          fontSize: 14.5,
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
          margin: 0,
          textAlign: 'left',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          flex: 1,
        }}>
          {project.description}
        </p>

      </div>
    </button>
  )
}
