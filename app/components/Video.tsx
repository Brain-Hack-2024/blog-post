export default function Video({src, controls=false, sound=false}: {src: string, controls?: boolean, sound?: boolean}) {
  return (
    <video loop playsInline controls={controls} className="w-full" muted={!sound} autoPlay={!sound}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}