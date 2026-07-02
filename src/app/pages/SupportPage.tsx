import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Mail, Phone, MessageSquare } from 'lucide-react';

const faqs = [
  { q: 'How do I reset my password?', a: 'Go to the login page and click "Forgot Password". Enter your email address and we will send you a reset link within 5 minutes.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can change your plan at any time from Account Settings > Billing. Changes take effect immediately and are prorated.' },
  { q: 'Is my data backed up?', a: 'All data is backed up continuously to multiple geographic regions. We maintain 30-day rolling backups with point-in-time recovery.' },
  { q: 'How do I invite team members?', a: 'Navigate to Settings > Team > Invite Member. Enter the email address and select a role. They will receive an invitation email immediately.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual plans over $500.' },
  { q: 'Do you offer a free trial?', a: 'Yes! All plans include a 14-day free trial with full feature access. No credit card required to start.' },
  { q: 'How do I export my data?', a: 'Go to Settings > Data > Export. You can download your data as CSV, JSON, or PDF. Exports are available instantly for standard accounts.' },
  { q: 'What is your uptime SLA?', a: 'We guarantee 99.9% uptime for all paid plans. Enterprise customers receive a 99.99% SLA with financial compensation for breaches.' },
];

const contactOptions = [
  { icon: Mail, title: 'Email Support', detail: 'support@webapp.com', resp: 'Response within 24 hours', action: 'Send Email' },
  { icon: Phone, title: 'Phone Support', detail: '+1 (800) 123-4567', resp: 'Mon–Fri, 9am–6pm EST', action: 'Call Now' },
  { icon: MessageSquare, title: 'Live Chat', detail: 'Chat with our AI or a real agent', resp: 'Available 24/7', action: 'Start Chat' },
];

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticket, setTicket] = useState({ name: '', email: '', subject: '', category: '', message: '' });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-red-900 text-sm font-semibold uppercase tracking-wide">Support</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">Help Centre</h1>
          <p className="text-red-900 max-w-xl mx-auto mb-6">Find answers quickly, submit tickets, or chat with our AI assistant.</p>
          <div className="max-w-lg mx-auto relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-5 py-3.5 rounded-xl text-gray-800 text-sm focus:outline-none shadow-lg pr-32"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-red-600 text-sm font-semibold uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Frequently asked questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Submission Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-red-600 text-sm font-semibold uppercase tracking-wide">Submit a Ticket</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Couldn't find your answer?</h2>
            <p className="text-gray-500 mt-2">Submit a support ticket and we will get back to you shortly.</p>
          </div>
          {ticketSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Ticket #TKT-{Math.floor(Math.random() * 90000 + 10000)} Created</h3>
              <p className="text-gray-500 text-sm">We will respond to your email within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setTicketSubmitted(true); }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required value={ticket.name} onChange={e => setTicket(t => ({ ...t, name: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input required type="email" value={ticket.email} onChange={e => setTicket(t => ({ ...t, email: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select value={ticket.category} onChange={e => setTicket(t => ({ ...t, category: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400 bg-white">
                  <option value="">Select a category</option>
                  <option>Billing & Payments</option>
                  <option>Account & Access</option>
                  <option>Technical Issue</option>
                  <option>Feature Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input required value={ticket.subject} onChange={e => setTicket(t => ({ ...t, subject: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400" placeholder="Brief description of your issue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea required value={ticket.message} onChange={e => setTicket(t => ({ ...t, message: e.target.value }))} rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400 resize-none" placeholder="Please describe your issue in detail..." />
              </div>
              <button type="submit" className="w-full py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                Submit Ticket
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 text-sm font-semibold uppercase tracking-wide">Contact</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Other ways to reach us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map(opt => (
              <div key={opt.title} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <opt.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{opt.title}</h3>
                <p className="text-red-600 text-sm font-medium mb-1">{opt.detail}</p>
                <p className="text-gray-400 text-xs mb-4">{opt.resp}</p>
                <button className="px-4 py-2 text-sm border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  {opt.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Try our AI assistant</h3>
            <p className="text-red-100 text-sm">Available 24/7. Handles FAQs, account queries, and lead capture instantly.</p>
          </div>
          <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors shrink-0">
            Chat with AI Now
          </button>
        </div>
      </section>
    </div>
  );
}
