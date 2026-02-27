import Link from 'next/link';

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16">
      <h1 className="font-[var(--font-heading)] text-4xl font-bold text-brand-900">Terms of Use</h1>
      <p className="mt-6 leading-relaxed text-slate-700">
        Access to this website is subject to these terms. Content on this website is provided for informational purposes
        and must not be interpreted as an offer of services, legal opinion or tax opinion.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Users may view and download materials for personal reference only. Reproduction, distribution or modification of
        website content without prior written consent is not permitted.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The firm reserves the right to update website content and terms without prior notice.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-700 underline">
        Back to Home
      </Link>
    </main>
  );
}
