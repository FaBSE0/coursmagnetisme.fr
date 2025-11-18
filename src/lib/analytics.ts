type AnalyticsEvent =
  | { name: 'cta_affiliate_click'; payload: { formationId: string } }
  | { name: 'leadmagnet_submit'; payload: { emailDomain: string } }
  | { name: 'faq_open'; payload: { questionId: string } }
  | { name: 'nav_primary_click'; payload: { href: string } };

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const logEvent = ({ name, payload }: AnalyticsEvent) => {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', name, payload);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event: name, ...payload });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', name, payload);
    }
  }
};

