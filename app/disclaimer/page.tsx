import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)] md:p-12">
        <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">Legal</p>
        <h1 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-5xl">Disclaimer</h1>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#2b2b2b]">
          <p>
            This website is intended solely to provide general information about A V P C & CO LLP, Chartered
            Accountants, and the professional services offered by the firm.
          </p>
          <p>
            The information presented on this website does not constitute legal, tax, accounting, investment or other
            professional advice, and should not be relied upon as a substitute for specific professional consultation.
          </p>
          <p>
            Accessing this website or communicating through this website does not create a client relationship with the
            firm. Any professional engagement is subject to independent acceptance, conflict checks and execution of a
            formal engagement arrangement.
          </p>
          <p>
            While reasonable care is taken in preparing website content, no representation or warranty is made regarding
            accuracy, completeness or suitability for any specific purpose. Users should obtain professional advice
            before acting on any information.
          </p>
          <p>
            This website is designed in line with applicable professional communication principles for Chartered
            Accountants and is not intended as solicitation, advertisement of guaranteed outcomes, or comparative claims.
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
