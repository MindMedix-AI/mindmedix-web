export default function MdxVideo({ src, caption }: { src: string; caption?: string }) {
  const videoId = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/|vimeo\.com\/)([a-zA-Z0-9_-]+)/
  )?.[1]

  if (videoId) {
    return (
      <figure className="my-8">
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={caption || 'Embedded video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-slate-500">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className="my-8">
      <video
        controls
        className="w-full rounded-xl border border-white/10"
        poster="/images/blog/video-placeholder.jpg"
      >
        <source src={src} type="video/mp4" />
      </video>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
