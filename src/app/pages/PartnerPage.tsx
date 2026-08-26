import { useState } from 'react';
import { CheckCircle, ArrowRight, Users, MapPin, ClipboardList, Star, TrendingUp, Award, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import heroBg from '../../imports/photo_2026-06-10_17-58-59.jpg';

const vp = { once: true, amount: 0.12 };
const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });

const benefits = [
  { icon: Users,         num: '01', title: 'Receive Quality Service Requests',      desc: 'Connect with customers looking for trusted automotive professionals through the Sherix platform.' },
  { icon: MapPin,        num: '02', title: 'Manage Business From One Platform',     desc: 'Accept or decline service requests, manage active jobs, and keep your work organised from one platform.' },
  { icon: ClipboardList, num: '03', title: 'Build Your Reputation',                 desc: 'Deliver quality service, receive customer ratings, and build credibility that helps attract more opportunities over time.' },
  { icon: Star,          num: '04', title: 'Track Your Performance',                desc: 'Monitor completed jobs, earnings, customer ratings, and business performance through your provider dashboard.' },
  { icon: TrendingUp,    num: '05', title: 'Transparent Payments',                  desc: 'Receive payments for completed services through the Sherix platform, with commission managed according to Sherix’s payment policies.' },
  { icon: Award,         num: '06', title: 'Grow With Confidence',                  desc: 'As Sherix expands, you’ll continue to benefit from new tools and platform improvements designed to support automotive professionals and businesses.' },
];

const whoCanJoin = [
  'Independent Mechanics',
  'Registered Garages',
  'Auto Electricians',
  'Tyre Specialists',
  'Battery Specialists',
  'Fleet Maintenance Companies',
];

const howSteps = [
  { n: '01', title: 'Create Your Account', desc: 'Download the Sherix Provider App if you’re an independent service provider, or register your business through the Service Provider Portal.' },
  { n: '02', title: 'Submit Your Professional Details', desc: 'Provide the required information, including your contact details, service location, areas of expertise, identification, and business information where applicable.' },
  { n: '03', title: 'Verification & Approval', desc: 'The Sherix team reviews every application to help maintain a trusted network of automotive professionals. You’ll be notified once your application has been reviewed.' },
  { n: '04', title: 'Start Growing Your Business', desc: 'Once approved, you can accept service requests, manage your jobs, build your reputation through customer ratings, and grow your business with Sherix.' },
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
              JOIN THE SHERIX NETWORK
            </motion.p>
            <motion.h1
              variants={rise}
              className="text-white max-w-2xl"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em' }}
            >
              Power your automotive business with Sherix
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-5 text-white/60 max-w-lg leading-relaxed"
              style={{ fontSize: '1.05rem' }}
            >
              Sherix gives automotive professionals one connected platform to receive service requests, manage jobs, build customer trust, increase earnings, and grow their businesses. Whether you work independently or manage a team, Sherix provides the tools to help you operate more efficiently and serve customers with confidence.
            </motion.p>
            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://provider.sherix.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
              >
                Download Provider App <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://portal.sherix.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/75 hover:text-white transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.18)' }}
              >
                Register Your Business
              </a>
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
                Built to help automotive professionals grow.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Sherix provides more than access to service requests. We build technology that helps automotive professionals manage their work more efficiently, strengthen customer relationships, and grow their businesses through one connected platform.
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
                Who Can Join?
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-white"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Built for trusted automotive professionals
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-white/50 text-sm leading-relaxed max-w-md">
                Sherix is designed for qualified automotive professionals and businesses committed to delivering reliable, high-quality vehicle services. Whether you work independently or operate an established business, you can apply to join the Sherix Network if your services align with the platform.
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
              How It Works
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-xl"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Join the Sherix Network in four simple steps.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Applying to join the Sherix Network is straightforward. Complete your registration, submit the required information for verification, and once approved, you’ll be ready to start receiving service requests through the Sherix platform.
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
                Verification Standards
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Building a trusted network starts with verification.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed">
                Every application submitted to Sherix is reviewed before a service provider joins the platform. Our verification process helps maintain service quality, protect customers, and build a trusted network of automotive professionals.
              </motion.p>
              <motion.div variants={rise} className="mt-10 space-y-4">
                {[
                  'Identity confirmation: Service providers are required to verify their identity using valid identification before their application can be approved.',
                  'Business Validation: Registered automotive businesses may be required to provide business registration details and supporting information during the verification process.',
                  'Professional Information: Applicants provide details about their services, areas of expertise, and operating location to help ensure customers are matched with the right automotive professional.',
                  'Platform Standards: Every approved service provider is expected to maintain Sherix’s standards for professionalism, customer service, and reliability while using the platform.',
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

      {/* ─── Our Standards & FAQ ─── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Our Standards
            </motion.p>
            <motion.h2
              variants={rise}
              className="text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Every provider represents the Sherix brand.
            </motion.h2>
            <motion.p variants={rise} className="text-gray-500 text-sm leading-relaxed max-w-3xl">
              At Sherix, we expect every service provider to deliver professional workmanship, communicate respectfully with customers, arrive on time, and maintain high service standards. Providers who consistently maintain these standards may receive stronger visibility, higher customer ratings, and increased opportunities across the platform.
            </motion.p>

            <motion.div variants={rise} className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                { q: 'When will my application be reviewed?', a: 'Every application is reviewed by the Sherix team before a provider is approved. You’ll receive an update once the review process is complete.' },
                { q: 'Can I reject service requests?', a: 'Yes. Providers may accept or decline requests based on their availability. Consistently declining requests may reduce future job opportunities.' },
                { q: 'How do I receive payments?', a: 'Payments for completed services are received through the Sherix platform according to Sherix’s payment process.' },
                { q: 'Can I update my information after joining?', a: 'Yes. Providers can update eligible profile and business information through their provider account.' },
              ].map(item => (
                <div key={item.q} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
                </div>
              ))}
            </motion.div>
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
                Ready to Join the Sherix Network?
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Build the Future of Your Automotive Business
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-md">
                Whether you’re an independent automotive professional or an established business, Sherix provides the tools to help you manage your work, connect with more customers, and grow with confidence. Start your application today and become part of a trusted network of automotive service providers.
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
