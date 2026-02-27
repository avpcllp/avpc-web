import Link from 'next/link';
import { offices } from '@/content/firm';

export default function InitiateConsultationPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">
          Initiate Consultation
        </p>
        <h1 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-6xl">
          Consultation Request
        </h1>
        <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-[#272727]">
          Share your enquiry with A V P C & CO LLP. Our team will review your requirement and respond through the
          contact details provided. This form is intended for professional enquiry intake only.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]">
            <h2 className="font-[var(--font-body)] text-2xl font-black uppercase tracking-tight">Send Enquiry</h2>
            <p className="mt-2 text-sm text-[#444]">Fields marked * are required.</p>

            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <Field id="name" label="Name" required />
              <Field id="email" label="Email" type="email" required />
              <Field id="phone" label="Phone" required />
              <Field id="organisation" label="Organisation" />
              <Field id="city" label="City" />
              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-1 block font-[var(--font-heading)] text-[12px] uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#222]"
                  placeholder="Please provide a brief description of your requirement."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="inline-block border border-black bg-black px-6 py-3 font-[var(--font-heading)] text-xs uppercase tracking-[0.14em] text-white"
                >
                  Submit Enquiry
                </button>
                <p className="mt-2 text-xs text-[#555]">
                  Form submission handler can be connected to email or CRM in the next step.
                </p>
              </div>
            </form>
          </section>

          <aside className="space-y-4">
            {offices.map((office) => (
              <article
                key={office.name}
                className="border border-[#efefef] bg-white p-6 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]"
              >
                <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#b3a27f]">{office.name}</p>
                <address className="mt-3 not-italic text-[14px] leading-relaxed text-[#2b2b2b]">
                  {office.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
                <p className="mt-3 font-[var(--font-heading)] text-[12px] uppercase tracking-wide">
                  Mobile: {office.phones.join(' | ')}
                </p>
                {office.email ? (
                  <p className="mt-1 font-[var(--font-heading)] text-[12px] uppercase tracking-wide">
                    Email: <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                ) : null}
              </article>
            ))}

            <div className="border border-[#efefef] bg-white p-6 text-sm text-[#444] shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]">
              Professional engagements are accepted only after conflict checks, scope definition and formal engagement
              acceptance as per applicable professional standards.
            </div>
          </aside>
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

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
};

function Field({ id, label, required, type = 'text' }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-[var(--font-heading)] text-[12px] uppercase tracking-wide">
        {label} {required ? '*' : ''}
      </label>
      <input id={id} type={type} className="w-full border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#222]" />
    </div>
  );
}
