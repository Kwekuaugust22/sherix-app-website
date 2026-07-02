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
  { icon: Navigation, label: 'Real-Time Tracking' },
  { icon: Shield,     label: 'Verified Providers' },
  { icon: Zap,        label: 'Fast Response' },
  { icon: Clock,      label: '24/7 Assistance' },
];

const trustFeatures = [
  { num: '01', title: 'Verified Roadside Service Providers', desc: 'Every roadside service provider on Sherix completes our verification process before joining the platform, helping you connect with trusted professionals.' },
  { num: '02', title: 'Transparent Quotations',             desc: 'Receive an estimated price range before inspection. Once assessed, you\'ll receive a detailed quotation for approval before any repair work begins.' },
  { num: '03', title: 'Real-Time Tracking',                 desc: 'Track your assigned provider on the map, receive live updates, and know exactly when help will arrive.' },
  { num: '04', title: 'Digital Service History',            desc: 'Every completed service is securely stored in your account, making it easier to manage your vehicle\'s maintenance history.' },
  { num: '05', title: 'Customer Ratings & Reviews',         desc: 'Share your experience after every completed service and help maintain the quality and accountability of the Sherix community.' },
];

const whyReasons = [
  { icon: Zap,     title: 'Fast Matching',           desc: 'Our intelligent matching system connects you with the nearest available verified provider based on your location and service request.' },
  { icon: Shield,  title: 'You Stay in Control',     desc: 'No repair work begins until you\'ve reviewed and approved the quotation submitted after inspection.' },
  { icon: CheckCircle, title: 'Built on Transparency', desc: 'Know what service is being recommended, why it\'s needed, and how much it is expected to cost before work starts.' },
];

const howSteps = [
  {
    num: '1',
    title: 'Tell Us What Happened',
    desc: 'Open the Sherix app, choose the problem you\'re experiencing, confirm your location, and submit your request. Whether it\'s a breakdown, flat tyre, battery problem, or another emergency — help starts with a few simple taps.',
    Screen: null,
  },
  {
    num: '2',
    title: 'We\'ll Find the Right Provider',
    desc: 'Our intelligent matching system connects you with the nearest available verified roadside service provider. You\'ll receive the provider\'s profile, estimated arrival time, and live location.',
    Screen: null,
  },
  {
    num: '3',
    title: 'Review Before Repairs Begin',
    desc: 'After inspecting your vehicle, the service provider submits a digital quotation explaining the issue, recommended service, and cost. You stay in control by approving before any repair work begins.',
    Screen: null,
  },
  {
    num: '4',
    title: 'Complete Your Service With Confidence',
    desc: 'Once the work is complete, you\'ll receive a digital service record, rate your experience, and keep a history of every completed service in your Sherix account.',
    Screen: null,
  },
];

const services = [
  { icon: Car,            label: 'Vehicle Breakdown',   desc: 'Professional diagnosis and support when your vehicle unexpectedly stops.' },
  { icon: Disc,           label: 'Flat Tyre',           desc: 'Help changing or repairing a damaged tyre so you can continue safely.' },
  { icon: BatteryWarning, label: 'Battery Assistance',  desc: 'Jump-start support when your vehicle won\'t start.' },
  { icon: Fuel,           label: 'Fuel Delivery',       desc: 'Emergency fuel delivered directly to your location.' },
  { icon: Activity,       label: 'Vehicle Diagnostics', desc: 'Request a diagnostic inspection before deciding on repairs.' },
  { icon: Truck,          label: 'Towing Services',     desc: 'Professional towing to your preferred destination.' },
  { icon: KeyRound,       label: 'Lockout Assistance',  desc: 'Locked your keys inside? Request lockout assistance where available.' },
  { icon: Siren,          label: 'Emergency Support',   desc: 'Fast access to nearby professionals for urgent roadside situations.' },
];

