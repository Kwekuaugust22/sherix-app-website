import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, ArrowUp, MapPin, Facebook, Instagram, Twitter, Users, ChevronDown } from 'lucide-react';
import logoImg from '../../imports/sherixlogo.png';
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.85a4.85 4.85 0 01-1.07-.16z" />
    </svg>
  );
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/service', label: 'Services' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);
  const legalRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > 400);
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) {
        setLegalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [
      ...prev,
      { from: 'user', text: chatInput },
      { from: 'bot', text: 'Thanks for your message! Our team will get back to you shortly.' },
    ]);
    setChatInput('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Campaign Bar + Nav — sticky together */}
      <div className="sticky top-0 z-50">
        {/* Campaign Bar */}
        <div className="bg-red-600 text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-red-100">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Accra, Ghana</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-red-200 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="text-red-200 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="X" className="text-red-200 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="TikTok" className="text-red-200 hover:text-white transition-colors">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Nav */}
        <header className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center shrink-0">
              <img src={logoImg} alt="Sherix" className="h-30 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Legal dropdown */}
              <div className="relative" ref={legalRef}>
                <button
                  onClick={() => setLegalOpen(o => !o)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${legalOpen ? 'text-red-600 bg-red-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                >
                  Legal
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${legalOpen ? 'rotate-180' : ''}`} />
                </button>
                {legalOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                    {legalLinks.map(link => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setLegalOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/partner" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-sm shadow-red-200">
                <Users className="w-3.5 h-3.5" />
                Become a Service Provider
              </NavLink>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 text-sm rounded-lg transition-colors font-medium ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Legal accordion */}
              <div>
                <button
                  onClick={() => setMobileLegalOpen(o => !o)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Legal
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLegalOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLegalOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-red-100 pl-3">
                    {legalLinks.map(link => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => { setMobileOpen(false); setMobileLegalOpen(false); }}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm rounded-lg transition-colors ${isActive ? 'text-red-600 bg-red-50' : 'text-gray-500 hover:bg-gray-50'}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-2">
                <NavLink to="/partner" className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg">
                  <Users className="w-4 h-4" /> Become a Partner
                </NavLink>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Top row — logo + help center */}
    <div className="flex items-center justify-between py-8 border-b border-gray-800">
      <div className="inline-block bg-white rounded-lg px-3 py-1.5">
        <img src={logoImg} alt="Sherix" className="h-8 w-auto object-contain" />
      </div>
      <a href="/support" className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4">
        Visit Help Center
      </a>
    </div>

    {/* Middle row — columns + social + app badges */}
    <div className="py-12 grid grid-cols-2 md:grid-cols-[auto_1fr] gap-12">

      {/* Link columns */}
      <div className="col-span-2 md:col-span-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">Company</h2>
          <ul className="space-y-3">
            {[['About Us', '/about'], ['Services', '/service'], ['Partner Program', '/partner'], ['Business', '/business']].map(([l, href]) => (
              <li key={l}><a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">Support</h2>
          <ul className="space-y-3">
            {[['Help Center', '/support'], ['Contact Us', '/contact'], ['Live Chat', '#'], ['FAQ', '/support']].map(([l, href]) => (
              <li key={l}><a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">Legal</h2>
          <ul className="space-y-3">
            {[['Terms of Service', '/terms'], ['Privacy Policy', '/privacy'], ['Cookies Policy', '/cookies']].map(([l, href]) => (
              <li key={l}><a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">Get the App</h2>
          <ul className="space-y-3">
            {[['App Store', '#'], ['Google Play', '#']].map(([l, href]) => (
              <li key={l}><a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social icons + app badges */}
      <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end justify-between gap-8">
        {/* Social icons */}
        <div className="flex gap-3">
          {[
            { label: 'Facebook', href: '#', icon: Facebook },
            { label: 'Instagram', href: '#', icon: Instagram },
            { label: 'X', href: '#', icon: Twitter },
          ].map(s => (
            <a key={s.label} href={s.href} aria-label={s.label}
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all">
              <s.icon className="w-4 h-4" />
            </a>
          ))}
          <a href="#" aria-label="TikTok"
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all">
            <TikTokIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Location + app store badges */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Accra, Ghana</span>
          </div>
          <div className="flex gap-3">
            {['App Store', 'Google Play'].map(s => (
              <a key={s} href="#"
                className="px-4 py-2 border border-gray-700 rounded-lg text-xs text-gray-400 hover:border-gray-500 hover:text-white transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar — copyright + legal links */}
    <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-gray-500">© 2026 Sherix Technologies Ltd.</p>
      <ul className="flex items-center gap-6">
        {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Cookies', '/cookies']].map(([l, href]) => (
          <li key={l}>
            <a href={href} className="text-xs text-gray-500 hover:text-white transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>

  </div>
</footer>
      {/* AI Chatbot widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {chatOpen && (
          <div className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-red-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">AI Assistant</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-red-200 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="h-56 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.from === 'user' ? 'bg-red-600 text-white rounded-br-none' : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
              />
              <button onClick={sendMessage} className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(o => !o)}
          className="w-12 h-12 bg-red-600 text-white rounded-full shadow-lg shadow-red-200 flex items-center justify-center hover:bg-red-700 transition-colors relative"
        >
          <MessageSquare className="w-5 h-5" />
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">1</span>
          )}
        </button>
      </div>

      {/* Back to top */}
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-10 h-10 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <CookieBanner />
    </div>
  );
}

function CookieBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900 text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <p className="text-sm text-gray-300 flex-1">
        We use cookies to enhance your experience. By continuing, you agree to our{' '}
        <a href="/cookies" className="underline text-red-400 hover:text-red-300">Cookies Policy</a>.
      </p>
      <div className="flex gap-2 shrink-0">
        <button onClick={() => setDismissed(true)} className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors">
          Preferences
        </button>
        <button onClick={() => setDismissed(true)} className="px-4 py-2 text-sm bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
          Accept All
        </button>
      </div>
    </div>
  );
}
