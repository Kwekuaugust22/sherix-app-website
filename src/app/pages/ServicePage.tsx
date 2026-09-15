import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Car, Activity, Fuel, Wrench, CheckCircle, ArrowRight,
  Shield, MapPin, Star, ClipboardList, Clock,
} from 'lucide-react';
import heroBg from '../../imports/pngtree-auto-mechanic-working-in-garage-repair-service-image_15647939.jpg';

const vp = { once: true, amount: 0.12 };
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });
const staggerRise = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });

const services = [
  {
    icon: Car,
    title: 'Mechanical Services',
    desc: 'Connect with verified mechanics for vehicle diagnostics, repairs, preventive maintenance, and general mechanical services. Whether you’re at home, at work, or on the roadside, request professional assistance through the Sherix platform.',
  },
  {
    icon: Activity,
    title: 'Auto Electrical Services',
    desc: 'Get help from verified auto electricians for battery failures, starter and alternator faults, wiring issues, lighting systems, sensor faults, and other electrical problems that affect your vehicle’s performance.',
  },
  {
    icon: Fuel,
    title: 'Spare Parts Marketplace (Coming Soon)',
    desc: 'Purchase genuine vehicle parts from verified suppliers through the Sherix Marketplace. Compare available options, order with confidence, and have the right parts ready for your service.',
    comingSoon: true,
  },
];

const features = [
  { icon: Shield, text: 'Verified Automotive Experts' },
  { icon: ClipboardList, text: 'Complete Service Transparency' },
  { icon: MapPin, text: 'Live Service Tracking' },
  { icon: Star, text: 'Vehicle Service History' },
];

const howSteps = [
  {
    num: '1',
    title: 'Request Assistance',
    desc: 'Open the Sherix app, select your vehicle, describe the issue, and share your location.',
  },
  {
    num: '2',
    title: 'Get Matched',
    desc: 'Your request is intelligently matched with the most suitable verified provider based on your location and service needs.',
  },
  {
    num: '3',
    title: 'Review & Track',
    desc: 'Review and approve your quotation before work begins, then track your provider in real time until arrival.',
  },
  {
    num: '4',
    title: 'Service Complete',
    desc: 'Once the service is complete, pay securely through the platform and access your digital vehicle service history anytime.',
  },
];

