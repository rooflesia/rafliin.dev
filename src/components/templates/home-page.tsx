'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, Expand, X, Menu, Linkedin, Instagram, Mail } from 'lucide-react';

const capabilities = [
  {
    title: 'Frontend',
    description:
      'High-performance interfaces with React, Next.js, Vue, Solid.js, TypeScript, and Tailwind.',
  },
  {
    title: 'Backend & APIs',
    description:
      'Node.js, Go, and Laravel services with gateway design and secure authentication.',
  },
  {
    title: 'Architecture',
    description:
      'System topology for B2B SaaS and multi-client platforms with microservices to delivery.',
  },
  {
    title: 'DevOps & Delivery',
    description:
      'Docker, Nginx, VPS, DNS/SSL lifecycles, CI/CD, and team leadership across client work.',
  },
];

const linkClassName =
  'cursor-pointer font-medium text-ink underline decoration-ink/20 underline-offset-2 transition-colors hover:decoration-ink';

const experiences = [
  {
    icon: '/logo/satu.svg',
    role: 'Head of Creative IT Development',
    company: 'SATU Digital Creative',
    companyUrl: 'https://satu.duluin.com',
    date: 'October 2025 – Present',
    description: (
      <>
        Lead Creative IT for the agency. Owning technical direction so every client delivery hits
        excellence in SEO architecture, creative design systems, and on-time SLA. Direct the
        engineering team across logistics, security, manufacturing, automotive, healthcare, and
        corporate work; ship 20+ bespoke web platforms including Landing Page, Portal, and CMS
        dashboards (
        <a
          href="https://bniventures.co.id"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          BNI Ventures
        </a>
        ,{' '}
        <a
          href="https://elangsecuritynusantara.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Elang Security Nusantara
        </a>
        ,{' '}
        <a
          href="https://mitradaksa.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          MDA
        </a>
        ,{' '}
        <a
          href="https://coway-idn.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Coway IDN
        </a>
        , and{' '}
        <a
          href="https://satu.duluin.com/portofolio"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          more
        </a>
        ) with performance-first Next.js/Laravel standards, while keeping infrastructure and launch
        timelines always on schedule.
      </>
    ),
  },
  {
    icon: '/logo/duluin.png',
    role: 'Head of IT – UI/UX, Web Dev & New Initiative',
    company: 'Duluin Group',
    companyUrl: 'https://duluin.com',
    date: 'April 2025 – Present',
    description: (
      <>
        Lead the UI/UX, Web Development, and New Initiative division at{' '}
        <a
          href="https://duluin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Duluin Group
        </a>
        . Driving technical roadmap and architectural governance across product ventures. Architected{' '}
        <a
          href="https://workin.duluin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Workin&apos; by Duluin
        </a>{' '}
        (multi-tenant HRIS with payroll, claims, attendance, and multi-tier approvals);{' '}
        <a
          href="https://markin.duluin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Markin&apos; by Duluin
        </a>{' '}
        (digital e-sign platform multi-party signature workflows, certificate verification, and
        external signing APIs); and{' '}
        <a
          href="https://credo.duluin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Credo by Duluin
        </a>{' '}
        (credit risk analyst application for underwriting and risk assessment). Optimized
        microservices routing via Gateway and enforced Docker/Nginx CI/CD aligned with ISO 27001
        security standards.
      </>
    ),
  },
  {
    icon: '/logo/telkom.png',
    role: 'Frontend Web & Mobile Developer',
    company: 'PT Telkom Indonesia Tbk',
    companyUrl: 'https://partner.telkom.co.id/',
    date: 'August 2023 – August 2024',
    description:
      'Engineered and maintained mission-critical frontend modules for Telkom’s Partnership Support Application using React.js and modern state management. Overhauled dashboard workflows and data-grid components to reduce render times, and built reusable UI libraries with React and Bootstrap for consistency across micro-frontends.',
  },
  {
    icon: '/logo/anabatic.png',
    role: 'Fullstack Developer (Freelance)',
    company: 'PT Anabatic Technologies Tbk',
    companyUrl: 'https://www.anabatic.com/en/beranda/',
    date: 'February 2023 – June 2023',
    description:
      'Delivered fullstack web application features end-to-end as a freelance engineer—covering frontend interfaces, backend APIs, and integration work to support client product delivery within project timelines.',
  },
  {
    icon: '/logo/quantus.png',
    role: 'Frontend Web & Mobile Developer',
    company: 'PT. Quantus Telematika Indonesia',
    companyUrl: 'http://qti.co.id/',
    date: 'August 2021 – January 2023',
    description:
      'Developed and delivered customized web applications and interactive analytics dashboards for government agencies and enterprise clients. Built high-performance reactive UIs with React, Next.js, Solid.js, and Kotlin, with active involvement in requirements gathering, rapid prototyping, and bug triage across concurrent projects.',
  },
];

