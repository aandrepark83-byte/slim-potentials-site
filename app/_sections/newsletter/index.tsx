import { Section } from "../../../common/section-wrapper"
import { Input } from "../../../common/input"

type NewsletterProps = {
  title: string
  description: string
  placeholder?: string
  buttonText?: string
}

export function Newsletter({
  title = "Stay Updated",
  description = "Subscribe to our newsletter for the latest updates and insights.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterProps) {
  const handleSubmit = async (formData: FormData) => {
    "use server"
    const email = formData.get("email") as string
    // Simple form handling - in a real app, you'd integrate with your email service
    console.log("Newsletter signup:", email)
  }

  return (
    <Section className="bg-[--surface-secondary] !py-10 dark:bg-[--dark-surface-secondary]" container="full">
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-1 flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">{title}</h5>
          <p className="text text-[--text-tertiary] dark:text-[--dark-text-tertiary] lg:text-lg">{description}</p>
        </div>

        <form action={handleSubmit} className="flex gap-2">
          <Input type="email" name="email" placeholder={placeholder} required className="min-w-[200px]" />
          <button
            type="submit"
            className="rounded-md bg-[--accent-500] px-4 py-2 text-white hover:bg-[--accent-600] transition-colors"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </Section>
  )
}
