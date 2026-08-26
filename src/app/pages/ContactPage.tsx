import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail, ArrowRight, Send, CheckCircle,
  Headphones, Building2, Wrench, Facebook, Instagram, Twitter,
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
    desc: 'Need help with your Sherix account, an existing service request, payments, or another support-related issue?',
    email: 'support@sherix.com',
    label: 'Email Support',
    availability: 'Available at Launch',
  },
  {
    icon: Building2,
    title: 'Business & Fleet',
    desc: 'Interested in using Sherix for your business or managing a fleet? Contact our Business team to discuss fleet management, partnerships, or enterprise solutions.',
    email: 'business@sherix.com',
    label: 'Email Business Team',
    availability: 'Available at Launch',
  },
  {
    icon: Wrench,
    title: 'Become a Service Partner',
    desc: 'Own a garage, operate a towing service, or provide roadside automotive services? Contact us to learn how to become a verified Sherix Service Partner.',
    email: 'partners@sherix.com',
    label: 'Email Partner Team',
    availability: 'Available at Launch',
  },
  {
    icon: Mail,
    title: 'General Enquiries',
    desc: 'Not sure which team can help? Send us a message and we’ll route your enquiry to the right team.',
    email: 'hello@sherix.com',
    label: 'Email General Enquiries',
    availability: 'Available at Launch',
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[82vh] min-h-[540px] flex items-end overflow-hidden">
        <img
          src={heroBg}
          alt="Driver with vehicle breakdown calling for help"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ objectPosition: '60% center' }}
        />
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
            GET IN TOUCH
          </motion.p>
          <motion.h1
            variants={rise}
            className="text-white max-w-2xl"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em' }}
          >
            Get in touch with the Sherix team.
          </motion.h1>
          <motion.p
            variants={rise}
            className="mt-5 text-white/60 max-w-2xl leading-relaxed"
            style={{ fontSize: '1.05rem' }}
          >
            Whether you’re a Sherix customer, business owner, fleet operator, or prospective Service Partner, choose the option below and we’ll make sure your enquiry reaches the right team.
          </motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
            >
              Send us a message <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <div className="grid md:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {enquiryTypes.map((entry) => (
                <motion.div
                  key={entry.title}
                  variants={rise}
                  className="bg-white p-8 group hover:bg-gray-950 transition-colors duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <entry.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-gray-900 group-hover:text-white transition-colors duration-300 mb-3"
                    style={{ fontSize: '1.05rem', fontWeight: 700 }}
                  >
                    {entry.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/45 text-sm leading-relaxed flex-1 transition-colors duration-300">
                    {entry.desc}
                  </p>
                  <div className="mt-6 text-xs font-medium text-gray-500 group-hover:text-red-300 transition-colors duration-300">
                    {entry.availability}
                  </div>
                  <a
                    href={`mailto:${entry.email}?subject=${encodeURIComponent(entry.title)}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-red-600 group-hover:text-red-400 transition-colors duration-300"
                  >
                    {entry.label} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact-form" className="py-28 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1.2fr_1.4fr] gap-16 lg:gap-20 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                General Enquiries
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Send Us a Message
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-md">
                Not sure which team can help? Send us a message and we’ll route your enquiry to the right team.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-950 px-8 py-7 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2 relative z-10">General Enquiries</p>
                  <h3
                    className="text-white relative z-10"
                    style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}
                  >
                    Send us a message
                  </h3>
                </div>

                <div className="p-8">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                      <h3 className="text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 700 }}>Message sent</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Thank you for contacting Sherix. We’ve received your message. A member of our team will respond by email as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Full Name" required>
                          <input
                            required
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            placeholder="Jane Smith"
                            className="field-input"
                          />
                        </Field>
                        <Field label="Email Address" required>
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
                        <Field label="Phone Number (Optional)">
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            placeholder="+233 XXX XXX XXXX"
                            className="field-input"
                          />
                        </Field>
                        <Field label="Subject" required>
                          <input
                            required
                            value={form.subject}
                            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                            placeholder="How can we help?"
                            className="field-input"
                          />
                        </Field>
                      </div>
                      <Field label="Message" required>
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

      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Follow Sherix
            </motion.p>
            <motion.h2
              variants={rise}
              className="text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Stay connected with Sherix.
            </motion.h2>
            <motion.p variants={rise} className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Stay connected with Sherix for product updates, vehicle ownership tips, new features, and company announcements.
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
                { icon: Twitter, label: 'X', href: 'https://x.com' },
                { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>
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
