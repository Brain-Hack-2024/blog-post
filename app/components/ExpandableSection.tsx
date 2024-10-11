export default function ExpandableSection({title, children}: {title: string, children: React.ReactNode}) {
  return (
    <details>
      <summary className="font-semibold cursor-pointer text-green-700">
        {title}
      </summary>
      <div className="mt-2 pl-4 py-0 border-l-2 border-green-700 bg-green-50">
        {children}
      </div>
    </details>
  )
}