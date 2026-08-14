import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ChevronLeft, Star, Download,
  Zap, MapPin, Shield, Clock,
  Wrench, Car, Building2, Users, Smartphone,
  Navigation, CheckCircle, BatteryWarning, Disc, LifeBuoy, Siren, Truck,
  Plus, Minus, ArrowRight, KeyRound, Activity, Fuel,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, useScroll, useTransform } from 'motion/react';
import mechBg from '../../imports/herosection.jpg';
import introBg from '../../imports/photo_2026-06-10_16-05-36.jpg';

/* ── Motion helpers ── */
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const fadeIn  = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const stagger = (delay = 0.1) => ({ show: { transition: { staggerChildren: delay } } });
const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const staggerRise = (d = 0.09) => ({ show: { transition: { staggerChildren: d } } });
const vp  = { once: true, amount: 0.15 };
const vp2 = { once: true, amount: 0.1  };

/* ── Data ── */
const highlights = [
  { icon: Navigation, label: 'Digital Assistance Platform' },
  { icon: Shield, label: 'Verified Providers' },
  { icon: CheckCircle, label: 'Transparent Quotations' },
  { icon: Clock, label: 'Live Tracking' },
];

const whySherixFeatures = [
  {
    icon: Shield,
    title: 'Verified Service Providers',
    desc: 'Connect with service providers who have completed Sherix’s verification process, helping you request roadside assistance with greater confidence.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Quotations',
    desc: 'Receive and approve repair quotations before work begins, allowing you to make informed decisions before any repairs are carried out.',
  },
  {
    icon: Navigation,
    title: 'Real-Time Tracking',
    desc: 'Track your assigned service provider from acceptance to arrival with live location updates.',
  },
  {
    icon: Clock,
    title: 'Digital Service History',
    desc: 'Access a record of completed services, making it easier to manage your vehicle’s maintenance over time.',
  },
];

const howSteps = [
  {
    num: '1',
    title: 'Request Assistance',
    desc: 'Open the Sherix app, tell us where you are, and describe the assistance you need.',
    Screen: null,
  },
  {
    num: '2',
    title: 'Get Matched',
    desc: 'Sherix connects you with a verified roadside service provider based on your location and service request.',
    Screen: null,
  },
  {
    num: '3',
    title: 'Review & Track',
    desc: 'Review the quotation before repairs begin, approve the service, and track your assigned provider in real time.',
    Screen: null,
  },
  {
    num: '4',
    title: 'Service Complete',
    desc: 'Once your service is complete, payment is processed securely, and your service record is saved in your Sherix account for future reference.',
    Screen: null,
  },
];

const services = [
  {
    icon: Car,
    label: 'Mechanical Services',
    desc: 'Connect with experienced mechanics for diagnostics, repairs, preventive maintenance, and general mechanical services wherever you need assistance.',
  },
  {
    icon: Activity,
    label: 'Auto Electrical Services',
    desc: 'Connect with experienced auto electricians for battery problems, starter faults, alternator repairs, wiring issues, lighting systems, and other vehicle electrical services.',
  },
  {
    icon: Fuel,
    label: 'Spare Parts Marketplace',
    desc: 'Purchase genuine vehicle parts from verified vendors through the Sherix marketplace.',
    comingSoon: true,
  },
];

const faqs = [
  {
    q: 'What is Sherix?',
    a: 'Sherix is a digital roadside assistance platform that connects drivers with trusted roadside service providers for vehicle diagnosis, repairs, and maintenance.',
  },
  {
    q: 'How do I request assistance?',
    a: 'Open the Sherix app, submit your service request, share your location, and we’ll match you with the most suitable verified service provider near you.',
  },
  {
    q: 'Can I see the cost before repairs begin?',
    a: 'Yes. Sherix allows you to review and approve quotations before any repair work begins, giving you greater transparency and control over service costs.',
  },
  {
    q: 'Can I track my service provider?',
    a: 'Yes. Once your request is accepted, you can track your assigned service provider in real time until they arrive at your location.',
  },
  {
    q: 'Who can become a service partner?',
    a: 'Independent mechanics, auto electricians, registered garages and automotive service companies that meet Sherix’s verification requirements can apply to join the platform.',
  },
];

const testimonials = [];