const INITIAL_PORTFOLIO_COUNT = 4;

const portfolioItems = [
  {
    image: '/images/workin_asset.png',
    title: "Workin' by Duluin",
    description:
      'Enterprise multi-tenant HRIS SaaS with automated payroll, RBAC, claim approvals, and attendance logging.',
    category: 'SaaS / HRIS',
    url: 'https://workin.duluin.com',
  },
  {
    image: '/images/markin_asset.png',
    title: "Markin' by Duluin",
    description:
      'Digital document signing platform with multi-party workflows, certificate verification, and e-sign API integrations.',
    category: 'SaaS / Fintech',
    url: 'https://markin.duluin.com',
  },
  {
    image: '/images/credo_asset.png',
    title: 'Credo by Duluin',
    description:
      'Credit risk analyst application for underwriting and risk assessment across lending workflows.',
    category: 'SaaS / Fintech',
    url: 'https://credo.duluin.com',
  },
  {
    image: '/images/satu_asset.jpeg',
    title: 'SATU Client Platform',
    description:
      'End-to-end delivery of 20+ corporate landing pages, portals, and CMS dashboards across industries.',
    category: 'Agency Delivery',
    url: 'https://satu.duluin.com',
  },
  {
    image: '/images/ikimodal-salescore.png',
    title: 'IKI Modal / Salescore',
    description:
      'Escrow monitoring and Salescore platforms with real-time audit tracking and banking API integrations.',
    category: 'Fintech',
  },
  {
    image: '/images/rudolf-1.png',
    title: 'Rudolf ID',
    description: 'KPI internal dashboard and reporting system for Rudolf Group.',
    category: 'Dashboard',
  },
  {
    image: '/images/georginapparel-2.png',
    title: 'Georgina Apparel',
    description: 'E-commerce platform design for a fashion brand.',
    category: 'E-commerce',
  },
  {
    image: '/images/envisions-1.png',
    title: 'Envisions',
    description: 'Landing page design for a company profile.',
    category: 'Landing Page',
  },
];

const technologies = [
  { name: 'React', logo: '/logo/react-white.png' },
  { name: 'Next.js', logo: '/logo/nextjs-white.png' },
  { name: 'Vue.js', logo: '/logo/vuejs-white.png' },
  { name: 'Laravel', logo: '/logo/laravel-white.png' },
  { name: 'Node.js', logo: '/logo/nodejs-white.svg' },
  { name: 'Docker', logo: '/logo/docker-white.png' },
  { name: 'MySQL', logo: '/logo/mysql-white.png' },
  { name: 'Go Lang', logo: '/logo/golang-white.png' },
  { name: 'Tailwind CSS', logo: '/logo/tailwind-white.png' },
  { name: 'PostgreSQL', logo: '/logo/postgresql-white.webp' },
];

