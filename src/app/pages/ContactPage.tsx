import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle,
  Headphones, Building2, Wrench, Facebook, Instagram, Twitter, Download,
} from 'lucide-react';
import heroBg from '../../imports/Breakdown-800x480.jpg';

const vp = { once: true, amount: 0.12 };
const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.85a4.85 4.85 0 01-1.07-.16z" />
    </svg>
  );
}

const enquiryTypes = [
  {
    icon: Headphones,
    title: 'Customer Support',
    desc: 'Need help with an existing request or have a question about using Sherix? Contact our support team for assistance.',
    email: 'support@sherix.com',
    label: 'Email support',
  },
  {
    icon: Building2,
    title: 'Business & Fleet',
    desc: 'Interested in using Sherix for your business or fleet? Learn how Sherix can reduce vehicle downtime and simplify roadside assistance management.',
    email: 'business@sherix.com',
    label: 'Email business team',
  },
  {
    icon: Wrench,
    title: 'Service Partner Enquiries',
    desc: 'Are you a mechanic, towing operator, tyre specialist, auto electrician, or roadside provider? Contact us to learn more about joining the Sherix network.',
    email: 'partners@sherix.com',
    label: 'Email partner team',
  },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday',         time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday & Public Holidays', time: 'Emergency requests only' },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  return (
    <div className="bg-white text-gray-900">

      {/* ─── Hero ─── */}
      <section className="relative h-[82vh] min-h-[540px] flex items-end overflow-hidden">
        <img
          src={heroBg}
          alt="Driver with vehicle breakdown calling for help"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ objectPosition: '60% center' }}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-red-700/12 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20"
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
        >
          <motion.p variants={rise} className="text-xs tracking-[0.25em] uppercase text-white/45 mb-5">
            Sherix — Contact
          </motion.p>
          <motion.h1
            variants={rise}
            className="text-white max-w-xl"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em' }}
          >
            We're here<br />
            <span className="text-red-400">to help.</span>
          </motion.h1>
          <motion.p
            variants={rise}
            className="mt-5 text-white/60 max-w-md leading-relaxed"
            style={{ fontSize: '1.05rem' }}
          >
            Whether you need roadside assistance, have a question about Sherix, want to explore fleet solutions, or are interested in becoming a service partner — our team is ready to assist you.
          </motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
            >
              Send us a message <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+233XXXXXXXXX"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/75 hover:text-white transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.18)' }}
            >
              <Phone className="w-4 h-4" /> Call us
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ─── Enquiry Types ─── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Get in Touch
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-lg"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Our team is available to help you find what you need.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Choose the right channel for your enquiry and we'll get back to you as quickly as possible.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {enquiryTypes.map((e, i) => (
                <motion.div
                  key={e.title}
                  variants={rise}
                  className="bg-white p-8 group hover:bg-gray-950 transition-colors duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <e.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-gray-900 group-hover:text-white transition-colors duration-300 mb-3"
                    style={{ fontSize: '1.05rem', fontWeight: 700 }}
                  >
                    {e.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/45 text-sm leading-relaxed flex-1 transition-colors duration-300">
                    {e.desc}
                  </p>
                  <a
                    href={`mailto:${e.email}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-red-600 group-hover:text-red-400 transition-colors duration-300"
                  >
                    {e.label} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Info + Form ─── */}
      <section id="contact-form" className="py-28 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 items-start">

            {/* Left — info */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Contact Information
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Reach us directly.
              </motion.h2>

              <motion.div variants={rise} className="mt-10 space-y-5">
                {[
                  { icon: Mail,  label: 'Customer Support', value: 'support@sherix.com',  href: 'mailto:support@sherix.com' },
                  { icon: Mail,  label: 'Business Enquiries', value: 'business@sherix.com', href: 'mailto:business@sherix.com' },
                  { icon: Mail,  label: 'Partnerships',      value: 'partners@sherix.com', href: 'mailto:partners@sherix.com' },
                  { icon: Phone, label: 'Phone',             value: '+233 XXX XXX XXXX',   href: 'tel:+233XXXXXXXXX' },
                  { icon: MapPin,label: 'Location',          value: 'Accra, Ghana',        href: undefined },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 py-4 border-b border-gray-200">
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Office Hours */}
              <motion.div variants={rise} className="mt-12">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-xs tracking-[0.18em] uppercase text-gray-400">Office Hours</span>
                </div>
                <div className="space-y-3">
                  {hours.map(h => (
                    <div key={h.day} className="flex items-start justify-between py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">{h.day}</span>
                      <span className={`text-sm font-medium ml-4 text-right ${h.time.includes('Emergency') ? 'text-red-600' : 'text-gray-900'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div variants={rise} className="mt-12">
                <p className="text-xs tracking-[0.18em] uppercase text-gray-400 mb-4">Follow Sherix</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Stay connected for updates, vehicle tips, new features, and announcements through our official channels.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook,   label: 'Facebook', href: '#' },
                    { icon: Instagram,  label: 'Instagram', href: '#' },
                    { icon: Twitter,    label: 'X', href: '#' },
                    { icon: TikTokIcon, label: 'TikTok', href: '#' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-200"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Form header */}
                <div className="bg-gray-950 px-8 py-7 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2 relative z-10">Send a Message</p>
                  <h3
                    className="text-white relative z-10"
                    style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}
                  >
                    Complete the form and we'll get back to you soon.
                  </h3>
                </div>

                {/* Form body */}
                <div className="p-8">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                      <h3 className="text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 700 }}>Message sent</h3>
                      <p className="mt-2 text-sm text-gray-500">A member of our team will get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Full name" required>
                          <input
                            required
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            placeholder="Jane Smith"
                            className="field-input"
                          />
                        </Field>
                        <Field label="Email address" required>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            placeholder="jane@example.com"
                            className="field-input"
                          />
                        </Field>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Phone number">
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            placeholder="+233 XXX XXX XXXX"
                            className="field-input"
                          />
                        </Field>
                        <Field label="Subject" required>
                          <select
                            required
                            value={form.subject}
                            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                            className="field-input bg-white"
                          >
                            <option value="">Select a subject</option>
                            <option value="customer-support">Customer Support</option>
                            <option value="business-fleet">Business & Fleet Enquiry</option>
                            <option value="partner">Service Partner Enquiry</option>
                            <option value="general">General Enquiry</option>
                          </select>
                        </Field>
                      </div>
                      <Field label="How can we help you?" required>
                        <textarea
                          required
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          rows={5}
                          placeholder="Tell us how we can help you…"
                          className="field-input resize-none"
                        />
                      </Field>
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gray-950 hover:bg-gray-800 text-white text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Emergency CTA ─── */}
      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">
                Need Roadside Assistance Right Now?
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-white"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Open the app and get help in minutes.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-white/50 text-sm leading-relaxed max-w-lg">
                If you require immediate roadside assistance, open the Sherix app and submit a service request. We'll connect you with the nearest available verified roadside service provider.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 lg:w-64 shrink-0"
            >
              <Link
                to="/"
                className="flex items-center justify-between px-6 py-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-2xl transition-colors"
              >
                <span>Request Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#download"
                className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/70 hover:text-white rounded-2xl transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span>Download the App</span>
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .field-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.625rem;
          font-size: 0.875rem;
          color: #111827;
          background-color: #fafafa;
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }
        .field-input::placeholder { color: #9ca3af; }
        .field-input:focus { border-color: #374151; box-shadow: 0 0 0 3px rgba(55,65,81,0.06); background-color: #fff; }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500 tracking-wide uppercase">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
