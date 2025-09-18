"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { Info } from "lucide-react"

interface Ingredient {
  _id: string
  name: string
  description: string
  benefits: string[]
  image: {
    url: string
    alt: string
  }
}

interface IngredientsProps {
  heading: {
    title: string
    subtitle: string
    align: "left" | "center" | "right"
  }
  ingredientsList: Ingredient[]
}

export function Ingredients({ heading, ingredientsList }: IngredientsProps) {
  return (
    <section className="py-16 md:py-24 min-h-[600px] bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className={`mb-12 md:mb-16 text-${heading.align}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {heading.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{heading.subtitle}</p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ingredientsList.map((ingredient) => (
            <Card
              key={ingredient._id}
              className="border-border bg-card hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-0">
                {/* Ingredient Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={
                      ingredient.image.url ||
                      `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(ingredient.name + " natural supplement ingredient") || "/placeholder.svg"}`
                    }
                    alt={ingredient.image.alt || `${ingredient.name} - Natural supplement ingredient`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{ingredient.name}</h3>

                    {/* Info Popover */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
                          <Info className="h-4 w-4 text-primary" />
                          <span className="sr-only">More info about {ingredient.name}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4" align="end">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">{ingredient.name} Benefits</h4>
                          <ul className="space-y-1">
                            {ingredient.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{ingredient.description}</p>

                  {/* Benefits Preview */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ingredient.benefits.slice(0, 2).map((benefit, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-white"
                      >
                        {benefit}
                      </span>
                    ))}
                    {ingredient.benefits.length > 2 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-white">
                        +{ingredient.benefits.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
