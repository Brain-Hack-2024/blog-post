export default function Annotation({children}:{children: React.ReactNode}) {
  return (
    <><span style={{color: "#666"}}><sup>*</sup></span>
    <div className="annotation">
      * {children}
    </div>
    </>
  )
}