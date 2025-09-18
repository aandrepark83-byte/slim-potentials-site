interface AboutUsProps {
  heading: {
    title: string
    subtitle: string
    align: "left" | "center" | "right"
  }
  content: string
}

export function AboutUs({ heading, content }: AboutUsProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{heading.title}</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">{heading.subtitle}</p>
          <div className="prose prose-lg max-w-none text-white/80 leading-relaxed">
            <p className="text-base md:text-lg leading-relaxed text-white">{content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
