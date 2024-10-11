export default function Video({src, sound=false}: {src: string, sound?: boolean}) {
  return (
    <video loop playsInline controls className="w-full" muted={!sound} autoPlay={!sound}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}