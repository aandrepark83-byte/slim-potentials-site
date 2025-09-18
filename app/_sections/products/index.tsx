import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface ProductsProps {
  heading: {
    title: string
    subtitle: string
    align: "left" | "center" | "right"
  }
  bundle: {
    title: string
    subtitle: string
    description: string
    features: string[]
    paymentNote: string
    usage: string
    paymentMethods: string[]
  }
  productDescription: string
}

export function Products({ heading, bundle, productDescription }: ProductsProps) {
  return (
    <section id="products" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{heading.title}</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">{heading.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{bundle.title}</h3>
              <p className="text-white font-semibold text-lg mb-4">{bundle.subtitle}</p>
              <Badge variant="secondary" className="bg-black/10 text-white mb-6">
                {bundle.paymentNote}
              </Badge>
            </div>

            <p className="text-white/80 text-center mb-8 leading-relaxed">{bundle.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Bundle Features:</h4>
                <ul className="space-y-3">
                  {bundle.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Payment Methods:</h4>
                <div className="flex flex-wrap gap-2">
                  {bundle.paymentMethods.map((method, index) => (
                    <Badge key={index} variant="outline" className="text-xs text-white border-white/20">
                      {method}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black/5 rounded-lg p-4 mb-8">
              <p className="text-sm text-white/70 font-medium">
                <strong>Usage Instructions:</strong> {bundle.usage}
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-3">
                Shop Bundle Now
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">About Performance Gummies</h3>
            <p className="text-white/80 leading-relaxed text-center">{productDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
