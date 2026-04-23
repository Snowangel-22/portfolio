export default function Tag({ label }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      background: 'var(--accent-muted)',
      padding: '3px 8px',
      borderRadius: 4,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}
