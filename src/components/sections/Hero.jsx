import { motion } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const scrollArrowVariants = {
  animate: {
    y: [0, 6, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-[100svh] flex items-center bg-bg overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl mx-auto px-6 lg:px-20 py-20"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-5"
        >
          PM · Engineer · Builder
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black text-text-primary mb-4 leading-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', letterSpacing: '-0.03em' }}
        >
          Angela Gao.
        </motion.h1>

        {/* Static role list */}
        <motion.div
          variants={itemVariants}
          className="flex items-baseline gap-4 flex-wrap mb-6"
          style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
        >
          {['PM', 'Engineer', 'Builder'].map((role, i) => (
            <span key={role} className="flex items-baseline gap-4">
              <span className="font-subtitle text-accent">{role}</span>
              {i < 2 && (
                <span className="text-border-strong font-light select-none">·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary leading-relaxed mb-8 max-w-xl"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
        >
          100% Product. 100% Technical. 200% Builder. EECS + Business UC Berkeley — PM/GTM @ Applied Materials.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3"
        >
          {/* Resume — primary */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm rounded-card transition-all duration-300"
            style={{ background: 'var(--accent)', color: 'var(--accent-contrast)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download resume
          </a>

          {/* Email me — outlined */}
          <a
            href="mailto:angela_gao@berkeley.edu"
            className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm rounded-card border transition-all duration-300"
            style={{ background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
          >
            <FiMail size={16} />
            Email me
          </a>

          {/* LinkedIn icon */}
          <a
            href="https://linkedin.com/in/angela-gao22/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-card border transition-all duration-300"
            style={{
              width: 44, height: 44,
              background: 'transparent',
              color: 'var(--text-primary)',
              borderColor: 'var(--border-strong)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-strong)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>

          {/* GitHub icon */}
          <a
            href="https://github.com/Snowangel-22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-card border transition-all duration-300"
            style={{
              width: 44, height: 44,
              background: 'transparent',
              color: 'var(--text-primary)',
              borderColor: 'var(--border-strong)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-strong)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollArrowVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