/* ── iPhone 16 frame ── */
function PhoneFrame({ children, scale = 1, rotate = 0, opacity = 1, blur = false }: {
  children: React.ReactNode; scale?: number; rotate?: number; opacity?: number; blur?: boolean;
}) {
  return (
    <div style={{ position: 'relative', width: 222, flexShrink: 0, transform: `scale(${scale}) rotate(${rotate}deg)`, opacity, filter: blur ? 'blur(1.5px)' : 'none' }}>
      <div style={{ width: 222, height: 458, borderRadius: 47, background: 'linear-gradient(150deg,#2e2e2e 0%,#1c1c1e 45%,#111 100%)', padding: 11, position: 'relative', boxShadow: '0 0 0 1px rgba(255,255,255,0.09), 0 35px 90px rgba(0,0,0,0.6), 0 14px 28px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.18)' }}>
        <div style={{ position:'absolute', inset:0, borderRadius:47, pointerEvents:'none', background:'linear-gradient(160deg,rgba(255,255,255,0.11) 0%,transparent 38%,transparent 62%,rgba(255,255,255,0.05) 100%)' }} />
        <div style={{ position:'absolute', left:-2.5, top:86, width:3, height:14, borderRadius:'2px 0 0 2px', background:'linear-gradient(to right,#181818,#3c3c3c)' }} />
        <div style={{ position:'absolute', left:-2.5, top:118, width:3, height:44, borderRadius:'2px 0 0 2px', background:'linear-gradient(to right,#181818,#3c3c3c)' }} />
        <div style={{ position:'absolute', left:-2.5, top:174, width:3, height:44, borderRadius:'2px 0 0 2px', background:'linear-gradient(to right,#181818,#3c3c3c)' }} />
        <div style={{ position:'absolute', right:-2.5, top:128, width:3, height:64, borderRadius:'0 2px 2px 0', background:'linear-gradient(to left,#181818,#3c3c3c)' }} />
        <div style={{ position:'absolute', right:-2.5, bottom:106, width:3, height:38, borderRadius:'0 2px 2px 0', background:'linear-gradient(to left,#181818,#3c3c3c)' }} />
        <div style={{ position:'absolute', bottom:6, left:'50%', transform:'translateX(-50%)', width:44, height:6, borderRadius:3, background:'#0d0d0d' }} />
        <div style={{ position:'absolute', bottom:8, left:36, display:'flex', gap:4 }}>
          {[0,1,2,3,4].map(i => <div key={i} style={{ width:3, height:3, borderRadius:'50%', background:'#1a1a1a' }} />)}
        </div>
        <div style={{ position:'absolute', bottom:8, right:36, display:'flex', gap:4 }}>
          {[0,1,2,3,4].map(i => <div key={i} style={{ width:3, height:3, borderRadius:'50%', background:'#1a1a1a' }} />)}
        </div>
        <div style={{ width:200, height:436, borderRadius:37, overflow:'hidden', background:'#fff', position:'relative' }}>
          <div style={{ position:'relative', height:54, background:'#fff', display:'flex', alignItems:'flex-end', padding:'0 18px 10px' }}>
            <span style={{ fontSize:11, fontWeight:600, color:'#000', letterSpacing:'-0.02em' }}>9:41</span>
            <div style={{ position:'absolute', top:11, left:'50%', transform:'translateX(-50%)', width:98, height:30, background:'#000', borderRadius:20, zIndex:10 }} />
            <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:5 }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#000"/><rect x="3.8" y="4" width="2.5" height="6" rx="0.5" fill="#000"/><rect x="7.6" y="2" width="2.5" height="8" rx="0.5" fill="#000"/><rect x="11.4" y="0" width="2.5" height="10" rx="0.5" fill="#000"/></svg>
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><circle cx="6.5" cy="8.5" r="1.2" fill="#000"/><path d="M3.2 5.8 Q6.5 3.2 9.8 5.8" stroke="#000" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M0.8 3.2 Q6.5 -0.2 12.2 3.2" stroke="#000" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><rect x="0.5" y="1" width="16" height="8" rx="2" stroke="#000" strokeWidth="1"/><rect x="2" y="2.5" width="11" height="5" rx="1" fill="#000"/><path d="M17.5 3.5 L17.5 6.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function TrackingScreen() {
  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '382px' }}>
      <div className="bg-white px-4 pt-2 pb-2.5 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-red-600 rounded-md flex items-center justify-center"><span className="text-white text-[7px] font-bold">S</span></div>
          <span className="text-gray-900 text-[10px] font-bold">Sherix</span>
        </div>
        <div className="relative">
          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 text-gray-500"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </div>
      </div>
      <div className="mx-3 mt-2.5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-2.5 shadow-sm">
        <div className="flex items-center justify-between">
          <div><div className="text-white text-[8px] font-medium opacity-80">Active Request</div><div className="text-white text-[11px] font-bold">Flat Tyre</div></div>
          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center"><Car className="w-3.5 h-3.5 text-white" /></div>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-red-100 text-[8px]">Provider dispatched • Current Location</span>
        </div>
      </div>
      <div className="mx-3 mt-2 rounded-xl overflow-hidden flex-shrink-0" style={{ height: '112px' }}>
        <div className="w-full h-full bg-gray-200 relative">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(156,163,175,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.5) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/60 to-gray-300/40" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 112"><path d="M40 85 Q90 60 155 35" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="4 3" /></svg>
          <div className="absolute bottom-4 right-8 flex flex-col items-center">
            <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shadow"><MapPin className="w-2.5 h-2.5 text-white" /></div>
            <div className="w-0.5 h-1.5 bg-red-600" />
          </div>
          <div className="absolute top-4 left-10 flex flex-col items-center">
            <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shadow"><Wrench className="w-2.5 h-2.5 text-white" /></div>
            <div className="w-0.5 h-1.5 bg-gray-900" />
          </div>
        </div>
      </div>
      <div className="mx-3 mt-2 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-[9px] shrink-0">KA</div>
          <div className="flex-1 min-w-0">
            <div className="text-gray-900 text-[9px] font-semibold">Kwame Asante</div>
            <div className="flex items-center gap-1"><Star className="w-2 h-2 text-yellow-400 fill-yellow-400" /><span className="text-gray-400 text-[8px]">4.9 · ETA</span><span className="text-red-600 text-[8px] font-bold">12 min</span></div>
          </div>
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /></div>
        </div>
      </div>
      <div className="mx-3 mt-2"><div className="bg-red-600 rounded-xl py-2 text-center"><span className="text-white text-[9px] font-semibold">Track Provider Live</span></div></div>
    </div>
  );
}