export default function HomePage() {
  const [showAllWork, setShowAllWork] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<(typeof portfolioItems)[number] | null>(null);

  const navLinks = [
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
  ];

  const mobileNavLinks = [{ href: '#home', label: 'Home' }, ...navLinks];

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        void registration.unregister();
      });
    });
  }, []);

  useEffect(() => {
    if (!lightboxItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxItem(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxItem]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    window.open('https://wa.me/6285174464640', '_blank');
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const visiblePortfolioItems = showAllWork
    ? portfolioItems
    : portfolioItems.slice(0, INITIAL_PORTFOLIO_COUNT);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-md">
        <nav className="relative" aria-label="Primary">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="font-display text-lg font-semibold tracking-tight">
              rafliin.dev
            </a>

            <div className="hidden items-center gap-8 text-sm md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-mute hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={handleContactClick}
                className="link-underline font-medium text-ink"
              >
                Contact
              </button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-nav"
              className="border-t border-line bg-canvas md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="py-3 text-base text-ink transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="mt-2 border border-ink bg-ink py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-80"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
      <section id="home" className="studio-grain relative scroll-mt-24 overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-6xl grid-cols-1 items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-16 lg:col-span-6 lg:py-24">
            <div className="animate-fade-up">
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Muhammad
                <br />
                Rafli Naufal
              </h1>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-mute">
                Head of IT · Duluin Group & SATU Digital Creative
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-mute">
                Leading engineering teams and delivering enterprise B2B SaaS and multi-client web
                ecosystems from architecture to launch.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-80"
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href="/CV_Muhammad_Rafli_Naufal_Updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm font-medium text-ink"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-end px-6 pb-24 pt-24 lg:col-span-5 lg:col-start-8 lg:flex">
            <div className="animate-fade-up-delay relative aspect-[3/4] w-full max-w-[360px] overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Muhammad Rafli Naufal"
                fill
                priority
                className="object-cover object-top"
                sizes="360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-24 border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.16em] text-mute">
            What I lead
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-lg font-semibold text-ink">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="work" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="-mx-6 mb-10 border-b border-line bg-canvas px-6 py-4 sm:mb-14 lg:sticky lg:top-16 lg:z-30 lg:bg-canvas/95 lg:backdrop-blur-md">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-mute sm:mb-3">
                  Selected works
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  Case studies & delivery
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowAllWork((prev) => !prev)}
                className="link-underline shrink-0 text-sm font-medium text-ink"
              >
                {showAllWork ? 'Show Less' : 'View All Work'}
              </button>
            </div>
          </div>

          <div className="relative flex flex-col gap-10 lg:gap-0">
            {visiblePortfolioItems.map((item, index) => (
              <article
                key={item.title}
                style={{ zIndex: index + 1 }}
                className="group lg:sticky lg:top-44 lg:mb-[12vh] lg:last:mb-0"
              >
                <div className="grid grid-cols-1 items-center overflow-hidden border border-line bg-canvas lg:grid-cols-12">
                  <button
                    type="button"
                    onClick={() => setLightboxItem(item)}
                    className="group/image relative aspect-video w-full cursor-zoom-in bg-line/40 text-left lg:col-span-7"
                    aria-label={`View ${item.title} fullscreen`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover/image:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 672px"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover/image:bg-ink/35" />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-canvas/40 bg-ink/70 text-canvas backdrop-blur-sm">
                        <Expand className="h-5 w-5" />
                      </span>
                    </span>
                  </button>
                  <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:col-span-5 lg:min-h-0 lg:px-10 lg:py-10">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
                      {String(index + 1).padStart(2, '0')} · {item.category}
                    </span>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-70 lg:text-3xl"
                      >
                        {item.title}
                        <ArrowUpRight className="h-5 w-5 shrink-0" />
                      </a>
                    ) : (
                      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                        {item.title}
                      </h3>
                    )}
                    <p className="mt-4 text-base leading-relaxed text-mute">{item.description}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink"
                      >
                        Visit site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="studio-grain scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-mute">About</p>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              Technical leadership for creative digital delivery.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mute">
              I&apos;m a Technical Lead and Fullstack Architect based in Bandung, Indonesia, with
              5+ years leading cross-functional teams and shipping enterprise-grade B2B SaaS and
              multi-client web ecosystems. Currently Lead IT at Duluin Group and Head of Creative IT
              Development at SATU Digital Creative, driving agency delivery with strong SEO, creative
              design, and on-time SLA across client work.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8 text-sm text-mute">
            <span>
              <strong className="font-display text-2xl font-semibold text-ink">5+</strong>
              <span className="ml-2">years</span>
            </span>
            <span>
              <strong className="font-display text-2xl font-semibold text-ink">20+</strong>
              <span className="ml-2">projects</span>
            </span>
            <span>
              <strong className="font-display text-2xl font-semibold text-ink">5+</strong>
              <span className="ml-2">companies</span>
            </span>
            <span>
              <strong className="font-display text-2xl font-semibold text-ink">12+</strong>
              <span className="ml-2">technologies</span>
            </span>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-ink/50">
              Stack
            </p>
            <div className="overflow-hidden bg-ink py-5">
              <div className="animate-scroll flex items-center gap-8">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-mute">
            Experience
          </p>
          <h2 className="mb-14 font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
            Where I&apos;ve led & built
          </h2>

          <ul className="flex flex-col">
            {experiences.map((exp) => (
              <li
                key={`${exp.company}-${exp.role}`}
                className="group grid grid-cols-1 gap-6 border-t border-line py-10 last:pb-0 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-start gap-4 md:col-span-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-line/60">
                    <Image
                      src={exp.icon}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ink underline decoration-ink/20 underline-offset-2 transition-colors hover:decoration-ink"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="font-medium text-ink">{exp.company}</p>
                    )}
                    <p className="mt-1 text-sm text-mute">{exp.date}</p>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-display text-xl font-semibold text-ink transition-opacity group-hover:opacity-70">
                    {exp.role}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                    {exp.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close CTA */}
      <section className="studio-grain border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Let&apos;s build the next one.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-mute">
            Open to conversations about product builds, agency delivery, or technical leadership.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="mt-10 inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-80"
          >
            Say Hi
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer id="footer" className="bg-ink text-canvas">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold">Muhammad Rafli Naufal</p>
            <p className="mt-2 text-sm text-canvas/60">Fullstack Developer</p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.linkedin.com/in/muhammad-rafli-naufal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-canvas/60 transition-colors hover:text-canvas"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rafliin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-canvas/60 transition-colors hover:text-canvas"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:muhamadraflinaufal@gmail.com"
                className="text-canvas/60 transition-colors hover:text-canvas"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-sm text-canvas/60">
            <p>muhamadraflinaufal@gmail.com</p>
            <p className="mt-1">Bandung, Indonesia</p>
          </div>
        </div>
        <div className="border-t border-canvas/10">
          <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-canvas/40">
            © {new Date().getFullYear()} Muhammad Rafli Naufal. All rights reserved.
          </p>
        </div>
      </footer>

      {!mobileMenuOpen && !lightboxItem && (
        <button
          type="button"
          onClick={scrollToFooter}
          className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas shadow-lg transition-opacity hover:opacity-80 md:hidden"
          aria-label="Scroll to footer"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      )}

      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/75 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightboxItem(null)}
        >
          <div className="pointer-events-none absolute inset-0 bg-ink/40" aria-hidden />
          <button
            type="button"
            onClick={() => setLightboxItem(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/50 text-canvas transition-opacity hover:opacity-70 sm:right-6 sm:top-6"
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative z-10 h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightboxItem.image}
              alt={lightboxItem.title}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="100vw"
              priority
            />
          </div>
          <p className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-sm text-canvas/80">
            {lightboxItem.title}
          </p>
        </div>
      )}
    </div>
  );
}
