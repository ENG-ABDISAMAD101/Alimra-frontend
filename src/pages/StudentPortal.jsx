import { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';

const redirectUrl = 'https://al-imra-academic-services.vercel.app/';

export default function StudentPortal() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(redirectUrl);
    }
  }, []);

  return (
    <>
      <PageHero
        badge="Academic Services"
        title="Redirecting..."
        subtitle="You are being forwarded to the Academic Services portal."
        ctaText="Open Academic Services"
        ctaUrl={redirectUrl}
      />
      <section className="py-20 px-4">
        <div className="mx-auto max-w-md glass rounded-3xl p-8 text-center">
          <p className="text-sm text-theme-muted">
            If the redirect does not happen automatically, click the button above.
          </p>
        </div>
      </section>
    </>
  );
}
