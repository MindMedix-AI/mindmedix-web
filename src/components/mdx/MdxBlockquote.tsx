export default function MdxBlockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-6 py-4 border-l-4 border-[#2d8cff] bg-[#2d8cff]/5 rounded-r-xl text-slate-300 italic leading-relaxed">
      {children}
    </blockquote>
  )
}
