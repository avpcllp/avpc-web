'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { firm, offices, partners, services, specializedOfferings } from '@/content/firm';
import { BrandLogo } from '@/components/brand-logo';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 20);
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

      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 py-6 transition-all duration-300 md:px-12 ${scrolled ? 'bg-[rgba(252,248,238,0.92)] py-4 shadow-[0_10px_30px_rgba(60,30,10,0.06)] backdrop-blur-sm' : 'bg-transparent py-8'
          }`}
      >
        <div
          className={`font-[var(--font-body)] text-[14px] font-bold uppercase tracking-[0.18em] text-[#a34e24] transition-all duration-500 md:text-[16px] ${scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
        >
          {firm.legalName}
          <br />
          Chartered Accountants
        </div>
        <nav aria-label="Primary" className="text-right">
          <ul className="list-none space-y-2 font-[var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.16em] text-[#a34e24] md:text-[15px]">
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
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="pt-24 md:pt-28">
        <section className="theme-section flex min-h-[90vh] items-center px-6 md:px-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center pt-8 md:pt-12">
            <div className="reveal-on-scroll">
              <BrandLogo />
            </div>

            <div className="theme-rule mt-16 grid w-full grid-cols-12 gap-5 border-t pt-8">
              <div className="col-span-12 lg:col-span-8">
                <p className="theme-body max-w-2xl font-[var(--font-body)] text-[1.05rem] leading-relaxed tracking-[0.02em] md:text-[1.35rem]">
                  Future-ready chartered accountancy for assurance, taxation, regulatory compliance, and forensic advisory.
                </p>
              </div>
              <p className="reveal-on-scroll anim-text col-span-12 self-end font-[var(--font-body)] text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-[#a34e24] sm:text-[1rem] lg:col-span-4 lg:border-l lg:border-[#a34e24]/20 lg:pl-5">
                Established {firm.established}
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="theme-section px-6 py-20 md:px-12 md:py-24">
          <div className="theme-rule mb-10 border-b pb-6 text-center">
            <p className="theme-label reveal-on-scroll anim-text">Who We Are</p>
            <h2 className="theme-heading reveal-on-scroll anim-text mt-2 text-4xl md:text-6xl">
              About Us
            </h2>
            <p className="theme-label reveal-on-scroll anim-text mt-5 text-[0.78rem]">
              {firm.foundationTitle}
            </p>
            <p className="theme-body reveal-on-scroll anim-text mx-auto mt-4 max-w-4xl text-[15px] leading-relaxed">
              {firm.about}
            </p>
          </div>

          <div className="mb-8 text-center">
            <p className="theme-label reveal-on-scroll anim-text">Our Purpose</p>
            <h3 className="theme-heading reveal-on-scroll anim-text mt-2 text-3xl md:text-5xl">
              Vision & Mission
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="theme-panel reveal-on-scroll anim-card overflow-hidden p-8">
              <span className="theme-label mb-6 block text-[0.78rem]">
                Our Vision
              </span>
              <p className="theme-body text-[15px] leading-relaxed">{firm.vision}</p>
            </article>

            <article
              className="theme-panel reveal-on-scroll anim-card overflow-hidden p-8"
              style={{ transitionDelay: '120ms' }}
            >
              <span className="theme-label mb-6 block text-[0.78rem]">
                Our Mission
              </span>
              <div className="space-y-4">
                {firm.mission.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-[#7d4423]">{item.title}</h3>
                    <p className="theme-body mt-1 text-[14px]">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="theme-section px-6 py-20 md:px-12 md:py-24">
          <div className="mb-8">
            <p className="theme-label reveal-on-scroll anim-text">
              Our Specialized Service Offerings
            </p>
            <p className="theme-body reveal-on-scroll anim-text mt-4 max-w-[90rem] text-[0.9rem] leading-relaxed md:text-[0.98rem] xl:whitespace-nowrap">
              A V P C & CO LLP delivers high-value professional services across the domains of Assurance, Taxation, and Advisory, leveraging the partners extensive experience and commitment to technical excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {specializedOfferings.map((offering, index) => (
              <article
                key={offering.title}
                className="theme-panel reveal-on-scroll anim-card relative overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(75,41,20,0.12)]"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="theme-label mb-8 block text-[0.78rem]">
                  {offering.number} / {offering.title}
                </span>
                <p className="theme-body text-[14px] leading-relaxed">{offering.description}</p>
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-10 w-10 bg-[linear-gradient(225deg,rgba(163,78,36,0.12)_50%,transparent_50%)]"
                />
              </article>
            ))}
          </div>
        </section>

        <section className="theme-section px-6 py-20 md:px-12 md:py-24">
          <div className="theme-rule reveal-on-scroll anim-text mb-8 flex items-center justify-between border-b pb-3 font-[var(--font-body)] text-[0.95rem] font-bold uppercase tracking-[0.18em] text-[#a34e24] md:text-[1.15rem]">
            <span>What We Offer</span>
            <span>Services</span>
          </div>

          <p className="theme-body reveal-on-scroll anim-text mb-8 max-w-[90rem] text-[0.9rem] leading-relaxed md:text-[0.98rem] xl:whitespace-nowrap">
            Comprehensive professional services designed to meet the evolving needs of modern businesses across assurance, taxation, advisory, and compliance domains.
          </p>

          {services.map((group, index) => (
            <div
              key={group.title}
              className="theme-rule reveal-on-scroll anim-card flex flex-col gap-4 border-b py-6 transition-all duration-300 hover:bg-[rgba(255,255,255,0.35)] md:flex-row md:items-start md:justify-between md:px-4"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="max-w-md">
                <h3 className="theme-heading text-2xl">{group.title}</h3>
                {group.description ? <p className="theme-body mt-2 text-sm">{group.description}</p> : null}
              </div>
              <ul className="grid w-full gap-2 md:max-w-2xl md:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.title} className="font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6f3c20]">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="leadership" className="theme-section px-6 py-20 md:px-12 md:py-24">
          <p className="theme-label reveal-on-scroll anim-text">Leadership</p>
          <h2 className="theme-heading reveal-on-scroll anim-text mt-2 text-4xl md:text-6xl">
            Our Team
          </h2>
          <p className="theme-body reveal-on-scroll anim-text mt-4 max-w-[90rem] text-[0.9rem] leading-relaxed md:text-[0.98rem] xl:whitespace-nowrap">
            {firm.teamIntro}
          </p>

          <div className="reveal-on-scroll mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner, index) => (
              <article
                key={partner.name}
                className="theme-panel reveal-on-scroll anim-card overflow-hidden p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 overflow-hidden rounded-xl bg-[rgba(163,78,36,0.06)]">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="aspect-[4/5] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="theme-heading text-2xl">{partner.name}</h3>
                <p className="mt-1 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.14em] text-[#8e5a39]">
                  {partner.title} / {partner.qualifications}
                </p>
                <p className="theme-body mt-5 text-[14px] leading-relaxed">{partner.bio}</p>
                <p className="theme-body theme-rule mt-4 border-t pt-4 text-[14px] leading-relaxed">
                  <span className="font-bold uppercase text-[#6f3c20]">Expertise: </span>
                  {partner.expertise}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="theme-section px-6 py-20 md:px-12 md:py-24">
          <p className="theme-label reveal-on-scroll anim-text">Get In Touch</p>
          <h2 className="theme-heading reveal-on-scroll anim-text mt-2 text-4xl md:text-6xl">
            Contact Us
          </h2>
          <p className="theme-body reveal-on-scroll anim-text mt-4 max-w-5xl text-[15px] leading-relaxed">
            Ready to partner with a future-ready accounting firm? Reach out to us at either of our convenient locations.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {offices.map((office, index) => (
              <article
                key={office.name}
                className="theme-panel reveal-on-scroll anim-card p-8"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="theme-label text-[0.78rem]">{office.name}</p>
                <p className="mt-4 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[#8e5a39]">Legal Name</p>
                <p className="mt-4 font-[var(--font-body)] text-lg font-bold uppercase text-[#a34e24]">{firm.legalName}</p>
                <p className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[#8e5a39]">Chartered Accountants</p>
                <address className="theme-body mt-4 not-italic text-[14px] leading-relaxed">
                  {office.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
                <p className="mt-4 font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6f3c20]">
                  Mobile: {office.phones.join(' | ')}
                </p>
                {office.email ? (
                  <p className="mt-2 font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6f3c20]">
                    Email: <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="m-6 grid grid-cols-1 gap-8 border border-[#a34e24]/15 bg-[linear-gradient(180deg,#8d431f_0%,#6f3419_100%)] px-6 py-12 text-white shadow-[0px_30px_70px_rgba(75,41,20,0.22)] md:m-12 md:grid-cols-2 md:px-10 md:py-16">
        <div>
          <div className="font-[var(--font-body)] text-4xl font-black uppercase tracking-[0.06em] text-[#fdfcf0] md:text-5xl">
            AVPC

            & CO LLP
          </div>
          <p className="mt-8 font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fdfcf0]/70">
            Pune | Kolhapur
            <br />
            {new Date().getFullYear()} Regulated by ICAI
          </p>
        </div>

        <div className="flex flex-col justify-between border border-white/20 bg-[rgba(255,255,255,0.05)] p-8 transition-colors hover:bg-[#fdfcf0] hover:text-[#2b1a10]">
          <p className="text-2xl font-bold">Ready to solidify your financial infrastructure?</p>
          <div className="mt-8 space-y-2 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em]">
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