const faqs = [
  {
    q: 'What services are available on Sherix?',
    a: 'Sherix connects drivers with verified automotive service providers for mechanical services, auto electrical services, vehicle diagnostics, and other supported vehicle services. New services will be introduced as Sherix continues to expand.',
  },
  {
    q: 'How does requesting assistance work?',
    a: 'Open the Sherix app, select your vehicle, describe the assistance you need, share your location, and submit your request. Your request will be matched with the most suitable verified service provider.',
  },
  {
    q: 'Will I know the cost before repairs begin?',
    a: 'Yes. Your provider will submit a quotation through the Sherix platform. You’ll be able to review and approve the quotation before any repair work begins.',
  },
  {
    q: 'Can I track my service provider?',
    a: 'Yes. Once your request has been accepted, you can track your assigned service provider in real time until they arrive at your location.',
  },
  {
    q: 'Are all service providers verified?',
    a: 'Every provider completes Sherix’s verification process before joining the platform, helping maintain a trusted network of automotive professionals.',
  },
  {
    q: 'Where can I view my completed service history?',
    a: 'After your service is completed, your payment is processed securely and your digital service history is automatically saved to your Sherix account, making it easy to view your vehicle’s service history whenever you need it.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-b border-gray-100"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-gray-900 text-sm font-medium pr-4 group-hover:text-red-600 transition-colors">{q}</span>
        <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all ${open ? 'bg-red-600 border-red-600' : 'border-gray-200 group-hover:border-red-300'}`}>
          <span className={`text-xs font-bold ${open ? 'text-white' : 'text-gray-500'}`}>{open ? '−' : '+'}</span>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p className="text-gray-500 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export function ServicePage() {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 600], ['0%', '20%']);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <section className="relative h-[88vh] min-h-[580px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: heroBgY, scale: 1.08 }}>
          <img src={heroBg} alt="Mechanic working on vehicle" className="w-full h-full object-cover object-center" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-700/15 rounded-full blur-[100px] pointer-events-none" />

        <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20" style={{ opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.p variants={rise} className="text-xs tracking-[0.25em] uppercase text-white/45 mb-5">
              SHERIX — OUR SERVICES
            </motion.p>
            <motion.h1 variants={rise} className="text-white max-w-2xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em' }}>
              Professional vehicle assistance, on demand.
            </motion.h1>
            <motion.p variants={rise} className="mt-5 text-white/60 max-w-lg leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Whether you’re facing an unexpected breakdown or scheduling routine vehicle maintenance, Sherix connects you with verified automotive professionals through one intelligent platform. From your first request to service completion, every step is designed to be transparent, efficient, and effortless.
            </motion.p>
            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
              <Link to="/waitlist" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors">
                Request Assistance <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/partner" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/70 hover:text-white transition-colors" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
                Become a Service Partner
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Our Services
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2 variants={rise} className="text-gray-900 max-w-2xl" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Professional automotive services built around convenience and confidence.
              </motion.h2>
              <motion.div variants={rise}>
                <Link to="/service" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  Explore All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <motion.p variants={rise} className="mb-10 max-w-3xl text-gray-500 text-sm leading-relaxed">
              Sherix connects drivers with trusted automotive professionals through one digital platform. Whether you need emergency roadside assistance, diagnostics, repairs, preventive maintenance, or specialist vehicle services, every request is managed through one seamless digital experience with transparent pricing, live service tracking, and secure digital service records.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 group hover:bg-gray-950 transition-colors duration-300"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300">
                    <svc.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                  {svc.comingSoon && (
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-700">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-gray-900 group-hover:text-white text-lg font-semibold mb-3 transition-colors duration-300">{svc.title}</h3>
                <p className="text-gray-500 group-hover:text-white/45 text-sm leading-relaxed transition-colors duration-300">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">
              Why Choose Sherix
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2 variants={rise} className="text-white max-w-2xl" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                A smarter way to access trusted automotive services.
              </motion.h2>
              <motion.p variants={rise} className="text-white/35 text-sm max-w-lg leading-relaxed">
                Vehicle servicing should be effortless. Sherix combines verified professionals, intelligent matching, and a seamless digital experience into one platform—giving you complete confidence from request to completion.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="px-8 py-7 flex items-start gap-4"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="w-9 h-9 rounded-lg bg-red-600/15 border border-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[640px] h-[640px] rounded-full bg-red-200/20 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.1)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-4">How Sherix Works</motion.p>
            <motion.h2 variants={rise} className="text-gray-900 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Getting vehicle assistance is simple.
            </motion.h2>
            <motion.p variants={rise} className="mt-5 text-gray-500 text-base leading-relaxed max-w-3xl mx-auto">
              Getting professional vehicle assistance should be effortless. Every request is managed through a streamlined digital experience designed for speed, transparency, and reliability.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {howSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl border-2 border-gray-100 group-hover:border-red-500 group-hover:bg-red-600 flex items-center justify-center shrink-0 transition-all duration-300">
                  <span className="text-gray-300 group-hover:text-white select-none transition-colors duration-300" style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-0.04em' }}>{step.num}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2" style={{ fontSize: '1.05rem', fontWeight: 700 }}>{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">The Sherix Experience</motion.p>
            <motion.h2 variants={rise} className="text-gray-900 max-w-3xl" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Designed to make vehicle assistance simpler.
            </motion.h2>
            <motion.div variants={rise} className="mt-6 max-w-4xl text-gray-500 leading-relaxed" style={{ fontSize: '1.02rem' }}>
              <p>
                Sherix removes the uncertainty from vehicle servicing by bringing every stage of your journey into one connected experience. Request assistance, approve quotations, track your provider in real time, make secure payments, and access your complete service history—all from one platform.
              </p>
              <p className="mt-4">
                No endless phone calls. No uncertainty. No wasted time. Just a faster, smarter way to manage vehicle services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Frequently Asked Questions</motion.p>
              <motion.h2 variants={rise} className="text-gray-900" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Answers to common questions about Sherix services.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed">
                Learn more about how Sherix works before requesting assistance. If you can’t find the answer you’re looking for, visit our Help Centre or contact the Sherix Support team.
              </motion.p>
              <motion.div variants={rise} className="mt-6">
                <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  View All FAQs <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            <div className="divide-y divide-gray-100">
              {faqs.map((item, index) => <FAQItem key={item.q} q={item.q} a={item.a} index={index} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.1)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">Get Started with Sherix</motion.p>
            <motion.h2 variants={rise} className="text-white max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1 }}>
              The smarter way to manage vehicle services.
            </motion.h2>
            <motion.p variants={rise} className="mt-5 text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              Join a growing community of drivers choosing a smarter way to access trusted vehicle services. Experience fast, reliable assistance through the Sherix app. Download the Sherix app and manage every vehicle service from one intelligent platform.
            </motion.p>
            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors text-sm">
                Join the Waitlist <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/partner" className="inline-flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white font-medium rounded-full transition-colors text-sm" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                Become a Service Partner
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
