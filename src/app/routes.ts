import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PartnerPage } from './pages/PartnerPage';
import { ServicePage } from './pages/ServicePage';
import { SupportPage } from './pages/SupportPage';
import { BusinessPage } from './pages/BusinessPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CookiesPage } from './pages/CookiesPage';
import { ContactPage } from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'partner', Component: PartnerPage },
      { path: 'service', Component: ServicePage },
      { path: 'support', Component: SupportPage },
      { path: 'contact', Component: ContactPage },
      { path: 'business', Component: BusinessPage },
      { path: 'terms', Component: TermsPage },
      { path: 'privacy', Component: PrivacyPage },
      { path: 'cookies', Component: CookiesPage },
      { path: 'contact', Component: ContactPage},
    ],
  },
]);
