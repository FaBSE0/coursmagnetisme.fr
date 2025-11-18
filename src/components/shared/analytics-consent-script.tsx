'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const STORAGE_KEY = 'coursmagnetisme_consent';

type AnalyticsConsentScriptProps = {
  trackingId?: string;
};

export const AnalyticsConsentScript = ({ trackingId }: AnalyticsConsentScriptProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!trackingId) return;

    const evaluateConsent = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setEnabled(stored === 'granted');
    };

    const handleConsentChange = (event: Event) => {
      if ('detail' in event && (event as CustomEvent<string>).detail === 'granted') {
        setEnabled(true);
      } else if ('detail' in event && (event as CustomEvent<string>).detail === 'denied') {
        setEnabled(false);
      } else {
        evaluateConsent();
      }
    };

    evaluateConsent();
    window.addEventListener('consentchange', handleConsentChange);
    window.addEventListener('storage', handleConsentChange);

    return () => {
      window.removeEventListener('consentchange', handleConsentChange);
      window.removeEventListener('storage', handleConsentChange);
    };
  }, [trackingId]);

  if (!trackingId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
};

