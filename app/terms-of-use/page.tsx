import Link from 'next/link';

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)] md:p-12">
        <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">Legal</p>
        <h1 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-5xl">Terms of Use</h1>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#2b2b2b]">
          <p>
            By accessing this website, users agree to these terms. If users do not agree, they should discontinue use of
            the website.
          </p>
          <p>
            Website content is provided for general informational purposes only. It must not be interpreted as legal,
            tax, accounting or professional opinion, nor as an offer of services with guaranteed outcomes.
          </p>
          <p>
            Users may view and download content for personal reference only. Republishing, reproduction, distribution,
            modification or commercial use of content without prior written permission is prohibited.
          </p>
          <p>
            External links, if any, are provided for convenience. The firm does not control and is not responsible for
            third-party content, security or privacy practices.
          </p>
          <p>
            The firm reserves the right to update website content and these terms at any time without prior notice.
            Continued use after updates constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className="mt-10 font-[var(--font-heading)] text-xs uppercase tracking-[0.16em]">
          <Link href="/" className="underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
