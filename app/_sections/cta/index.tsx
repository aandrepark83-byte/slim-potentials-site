import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

interface CTAAction {
  _id: string
  href: string
  label: string
  type: "primary" | "secondary"
}

interface CTAProps {
  _analyticsKey: string
  title: string
  subtitle: string
  actions: CTAAction[]
  guarantee?: string
  eventsKey?: string
}

export function CTA({ title, subtitle, actions, guarantee }: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Main Content */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">{subtitle}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {actions.map((action) => (
            <Button
              key={action._id}
              asChild
              size="lg"
              variant={action.type === "primary" ? "secondary" : "outline"}
              className={`px-8 py-3 text-lg font-semibold min-w-[200px] ${
                action.type === "primary"
                  ? "bg-background text-foreground hover:bg-background/90"
                  : "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <a href={action.href}>{action.label}</a>
            </Button>
          ))}
        </div>

        {/* Guarantee */}
        {guarantee && (
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <Shield className="h-4 w-4" />
            <span className="font-medium">{guarantee}</span>
          </div>
        )}
      </div>
    </section>
  )
}