const faqs = [
  { q: 'How quickly can I get roadside assistance?', a: 'Response times depend on your location and provider availability. Sherix matches your request with the nearest available verified roadside service provider to help reduce waiting time.' },
  { q: 'How much will the service cost?', a: 'You\'ll see an estimated price range before requesting assistance. After inspecting your vehicle, the service provider submits a detailed quotation for your approval before any repair work begins.' },
  { q: 'Can a provider start repairs without my approval?', a: 'No. Every quotation must be reviewed and approved by you before any repair work begins.' },
  { q: 'How do I know I can trust the provider?', a: 'Every roadside service provider on Sherix goes through our verification process before joining the platform.' },
  { q: 'Can businesses use Sherix?', a: 'Yes. Sherix offers fleet solutions that help businesses manage roadside assistance requests, reduce downtime, and maintain digital service records.' },
  { q: 'What if my vehicle cannot be repaired on-site?', a: 'If roadside repair isn\'t possible, your provider can recommend or arrange towing to your preferred destination where available.' },
];

const testimonials = [
  { name: 'Amara D.',  role: 'Daily Commuter',        text: 'My tyre burst on the highway at night. Sherix had a provider with me in 18 minutes. Absolutely life-saving app.', rating: 5 },
  { name: 'Kofi B.',   role: 'Fleet Manager, LogiCo', text: 'We manage 40 vehicles. Sherix\'s fleet portal cut our breakdown downtime by over 60%. Game changer.', rating: 5 },
  { name: 'Emeka T.',  role: 'Independent Mechanic',  text: 'Since joining Sherix I get consistent job requests. The platform handles everything — I just show up and work.', rating: 5 },
  { name: 'Sandra A.', role: 'Workshop Owner',         text: 'Onboarding was simple and the job flow is steady. Sherix genuinely helps small workshops compete.', rating: 5 },
  { name: 'James O.',  role: 'Uber Driver',            text: 'Battery died mid-shift. Sherix connected me to a jump-start provider in minutes. Back earning in under 30 mins.', rating: 5 },
];

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
                <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-xs tracking-[0.22em] uppercase text-red-400/80 mb-4">Sherix — Roadside Assistance</motion.p>
                <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="text-white" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                  Every journey should end at your&nbsp;destination—<span className="text-red-400">not on the side of the road.</span>
                </motion.h1>
                <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-white/65 leading-relaxed mt-5 max-w-xl" style={{ fontSize: '1.02rem' }}>
                  A flat tyre on your morning commute. A dead battery before an important meeting. Roadside emergencies happen without warning, but finding help shouldn't be another problem you have to solve.
                </motion.p>
                <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.08 }} className="text-white/55 leading-relaxed mt-3 max-w-xl text-sm">
                  Sherix connects you with nearby verified roadside service providers in real time — making it easier to request assistance, track your provider's arrival, approve quotations before repairs begin, and continue your journey with confidence.
                </motion.p>

                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap gap-1.5 sm:gap-2 justify-start mt-6 mb-6">
                  {highlights.map(h => (
                    <span key={h.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/85" style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.16)' }}>
                      <h.icon className="w-3 h-3 text-red-400" />{h.label}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.12 }} className="flex flex-wrap gap-3 justify-start mb-7">
                  <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors shadow-lg font-medium text-sm">
                    Request Assistance <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="/partner" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white/80 hover:text-white transition-colors" style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    Become a Service Partner
                  </motion.a>
                </motion.div>

                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.14 }} className="flex flex-wrap gap-6 sm:gap-10 justify-start pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.13)' }}>
                  {[{ val: '< 20 min', label: 'Avg. response' }, { val: '12,000+', label: 'Verified providers' }, { val: '98%', label: 'Satisfaction rate' }].map(s => (
                    <div key={s.label}>
                      <div className="text-xl sm:text-2xl font-extrabold text-white">{s.val}</div>
                      <div className="text-white/45 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ TRUSTED ROADSIDE ════════════ */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.08)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Built Around You</motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
              <motion.h2 variants={rise} className="text-gray-900 max-w-xl" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Trusted roadside assistance, built around you.
              </motion.h2>
              <motion.p variants={rise} className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Sherix was created to remove the uncertainty that comes with vehicle breakdowns. Every request is designed to give you greater visibility, control, and confidence.
              </motion.p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {trustFeatures.map((f, i) => (
                <motion.div key={f.num} variants={rise} className="bg-white p-7 group hover:bg-gray-950 transition-colors duration-300 cursor-default">
                  <span className="text-gray-100 group-hover:text-white/8 select-none transition-colors duration-300" style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', display: 'block', marginBottom: '1rem' }}>{f.num}</span>
                  <h3 className="text-gray-900 group-hover:text-white transition-colors duration-300 mb-2" style={{ fontSize: '0.92rem', fontWeight: 700 }}>{f.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/45 text-xs leading-relaxed transition-colors duration-300">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ PROBLEM / SOLUTION ════════════ */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={introBg} alt="" aria-hidden className="w-full h-full object-cover object-center" style={{ opacity: 0.5, filter: 'brightness(0.4) saturate(0.7)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger(0.09)}>
              <motion.div variants={fadeIn} className="rounded-2xl sm:rounded-3xl p-8 lg:p-10" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <motion.span variants={fadeUp} className="text-xs tracking-[0.2em] uppercase text-red-400/70 mb-4 block">The Sherix Difference</motion.span>
                <motion.h2 variants={fadeUp} className="text-white mb-5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  When your vehicle stops, Sherix gets you moving again.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/60 text-sm leading-relaxed mb-6">
                  Too often, drivers rely on phone contacts, online searches, or recommendations from strangers when their vehicles develop a problem. That process can be slow, stressful, and uncertain.
                </motion.p>
                <motion.p variants={fadeUp} className="text-white/60 text-sm leading-relaxed mb-8">
                  Sherix replaces that experience with a single platform that helps you connect with nearby verified roadside service providers quickly and transparently. From flat tyres and battery problems to towing and emergency roadside support — help is only a few taps away.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Link to="/service" className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium text-sm transition-colors">
                    View Services <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white/80 hover:text-white transition-colors" style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    About Sherix
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Why drivers choose */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.1)} className="space-y-4">
              <motion.p variants={rise} className="text-xs tracking-[0.2em] uppercase text-red-500/60 mb-6">Why Drivers Choose Sherix</motion.p>
              {whyReasons.map((r, i) => (
                <motion.div key={r.title} variants={rise} className="flex gap-5 p-6 rounded-2xl group hover:scale-[1.02] transition-transform duration-200 cursor-default" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/20 flex items-center justify-center shrink-0">
                    <r.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1.5" style={{ fontSize: '0.95rem' }}>{r.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.p variants={rise} className="text-white/35 text-xs pt-2 pl-1">Roadside Assistance You Can Trust.</motion.p>
            </motion.div>
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
              From a few taps to help arriving — four simple steps.
            </motion.h2>
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
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Roadside Assistance Services</motion.p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.h2 variants={rise} className="text-gray-900 max-w-lg" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                No matter where the road takes you.
              </motion.h2>
              <motion.div variants={rise}>
                <Link to="/service" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  View all services <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp2}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white p-7 group hover:bg-gray-950 transition-colors duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600/20 flex items-center justify-center mb-4 transition-colors duration-300">
                    <s.icon className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
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
                Keeping your fleet moving is essential to your business.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-white/50 text-sm leading-relaxed max-w-xl">
                Sherix helps companies reduce vehicle downtime by providing fast access to verified roadside service providers, digital service records, transparent service tracking, and a central platform for managing roadside assistance requests.
              </motion.p>
              <motion.p variants={rise} className="mt-3 text-white/40 text-sm leading-relaxed max-w-xl">
                Whether you operate taxis, delivery vehicles, corporate fleets, logistics vehicles, or service vehicles, Sherix helps your drivers get back on the road faster while giving your business greater visibility into every roadside assistance request.
              </motion.p>
              <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
                <Link to="/business" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors">
                  Explore Fleet Solutions <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/partner" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white/70 hover:text-white transition-colors" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  Become a Service Partner
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats card */}
            <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="lg:w-72 shrink-0">
              <div className="rounded-3xl overflow-hidden border border-white/8">
                {[
                  { v: '40+', l: 'Vehicle types supported' },
                  { v: '60%', l: 'Avg. downtime reduction' },
                  { v: '24/7', l: 'Fleet assistance access' },
                  { v: 'Live', l: 'Request tracking' },
                ].map((s, i) => (
                  <div key={s.l} className={`px-7 py-5 ${i < 3 ? 'border-b border-white/6' : ''}`} style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <div className="text-white font-bold" style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}>{s.v}</div>
                    <div className="text-white/35 text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.1)}>
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-4">Testimonials</motion.p>
            <motion.h2 variants={rise} className="text-gray-900" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Trusted by drivers and providers alike.
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }}>
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      {/* ════════════ PARTNER CTA ════════════ */}
      <section className="py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={staggerRise(0.09)}>
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">Become a Service Partner</motion.p>
              <motion.h2 variants={rise} className="text-gray-900" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Grow your business by joining the Sherix network.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed max-w-md">
                Receive nearby service requests, manage jobs through the platform, build your reputation through customer reviews, and connect with more drivers who need your expertise.
              </motion.p>
              <motion.div variants={rise} className="mt-10 space-y-3">
                {[['Who', 'Mechanics, towing operators, tyre & battery specialists, and more'],['What you get', 'Verified badge, job requests, weekly payouts, dedicated support'],['How to start', 'Apply online — verified and live within 48 hours']].map(([l, v]) => (
                  <div key={l} className="flex gap-4 py-3.5 border-b border-gray-200">
                    <span className="text-sm text-gray-400 w-28 shrink-0">{l}</span>
                    <span className="text-sm text-gray-700">{v}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-100">
                <div className="bg-gray-950 p-8 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/15 rounded-full blur-2xl" />
                  <div className="flex items-center gap-2 mb-3 relative z-10"><Wrench className="w-4 h-4 text-red-500" /><span className="text-xs tracking-widest uppercase text-white/40">Partner Program</span></div>
                  <h3 className="text-white relative z-10" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 }}>Ready to apply as a service partner?</h3>
                  <p className="mt-3 text-white/40 text-sm relative z-10">Join thousands of verified providers already on Sherix.</p>
                </div>
                <div className="bg-white p-6 space-y-2.5">
                  <Link to="/partner#apply" className="flex items-center justify-between w-full px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors">
                    <span>Apply as a Service Partner</span><ArrowRight className="w-4 h-4" />
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
              <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-600 mb-5">FAQ</motion.p>
              <motion.h2 variants={rise} className="text-gray-900" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Frequently asked questions.
              </motion.h2>
              <motion.p variants={rise} className="mt-5 text-gray-500 text-sm leading-relaxed">
                Everything you need to know about how Sherix works. Still have questions?
              </motion.p>
              <motion.div variants={rise} className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  Contact us <ArrowRight className="w-4 h-4" />
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
            <motion.p variants={rise} className="text-xs tracking-[0.22em] uppercase text-red-500/60 mb-5">Ready When You Need Us</motion.p>
            <motion.h2 variants={rise} className="text-white max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1 }}>
              Roadside emergencies don't wait for the right moment.
            </motion.h2>
            <motion.p variants={rise} className="mt-5 text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              Whether you're travelling to work, returning home, or managing a business fleet, Sherix is here to help you find trusted roadside assistance quickly, transparently, and with confidence.
            </motion.p>
            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4 justify-center">
              <motion.a href="#" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors text-sm">
                Request Assistance <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white font-medium rounded-full transition-colors text-sm" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                <Download className="w-4 h-4" /> Download the App
              </motion.a>
              <motion.a href="/business" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white font-medium rounded-full transition-colors text-sm" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                Explore Fleet Solutions <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
