export default function MdxDiagram({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <figure className="my-8 p-6 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
      <pre className="text-sm font-mono text-slate-300 leading-relaxed whitespace-pre overflow-x-auto">
        {children}
      </pre>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
