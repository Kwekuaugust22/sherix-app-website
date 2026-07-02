import { useState } from 'react';
import { CheckCircle, ArrowRight, Users, MapPin, ClipboardList, Star, TrendingUp, Award, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import heroBg from '../../imports/photo_2026-06-10_17-58-59.jpg';

const vp = { once: true, amount: 0.12 };
const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });

const benefits = [
  { icon: Users,         num: '01', title: 'More Customers',       desc: 'Receive service requests from nearby drivers and businesses who need your expertise — no cold calling, no advertising spend.' },
  { icon: MapPin,        num: '02', title: 'Work Near You',        desc: 'Accept requests that fit your service area and availability. You decide when and where you work.' },
  { icon: ClipboardList, num: '03', title: 'Manage Jobs Digitally',desc: 'View requests, update job progress, submit quotations, and complete services through the Sherix platform.' },
  { icon: Star,          num: '04', title: 'Build Trust',          desc: 'Earn ratings and reviews from customers to strengthen your reputation and attract more work.' },
  { icon: TrendingUp,    num: '05', title: 'Business Growth',      desc: 'Spend less time looking for customers and more time doing the work you do best.' },
  { icon: Award,         num: '06', title: 'Professional Platform', desc: 'Join a network committed to quality, transparency, and customer satisfaction.' },
];

const whoCanJoin = [
  'Automotive mechanics',
  'Auto electricians',
  'Tyre specialists',
  'Battery specialists',
  'Towing operators',
  'Mobile technicians',
  'Vehicle diagnostic specialists',
  'Roadside assistance companies',
];

const howSteps = [
  { n: '01', title: 'Apply Online',          desc: 'Complete the short online application. It takes under three minutes.' },
  { n: '02', title: 'Submit Documents',       desc: 'Upload your business registration and identification documents for verification.' },
  { n: '03', title: 'Sherix Verification',    desc: 'Our team reviews your credentials and verifies your qualifications and business details.' },
  { n: '04', title: 'Approval & Onboarding', desc: 'Receive your approval, complete onboarding, and activate your provider profile.' },
  { n: '05', title: 'Start Accepting Jobs',   desc: 'Go live on the Sherix platform and begin receiving roadside assistance requests immediately.' },
];

const reviews = [
  { name: 'Ahmed R.',  role: 'Independent Mechanic, Dubai',  body: 'Sherix doubled my weekly jobs in the first month. Payouts are always on time and the app is genuinely easy to use.' },
  { name: 'Maria T.',  role: 'Workshop Owner, Abu Dhabi',    body: 'Managing my team through Sherix has been seamless. We now see more repeat customers and far better reviews.' },
  { name: 'Kwame B.',  role: 'Roadside Pro, Sharjah',       body: 'The Verified badge alone increased my bookings noticeably. Customers trust the platform and that trust carries over to me.' },
];

