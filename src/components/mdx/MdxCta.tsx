import Link from 'next/link'

export default function MdxCta({
  children,
  href,
  variant = 'primary',
}: {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
}) {
  const styles = {
    primary:
      'bg-[#2d8cff] text-white hover:bg-[#2472d9] shadow-lg shadow-[#2d8cff]/20',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    outline:
      'border border-[#2d8cff] text-[#2d8cff] hover:bg-[#2d8cff]/10',
  }

  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <div className="my-8 text-center p-8 rounded-xl bg-gradient-to-r from-[#2d8cff]/10 to-transparent border border-[#2d8cff]/20">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex px-8 py-4 text-base font-medium rounded-lg transition ${styles[variant]}`}
        >
          {children}
        </a>
      </div>
    )
  }

  return (
    <div className="my-8 text-center p-8 rounded-xl bg-gradient-to-r from-[#2d8cff]/10 to-transparent border border-[#2d8cff]/20">
      <Link
        href={href}
        className={`inline-flex px-8 py-4 text-base font-medium rounded-lg transition ${styles[variant]}`}
      >
        {children}
      </Link>
    </div>
  )
}
