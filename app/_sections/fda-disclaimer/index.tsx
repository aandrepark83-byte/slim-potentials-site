import { AlertTriangle } from "lucide-react"

export function FDADisclaimer() {
  return (
    <section className="py-8 md:py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-4 text-center md:text-left">
          {/* Icon */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <AlertTriangle className="h-6 w-6 text-muted-foreground" />
          </div>

          {/* Disclaimer Content */}
          <div className="flex-1 space-y-3">
            <h3 className="font-heading text-lg font-semibold text-foreground">Important Disclaimer</h3>

            <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong>*These statements have not been evaluated by the Food and Drug Administration.</strong>
                This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>

              <p>
                Individual results may vary. The information provided on this website is for educational purposes only
                and is not intended as medical advice. Always consult with a healthcare professional before starting any
                new supplement regimen, especially if you have pre-existing medical conditions, are pregnant, nursing,
                or taking medications.
              </p>

              <p>
                Slim Potentials supplements are manufactured in FDA-registered facilities following Good Manufacturing
                Practices (GMP). All products are third-party tested for purity and potency to ensure quality and
                safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
