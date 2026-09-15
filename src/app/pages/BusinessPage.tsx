import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import {
  ArrowRight, MapPin, Shield, Eye, FileText, Database,
  TrendingUp, Building2, Truck, Car, Package,
  HardHat, Landmark, Store, CheckCircle, ChevronRight,
} from 'lucide-react';


const vp = { once: true, amount: 0.15 };

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (d = 0.08) => ({
  show: { transition: { staggerChildren: d } },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Data ── */
const features = [
  {
    icon: MapPin,
    title: 'Real-Time Assistance',
    desc: 'Drivers request roadside assistance directly from their location, reducing delays and unnecessary phone calls.',
    stat: '< 20 min',
    statLabel: 'avg. response',
  },
  {
    icon: Eye,
    title: 'Fleet Visibility',
    desc: 'Monitor assistance requests and view service progress from a single central platform, in real time.',
    stat: '100%',
    statLabel: 'request visibility',
  },
  {
    icon: Shield,
    title: 'Verified Providers',
    desc: 'Every roadside service provider completes our verification process before joining the Sherix platform.',
    stat: '12,000+',
    statLabel: 'verified providers',
  },
  {
    icon: FileText,
    title: 'Transparent Process',
    desc: 'Digital quotations are submitted for approval before repair work begins — improving accountability and cost control.',
    stat: '0',
    statLabel: 'surprise charges',
  },
  {
    icon: Database,
    title: 'Digital Service Records',
    desc: 'A full history of requests, quotations, invoices, and completed services — stored per vehicle, always accessible.',
    stat: 'Full',
    statLabel: 'audit trail',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solution',
    desc: 'Whether your fleet has 10 vehicles or 1,000, Sherix is designed to scale with your business as it grows.',
    stat: '1–1,000+',
    statLabel: 'vehicles supported',
  },
];

const segments = [
  { icon: Building2, label: 'Corporate vehicle fleets' },
  { icon: Truck,     label: 'Logistics & transport companies' },
  { icon: Car,       label: 'Ride-hailing fleets' },
  { icon: Package,   label: 'Delivery companies' },
  { icon: HardHat,   label: 'Construction & field service' },
  { icon: Landmark,  label: 'Government & institutional fleets' },
  { icon: Store,     label: 'Small & medium-sized businesses' },
];

const whyPoints = [
  'Reduce vehicle downtime with faster access to verified roadside providers.',
  'Improve cost visibility with digital quotations approved before work begins.',
  'Keep records of every service request, invoice, and completed job per vehicle.',
  'Give drivers a reliable, structured way to request help from the road.',
  'Gain real-time oversight of every active roadside assistance request.',
];

/* ── Animated counter ── */
function StatPill({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-6 py-4 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-sm min-w-[100px]">
      <span className="text-2xl font-extrabold text-white tracking-tight leading-none">{stat}</span>
      <span className="text-white/45 text-[10px] uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

/* ── Feature card ── */
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-50 transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Hover background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/60 group-hover:to-red-50/20 transition-all duration-500 rounded-3xl" />

      {/* Stat watermark */}
      <div
        className="absolute top-4 right-6 text-gray-50 group-hover:text-red-50/80 transition-colors duration-500 select-none pointer-events-none"
        style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 1 }}
      >
        {feature.stat}
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-red-50 group-hover:bg-red-600 flex items-center justify-center mb-6 transition-colors duration-300">
          <feature.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-gray-900 font-bold mb-3 group-hover:text-gray-900 transition-colors" style={{ fontSize: '1.05rem' }}>
          {feature.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>

        {/* Stat pill */}
        <div className="mt-6 flex items-baseline gap-1.5">
          <span className="text-red-600 font-extrabold text-lg tracking-tight">{feature.stat}</span>
          <span className="text-gray-400 text-xs uppercase tracking-wide">{feature.statLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   Main Page
══════════════════════════════════════ */
export function BusinessPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="bg-white">

      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="relative bg-gray-950 overflow-hidden" style={{ minHeight: 'min(90vh, 760px)' }}>
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-700/12 rounded-full blur-[140px] pointer-events-none" />
        {/* Horizontal rule accent */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            minHeight: 'inherit',
            paddingTop: '6rem',
            paddingBottom: '6rem',
          }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <motion.div initial="hidden" animate="show" variants={stagger(0.1)}>
            {/* Eyebrow */}
            <motion.p
              variants={rise}
              className="text-xs tracking-[0.28em] uppercase text-red-500/70 mb-6"
            >
              Fleet Solutions — Sherix
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={rise}
              className="text-white max-w-4xl"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
              }}
            >
              Smarter roadside assistance for businesses that{' '}
              <span className="text-red-500">depend on their vehicles.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={rise}
              className="mt-7 text-white/55 leading-relaxed max-w-2xl"
              style={{ fontSize: '1.05rem' }}
            >
              Every minute a vehicle is off the road affects productivity, deliveries, customer service, and operating costs. Sherix connects drivers with nearby verified providers while giving fleet managers complete visibility into every request.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full text-sm transition-colors shadow-lg shadow-red-900/30"
              >
                Request a Business Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white/70 hover:text-white font-medium rounded-full text-sm transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Contact Our Fleet Team <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={rise} className="mt-14 flex flex-wrap gap-3">
              {[
                { stat: '< 20 min', label: 'Avg. response time' },
                { stat: '60%', label: 'Downtime reduction' },
                { stat: '24/7', label: 'Fleet coverage' },
                { stat: '12,000+', label: 'Verified providers' },
              ].map(s => (
                <StatPill key={s.label} stat={s.stat} label={s.label} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ════════════ INTRO BAND ════════════ */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={stagger(0.09)}
            className="max-w-3xl"
          >
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-4">
              Built for Modern Fleet Operations
            </motion.p>
            <motion.h2
              variants={rise}
              className="text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Whether you manage 10 vehicles or 1,000 — Sherix provides a faster, more transparent way to manage roadside assistance.
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* ════════════ FEATURES GRID ════════════ */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.22em] uppercase text-red-600 mb-10"
          >
            What Sherix Offers
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHO WE SUPPORT ════════════ */}
      <section className="py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Who Sherix Supports
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Built for every kind of fleet.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-md">
                From corporate fleets to small delivery businesses, Sherix is designed to support the teams that keep Ghana moving.
              </motion.p>
            </motion.div>

            {/* Right — segment cards */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={stagger(0.07)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {segments.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={rise}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50/50 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-red-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <s.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════ WHY SHERIX ════════════ */}
      <section className="py-28 bg-gray-950 relative overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-700/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

            {/* Left */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">
                Why Businesses Choose Sherix
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-white"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Reliable roadside support protects productivity.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-white/50 text-sm leading-relaxed max-w-md">
                By reducing vehicle downtime, improving service visibility, and providing access to verified providers, Sherix helps organisations keep their operations moving.
              </motion.p>
            </motion.div>

            {/* Right — checklist */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.08)} className="space-y-4 mt-2">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={rise}
                  className="group flex gap-4 p-5 rounded-2xl hover:scale-[1.01] transition-transform duration-200 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{point}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.1)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Let's Keep Your Fleet Moving
            </motion.p>
            <motion.h2
              variants={rise}
              className="text-gray-900"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1 }}
            >
              Partner with Sherix and give your drivers dependable roadside assistance.
            </motion.h2>
            <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              Backed by technology, transparency, and trusted service providers — Sherix is built to keep your operations moving.
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 hover:bg-gray-800 text-white font-semibold rounded-full text-sm transition-colors shadow-xl shadow-gray-200"
              >
                Request a Business Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 hover:border-red-300 hover:text-red-600 text-gray-700 font-medium rounded-full text-sm transition-all"
              >
                Contact Our Fleet Team <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={rise} className="mt-14 flex flex-wrap justify-center gap-8">
              {[
                { val: '60%', label: 'avg. downtime reduction' },
                { val: '24/7', label: 'fleet support coverage' },
                { val: '12,000+', label: 'verified providers' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-extrabold text-gray-900 tracking-tight">{s.val}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
