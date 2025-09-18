import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Benefit {
  _id: string
  _title: string
  description: string
  icon: {
    url: string
    alt: string
  }
}

interface BenefitsProps {
  heading: {
    title: string
    subtitle: string
    align: "left" | "center" | "right"
  }
  benefitsList: {
    items: Benefit[]
  }
}

export function Benefits({ heading, benefitsList }: BenefitsProps) {
  return (
    <section className="py-16 md:py-24 min-h-[600px] bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className={`mb-12 md:mb-16 text-${heading.align}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {heading.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{heading.subtitle}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefitsList.items.map((benefit) => (
            <Card key={benefit._id} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Image
                      src={
                        benefit.icon.url ||
                        `/placeholder.svg?height=32&width=32&query=${encodeURIComponent(benefit._title + " icon")}`
                      }
                      alt={benefit.icon.alt || `${benefit._title} icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{benefit._title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