export function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  return (
    <div className="bg-white text-gray-900">

      {/* ─── Hero ─── */}
      <section className="relative h-[88vh] min-h-[580px] flex items-end overflow-hidden">
        <img
          src={heroBg}
          alt="Sherix service partner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-red-700/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.p variants={rise} className="text-xs tracking-[0.25em] uppercase text-white/45 mb-5">
              Sherix — Become a Service Partner
            </motion.p>
            <motion.h1
              variants={rise}
              className="text-white max-w-2xl"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em' }}
            >
              Grow your business.<br />
              <span className="text-red-400">Reach more customers.</span>
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-5 text-white/60 max-w-lg leading-relaxed"
              style={{ fontSize: '1.05rem' }}
            >
              Sherix connects skilled roadside service providers with drivers and businesses looking for fast, reliable roadside assistance. Join the platform built to help you succeed.
            </motion.p>
            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/75 hover:text-white transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.18)' }}
              >
                How it works
              </a>
            </motion.div>

            {/* Glass stat strip */}
            <motion.div
              variants={rise}
              className="mt-12 inline-grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.11)' }}
            >
              {[
                { v: '12,000+', l: 'Active providers' },
                { v: '98%',     l: 'Satisfaction rate' },
                { v: '< 8 min', l: 'Avg. response time' },
                { v: '24 / 7',  l: 'Platform availability' },
              ].map(s => (
                <div key={s.l} className="px-6 py-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="text-white font-semibold" style={{ fontSize: '1.3rem', letterSpacing: '-0.02em' }}>{s.v}</div>
                  <div className="text-white/40 text-xs mt-0.5 whitespace-nowrap">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ─── Why Join ─── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Why Join Sherix
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-xl"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Six reasons providers choose Sherix.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Built for professionals who want more work, less admin, and a platform they can trust.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.num}
                  variants={rise}
                  className="bg-white p-8 group hover:bg-gray-950 transition-colors duration-300 cursor-default"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <b.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    <span
                      className="text-gray-150 group-hover:text-white/8 select-none transition-colors duration-300"
                      style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', color: '#ececec' }}
                    >
                      {b.num}
                    </span>
                  </div>
                  <h3
                    className="text-gray-900 group-hover:text-white transition-colors duration-300 mb-2"
                    style={{ fontSize: '1.05rem', fontWeight: 700 }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/45 text-sm leading-relaxed transition-colors duration-300">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Who Can Join ─── */}
      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">
                Who Can Join
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-white"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Built for qualified roadside professionals.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-white/50 text-sm leading-relaxed max-w-md">
                Sherix welcomes a wide range of automotive and roadside service professionals. If you provide professional vehicle services, there's a place for you on Sherix.
              </motion.p>
            </motion.div>

            {/* Right — two-column list */}
            <motion.div
              initial="hidden" whileInView="show" viewport={vp}
              variants={stagger(0.07)}
              className="grid grid-cols-2 gap-3"
            >
              {whoCanJoin.map((item, i) => (
                <motion.div
                  key={item}
                  variants={rise}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 group cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  whileHover={{ background: 'rgba(220,38,38,0.1)', borderColor: 'rgba(220,38,38,0.25)', scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span className="text-white/65 text-sm group-hover:text-white/90 transition-colors duration-200">{item}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how" className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              How to Become a Partner
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-xl"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Five steps to going live on Sherix.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Simple, structured, and fast. Most providers are approved and active within 48 hours.
              </motion.p>
            </div>

            <div className="relative">
              {/* Vertical connector line — desktop */}
              <div className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-gray-100" />

              <div className="space-y-6">
                {howSteps.map((step, i) => (
                  <motion.div
                    key={step.n}
                    variants={rise}
                    className="relative flex gap-8 items-start group"
                  >
                    {/* Step number bubble */}
                    <div
                      className="w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center shrink-0 relative z-10 border transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600"
                      style={{ background: '#fff', border: '1px solid #e5e7eb' }}
                    >
                      <span
                        className="text-gray-300 group-hover:text-white transition-colors duration-300 select-none"
                        style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {step.n}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3 pb-6 border-b border-gray-100 last:border-0">
                      <h3
                        className="text-gray-900 group-hover:text-red-600 transition-colors duration-300"
                        style={{ fontSize: '1.08rem', fontWeight: 700 }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-gray-500 text-sm leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Commitment to Quality ─── */}
      <section className="py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — dark card */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-10 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 100%)' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/12 rounded-full blur-3xl pointer-events-none" />
              <p
                className="text-white/15 select-none"
                style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em' }}
              >
                "
              </p>
              <p className="text-white/80 leading-relaxed mt-2" style={{ fontSize: '1.15rem', fontWeight: 300 }}>
                Every service partner on Sherix represents our commitment to professionalism, transparency, and customer care.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-px h-6 bg-red-600" />
                <span className="text-white/35 text-sm">Sherix Quality Commitment</span>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/6">
                {[['Verified', 'Providers'], ['Transparent', 'Pricing'], ['Quality', 'Assured']].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-white font-semibold text-sm">{v}</div>
                    <div className="text-white/30 text-xs mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — copy */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Our Commitment to Quality
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                We work with providers who set the standard.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed">
                We work with providers who value quality workmanship, honest communication, and dependable service. Sherix partners are held to the same standard we promise our customers.
              </motion.p>
              <motion.div variants={rise} className="mt-10 space-y-4">
                {[
                  'Quality workmanship on every job',
                  'Honest, transparent communication with customers',
                  'Dependable service whenever you accept a request',
                  'Respect for the Sherix platform and community',
                ].map(pt => (
                  <div key={pt} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{pt}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Partner Testimonials ─── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Partner Stories
            </motion.p>
            <motion.h2
              variants={rise}
              className="text-gray-900 mb-16"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              In their own words.
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  variants={rise}
                  className="flex flex-col gap-5 group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div
                    className="flex-1 p-6 rounded-2xl border border-gray-100 group-hover:border-gray-200 group-hover:shadow-lg transition-all duration-300"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">"{r.body}"</p>
                  </div>
                  <div className="flex items-center gap-3 px-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-xs font-semibold text-red-600">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                      <div className="text-xs text-gray-400">{r.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Application Form ─── */}
      <section id="apply" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left copy */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Ready to Join Sherix?
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Become part of a growing network of trusted providers.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-md">
                We look forward to building the future of roadside assistance together. Fill in the application and our team will be in touch within 48 hours.
              </motion.p>

              <motion.div variants={rise} className="mt-10 space-y-3">
                {[
                  { label: 'Response time',   value: 'Within 48 hours' },
                  { label: 'Contract',         value: 'No lock-in period' },
                  { label: 'Payout schedule',  value: 'Weekly' },
                  { label: 'Support',          value: 'Dedicated partner team' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center py-3.5 border-b border-gray-200">
                    <span className="text-sm text-gray-400">{item.label}</span>
                    <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={rise} className="mt-8">
                <a
                  href="mailto:support@sherix.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  <Wrench className="w-4 h-4" />
                  Contact Partner Support
                </a>
              </motion.div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {submitted ? (
                <div className="rounded-2xl bg-white border border-gray-200 p-12 text-center shadow-sm">
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                  <h3 className="text-gray-900" style={{ fontSize: '1.15rem', fontWeight: 700 }}>Application received</h3>
                  <p className="mt-2 text-sm text-gray-500">We'll review your details and reach out within 48 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" required>
                      <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Jane Smith" className="field-input" />
                    </Field>
                    <Field label="Work email" required>
                      <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="jane@company.com" className="field-input" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Business name" required>
                      <input required value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Acme Auto Repairs" className="field-input" />
                    </Field>
                    <Field label="Provider type" required>
                      <select required value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} className="field-input bg-white">
                        <option value="">Select type</option>
                        <option value="mechanic">Automotive Mechanic</option>
                        <option value="electrician">Auto Electrician</option>
                        <option value="tyre">Tyre Specialist</option>
                        <option value="battery">Battery Specialist</option>
                        <option value="towing">Towing Operator</option>
                        <option value="mobile">Mobile Technician</option>
                        <option value="diagnostic">Vehicle Diagnostic Specialist</option>
                        <option value="company">Roadside Assistance Company</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Service area & experience">
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={4}
                      placeholder="Describe your service area, years of experience, certifications, and the types of assistance you provide…"
                      className="field-input resize-none"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gray-950 hover:bg-gray-800 text-white text-sm font-medium rounded-full transition-colors mt-1"
                  >
                    Submit application
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    By submitting you agree to our{' '}
                    <a href="/terms" className="underline hover:text-gray-600">Terms</a>
                    {' '}and{' '}
                    <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
                  </p>
                </form>
              )}
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
