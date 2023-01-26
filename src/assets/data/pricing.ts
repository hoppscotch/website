export const tiers = [
  {
    name: "Basic",
    href: "#",
    priceMonthly: 9,
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Essential",
    href: "#",
    priceMonthly: 29,
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
  {
    name: "Premium",
    href: "#",
    priceMonthly: 59,
    description:
      "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
  },
]

export const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Molestie lobortis massa.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Urna purus felis.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Tellus pulvinar sit dictum.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Convallis.",
        tiers: { Essential: "Up to 20 users", Premium: "Up to 50 users" },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Adipiscing.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Eget risus integer.",
        tiers: { Essential: true, Premium: true },
      },
      { name: "Gravida leo urna velit.", tiers: { Premium: true } },
      {
        name: "Elementum ut dapibus mi feugiat cras nisl.",
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Sit dignissim.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: "Congue at nibh et.", tiers: { Essential: true, Premium: true } },
      {
        name: "Volutpat feugiat mattis.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Tristique pellentesque ornare diam sapien.",
        tiers: { Premium: true },
      },
    ],
  },
]

export const faq = [
  {
    question: "How does the billing work?",
    answer:
      "Hoppscotch offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "You can cancel your subscription at any time. If you cancel before the end of your current billing period, your cancellation will take effect immediately and you will not be charged again. If you cancel after the end of your current billing period, your cancellation will take effect at the end of the current billing period and you will not be charged again.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for all our paid plans. If you are not satisfied with our service, you can request a refund within 14 days of your purchase and we will refund your payment.",
  },
  {
    question: "What is the free trial policy?",
    answer:
      "We offer a 7-day free trial for all our paid plans. You can use all the features of the paid plan during the trial period. If you are not satisfied with our service, you can cancel your subscription before the end of the trial period and you will not be charged.",
  },
  {
    question: "What is the payment method?",
    answer:
      "We accept all major credit cards and debit cards. We also accept payments through PayPal.",
  },
  {
    question: "What is the payment currency?",
    answer: "We accept payments in USD, EUR, GBP, INR, AUD, CAD, JPY, and SGD.",
  },
  {
    question: "What is the payment frequency?",
    answer:
      "You can choose to pay monthly or annually. If you choose to pay annually, you will get a 20% discount on the monthly price.",
  },
]
