import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FileText, ChevronRight, Scale } from 'lucide-react';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    num: '01',
    content: [
      `By creating an account, accessing the website, or requesting services through Sherix, you agree to be bound by these Terms & Conditions and our Privacy Policy.`,
      `If you do not agree to these Terms, please discontinue use of the Sherix platform.`,
    ],
  },
  {
    id: 'about',
    title: 'About Sherix',
    num: '02',
    content: [
      `Sherix is a technology platform that connects customers with verified roadside service providers. Sherix does not itself perform vehicle repairs or roadside services unless expressly stated.`,
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    num: '03',
    content: [
      `You must provide accurate information when creating an account and be legally permitted to use our services in the jurisdiction in which you are located.`,
    ],
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    num: '04',
    content: [
      `When using the Sherix platform, you are responsible for:`,
      `Providing accurate vehicle and location information to enable service providers to assist you correctly.`,
      `Reviewing quotations before approving any work to be carried out on your vehicle.`,
      `Treating service providers respectfully and in accordance with applicable laws.`,
    ],
  },
  {
    id: 'service-requests',
    title: 'Service Requests',
    num: '05',
    content: [
      `Submitting a request does not guarantee immediate provider availability. Matching depends on location, provider availability, and the requested service. Sherix will endeavour to connect you with a suitable provider as quickly as possible.`,
    ],
  },
  {
    id: 'quotations',
    title: 'Quotations & Approval',
    num: '06',
    content: [
      `Estimated price ranges are provided for guidance only. Following inspection, the service provider submits a formal quotation through the platform.`,
      `No repair work should begin until you approve the quotation through the Sherix platform. Approving a quotation constitutes your agreement to pay the stated amount for the services described.`,
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    num: '07',
    content: [
      `Payment terms may vary depending on the service and payment method selected. You are responsible for paying all approved charges for services completed through the Sherix platform.`,
    ],
  },
  {
    id: 'cancellations',
    title: 'Cancellations',
    num: '08',
    content: [
      `You may cancel a service request before work begins. Cancellation fees may apply in certain situations, including where a service provider has already travelled to your location. Any applicable cancellation fees will be communicated through the platform.`,
    ],
  },
  {
    id: 'ratings',
    title: 'Ratings & Reviews',
    num: '09',
    content: [
      `You may submit honest reviews based on your service experience. Reviews must not contain false, abusive, defamatory, or unlawful content. Sherix reserves the right to remove reviews that violate this policy.`,
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    num: '10',
    content: [
      `Sherix provides the technology platform that facilitates connections between customers and service providers. Liability is subject to applicable law and these Terms & Conditions. Sherix does not guarantee the quality or outcome of services delivered by independent service providers.`,
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    num: '11',
    content: [
      `The Sherix name, logo, website content, software, graphics, and other intellectual property remain the property of Sherix unless otherwise stated. You may not reproduce, distribute, or use any Sherix intellectual property without prior written permission.`,
    ],
  },
  {
    id: 'account-suspension',
    title: 'Account Suspension',
    num: '12',
    content: [
      `Sherix may suspend or terminate accounts that violate these Terms, misuse the platform, engage in fraudulent activity, or threaten the safety of other users. Sherix reserves the right to take such action without prior notice where necessary.`,
    ],
  },
  {
    id: 'changes',
    title: 'Changes to the Terms',
    num: '13',
    content: [
      `We may update these Terms & Conditions from time to time to reflect changes to our services or applicable laws. Continued use of the platform after updates constitutes acceptance of the revised Terms. We encourage you to review this page periodically.`,
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    num: '14',
    content: [
      `For questions about these Terms & Conditions, please contact us at support@sherix.com.`,
    ],
  },
  {
    id: 'effective-date',
    title: 'Effective Date',
    num: '15',
    content: [
      `These Terms & Conditions take effect from the date they are published on the Sherix website.`,
    ],
  },
];

export function TermsPage() {
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
          <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-red-700/8 rounded-full blur-[100px]" />
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
                <Scale className="w-3.5 h-3.5 text-red-500" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40">Legal — Terms</span>
            </div>
            <h1
              className="text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Terms & Conditions
            </h1>
            <p className="mt-3 text-white/45 text-sm max-w-xl leading-relaxed">
              Welcome to Sherix. By accessing or using the Sherix website or platform, you agree to these Terms & Conditions. Please read them carefully before using our services.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/30">
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
                  <span className="text-xs font-semibold text-gray-700">Legal Enquiries</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  Questions about these Terms?
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
                These Terms & Conditions govern your use of the Sherix platform, website, and services. By using Sherix, you enter into a binding agreement with us under these terms. If you have any questions, contact us at <a href="mailto:support@sherix.com" className="text-red-600 hover:underline">support@sherix.com</a>.
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
                      const isBullet =
                        j > 0 &&
                        section.content.length > 2 &&
                        !para.startsWith('No repair') &&
                        !para.startsWith('Approving');
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
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
                <p className="text-xs tracking-[0.18em] uppercase text-white/40 mb-2">Legal Contact</p>
                <h3
                  className="text-white"
                  style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  Questions about these Terms?
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
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Effective From</p>
                  <p className="text-gray-600">Date of publication on Sherix website</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
