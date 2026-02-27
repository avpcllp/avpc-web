import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)] md:p-12">
        <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">Legal</p>
        <h1 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-5xl">Privacy Policy</h1>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#2b2b2b]">
          <p>
            A V P C & CO LLP values data privacy and confidentiality. This policy explains how information shared
            through this website is handled.
          </p>
          <p>
            Information voluntarily submitted through enquiry forms, email links or direct communication may include name,
            contact details, organisation information and message content. Such information is used only for responding
            to enquiries, evaluating service requests and maintaining professional communication.
          </p>
          <p>
            Personal data is not sold or rented. Information may be disclosed only where required by law, regulatory
            process, professional obligations, or with user consent.
          </p>
          <p>
            The firm applies reasonable administrative and technical safeguards to protect data from unauthorized access,
            misuse or disclosure. However, internet transmission cannot be guaranteed to be fully secure.
          </p>
          <p>
            By using this website and submitting information, users acknowledge and consent to processing in accordance
            with this policy.
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
