export interface SiteData {
  settings: {
    logo: {
      light: {
        url: string
        alt: string
        width: number
        height: number
      }
      dark: {
        url: string
        alt: string
        width: number
        height: number
      }
    }
    theme: {
      accent: string
      grayScale: string
    }
  }
  header: {
    navbar: {
      items: Array<{
        _id: string
        _title: string
        href: string
        sublinks?: {
          items: Array<{
            _id: string
            _title: string
            href: string
          }>
        }
      }>
    }
    rightCtas: {
      items: Array<{
        _id: string
        label: string
        href: string
        type: "primary" | "secondary"
      }>
    }
  }
  hero: {
    _id: string
    title: string
    subtitle: string
    description: string
    ctas: Array<{
      _id: string
      label: string
      href: string
      type: "primary" | "secondary"
    }>
    image?: {
      url: string
      alt: string
      width: number
      height: number
    }
  }
  features: {
    title: string
    subtitle: string
    items: Array<{
      _id: string
      title: string
      description: string
      icon?: string
      image?: {
        url: string
        alt: string
        width: number
        height: number
      }
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    items: Array<{
      _id: string
      quote: string
      author: {
        _title: string
        role: string
        company: {
          _title: string
        }
        image: {
          url: string
          alt: string
        }
      }
    }>
  }
  pricing: {
    title: string
    subtitle: string
    plans: Array<{
      _id: string
      name: string
      price: string
      description: string
      features: string[]
      cta: {
        label: string
        href: string
        type: "primary" | "secondary"
      }
      popular?: boolean
    }>
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{
      _id: string
      question: string
      answer: string
    }>
  }
  footer: {
    newsletter: {
      title: string
      description: string
      placeholder: string
      buttonText: string
    }
    navbar: {
      items: Array<{
        _title: string
        url: string
      }>
    }
    socialLinks: Array<{
      _title: string
      url: string
      icon: {
        url: string
      }
    }>
    copyright: string
  }
}

export const siteData: SiteData = {
  settings: {
    logo: {
      light: {
        url: "/modern-tech-logo.png",
        alt: "Company Logo",
        width: 120,
        height: 40,
      },
      dark: {
        url: "/modern-tech-company-logo-dark.jpg",
        alt: "Company Logo",
        width: 120,
        height: 40,
      },
    },
    theme: {
      accent: "black", // Changed from "blue" to "black"
      grayScale: "slate",
    },
  },
  header: {
    navbar: {
      items: [
        {
          _id: "nav-1",
          _title: "Features",
          href: "#features",
        },
        {
          _id: "nav-2",
          _title: "Pricing",
          href: "#pricing",
        },
        {
          _id: "nav-3",
          _title: "About",
          href: "#about",
        },
        {
          _id: "nav-4",
          _title: "Contact",
          href: "#contact",
        },
      ],
    },
    rightCtas: {
      items: [
        {
          _id: "cta-1",
          label: "Sign In",
          href: "/signin",
          type: "secondary",
        },
        {
          _id: "cta-2",
          label: "Get Started",
          href: "/signup",
          type: "primary",
        },
      ],
    },
  },
  hero: {
    _id: "hero-1",
    title: "Build Something Amazing",
    subtitle: "The Future is Here",
    description:
      "Transform your ideas into reality with our cutting-edge platform. Join thousands of creators who are already building the next generation of digital experiences.",
    ctas: [
      {
        _id: "hero-cta-1",
        label: "Start Building",
        href: "/signup",
        type: "primary",
      },
      {
        _id: "hero-cta-2",
        label: "Learn More",
        href: "#features",
        type: "secondary",
      },
    ],
    image: {
      url: "/modern-dashboard.png",
      alt: "Platform Dashboard",
      width: 800,
      height: 600,
    },
  },
  features: {
    title: "Powerful Features",
    subtitle: "Everything you need to succeed",
    items: [
      {
        _id: "feature-1",
        title: "Lightning Fast",
        description: "Built for speed with modern architecture and optimized performance.",
        icon: "⚡",
      },
      {
        _id: "feature-2",
        title: "Secure by Default",
        description: "Enterprise-grade security with end-to-end encryption and compliance.",
        icon: "🔒",
      },
      {
        _id: "feature-3",
        title: "Scalable Infrastructure",
        description: "Grows with your business from startup to enterprise scale.",
        icon: "📈",
      },
      {
        _id: "feature-4",
        title: "24/7 Support",
        description: "Round-the-clock support from our expert team whenever you need help.",
        icon: "🎧",
      },
    ],
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Trusted by thousands of companies worldwide",
    items: [
      {
        _id: "testimonial-1",
        quote: "This platform has completely transformed how we work. The efficiency gains are incredible.",
        author: {
          _title: "Sarah Johnson",
          role: "CEO",
          company: {
            _title: "TechCorp",
          },
          image: {
            url: "/professional-woman-headshot.png",
            alt: "Sarah Johnson",
          },
        },
      },
      {
        _id: "testimonial-2",
        quote: "The best investment we've made for our team. Highly recommend to anyone looking to scale.",
        author: {
          _title: "Michael Chen",
          role: "CTO",
          company: {
            _title: "InnovateLab",
          },
          image: {
            url: "/professional-man-headshot.png",
            alt: "Michael Chen",
          },
        },
      },
      {
        _id: "testimonial-3",
        quote: "Outstanding support and features. It's like having a whole development team at your fingertips.",
        author: {
          _title: "Emily Rodriguez",
          role: "Product Manager",
          company: {
            _title: "StartupXYZ",
          },
          image: {
            url: "/professional-woman-headshot-2.png",
            alt: "Emily Rodriguez",
          },
        },
      },
    ],
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that's right for you",
    plans: [
      {
        _id: "plan-1",
        name: "Starter",
        price: "$9",
        description: "Perfect for individuals and small projects",
        features: ["Up to 5 projects", "Basic analytics", "Email support", "1GB storage"],
        cta: {
          label: "Get Started",
          href: "/signup?plan=starter",
          type: "secondary",
        },
      },
      {
        _id: "plan-2",
        name: "Professional",
        price: "$29",
        description: "Ideal for growing teams and businesses",
        features: [
          "Unlimited projects",
          "Advanced analytics",
          "Priority support",
          "10GB storage",
          "Team collaboration",
          "Custom integrations",
        ],
        cta: {
          label: "Start Free Trial",
          href: "/signup?plan=pro",
          type: "primary",
        },
        popular: true,
      },
      {
        _id: "plan-3",
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations with specific needs",
        features: [
          "Everything in Professional",
          "Unlimited storage",
          "24/7 phone support",
          "Custom SLA",
          "On-premise deployment",
          "Dedicated account manager",
        ],
        cta: {
          label: "Contact Sales",
          href: "/contact",
          type: "secondary",
        },
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our platform",
    items: [
      {
        _id: "faq-1",
        question: "How do I get started?",
        answer:
          "Simply sign up for an account and you'll be guided through our onboarding process. You can start building immediately with our intuitive interface.",
      },
      {
        _id: "faq-2",
        question: "Is there a free trial?",
        answer: "Yes! We offer a 14-day free trial for our Professional plan. No credit card required to get started.",
      },
      {
        _id: "faq-3",
        question: "Can I change plans later?",
        answer:
          "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
      },
      {
        _id: "faq-4",
        question: "What kind of support do you offer?",
        answer:
          "We provide email support for all plans, priority support for Professional users, and 24/7 phone support for Enterprise customers.",
      },
      {
        _id: "faq-5",
        question: "Is my data secure?",
        answer:
          "Yes, we take security seriously. All data is encrypted in transit and at rest, and we're compliant with SOC 2 Type II and GDPR standards.",
      },
    ],
  },
  footer: {
    newsletter: {
      title: "Stay Updated",
      description: "Get the latest updates and news delivered to your inbox.",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
    navbar: {
      items: [
        { _title: "Privacy Policy", url: "/privacy" },
        { _title: "Terms of Service", url: "/terms" },
        { _title: "Support", url: "/support" },
        { _title: "Documentation", url: "/docs" },
      ],
    },
    socialLinks: [
      {
        _title: "Twitter",
        url: "https://twitter.com/company",
        icon: {
          url: "/twitter-icon.png",
        },
      },
      {
        _title: "LinkedIn",
        url: "https://linkedin.com/company/company",
        icon: {
          url: "/linkedin-icon.png",
        },
      },
      {
        _title: "GitHub",
        url: "https://github.com/company",
        icon: {
          url: "/github-icon.png",
        },
      },
    ],
    copyright: "© 2024 Company Name. All rights reserved.",
  },
}

// Helper functions for accessing data
export const getNavItems = () => siteData.header.navbar.items
export const getHeroData = () => siteData.hero
export const getFeaturesData = () => siteData.features
export const getTestimonialsData = () => siteData.testimonials
export const getPricingData = () => siteData.pricing
export const getFaqData = () => siteData.faq
export const getFooterData = () => siteData.footer
export const getSettingsData = () => siteData.settings
