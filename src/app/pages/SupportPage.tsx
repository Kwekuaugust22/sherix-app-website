import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

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
    a: 'Sherix connects you with verified professionals who provide a transparent quote based on the service required, the vehicle type, and the complexity of the job. You can review the estimate before approving the work and moving forward with the service.',
  },
  {
    q: 'What happens after I submit a request?',
    a: 'After you submit your request, Sherix matches it with available automotive professionals in your area. Once a provider accepts the request, you can track their progress and receive updates as they travel to your location.',
  },
  {
    q: 'Can I become a Service Partner?',
    a: 'Yes. Sherix works with trusted automotive professionals, garages, and independent service providers. If you meet the platform requirements and want to join the Sherix network, you can apply through the Service Partner page.',
  },
  {
    q: 'How do I contact Sherix Support?',
    a: 'You can contact Sherix Support by browsing the FAQs, submitting a support request below, or reaching out through the contact options listed on this page. Support availability will be announced at launch.',
  },
];

const contactOptions = [
  { icon: Mail, title: 'Email Support', detail: 'Available at Launch', resp: 'Support email will be available when Sherix launches.', action: 'Email Sherix' },
  { icon: Phone, title: 'Phone Support', detail: 'Available at Launch', resp: 'Phone support details will be available at launch.', action: 'Call Sherix' },
  { icon: MessageSquare, title: 'Service Partner Support', detail: 'Available at Launch', resp: 'For partner and fleet-related enquiries.', action: 'Contact Support' },
];

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticket, setTicket] = useState({ name: '', email: '', subject: '', category: '', message: '' });

  return (
    <div>
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-red-100 text-xs font-semibold uppercase tracking-[0.22em]">SUPPORT</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">How can we help you today?</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-red-50/80 sm:text-lg">
            Whether you need help with an active service request, your account, or becoming a Service Partner, you’ll find the support you need here. Search for answers, browse frequently asked questions, or contact the Sherix Support team for further assistance.
          </p>
          <div className="mx-auto mt-8 max-w-xl relative">
            <input
              type="text"
              placeholder="Search for a question or topic…"
              className="w-full rounded-full border border-white/20 bg-white px-5 py-3.5 text-sm text-gray-900 shadow-lg placeholder:text-gray-500 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-gray-900 sm:text-4xl">Find the answers you’re looking for.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
              Browse answers to the questions customers ask most about using Sherix. If you can’t find what you’re looking for, contact Sherix Support or submit a support request.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-base font-medium text-gray-900 sm:text-lg">{faq.q}</span>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${isOpen ? 'border-red-600 bg-red-600 text-white' : 'border-gray-200 text-gray-500'}`}>
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-base">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Need more help?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-gray-900">Submit a support request.</h2>
            <p className="mt-3 text-base text-gray-600">
              Tell us what you need help with and our team will get back to you as soon as support is available.
            </p>
          </div>

          {ticketSubmitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-600" />
              <h3 className="mb-1 text-xl font-bold text-gray-900">Support request sent</h3>
              <p className="text-sm text-gray-600">Thanks for getting in touch. We’ll review your request and respond as soon as support is available.</p>
            </div>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                setTicketSubmitted(true);
              }}
              className="space-y-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    required
                    value={ticket.name}
                    onChange={e => setTicket(t => ({ ...t, name: e.target.value }))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-red-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    required
                    type="email"
                    value={ticket.email}
                    onChange={e => setTicket(t => ({ ...t, email: e.target.value }))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-red-400 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Request type</label>
                <select
                  value={ticket.category}
                  onChange={e => setTicket(t => ({ ...t, category: e.target.value }))}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-red-400 focus:outline-none"
                >
                  <option value="">Select a request type</option>
                  <option>Service request</option>
                  <option>Account issue</option>
                  <option>Service Partner enquiry</option>
                  <option>General question</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Subject *</label>
                <input
                  required
                  value={ticket.subject}
                  onChange={e => setTicket(t => ({ ...t, subject: e.target.value }))}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-red-400 focus:outline-none"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  required
                  value={ticket.message}
                  onChange={e => setTicket(t => ({ ...t, message: e.target.value }))}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-red-400 focus:outline-none"
                  placeholder="Tell us what you need help with..."
                />
              </div>

              <button type="submit" className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700">
                Submit request
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-gray-900">Other ways to reach us</h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {contactOptions.map(option => (
              <div key={option.title} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                  <option.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{option.title}</h3>
                <p className="mb-1 text-sm font-medium text-red-600">{option.detail}</p>
                <p className="mb-4 text-xs text-gray-500">{option.resp}</p>
                <button className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-100">Sherix Support</p>
            <h3 className="mt-2 text-2xl font-bold">Need help with your next service request?</h3>
          </div>
          <Link to="/partner" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
            Become a Service Partner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
