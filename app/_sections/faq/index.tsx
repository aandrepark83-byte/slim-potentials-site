"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  _id: string
  question: string
  answer: string
}

interface FAQProps {
  heading: {
    title: string
    subtitle: string
    align: "left" | "center" | "right"
  }
  faqs: FAQItem[]
}

export function FAQ({ heading, faqs }: FAQProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <div className={`mb-12 md:mb-16 text-${heading.align}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {heading.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{heading.subtitle}</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq._id}
              value={faq._id}
              className="border border-border bg-card rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
