import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16">
      <h1 className="font-[var(--font-heading)] text-4xl font-bold text-brand-900">Privacy Policy</h1>
      <p className="mt-6 leading-relaxed text-slate-700">
        A V P C & CO LLP is committed to handling personal information responsibly. Information submitted through this
        website is used only for responding to enquiries and maintaining professional communication.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Personal information is not sold or disclosed to third parties except where required by law or professional
        obligations. Reasonable administrative and technical measures are maintained to protect information shared with
        the firm.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        By using this website, you consent to the collection and use of data in accordance with this policy.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-700 underline">
        Back to Home
      </Link>
    </main>
  );
}
