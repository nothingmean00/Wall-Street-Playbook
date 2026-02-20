interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQ[]
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">{title}</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-20 bg-gold" />
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                <p className="mt-2 text-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
