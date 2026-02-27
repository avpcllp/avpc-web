'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { firm, offices, partners, services, specializedOfferings } from '@/content/firm';

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const heroText = document.querySelector<HTMLElement>('#hero-title');
      if (!heroText) return;
      heroText.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 py-8 md:px-12">
        <div className="font-[var(--font-heading)] text-[14px] font-bold uppercase tracking-tight md:text-[16px]">
          {firm.legalName}
          <br />
          Chartered Accountants
          <br />
          Pune / Kolhapur
        </div>
        <nav aria-label="Primary" className="text-right">
          <ul className="list-none space-y-2 font-[var(--font-heading)] text-[13px] uppercase tracking-wide md:text-[15px]">
            <li>
              <a href="#about" className="transition-opacity hover:opacity-40">
                The Practice
              </a>
            </li>
            <li>
              <a href="#services" className="transition-opacity hover:opacity-40">
                Services
              </a>
            </li>
            <li>
              <a href="#leadership" className="transition-opacity hover:opacity-40">
                Leadership
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-opacity hover:opacity-40">
                Inquiry
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="pt-24 md:pt-28">
        <section className="flex min-h-screen items-center px-6 md:px-12">
          <div className="grid w-full grid-cols-12 gap-5">
            <h1
              id="hero-title"
              className="col-span-12 mt-10 font-[var(--font-body)] text-[3.1rem] font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-[5rem] lg:col-span-8 lg:text-[8.6rem]"
            >
              Excellence
              <br />
              In Integrity.
            </h1>
            <p className="col-span-12 self-end border-t border-black pt-4 font-[var(--font-heading)] text-[12px] uppercase tracking-wide sm:text-[13px] lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              [INDIAN CHARTERED ACCOUNTANCY]
              <br />
              {firm.displayName}
              <br />
              Established {firm.established}
            </p>
          </div>
        </section>

        <section id="about" className="bg-[#f9f9f9] px-6 py-20 md:px-12 md:py-24">
          <div className="mb-10 border-b border-[#e5e5e5] pb-6">
            <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">Who We Are</p>
            <h2 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-6xl">
              About Us
            </h2>
            <p className="mt-4 max-w-5xl text-[15px] leading-relaxed text-[#272727]">{firm.about}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="reveal-on-scroll overflow-hidden border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]">
              <span className="mb-6 block font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#b3a27f]">
                Our Vision
              </span>
              <p className="text-[15px] leading-relaxed text-[#222]">{firm.vision}</p>
            </article>

            <article className="reveal-on-scroll overflow-hidden border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]">
              <span className="mb-6 block font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#b3a27f]">
                Our Mission
              </span>
              <div className="space-y-4">
                {firm.mission.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                    <p className="mt-1 text-[14px] text-[#333]">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="bg-[#f9f9f9] px-6 py-20 md:px-12 md:py-24">
          <div className="mb-8">
            <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">
              Our Specialized Service Offerings
            </p>
            <h2 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-6xl">
              Assurance / Taxation / Advisory
            </h2>
            <p className="mt-4 max-w-5xl text-[15px] leading-relaxed text-[#272727]">
              A V P C & CO LLP delivers high-value professional services across the domains of Assurance, Taxation, and Advisory, leveraging the partners&apos; extensive experience and commitment to technical excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {specializedOfferings.map((offering) => (
              <article
                key={offering.title}
                className="reveal-on-scroll relative overflow-hidden border border-[#efefef] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[1px_1px_0px_rgba(255,255,255,0.8),20px_30px_50px_rgba(0,0,0,0.07)]"
              >
                <span className="mb-8 block font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#b3a27f]">
                  {offering.number} / {offering.title}
                </span>
                <p className="text-[14px] leading-relaxed text-[#2b2b2b]">{offering.description}</p>
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-10 w-10 bg-[linear-gradient(225deg,#eee_50%,transparent_50%)]"
                />
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:px-12 md:py-24">
          <div className="mb-8 flex items-center justify-between border-b-2 border-black pb-3 font-[var(--font-heading)] text-[11px] uppercase tracking-[0.18em]">
            <span>What We Offer</span>
            <span>Service Matrix</span>
          </div>

          {services.map((group) => (
            <div
              key={group.title}
              className="reveal-on-scroll flex flex-col gap-4 border-b border-[#eee] py-6 transition-all duration-300 hover:bg-[#f2f2f2] md:flex-row md:items-start md:justify-between md:px-4"
            >
              <div className="max-w-md">
                <h3 className="text-2xl font-bold uppercase tracking-tight">{group.title}</h3>
                <p className="mt-2 text-sm text-[#444]">{group.description}</p>
              </div>
              <ul className="grid w-full gap-2 md:max-w-2xl md:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.title} className="font-[var(--font-heading)] text-[12px] uppercase tracking-wide text-[#222]">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="leadership" className="bg-[#f9f9f9] px-6 py-20 md:px-12 md:py-24">
          <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">Leadership / Our Team</p>
          <h2 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-6xl">
            Experienced Professionals
          </h2>
          <p className="mt-4 max-w-5xl text-[15px] leading-relaxed text-[#272727]">{firm.teamIntro}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="reveal-on-scroll border border-[#efefef] bg-white p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight">{partner.name}</h3>
                <p className="mt-1 font-[var(--font-heading)] text-xs uppercase tracking-[0.16em] text-[#666]">
                  {partner.title} / {partner.qualifications}
                </p>
                <p className="mt-5 text-[14px] leading-relaxed text-[#2b2b2b]">{partner.bio}</p>
                <p className="mt-4 border-t border-[#ececec] pt-4 text-[14px] leading-relaxed text-[#2b2b2b]">
                  <span className="font-bold uppercase">Expertise: </span>
                  {partner.expertise}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white px-6 py-20 md:px-12 md:py-24">
          <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#777]">Get In Touch</p>
          <h2 className="mt-2 font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-6xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-5xl text-[15px] leading-relaxed text-[#272727]">
            Ready to partner with a future-ready accounting firm? Reach out to us at either of our convenient locations.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office.name}
                className="reveal-on-scroll border border-[#efefef] bg-[#f9f9f9] p-8 shadow-[1px_1px_0px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.08)]"
              >
                <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.18em] text-[#b3a27f]">{office.name}</p>
                <p className="mt-4 font-[var(--font-body)] text-lg font-bold uppercase">{firm.legalName}</p>
                <p className="font-[var(--font-heading)] text-xs uppercase tracking-[0.16em]">Chartered Accountants</p>
                <address className="mt-4 not-italic text-[14px] leading-relaxed text-[#2b2b2b]">
                  {office.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
                <p className="mt-4 font-[var(--font-heading)] text-[12px] uppercase tracking-wide">
                  Mobile: {office.phones.join(' | ')}
                </p>
                {office.email ? (
                  <p className="mt-2 font-[var(--font-heading)] text-[12px] uppercase tracking-wide">
                    Email: <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="m-6 grid grid-cols-1 gap-8 bg-[#111] px-6 py-12 text-white shadow-[0px_50px_100px_rgba(0,0,0,0.2)] md:m-12 md:grid-cols-2 md:px-10 md:py-16">
        <div>
          <div className="font-[var(--font-body)] text-4xl font-black uppercase tracking-tight md:text-5xl">
            A V P C
            <br />
            & CO LLP
          </div>
          <p className="mt-8 font-[var(--font-heading)] text-[11px] uppercase tracking-[0.16em] opacity-60">
            Pune / Kolhapur
            <br />
            {new Date().getFullYear()} Regulated by ICAI
          </p>
        </div>

        <div className="flex flex-col justify-between border border-white/20 p-8 transition-colors hover:bg-white hover:text-black">
          <p className="text-2xl font-bold">Ready to solidify your financial infrastructure?</p>
          <div className="mt-8 space-y-2 font-[var(--font-heading)] text-xs uppercase tracking-[0.16em]">
            <a href="#contact" className="block">
              Initiate Consultation
            </a>
            <Link href="/disclaimer" className="block">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="block">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="block">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
