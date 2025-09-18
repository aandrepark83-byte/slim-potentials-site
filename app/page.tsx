import { Hero } from "./_sections/hero"
import { Benefits } from "./_sections/benefits"
import { AboutUs } from "./_sections/about-us"
import { Products } from "./_sections/products"
import { HowItWorks } from "./_sections/how-it-works"
import { Ingredients } from "./_sections/ingredients"
import { Testimonials } from "./_sections/testimonials"
import { FAQ } from "./_sections/faq"
import { CTA } from "./_sections/cta"
import { FDADisclaimer } from "./_sections/fda-disclaimer"
import { SpinningWheel } from "./_sections/spinning-wheel"

const pageData = {
  hero: {
    _analyticsKey: "hero-section",
    customerSatisfactionBanner: {
      text: "Trusted by 25,000+ wellness enthusiasts",
      avatars: {
        items: [
          {
            _id: "avatar-1",
            avatar: {
              url: "/professional-customer-1.jpg",
              alt: "Happy Customer 1",
            },
          },
          {
            _id: "avatar-2",
            avatar: {
              url: "/professional-customer-2.jpg",
              alt: "Happy Customer 2",
            },
          },
          {
            _id: "avatar-3",
            avatar: {
              url: "/professional-customer-3.jpg",
              alt: "Happy Customer 3",
            },
          },
        ],
      },
    },
    title: "Elevate Your Performance Naturally",
    subtitle:
      "Introducing Slim Potentials Vegan Performance Gummies - the turbo boost your day needs! Strawberry-flavored plant-based energy with superhero recovery powers.",
    actions: [
      {
        _id: "cta-primary",
        href: "#products",
        label: "Shop Performance Bundle",
        type: "primary",
      },
      {
        _id: "cta-secondary",
        href: "#about",
        label: "Learn More",
        type: "secondary",
      },
    ],
    heroImage: {
      url: "/slim-potentials-hero-lifestyle.jpg",
      alt: "Slim Potentials Performance Gummies - Professional lifestyle shot",
    },
  },
  benefits: {
    heading: {
      title: "Why Choose Slim Potentials?",
      subtitle: "Experience the difference with our scientifically-backed, natural supplements",
      align: "center",
    },
    benefitsList: {
      items: [
        {
          _id: "benefit-1",
          _title: "Plant-Based Formula",
          description: "100% natural ingredients sourced from premium plants for maximum potency and purity.",
          icon: {
            url: "/icons/plant-based-professional.jpg",
            alt: "Plant Icon",
          },
        },
        {
          _id: "benefit-2",
          _title: "Scientifically Backed",
          description: "Formulated with research-proven ingredients for optimal health benefits.",
          icon: {
            url: "/icons/science-professional.jpg",
            alt: "Science Icon",
          },
        },
        {
          _id: "benefit-3",
          _title: "Great Taste",
          description: "Delicious gummy format makes taking your daily supplements enjoyable.",
          icon: {
            url: "/icons/taste-professional.jpg",
            alt: "Taste Icon",
          },
        },
        {
          _id: "benefit-4",
          _title: "Third-Party Tested",
          description: "Every batch is independently tested for purity, potency, and safety.",
          icon: {
            url: "/icons/tested-professional.jpg",
            alt: "Tested Icon",
          },
        },
      ],
    },
  },
  howItWorks: {
    heading: {
      title: "How It Works",
      subtitle: "Simple steps to better health",
      align: "center",
    },
    steps: [
      {
        _id: "step-1",
        number: "01",
        title: "Choose Your Formula",
        description: "Select Performance+ for energy and focus, or Gutshield for digestive health.",
      },
      {
        _id: "step-2",
        number: "02",
        title: "Take Daily",
        description: "Enjoy 2 delicious gummies daily with your morning routine.",
      },
      {
        _id: "step-3",
        number: "03",
        title: "Feel the Difference",
        description: "Experience improved energy, focus, and overall wellness within weeks.",
      },
    ],
  },
  ingredients: {
    heading: {
      title: "Premium Ingredients",
      subtitle: "Carefully selected natural compounds for maximum effectiveness",
      align: "center",
    },
    ingredientsList: [
      {
        _id: "ingredient-1",
        name: "Ashwagandha",
        description: "Adaptogenic herb that helps reduce stress and boost energy levels naturally.",
        benefits: ["Reduces stress", "Improves energy", "Supports focus"],
        image: { url: "/ingredients/ashwagandha-professional.jpg", alt: "Ashwagandha" },
      },
      {
        _id: "ingredient-2",
        name: "Turmeric Extract",
        description: "Powerful anti-inflammatory compound that supports joint health and recovery.",
        benefits: ["Anti-inflammatory", "Joint support", "Antioxidant"],
        image: { url: "/ingredients/turmeric-professional.jpg", alt: "Turmeric" },
      },
      {
        _id: "ingredient-3",
        name: "Probiotics",
        description: "Beneficial bacteria that support digestive health and immune function.",
        benefits: ["Digestive health", "Immune support", "Gut balance"],
        image: { url: "/ingredients/probiotics-professional.jpg", alt: "Probiotics" },
      },
    ],
  },
  testimonials: {
    heading: {
      title: "Real Results from Real People",
      subtitle: "Join thousands who've transformed their wellness journey",
      align: "center" as const,
    },
    quotes: [
      {
        _id: "testimonial-1",
        quote:
          "Found slim potentials a few months ago. I was in need of something to get me going during the day. I also don't use animal products, so i googled and found slim potentials. I have been taking them for some time and was surprised. The level of energy is amazing. When I tried them, they gave me a new level of energy, and i couldn't be happier. Their vegan performance gummies really are the best.",
        author: {
          _title: "Anna Marie Turner",
          role: "Verified Customer",
          image: {
            url: "/testimonials/anna-professional.jpg",
            alt: "Anna Marie Turner",
            height: 64,
            width: 64,
          },
          company: {
            _title: "⭐⭐⭐⭐⭐",
          },
        },
      },
      {
        _id: "testimonial-2",
        quote:
          "I pop these after a balanced meal and by the time 30–45 minutes pass, I'm ON. No crash, no jitters, just clean energy that keeps me going through my workout and the rest of the day. Energy drinks could never 👏",
        author: {
          _title: "Emily S.",
          role: "Verified Customer",
          image: {
            url: "/testimonials/emily-professional.jpg",
            alt: "Emily S.",
            height: 64,
            width: 64,
          },
          company: {
            _title: "⭐⭐⭐⭐⭐",
          },
        },
      },
      {
        _id: "testimonial-3",
        quote:
          "Ladies… listen. I take these after a meal, wait like 45 minutes, then hit the gym — and let me tell you, leg day has never been the same. I've been on them for 5 months now and my booty gains are finally showing. These gummies keep me locked in and pushing heavier every time.",
        author: {
          _title: "Sarah S.",
          role: "Verified Customer",
          image: {
            url: "/testimonials/sarah-professional.jpg",
            alt: "Sarah S.",
            height: 64,
            width: 64,
          },
          company: {
            _title: "⭐⭐⭐⭐⭐",
          },
        },
      },
      {
        _id: "testimonial-4",
        quote:
          "I started taking them before my workouts about 5 months ago and wow… game changer. After a meal, I wait a bit, and by the time I'm at the gym the energy hits perfect. My glute workouts went next level, I can lift heavier, and the booty gains are REAL. Feeling stronger and way more confident.",
        author: {
          _title: "Jillian J.",
          role: "Verified Customer",
          image: {
            url: "/testimonials/jillian-professional.jpg",
            alt: "Jillian J.",
            height: 64,
            width: 64,
          },
          company: {
            _title: "⭐⭐⭐⭐⭐",
          },
        },
      },
    ],
  },
  faq: {
    heading: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Performance Gummies",
      align: "center",
    },
    faqs: [
      {
        _id: "faq-1",
        question: "How should I take Performance Gummies?",
        answer:
          "Take Performance Gummies after a balanced meal and wait 30 minutes to 1 hour for optimal absorption and effectiveness.",
      },
      {
        _id: "faq-2",
        question: "Are Performance Gummies vegan?",
        answer:
          "Yes! Our Performance Gummies are 100% vegan and plant-based, made with natural ingredients and no animal products.",
      },
      {
        _id: "faq-3",
        question: "How long does the energy last?",
        answer:
          "Performance Gummies provide sustained, clean energy without crashes or jitters, typically lasting 4-6 hours to power you through your day.",
      },
      {
        _id: "faq-4",
        question: "Can I take them before workouts?",
        answer:
          "Many customers take Performance Gummies 30-45 minutes before workouts for enhanced energy, focus, and performance during training.",
      },
      {
        _id: "faq-5",
        question: "What's your return policy?",
        answer:
          "We offer a 30-day return policy. Items must be in original condition with packaging. Contact Support@slimpotentials.com to start a return.",
      },
    ],
  },
  cta: {
    _analyticsKey: "final-cta",
    title: "Ready to Transform Your Health?",
    subtitle: "Join thousands of satisfied customers and start your wellness journey today",
    actions: [
      {
        _id: "final-cta",
        href: "/products",
        label: "Shop Slim Potentials",
        type: "primary",
      },
    ],
    guarantee: "60-Day Money-Back Guarantee",
  },
  aboutUs: {
    heading: {
      title: "About Slim Potentials",
      subtitle: "Your partner in wellness, dedicated to enhancing your health journey",
      align: "center",
    },
    content:
      "Slim Potentials is your partner in wellness, dedicated to enhancing your health journey with our plant-based, nutrient-rich gummy supplements. Born from the idea of making wellness both accessible and enjoyable, we offer a delightful product designed to support your physical, mental, and emotional well-being. Our mission is to empower you with the tools you need for vitality and resilience, through our Performance Gummies. We're more than just a brand; we're a community committed to helping you live your best life, naturally. Welcome to Slim Potentials, where your health and happiness are at the heart of everything we do.",
  },
  products: {
    heading: {
      title: "Performance Gummies Bundle",
      subtitle: "The ultimate bundle for comprehensive wellness",
      align: "center",
    },
    bundle: {
      title: "Performance Gummies Bundle",
      subtitle: "(2 Performance Gummies Together)",
      description:
        "Slim Potentials Gummy Bundle is the ultimate bundle for comprehensive wellness. Whether you're looking to elevate your energy, endurance, and focus, aid in your body's natural recovery process, or bolster your immune defenses, this bundle has you covered.",
      features: [
        "Elevate your physical and mental performance",
        "Blend designed for energy, endurance, and focus",
        "Perfect for athletes and active individuals",
        "Natural, healthful ingredients with delicious flavors",
        "Plant-based and vegan-friendly",
      ],
      paymentNote: "Pay with 4 interest-free installments with Shop Pay",
      usage: "Make sure to take this after a balanced meal, wait 30min-1hr.",
      paymentMethods: ["Amex", "Discover", "Diners Club", "Google Pay", "Apple Pay", "Mastercard", "Visa", "Shop Pay"],
    },
    productDescription:
      "Introducing the Slim Potentials Vegan Performance Gummies: the turbo boost your day needs, also added with that EXTRA energy strength, with a side of superhero recovery powers! These strawberry-flavored gummies are bursting with plant-based energy, these gummies are like little bundles of joy for your taste buds and vitality. Need a pick-me-up during that mid-afternoon slump? These gummies have your back, providing a natural, sustained energy kick to power you through the day. But wait, there's more! They're not just about the energy buzz they're also your trusty sidekick for recovery, helping you bounce back faster from whatever life throws at you. So go ahead, seize the day and let these gummies be your secret weapon for unstoppable energy and superhero-like recovery!",
  },
}

export default function HomePage() {
  return (
    <>
      <SpinningWheel />
      <Hero {...pageData.hero} eventsKey="general-events" />
      <AboutUs {...pageData.aboutUs} />
      <Products {...pageData.products} />
      <Benefits {...pageData.benefits} />
      <HowItWorks {...pageData.howItWorks} />
      <Ingredients {...pageData.ingredients} />
      <Testimonials {...pageData.testimonials} />
      <FAQ {...pageData.faq} />
      <CTA {...pageData.cta} eventsKey="general-events" />
      <FDADisclaimer />
    </>
  )
}
