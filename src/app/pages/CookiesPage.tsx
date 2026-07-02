import { useState } from 'react';

const cookieCategories = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    required: true,
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.',
    examples: [
      { name: 'session_id', purpose: 'Maintains your login session', duration: 'Session' },
      { name: 'csrf_token', purpose: 'Prevents cross-site request forgery', duration: 'Session' },
      { name: 'consent_preferences', purpose: 'Stores your cookie choices', duration: '1 year' },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    required: false,
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.',
    examples: [
      { name: '_ga', purpose: 'Google Analytics — distinguishes users', duration: '2 years' },
      { name: '_gid', purpose: 'Google Analytics — stores page views', duration: '24 hours' },
      { name: 'amplitude_id', purpose: 'Product analytics — tracks feature usage', duration: '1 year' },
    ],
    thirdParty: 'Google Analytics, Amplitude',
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    required: false,
    description: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.',
    examples: [
      { name: 'ui_language', purpose: 'Stores your language preference', duration: '1 year' },
      { name: 'theme_preference', purpose: 'Remembers light/dark mode', duration: '1 year' },
      { name: 'intercom-session', purpose: 'Support chat session', duration: '1 week' },
    ],
    thirdParty: 'Intercom',
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    required: false,
    description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
    examples: [
      { name: '_fbp', purpose: 'Facebook Pixel — ad targeting', duration: '3 months' },
      { name: '_gcl_au', purpose: 'Google Ads — conversion tracking', duration: '3 months' },
      { name: 'li_sugr', purpose: 'LinkedIn Ads — user matching', duration: '3 months' },
    ],
    thirdParty: 'Meta, Google Ads, LinkedIn',
  },
];

export function CookiesPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    functional: true,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  const toggle = (id: string) => {
    setPreferences(p => ({ ...p, [id]: !p[id as keyof typeof p] }));
    setSaved(false);
  };

  const acceptAll = () => {
    setPreferences({ essential: true, analytics: true, functional: true, marketing: true });
    setSaved(true);
  };

  const rejectAll = () => {
    setPreferences({ essential: true, analytics: false, functional: false, marketing: false });
    setSaved(true);
  };

  const savePreferences = () => setSaved(true);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Legal</span>
          <h1 className="text-4xl font-bold mt-2 mb-2">Cookies Policy</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-4">
            <span>Last updated: 1 June 2026</span>
            <span>•</span>
            <span>GDPR & ePrivacy Compliant</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          This Cookies Policy explains what cookies are, how we use them on the WebApp platform, what third-party cookies we use, and how you can control and delete cookies. For more information about how we handle your personal data, please see our <a href="/privacy" className="text-red-600 hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          A cookie is a small text file stored on your device when you visit a website. Cookies serve many functions — they remember your preferences, help us analyse site performance, and enable personalised advertising.
        </p>

        {/* Preference Panel */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-12">
          <h2 className="font-bold text-gray-900 mb-1">Manage your cookie preferences</h2>
          <p className="text-sm text-gray-500 mb-4">Toggle each category below. Essential cookies cannot be disabled as they are required for the site to function.</p>
          <div className="space-y-3">
            {cookieCategories.map(cat => (
              <div key={cat.id} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100">
                <div>
                  <div className="font-medium text-gray-900 text-sm">{cat.name}</div>
                  {cat.required && <span className="text-xs text-gray-400">Always active</span>}
                </div>
                <button
                  onClick={() => !cat.required && toggle(cat.id)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${preferences[cat.id as keyof typeof preferences] ? 'bg-red-600' : 'bg-gray-200'} ${cat.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences[cat.id as keyof typeof preferences] ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button onClick={rejectAll} className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              Reject Non-Essential
            </button>
            <button onClick={savePreferences} className="px-4 py-2 text-sm border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              Save Preferences
            </button>
            <button onClick={acceptAll} className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Accept All
            </button>
          </div>
          {saved && (
            <p className="mt-3 text-sm text-green-600 font-medium">✓ Your preferences have been saved.</p>
          )}
        </div>

        {/* Cookie Categories Detail */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie categories explained</h2>
        <div className="space-y-8">
          {cookieCategories.map(cat => (
            <div key={cat.id} id={cat.id} className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100">
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                  {cat.thirdParty && <p className="text-xs text-gray-400 mt-0.5">Third parties: {cat.thirdParty}</p>}
                </div>
                {cat.required ? (
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">Always On</span>
                ) : (
                  <span className={`px-3 py-1 text-xs rounded-full ${preferences[cat.id as keyof typeof preferences] ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {preferences[cat.id as keyof typeof preferences] ? 'Enabled' : 'Disabled'}
                  </span>
                )}
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                        <th className="pb-2 pr-4">Cookie Name</th>
                        <th className="pb-2 pr-4">Purpose</th>
                        <th className="pb-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {cat.examples.map(ex => (
                        <tr key={ex.name}>
                          <td className="py-2 pr-4 font-mono text-xs text-gray-700">{ex.name}</td>
                          <td className="py-2 pr-4 text-gray-500">{ex.purpose}</td>
                          <td className="py-2 text-gray-500">{ex.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to delete */}
        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-100">
          <h3 className="font-semibold text-amber-900 mb-2">How to delete cookies from your browser</h3>
          <p className="text-sm text-amber-700 mb-3">You can delete or block cookies via your browser settings. Note that some features of our site may not work correctly if you delete essential cookies.</p>
          <div className="flex flex-wrap gap-2">
            {['Chrome', 'Firefox', 'Safari', 'Edge'].map(b => (
              <span key={b} className="px-3 py-1 bg-white border border-amber-200 rounded-md text-xs text-amber-700">
                {b} →
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-1">Questions about cookies?</h3>
          <p className="text-sm text-gray-500">Email us at <a href="mailto:privacy@webapp.com" className="text-red-600 hover:underline">privacy@webapp.com</a> or visit our <a href="/support" className="text-red-600 hover:underline">Support page</a>.</p>
        </div>
      </div>
    </div>
  );
}
