export default function MdxTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  )
}
