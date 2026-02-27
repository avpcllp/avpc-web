import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16">
      <h1 className="font-[var(--font-heading)] text-4xl font-bold text-brand-900">Disclaimer</h1>
      <p className="mt-6 leading-relaxed text-slate-700">
        This website is intended solely for general information regarding the professional services of A V P C & CO LLP,
        Chartered Accountants. The information provided does not constitute professional advice or solicitation.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Users are advised to obtain specific professional advice before acting on any information contained on this
        website. While reasonable care is taken to keep information current and accurate, no warranty is provided as to
        completeness or suitability for any specific purpose.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Professional engagements are undertaken only after formal acceptance under applicable laws, regulations and
        professional standards.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-700 underline">
        Back to Home
      </Link>
    </main>
  );
}
