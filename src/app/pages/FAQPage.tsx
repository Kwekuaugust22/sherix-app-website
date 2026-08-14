import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is Sherix?',
    a: 'Sherix is a digital roadside assistance platform that connects drivers with trusted roadside service providers for vehicle diagnosis, repairs, and maintenance.',
  },
  {
    q: 'How do I request assistance?',
    a: 'Open the Sherix app, submit your service request, share your location, and we’ll match you with the most suitable verified service provider near you.',
  },
  {
    q: 'Can I see the cost before repairs begin?',
    a: 'Yes. Sherix allows you to review and approve quotations before any repair work begins, giving you greater transparency and control over service costs.',
  },
  {
    q: 'Can I track my service provider?',
    a: 'Yes. Once your request is accepted, you can track your assigned service provider in real time until they arrive at your location.',
  },
  {
    q: 'Who can become a service partner?',
    a: 'Independent mechanics, auto electricians, registered garages and automotive service companies that meet Sherix’s verification requirements can apply to join the platform.',
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-red-100/80">Frequently Asked Questions</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Everything you need to know.</h1>
          <p className="mt-4 max-w-2xl text-base text-red-50/80">
            Learn how Sherix works before you request vehicle assistance or start your journey as a service partner.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-base font-medium text-gray-900 sm:text-lg">{item.q}</span>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${isOpen ? 'border-red-600 bg-red-600 text-white' : 'border-gray-200 text-gray-500'}`}>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-base">
                      {item.a}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700">
              Contact Sherix <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/partner" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900">
              Become a Service Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
