type SectionHeadingProps = {
  number: string
  title: string
  description?: string
}

function SectionHeading({
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
        {number}
      </p>

      <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
