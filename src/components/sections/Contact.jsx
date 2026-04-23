import { motion } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { useScrollReveal, revealVariants } from '../../hooks/useScrollReveal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()

  const contacts = [
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/angela-gao22/',
      color: '#0A66C2',
    },
    {
      icon: <FiGithub size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Snowangel-22',
      color: '#1F2937',
    },
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      href: 'mailto:angela_gao@berkeley.edu',
      color: '#3f0070',
    },
  ]

  return (
    <section id="contact" className="w-full bg-bg" style={{ padding: '96px clamp(24px, 6vw, 80px)' }}>
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-3">
            Let's connect
          </p>
          <h2
            className="font-display font-bold text-text-primary"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', margin: 0 }}
          >
            Get in touch.
          </h2>
        </motion.div>

        {/* Email link */}
        <motion.a
          href="mailto:angela_gao@berkeley.edu"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="block text-center mb-12"
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: 'var(--accent)',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hover)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
        >
          angela_gao@berkeley.edu
        </motion.a>

        {/* Contact links */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
        >
          {contacts.map(contact => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              variants={itemVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 'var(--radius-card)',
                  background: 'var(--accent-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent-contrast)'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--accent-muted)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                {contact.icon}
              </div>
              {/* Label */}
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
              >
                {contact.label}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