function RequestScreen() {
  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '382px' }}>
      <div className="bg-white px-4 pt-2.5 pb-2.5 border-b border-gray-100 flex items-center gap-2">
        <ChevronLeft className="w-3 h-3 text-gray-500" />
        <div className="text-gray-900 text-[10px] font-bold">Confirm Request</div>
      </div>
      <div className="mx-3 mt-2.5 bg-white rounded-xl border border-gray-100 p-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0"><MapPin className="w-3 h-3" /></div>
          <div className="flex-1 min-w-0"><div className="text-gray-400 text-[7px] uppercase tracking-wide">Pickup</div><div className="text-gray-900 text-[9px] font-semibold truncate">Spintex Rd · Accra</div></div>
        </div>
      </div>
      <div className="mx-3 mt-2 bg-white rounded-xl border border-gray-100 p-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0"><Car className="w-3 h-3" /></div>
          <div className="flex-1 min-w-0"><div className="text-gray-400 text-[7px] uppercase tracking-wide">Issue</div><div className="text-gray-900 text-[9px] font-semibold">Flat Tyre · Front Left</div></div>
          <span className="text-red-600 text-[7px] font-bold">EDIT</span>
        </div>
      </div>
      <div className="mx-3 mt-2 bg-white rounded-xl border border-gray-100 p-2.5">
        <div className="text-gray-400 text-[7px] uppercase tracking-wide mb-1">Vehicle</div>
        <div className="text-gray-900 text-[9px] font-semibold">Toyota Corolla</div>
        <div className="text-gray-400 text-[8px]">GR-2847-21 · Silver</div>
      </div>
      <div className="mx-3 mt-2 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-100 p-2.5">
        <div className="flex items-center justify-between">
          <div><div className="text-gray-400 text-[7px] uppercase tracking-wide">Est. arrival</div><div className="text-gray-900 text-[10px] font-bold">12 min</div></div>
          <div className="text-right"><div className="text-gray-400 text-[7px] uppercase tracking-wide">Est. range</div><div className="text-red-600 text-[10px] font-bold">GH₵ 60–85</div></div>
        </div>
      </div>
      <div className="mx-3 mt-auto mb-3">
        <div className="bg-red-600 rounded-2xl py-2.5 flex items-center justify-center gap-1.5 shadow-sm">
          <CheckCircle className="w-3 h-3 text-white" />
          <span className="text-white text-[9px] font-bold tracking-wide">REQUEST NOW</span>
        </div>
      </div>
    </div>
  );
}

