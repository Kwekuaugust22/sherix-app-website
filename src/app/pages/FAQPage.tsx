import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MessageCircle, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'How do I request vehicle assistance?',
    a: 'Open the Sherix app, submit your request, share your location, and describe the service you need. Sherix will connect you with a verified automotive service professional based on your request and location.',
  },
  {
    q: 'Can I edit or cancel my service request?',
    a: 'You can edit or cancel your request before a service provider accepts it. Once a provider has accepted the request and is traveling to your location, the request can no longer be edited. If you cancel after the provider has started traveling, a call-out fee may apply to compensate them for their time and travel. Any applicable fee will be shown before your cancellation is confirmed.',
  },
  {
    q: 'How do I know how much a service will cost?',
    a: 'Before work begins, you’ll receive a quotation from your assigned service provider. You can review and approve the quotation before any work starts.',
  },
  {
    q: 'How are changes to my service handled?',
    a: 'If your service provider determines that the issue is different from your original request, they’ll update the service details and quotation in the Sherix app. You’ll be able to review the updated information and approve it before any additional work begins.',
  },
  {
    q: 'Can I track my assigned service provider?',
    a: 'Yes. Once your request has been accepted, you can track your assigned service provider until they arrive at your location.',
  },
  {
    q: 'Where can I view my previous services?',
    a: 'Your completed services are saved in your Sherix account, making it easy to review your vehicle’s service history whenever you need it.',
  },
  {
    q: 'Can I add more than one vehicle to my Sherix account?',
    a: 'Yes. You can register multiple vehicles under one Sherix account. Before requesting assistance, simply select the vehicle you need help with. Your primary vehicle is selected by default, but you can switch to any saved vehicle before submitting a service request.',
  },
  {
    q: 'How do I become a Service Partner?',
    a: 'If you’re an independent mechanic, auto electrician, registered garage, or automotive service company, you can apply through the Become a Service Partner page. Every application goes through Sherix’s verification process before approval.',
  },
  {
    q: 'I couldn’t find the information I need. What should I do?',
    a: 'If you couldn’t find the information you need, contact Sherix Support through Live Chat, email, or by submitting a support request. We’ll help you find the right solution.',
  },
];

const supportOptions = [
  {
    title: 'Contact support',
    description: 'Chat with Sherix Support for real-time assistance during available support hours.',
    actionLabel: 'Start Live Chat',
    actionHref: '#contact-form',
    icon: MessageCircle,
    meta: 'Available during support hours',
  },
  {
    title: 'Contact support',
    description: 'Contact Sherix Support by email. We’ll review your enquiry and respond as soon as possible.',
    email: 'Available at Launch',
    actionLabel: 'Send an Email',
    actionHref: 'mailto:support@sherix.com',
    icon: Mail,
    meta: 'Support Email',
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-red-100/80">Frequently Asked Questions</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Find the answers you’re looking for.</h1>
          <p className="mt-4 max-w-2xl text-base text-red-50/80">
            Browse answers to the questions customers ask most about using Sherix. If you can’t find what you’re looking for, contact Sherix Support or submit a support request.
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
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-red-600">Need More Help?</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-4xl">
              Choose the support option that works best for you.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm text-gray-500 sm:text-base">
              If you can’t find the answer you’re looking for, we’re here to help. Choose the support option that works best for you, and our team will help resolve your issue as quickly as possible.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {supportOptions.map((option) => {
              const Icon = option.icon;

              return (
                <motion.div
                  key={option.title + option.actionLabel}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">{option.meta}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">{option.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{option.description}</p>
                  {option.email && (
                    <p className="mt-4 text-sm font-medium text-gray-900">{option.email}</p>
                  )}
                  <a
                    href={option.actionHref}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    {option.actionLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-red-600">Submit a Support Request</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-4xl">
              Tell us how we can help.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-gray-500 sm:text-base">
              If you couldn’t find the help you were looking for, complete the form below and the Sherix Support team will review your request and respond as soon as possible.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <p className="text-lg font-semibold text-green-700">Thank you for contacting Sherix Support.</p>
                <p className="mt-2 text-sm text-green-700/80">
                  We’ve received your request and will respond as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                      Full Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-red-300 focus:bg-white"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-red-300 focus:bg-white"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                      Phone Number
                    </label>
                    <input
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-red-300 focus:bg-white"
                      placeholder="+233 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                      Subject
                    </label>
                    <input
                      required
                      value={form.subject}
                      onChange={(event) => setForm({ ...form, subject: event.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-red-300 focus:bg-white"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                    Select a Category
                  </label>
                  <select
                    required
                    value={form.category}
                    onChange={(event) => setForm({ ...form, category: event.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-red-300 focus:bg-white"
                  >
                    <option value="">Choose a category</option>
                    <option>Service Request Support</option>
                    <option>Account Support</option>
                    <option>Payment &amp; Billing</option>
                    <option>Service Partner Support</option>
                    <option>Technical Issue</option>
                    <option>General Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-red-300 focus:bg-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
                >
                  <Send className="h-4 w-4" />
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
