interface Step {
  _id: string
  number: string
  title: string
  description: string
}

interface HowItWorksProps {
  heading: {
    title: string
    subtitle: string
    align: "left" | "center" | "right"
  }
  steps: Step[]
}

export function HowItWorks({ heading, steps }: HowItWorksProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className={`mb-12 md:mb-16 text-${heading.align}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {heading.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{heading.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step._id} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-white/30 transform -translate-x-1/2 z-0" />
              )}

              {/* Step Content */}
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-white/20">
                  <span className="font-heading text-2xl font-bold">{step.number}</span>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">{step.title}</h3>

                {/* Step Description */}
                <p className="text-white/80 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
