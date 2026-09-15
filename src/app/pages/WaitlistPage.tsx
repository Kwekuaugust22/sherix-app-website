import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function WaitlistPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-br from-red-900 to-red-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-red-100/80">Join the Waitlist</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Request Assistance</h1>
          <p className="mt-4 text-base text-red-50/80">
            We’re preparing the Sherix experience for launch. Join the waitlist to be among the first drivers and service partners to access it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-gray-900">Be first to know when Sherix launches</h2>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Full name</label>
                <input className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-red-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-red-400" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">What do you need help with?</label>
              <textarea rows={4} className="w-full resize-none rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-red-400" placeholder="Tell us about the vehicle assistance you need." />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </button>
              <Link to="/partner" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900">
                Become a Service Partner
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