function LiveTrackScreen() {
  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '382px' }}>
      <div className="bg-white px-4 pt-2.5 pb-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-gray-900 text-[10px] font-bold">Live Tracking</div>
        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /><span className="text-gray-500 text-[8px] font-medium">LIVE</span></div>
      </div>
      <div className="mx-3 mt-2 rounded-xl overflow-hidden relative" style={{ height: '170px' }}>
        <div className="w-full h-full bg-gray-200 relative">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(156,163,175,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.45) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 170" preserveAspectRatio="none"><path d="M30 140 Q70 110 100 90 T170 30" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeDasharray="5 4" /></svg>
          <div className="absolute" style={{ right: 22, top: 22 }}><div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shadow-md"><MapPin className="w-2.5 h-2.5 text-white" /></div></div>
          <motion.div className="absolute" initial={{ left: '14%', top: '78%' }} animate={{ left: ['14%','38%','58%','78%','14%'], top: ['78%','60%','46%','22%','78%'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ translateX: '-50%', translateY: '-50%' }}>
            <div className="relative"><div className="absolute inset-0 w-6 h-6 rounded-full bg-red-500/40 animate-ping" /><div className="relative w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shadow-lg border-2 border-white"><Wrench className="w-3 h-3 text-white" /></div></div>
          </motion.div>
        </div>
      </div>
      <div className="mx-3 mt-2 bg-white rounded-xl p-2.5 border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-[9px] shrink-0">KA</div>
          <div className="flex-1 min-w-0"><div className="text-gray-900 text-[9px] font-semibold">Kwame Asante</div><div className="flex items-center gap-1"><Star className="w-2 h-2 text-yellow-400 fill-yellow-400" /><span className="text-gray-400 text-[7px]">4.9 · Certified</span></div></div>
          <div className="text-right"><div className="text-red-600 text-[10px] font-bold leading-none">4 min</div><div className="text-gray-400 text-[7px]">away</div></div>
        </div>
      </div>
      <div className="mx-3 mt-2 grid grid-cols-2 gap-1.5">
        <div className="bg-white rounded-xl py-1.5 text-center border border-gray-100"><span className="text-gray-700 text-[9px] font-semibold">Message</span></div>
        <div className="bg-red-600 rounded-xl py-1.5 text-center"><span className="text-white text-[9px] font-semibold">Call</span></div>
      </div>
    </div>
  );
}

/* ── Testimonials carousel ── */
function TestimonialsCarousel() {/*
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [emblaApi]);

  return (
    <div className="relative">
      <button onClick={scrollPrev} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-colors">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <div className="overflow-hidden px-1" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white h-full flex flex-col hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold text-sm shrink-0">{t.name[0]}</div>
                  <div><div className="font-semibold text-gray-900 text-sm">{t.name}</div><div className="text-gray-400 text-xs">{t.role}</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollNext} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-colors">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => <button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? 'bg-red-600' : 'bg-gray-300'}`} />)}
      </div>
    </div>
  );
*/}

