import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Heart, Shield, Zap, Lightbulb, Award, BarChart3,
  ArrowRight, MapPin, Star, CheckCircle, Users, Wrench,
} from 'lucide-react';

const vp = { once: true, amount: 0.12 };
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (d = 0.1) => ({ show: { transition: { staggerChildren: d } } });

const values = [
  { icon: Heart,     title: 'Customer First',  desc: 'Every decision begins with the needs and safety of our customers.' },
  { icon: Shield,    title: 'Trust',           desc: 'We build confidence through verified providers, transparent pricing, and honest communication.' },
  { icon: CheckCircle,title: 'Reliability',    desc: 'We strive to provide dependable roadside assistance whenever and wherever it is needed.' },
  { icon: Lightbulb, title: 'Innovation',      desc: 'We use technology to solve everyday roadside challenges in smarter ways.' },
  { icon: Award,     title: 'Professionalism', desc: 'We are committed to maintaining high standards across every interaction on the Sherix platform.' },
  { icon: BarChart3, title: 'Accountability',  desc: 'We believe in transparency, responsibility, and continuous improvement.' },
];

const stats = [
  { value: '12,000+', label: 'Verified Providers' },
  { value: '98%',     label: 'Satisfaction Rate' },
  { value: '< 8 min', label: 'Avg. Response Time' },
  { value: '24 / 7',  label: 'Always Available' },
];

const reasons = [
  { icon: Users,   title: 'Verified Providers',       desc: 'Every mechanic and workshop on Sherix is vetted, credentialled, and reviewed before joining the platform.' },
  { icon: MapPin,  title: 'Transparent Quotations',   desc: 'See exact pricing before you confirm. No hidden fees, no surprises when the job is done.' },
  { icon: Zap,     title: 'Live Tracking',            desc: 'Track your service provider from dispatch to arrival in real time on an interactive map.' },
  { icon: Star,    title: 'Digital Service History',  desc: 'Every job is recorded and accessible in-app, giving you a full history of your vehicle\'s maintenance.' },
  { icon: Shield,  title: 'Customer Reviews',         desc: 'Honest ratings from verified customers help you choose the right provider every time.' },
  { icon: Wrench,  title: 'All-in-One Platform',      desc: 'From a flat tyre to a full breakdown, one app covers every roadside scenario.' },
];

