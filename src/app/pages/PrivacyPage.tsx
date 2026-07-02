import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, ChevronRight } from 'lucide-react';

const sections = [
  {
    id: 'overview',
    title: 'Your Privacy Matters',
    num: '01',
    content: [
      `Your privacy matters to us. Sherix is committed to protecting your personal information and handling your data responsibly, securely, and transparently.`,
    ],
  },
  {
    id: 'information-collected',
    title: 'Information We Collect',
    num: '02',
    content: [
      `We may collect information you provide when creating an account, requesting roadside assistance, becoming a service partner, contacting us, or using our platform. This may include:`,
      `Your name, phone number, and email address.`,
      `Vehicle information to help service providers assist you accurately.`,
      `Your location during service requests, used to connect you with nearby verified providers.`,
      `Payment-related information where applicable, processed securely through our payment partners.`,
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    num: '03',
    content: [
      `We use your information to provide roadside assistance services, match you with verified service providers, improve our platform, communicate with you, process requests, enhance safety, and comply with legal obligations.`,
    ],
  },
  {
    id: 'location',
    title: 'Location Information',
    num: '04',
    content: [
      `Location information is used only to help connect you with nearby verified roadside service providers and improve your service experience. Location is collected during active service requests only.`,
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing Your Information',
    num: '05',
    content: [
      `Sherix does not sell your personal information. We may share relevant information with:`,
      `Verified service providers — to fulfil your roadside assistance request.`,
      `Payment partners — to process transactions securely.`,
      `Technology providers — to operate and improve the platform.`,
      `Authorities — where required by applicable law.`,
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    num: '06',
    content: [
      `We implement reasonable administrative, technical, and organisational measures to help protect your information from unauthorised access, misuse, or disclosure.`,
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    num: '07',
    content: [
      `We retain information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and maintain business records.`,
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    num: '08',
    content: [
      `You may request access to your personal information, ask for corrections where appropriate, or request deletion of your account in accordance with applicable laws and our operational requirements.`,
      `To exercise any of these rights, please contact us at support@sherix.com.`,
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    num: '09',
    content: [
      `Sherix uses cookies and similar technologies to improve website functionality, remember your preferences, analyse website performance, and enhance your browsing experience. Please refer to our Cookies Policy for full details.`,
    ],
  },
  {
    id: 'updates',
    title: 'Updates to This Policy',
    num: '10',
    content: [
      `We may update this Privacy Policy from time to time. The latest version will always be published on the Sherix website. We encourage you to review this page periodically to stay informed.`,
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    num: '11',
    content: [
      `If you have questions about this Privacy Policy or how your information is handled, please contact us at support@sherix.com.`,
    ],
  },
  {
    id: 'effective-date',
    title: 'Effective Date',
    num: '12',
    content: [
      `This Privacy Policy is effective from the date it is published on the Sherix website.`,
    ],
  },
];

export function PrivacyPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-900">

      {/* ─── Header ─── */}
      <section className="bg-gray-950 pt-16 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-700/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-600/25 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-red-500" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40">Legal — Privacy</span>
            </div>
            <h1
              className="text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Privacy Policy
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/35">
              <span>Last updated: 11 June 2026</span>
              <span className="hidden sm:inline">·</span>
              <span>Effective: 11 June 2026</span>
              <span className="hidden sm:inline">·</span>
              <button
                onClick={() => window.print()}
                className="text-red-400/70 hover:text-red-400 transition-colors underline underline-offset-2"
              >
                Print this page
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Body ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="flex gap-12 xl:gap-16 items-start">

          {/* ── Sticky sidebar ── */}
          <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
            <div className="sticky top-28">
              <p className="text-xs tracking-[0.18em] uppercase text-gray-400 mb-4">On this page</p>
              <nav className="space-y-0.5">
                {sections.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveId(s.id)}
                    className={`flex items-center gap-2 py-1.5 pl-3 text-sm border-l-2 transition-all duration-200 ${
                      activeId === s.id
                        ? 'border-red-600 text-red-600'
                        : 'border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold tabular-nums shrink-0 ${activeId === s.id ? 'text-red-500' : 'text-gray-300'}`}
                    >
                      {s.num}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* Contact card */}
              <div
                className="mt-8 rounded-2xl p-5"
                style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-semibold text-gray-700">Privacy Contact</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  Questions about your data or this policy?
                </p>
                <a
                  href="mailto:support@sherix.com"
                  className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  support@sherix.com <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* ── Content ── */}
          <div ref={contentRef} className="flex-1 min-w-0 max-w-3xl">

            {/* Intro blurb */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 p-6 rounded-2xl"
              style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}
            >
              <p className="text-sm text-gray-500 leading-relaxed">
                This Privacy Policy explains how Sherix collects, uses, and protects your personal information when you use our roadside assistance platform. By using Sherix, you agree to the practices described in this policy.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Section header */}
                  <div className="flex items-baseline gap-4 mb-5 pb-4 border-b border-gray-100">
                    <span
                      className="text-gray-200 select-none shrink-0"
                      style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}
                    >
                      {section.num}
                    </span>
                    <h2
                      className="text-gray-900"
                      style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.015em' }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4">
                    {section.content.map((para, j) => {
                      const isBullet = para.includes(' — ') && j > 0 && section.content.length > 3;
                      return isBullet ? (
                        <div key={j} className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-[0.55rem]" />
                          <p className="text-gray-500 text-sm leading-relaxed flex-1">{para}</p>
                        </div>
                      ) : (
                        <p key={j} className="text-gray-500 text-sm leading-relaxed">{para}</p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="mt-16 rounded-2xl overflow-hidden border border-gray-200"
            >
              <div className="bg-gray-950 px-8 py-6 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
                <p className="text-xs tracking-[0.18em] uppercase text-white/40 mb-2">Privacy Contact</p>
                <h3
                  className="text-white"
                  style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  Questions about your privacy?
                </h3>
              </div>
              <div className="bg-white px-8 py-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:support@sherix.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                    support@sherix.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Address</p>
                  <p className="text-gray-600">Accra, Ghana</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Response Time</p>
                  <p className="text-gray-600">Within 30 days of receipt</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
