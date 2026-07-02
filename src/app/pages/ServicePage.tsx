import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Car, Activity, Disc, BatteryWarning, Fuel, Truck,
  KeyRound, Siren, CheckCircle, ArrowRight, Shield,
  MapPin, Star, ClipboardList, Clock,
} from 'lucide-react';
import heroBg from '../../imports/pngtree-auto-mechanic-working-in-garage-repair-service-image_15647939.jpg';

const vp = { once: true, amount: 0.12 };
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });

const services = [
  {
    icon: Car,
    num: '01',
    title: 'Vehicle Breakdown Assistance',
    desc: 'Unexpected vehicle problems can happen anywhere. Sherix connects you with nearby verified providers who can inspect your vehicle, identify the issue, and help you get back on the road as quickly as possible.',
  },
  {
    icon: Activity,
    num: '02',
    title: 'Vehicle Diagnostics',
    desc: 'Not sure what\'s wrong with your vehicle? Request a diagnostic inspection and receive a professional assessment before deciding on any repairs.',
  },
  {
    icon: Disc,
    num: '03',
    title: 'Flat Tyre Assistance',
    desc: 'Whether your tyre needs changing or minor roadside repair, Sherix helps you find qualified professionals who can get you moving safely again.',
  },
  {
    icon: BatteryWarning,
    num: '04',
    title: 'Battery Assistance',
    desc: 'If your vehicle won\'t start because of a battery problem, request jump-start assistance or battery support from a nearby verified provider.',
  },
  {
    icon: Fuel,
    num: '05',
    title: 'Fuel Delivery',
    desc: 'Running out of fuel doesn\'t have to end your journey. Request emergency fuel delivery directly to your location.',
  },
  {
    icon: Truck,
    num: '06',
    title: 'Towing Services',
    desc: 'When roadside repairs aren\'t possible, Sherix helps arrange professional towing to your preferred workshop or destination.',
  },
  {
    icon: KeyRound,
    num: '07',
    title: 'Lockout Assistance',
    desc: 'Locked your keys inside your vehicle? Where available, Sherix connects you with professionals who can assist safely and efficiently.',
  },
  {
    icon: Siren,
    num: '08',
    title: 'Emergency Roadside Support',
    desc: 'From unexpected roadside situations to urgent vehicle issues, Sherix helps you access trusted assistance whenever you need it.',
  },
];

const guarantees = [
  { icon: Shield,       text: 'Verified roadside service providers' },
  { icon: ClipboardList,text: 'Estimated price range before inspection' },
  { icon: CheckCircle,  text: 'Quotation approval before repairs begin' },
  { icon: MapPin,       text: 'Real-time provider tracking' },
  { icon: Clock,        text: 'Digital service history for every completed job' },
  { icon: Star,         text: 'Customer ratings and reviews to maintain quality' },
];