/* ── FAQ Item ── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp2}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-gray-100"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-gray-900 text-sm font-medium pr-4 group-hover:text-red-600 transition-colors">{q}</span>
        <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${open ? 'bg-red-600 border-red-600' : 'border-gray-200 group-hover:border-red-300'}`}>
          {open ? <Minus className="w-3.5 h-3.5 text-white" /> : <Plus className={`w-3.5 h-3.5 ${open ? 'text-white' : 'text-gray-400 group-hover:text-red-600'}`} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p className="text-gray-500 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   Main Page
══════════════════════════════════════ */
export function HomePage() {
  const { scrollY } = useScroll();
  const bgY      = useTransform(scrollY, [0, 700], [0, -120]);
  const bgOpacity = useTransform(scrollY, [0, 500], [0.9, 0.3]);

  return (
    <div>

      {/* ════════════ HERO ════════════ */}
      <section className="relative bg-gray-950 overflow-hidden" style={{ minHeight: 'max(600px, calc(100vh - 109px))' }}>
        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: bgY, opacity: bgOpacity }} initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1.03, opacity: 0.9 }} transition={{ duration: 2, ease: 'easeOut' }}>
          <img src={mechBg} alt="" aria-hidden className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.72) saturate(0.9)', transform: 'scale(1.04)' }} />
        </motion.div>
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/55 via-black/30 to-black/10" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-red-900/5" />

        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 flex items-center" style={{ minHeight: 'inherit' }}>
          <div className="w-full max-w-3xl">
            <motion.div initial="hidden" animate="show" variants={stagger(0.09)} className="text-left">
              <motion.div variants={fadeIn} className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10" style={{ background: 'rgba(0,0,0,0.18)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-xs tracking-[0.22em] uppercase text-red-400/80 mb-4">DIGITAL VEHICLE ASSISTANCE PLATFORM</motion.p>
                <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="text-white" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                  Vehicle problems shouldn’t interrupt your day.
                </motion.h1>
                <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-white/65 leading-relaxed mt-5 max-w-xl" style={{ fontSize: '1.02rem' }}>
                  Vehicle issues can happen at any time. Sherix connects drivers with verified automotive service professionals through one digital platform.
                </motion.p>
                <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.08 }} className="text-white/55 leading-relaxed mt-3 max-w-xl text-sm">
                  Request assistance, receive transparent quotations before work begins, track your assigned service provider in real time, and keep a complete digital record of every completed service—all from one place.
                </motion.p>

                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap gap-1.5 sm:gap-2 justify-start mt-6 mb-6">
                  {highlights.map(h => (
                    <span key={h.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/85" style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.16)' }}>
                      <h.icon className="w-3 h-3 text-red-400" />{h.label}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.12 }} className="flex flex-wrap gap-3 justify-start mb-7">
                  <Link to="/waitlist" className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors shadow-lg font-medium text-sm">
                    Request Assistance <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/partner" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white/80 hover:text-white transition-colors" style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    Become a Service Partner
                  </Link>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-10 bg-white" aria-hidden="true" />

      {/* ════════════ WHY SHERIX ════════════ */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={introBg} alt="" aria-hidden className="w-full h-full object-cover object-center" style={{ opacity: 0.45, filter: 'brightness(0.4) saturate(0.7)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.08)} className="mb-12">
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/70 mb-5">Why Sherix</motion.p>
            <motion.h2 variants={rise} className="text-white max-w-3xl" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Vehicle assistance built around trust, transparency, and control.
            </motion.h2>
            <motion.p variants={rise} className="mt-5 text-white/60 text-sm leading-relaxed max-w-3xl">
              Whether you need routine maintenance, diagnostics, or emergency assistance, finding a trusted service provider shouldn’t be difficult.
            </motion.p>
            <motion.p variants={rise} className="mt-3 text-white/60 text-sm leading-relaxed max-w-4xl">
              Sherix brings vehicle assistance into one digital platform. From requesting assistance and reviewing quotations before work begins to tracking your assigned provider and maintaining your vehicle’s digital service history, instead of contacting multiple service providers individually, Sherix lets you request assistance once and connect with the most suitable verified professional. Every step is designed to give drivers greater confidence, visibility, and control.
            </motion.p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whySherixFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp2} transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
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
              Sherix makes it easy to get the help you need when your vehicle breaks down. From requesting assistance to completing your service, every step is designed to give you greater visibility, transparency, and confidence.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {howSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp2}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 group"
              >
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

          {/* phone mockup */}
          <motion.div className="flex items-end justify-center gap-4 sm:gap-8 relative" initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.18)}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center"><div className="w-[500px] h-[500px] rounded-full bg-red-200/20 blur-3xl" /></div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="hidden sm:block" style={{ marginBottom: '24px' }}>
              <PhoneFrame scale={0.82} rotate={-6} opacity={0.7} blur><RequestScreen /></PhoneFrame>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="relative z-10">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                <PhoneFrame><TrackingScreen /></PhoneFrame>
              </motion.div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-6 bg-red-300/25 rounded-full blur-xl" />
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="hidden sm:block" style={{ marginBottom: '24px' }}>
              <PhoneFrame scale={0.82} rotate={6} opacity={0.7} blur><LiveTrackScreen /></PhoneFrame>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section className="py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Our Services</motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2 variants={rise} className="text-gray-900 max-w-2xl" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Professional vehicle services, whenever and wherever you need them.
              </motion.h2>
              <motion.div variants={rise}>
                <Link to="/service" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  Explore All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <motion.p variants={rise} className="mb-10 max-w-3xl text-gray-500 text-sm leading-relaxed">
              Sherix connects drivers with verified automotive service professionals for diagnostics, repairs, maintenance, and electrical services. Request assistance, receive transparent quotations before work begins, track your assigned service provider in real time, and keep a digital record of completed services—all from one platform.
            </motion.p>
            <div className="grid gap-px bg-gray-200 rounded-2xl overflow-hidden md:grid-cols-3">
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp2}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white p-7 group hover:bg-gray-950 transition-colors duration-300 cursor-default"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300">
                      <s.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    {s.comingSoon && (
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-700">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-gray-900 group-hover:text-white font-semibold mb-1.5 transition-colors duration-300" style={{ fontSize: '0.92rem' }}>{s.label}</h3>
                  <p className="text-gray-400 group-hover:text-white/40 text-xs leading-relaxed transition-colors duration-300">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ FLEET SOLUTIONS ════════════ */}
      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">Fleet Solutions</motion.p>
              <motion.h2 variants={rise} className="text-white" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Helping businesses keep their vehicles on the road.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-white/50 text-sm leading-relaxed max-w-xl">
                Sherix Fleet Solutions gives businesses one centralized platform to manage vehicle maintenance and service operations. Request vehicle services, monitor active jobs, maintain digital service records, and keep complete visibility across your fleet from a single dashboard.
              </motion.p>
              <motion.div variants={rise} className="mt-8 space-y-4">
                {[
                  'Centralized Fleet Management',
                  'Service Visibility',
                  'Digital Service Records',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
                <Link to="/business" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors">
                  Learn More About Fleet Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="lg:w-72 shrink-0">
              <div className="rounded-3xl overflow-hidden border border-white/8 bg-white/5 backdrop-blur-sm">
                {[
                  { v: 'Centralized', l: 'Fleet Management' },
                  { v: 'Live', l: 'Service Visibility' },
                  { v: 'Digital', l: 'Service Records' },
                ].map((s, i) => (
                  <div key={s.l} className={`px-7 py-5 ${i < 2 ? 'border-b border-white/6' : ''}`}>
                    <div className="text-white font-bold" style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}>{s.v}</div>
                    <div className="text-white/35 text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ PARTNER CTA ════════════ */}
      <section className="py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Become a Service Partner</motion.p>
              <motion.h2 variants={rise} className="text-gray-900" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Grow your business with Sherix.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-lg">
                Join Sherix’s network of verified automotive service providers and connect with customers looking for trusted vehicle services. Whether you’re an independent mechanic, an auto electrician, or an automotive service company, Sherix helps you receive service requests, manage your work efficiently, and grow your business through one digital platform.
              </motion.p>
              <motion.div variants={rise} className="mt-10 space-y-3">
                {[
                  ['Reach More Customers', 'Receive service requests from drivers looking for trusted vehicle professionals in your service area.'],
                  ['Manage Jobs Digitally', 'Receive requests, respond to customers, and manage your work through one platform.'],
                  ['Grow With Confidence', 'Build customer trust, strengthen your reputation, and grow your business through consistent, high-quality service on Sherix.'],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4 py-3.5 border-b border-gray-200">
                    <span className="text-sm font-semibold text-gray-900 w-36 shrink-0">{title}</span>
                    <span className="text-sm text-gray-700">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-100">
                <div className="bg-gray-950 p-8 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/15 rounded-full blur-2xl" />
                  <div className="flex items-center gap-2 mb-3 relative z-10"><Wrench className="w-4 h-4 text-red-500" /><span className="text-xs tracking-widest uppercase text-white/40">Partner Program</span></div>
                  <h3 className="text-white relative z-10" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 }}>Grow your business with Sherix.</h3>
                  <p className="mt-3 text-white/40 text-sm relative z-10">Join Sherix’s network of verified automotive service providers.</p>
                </div>
                <div className="bg-white p-6 space-y-2.5">
                  <Link to="/partner" className="flex items-center justify-between w-full px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors">
                    <span>Become a Service Partner</span><ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="flex items-center justify-between w-full px-5 py-3.5 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors">
                    <span>Contact Partner Support</span><ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Frequently Asked Questions</motion.p>
              <motion.h2 variants={rise} className="text-gray-900" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Everything you need to know before requesting assistance.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed">
                Get the answers you need before you request help. Still have questions?
              </motion.p>
              <motion.div variants={rise} className="mt-6">
                <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  View All FAQs <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            <div className="divide-y divide-gray-100">
              {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="py-28 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-700/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.1)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">Get Started with Sherix</motion.p>
            <motion.h2 variants={rise} className="text-white max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1 }}>
              Roadside assistance is just a few taps away.
            </motion.h2>
            <motion.p variants={rise} className="mt-5 text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              Whether you need trusted roadside assistance or you’re an automotive service provider looking to grow your business, Sherix brings everything together in one trusted digital platform.
            </motion.p>
            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors text-sm">
                Request Assistance <ArrowRight className="w-4 h-4" />
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