export function AboutPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], ['0%', '18%']);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* ─── Hero ─── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-gray-950">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-red-950/40 to-gray-950" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-800/8 blur-[100px]" />
          {/* Fine dot grid */}
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(0.13)}
            className="max-w-3xl"
          >
            <motion.p
              variants={rise}
              className="text-xs tracking-[0.25em] uppercase text-red-500/70 mb-6"
            >
              About Sherix
            </motion.p>

            <motion.h1
              variants={rise}
              className="text-white"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.035em' }}
            >
              Technology that gets<br />
              <span className="text-red-500">drivers moving again.</span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-6 text-white/55 max-w-xl leading-relaxed"
              style={{ fontSize: '1.1rem' }}
            >
              Sherix is a technology-driven roadside assistance platform built to make it faster, easier, and more transparent for drivers to get help when vehicle problems occur.
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
              >
                Request Assistance <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/70 hover:text-white transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Become a Partner
              </Link>
            </motion.div>
          </motion.div>

          {/* Stat strip — glass */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden max-w-2xl"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {stats.map(s => (
              <div key={s.label} className="px-6 py-5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="text-white font-bold" style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}>{s.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

            {/* Left — visual */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Large outlined letter as texture */}
              <div
                className="absolute -top-8 -left-6 select-none pointer-events-none"
                style={{
                  fontSize: '14rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  WebkitTextStroke: '1.5px rgba(220,38,38,0.08)',
                  color: 'transparent',
                  letterSpacing: '-0.06em',
                }}
              >
                S
              </div>

              {/* Glass card with question mark quote */}
              <div
                className="relative rounded-3xl p-10 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #111 0%, #1a0a0a 100%)' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
                <p
                  className="text-white/25 select-none"
                  style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em' }}
                >
                  "
                </p>
                <p className="text-white/80 leading-relaxed mt-2" style={{ fontSize: '1.2rem', fontWeight: 300 }}>
                  Why should finding roadside assistance be so difficult?
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-px h-6 bg-red-600" />
                  <span className="text-white/40 text-sm">The question that started Sherix</span>
                </div>

                {/* Mini stat row */}
                <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/8">
                  {[['2024', 'Founded'], ['40+', 'Cities'], ['24/7', 'Active']].map(([v, l]) => (
                    <div key={l}>
                      <div className="text-white font-semibold" style={{ fontSize: '1.15rem' }}>{v}</div>
                      <div className="text-white/35 text-xs mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — copy */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={stagger(0.1)}
            >
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Our Story
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Replacing uncertainty with a smarter solution.
              </motion.h2>
              <motion.div variants={rise} className="mt-6 space-y-4 text-gray-500 leading-relaxed" style={{ fontSize: '1.02rem' }}>
                <p>
                  Sherix began with a simple question: <em>Why should finding roadside assistance be so difficult?</em> Every day, drivers experience unexpected vehicle problems, yet many still rely on phone calls, personal contacts, or searching for nearby mechanics without knowing who they can trust.
                </p>
                <p>
                  Sherix was created to replace uncertainty with a smarter, technology-powered solution that connects drivers with trusted roadside service providers whenever help is needed.
                </p>
              </motion.div>

              <motion.div
                variants={rise}
                className="mt-10 space-y-3"
              >
                {[
                  'Real-time connection to verified local providers',
                  'Transparent pricing with no hidden costs',
                  'Live tracking from request to arrival',
                  'Digital service history in one place',
                ].map(pt => (
                  <div key={pt} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-gray-600 text-sm">{pt}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-red-700/10 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp}
            variants={stagger(0.1)}
            className="text-center mb-16"
          >
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/70 mb-4">
              Purpose
            </motion.p>
            <motion.h2
              variants={rise}
              className="text-white max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Our mission, vision, and the road ahead.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-10 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-600/12 rounded-full blur-2xl" />
              <p className="text-xs tracking-[0.2em] uppercase text-red-500/60 mb-5">Our Mission</p>
              <h3
                className="text-white"
                style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                Simpler roadside assistance through technology.
              </h3>
              <p className="mt-4 text-white/50 leading-relaxed text-sm">
                To simplify roadside assistance by connecting drivers with verified roadside service providers through technology that is fast, transparent, and reliable.
              </p>
              <div className="mt-8 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-10 overflow-hidden bg-red-600"
            >
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-red-900/40 rounded-full blur-3xl" />
              <p className="text-xs tracking-[0.2em] uppercase text-red-200/70 mb-5 relative z-10">Our Vision</p>
              <h3
                className="text-white relative z-10"
                style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                Africa's most trusted roadside assistance platform.
              </h3>
              <p className="mt-4 text-red-100/75 leading-relaxed text-sm relative z-10">
                To become Africa's most trusted roadside assistance platform, helping millions of drivers access dependable roadside support with confidence.
              </p>
              <div className="mt-8 h-px bg-white/20 relative z-10" />
            </motion.div>
          </div>

          {/* Looking Ahead */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 rounded-3xl p-10"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="hidden md:block">
                <div
                  className="text-red-600/20 select-none"
                  style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em' }}
                >
                  ∞
                </div>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-red-500/60 mb-3">Looking Ahead</p>
                <p className="text-white/65 leading-relaxed" style={{ fontSize: '1.05rem' }}>
                  Our vision extends beyond responding to vehicle emergencies. As Sherix grows, we aim to support individuals, businesses, fleet operators, and roadside service providers with innovative solutions that improve vehicle support, reduce downtime, and strengthen trust across the mobility ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp}
            variants={stagger(0.08)}
          >
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Our Values
            </motion.p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-lg"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Six principles that guide everything we do.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
                Our values are not aspirational statements. They are the operating principles embedded in every feature, partnership, and decision.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={rise}
                  className="bg-white p-8 group hover:bg-gray-950 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center shrink-0 transition-colors">
                      <v.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors" />
                    </div>
                    <span
                      className="text-gray-200 select-none group-hover:text-white/10 transition-colors"
                      style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3
                    className="mt-5 text-gray-900 group-hover:text-white transition-colors"
                    style={{ fontSize: '1.1rem', fontWeight: 700 }}
                  >
                    {v.title}
                  </h3>
                  <p className="mt-2 text-gray-500 group-hover:text-white/50 text-sm leading-relaxed transition-colors">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Drivers Choose Sherix ─── */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp}
            variants={stagger(0.08)}
          >
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
              Why Sherix
            </motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2
                variants={rise}
                className="text-gray-900 max-w-lg"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                More than a platform for requesting assistance.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Designed to give drivers greater confidence through transparency, technology, and trust at every step.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  variants={rise}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                      <r.icon className="w-5 h-5 text-red-600" />
                    </div>
                    {i < reasons.length - (reasons.length % 2 === 0 ? 2 : 1) && (
                      <div className="w-px flex-1 bg-gray-200 min-h-[24px]" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-gray-900" style={{ fontSize: '1.02rem', fontWeight: 600 }}>{r.title}</h3>
                    <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Join the Journey CTA ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden" whileInView="show" viewport={vp}
              variants={stagger(0.1)}
            >
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">
                Join the Journey
              </motion.p>
              <motion.h2
                variants={rise}
                className="text-gray-900"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Built for drivers, mechanics, businesses, and fleet operators.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-lg">
                Whether you're a driver looking for dependable roadside assistance, a business managing multiple vehicles, or a roadside service provider ready to grow your business, Sherix is building a platform designed with you in mind.
              </motion.p>

              {/* Audience rows */}
              <motion.div variants={rise} className="mt-10 space-y-3">
                {[
                  { label: 'Drivers',          sub: 'Get fast, dependable help wherever you are.' },
                  { label: 'Businesses',        sub: 'Manage your fleet with a smarter mobility backbone.' },
                  { label: 'Service Providers', sub: 'Grow your business through a verified partner network.' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 py-3 border-b border-gray-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-gray-900 font-medium text-sm w-40 shrink-0">{item.label}</span>
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
                {/* Top — dark */}
                <div className="bg-gray-950 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-3 relative z-10">Get Started</p>
                  <h3 className="text-white relative z-10" style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                    Ready to experience Sherix?
                  </h3>
                  <p className="mt-3 text-white/45 text-sm leading-relaxed relative z-10">
                    Join thousands of drivers and providers already on the platform.
                  </p>
                </div>

                {/* Bottom — white */}
                <div className="bg-white p-6 space-y-3">
                  <Link
                    to="/"
                    className="flex items-center justify-between w-full px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors"
                  >
                    <span>Request Assistance</span>
                    <ArrowRight className="w-4 h-4" />
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