export function ServicePage() {
  const { scrollY } = useScroll();
  const heroBgY   = useTransform(scrollY, [0, 600], ['0%', '20%']);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* ─── Hero ─── */}
      <section className="relative h-[88vh] min-h-[580px] flex items-end overflow-hidden">
        {/* Parallax photo */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: heroBgY, scale: 1.08 }}
        >
          <img
            src={heroBg}
            alt="Mechanic working on vehicle"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

        {/* Radial warm glow from bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-700/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(0.12)}
          >
            <motion.p variants={rise} className="text-xs tracking-[0.25em] uppercase text-white/45 mb-5">
              Sherix — Our Services
            </motion.p>
            <motion.h1
              variants={rise}
              className="text-white max-w-2xl"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em' }}
            >
              Professional roadside<br />
              assistance, <span className="text-red-400">designed to<br />keep you moving.</span>
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-5 text-white/60 max-w-lg leading-relaxed"
              style={{ fontSize: '1.05rem' }}
            >
              Sherix connects you with verified roadside service providers ready to assist when you need help most — transparently, reliably, in real time.
            </motion.p>
            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
              >
                Request Assistance <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/70 hover:text-white transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.18)' }}
              >
                Become a Service Partner
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp}
            variants={stagger(0.08)}
          >
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              What We Cover
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-xl"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Eight services.<br />One platform. Zero hassle.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Whether you're facing an unexpected breakdown or planning ahead for dependable vehicle support, Sherix has a service ready for you.
              </motion.p>
            </div>
          </motion.div>

          {/* Two-column editorial list */}
          <div className="grid md:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {services.map((svc, i) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 sm:p-10 group hover:bg-gray-950 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <span
                    className="text-gray-100 group-hover:text-white/8 select-none shrink-0 transition-colors duration-300"
                    style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {svc.num}
                  </span>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                        <svc.icon className="w-4.5 h-4.5 text-red-600 group-hover:text-red-400 transition-colors duration-300" style={{ width: '1.1rem', height: '1.1rem' }} />
                      </div>
                      <h3
                        className="text-gray-900 group-hover:text-white transition-colors duration-300"
                        style={{ fontSize: '1.05rem', fontWeight: 700 }}
                      >
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 group-hover:text-white/45 text-sm leading-relaxed transition-colors duration-300">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Sherix ─── */}
      <section className="py-28 bg-gray-950 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp}
            variants={stagger(0.08)}
          >
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">
              Why Choose Sherix
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2
                variants={rise}
                className="text-white max-w-xl"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Every service designed around transparency and confidence.
              </motion.h2>
              <motion.p variants={rise} className="text-white/35 text-sm max-w-xs leading-relaxed">
                From the moment you request help to the moment the job is done — you're always informed and in control.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="px-8 py-7 flex items-start gap-4"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600/15 border border-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                    <g.icon className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{g.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-20 items-center">
            <motion.div
              initial="hidden" whileInView="show" viewport={vp}
              variants={stagger(0.1)}
            >
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Need Roadside Assistance?
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Stranded or just planning ahead — Sherix is ready.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-lg">
                Whether you're stranded on the roadside or preparing for the unexpected, Sherix is here to help you connect with trusted roadside service providers quickly and confidently.
              </motion.p>

              <motion.div variants={rise} className="mt-10 space-y-3">
                {[
                  { label: 'Drivers',          sub: 'Get help wherever you are, in minutes.' },
                  { label: 'Fleet Operators',   sub: 'Explore fleet solutions for your business.' },
                  { label: 'Service Providers', sub: 'Join the Sherix partner network.' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 py-3 border-b border-gray-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-gray-900 font-medium text-sm w-44 shrink-0">{item.label}</span>
                    <span className="text-gray-400 text-sm">{item.sub}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-80 shrink-0"
            >
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-100">
                {/* Dark top */}
                <div className="bg-gray-950 p-8 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-36 h-36 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3 relative z-10">Get Started</p>
                  <h3
                    className="text-white relative z-10"
                    style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 }}
                  >
                    Ready when you need us — 24 hours a day.
                  </h3>
                  {/* Mini stats */}
                  <div className="mt-6 grid grid-cols-2 gap-3 relative z-10">
                    {[['< 8 min', 'Avg. response'], ['98%', 'Satisfaction']].map(([v, l]) => (
                      <div
                        key={l}
                        className="rounded-xl px-4 py-3"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="text-white font-semibold" style={{ fontSize: '1.1rem', letterSpacing: '-0.02em' }}>{v}</div>
                        <div className="text-white/35 text-xs mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* White bottom */}
                <div className="bg-white p-6 space-y-2.5">
                  <Link
                    to="/"
                    className="flex items-center justify-between w-full px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors"
                  >
                    <span>Request Assistance</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/business"
                    className="flex items-center justify-between w-full px-5 py-3.5 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors"
                  >
                    <span>Explore Fleet Solutions</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    to="/partner"
                    className="flex items-center justify-between w-full px-5 py-3.5 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors"
                  >
                    <span>Become a Service Partner</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
