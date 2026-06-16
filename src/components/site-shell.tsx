import Image from "next/image";
import Link from "next/link";
import { Mail, Play, Sparkles } from "lucide-react";
import { FirstVisitNewsletterModal, NewsletterSignup } from "@/components/newsletter-signup";
import { ScrollProgress, SectionRevealObserver } from "@/components/site-interactions";
import { profile } from "@/data/portfolio";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/designs", label: "Designs" },
  { href: "/#websites", label: "Websites" },
  { href: "/video", label: "Video" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function GitHubMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.75H3V9.75Zm6.25 0h3.83v1.47h.05c.53-.96 1.84-1.97 3.79-1.97 4.05 0 4.8 2.67 4.8 6.14v5.11h-4v-4.53c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.61h-4V9.75Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Go home">
          <span className="relative block size-11 overflow-hidden rounded-full border border-[#00f0ff]/50 bg-[#9dc5b5] shadow-[0_0_22px_rgba(0,240,255,0.22)]">
            <Image
              src={profile.logo}
              alt={`${profile.name} logo`}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-tech hidden text-sm font-semibold uppercase text-[#e5e2e1] sm:inline">
            {profile.name}
          </span>
        </Link>
        <nav className="flex max-w-[68vw] items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-tech shrink-0 px-2 py-2 text-[11px] font-semibold uppercase text-[#b9cacb] transition hover:text-[#00f0ff] sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const socialLinks = [
    { href: profile.socials.github, label: "GitHub", icon: GitHubMark },
    { href: profile.socials.linkedin, label: "LinkedIn", icon: LinkedInMark },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-tech text-sm uppercase text-[#00f0ff]">Graphic design / video editing</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              Need visuals that look considered and move fast?
            </h2>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="button-primary"
          >
            <Mail size={18} />
            Start a project
          </a>
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-tech text-xs uppercase text-[#00f0ff]">Newsletter</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-[#e5e2e1]">Follow portfolio news.</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-[#b9cacb]">
              Subscribe for case study drops, posted videos, design archive updates, and website interface previews.
            </p>
          </div>
          <NewsletterSignup source="footer" />
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-tech text-xs uppercase text-[#b9cacb]">
            © 2026 {profile.name}. Portfolio signal online.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.label}`}
                  title={item.label}
                  className="grid size-11 place-items-center border border-[#849495]/40 text-[#e5e2e1] transition hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_22px_rgba(0,240,255,0.35)]"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1]">
      <ScrollProgress />
      <SectionRevealObserver />
      <Header />
      <main>{children}</main>
      <Footer />
      <FirstVisitNewsletterModal />
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-tech inline-flex items-center gap-2 text-xs font-bold uppercase text-[#00f0ff]">
      <Sparkles size={14} />
      {children}
    </p>
  );
}

export function VideoFrame({ url, title }: { url?: string; title: string }) {
  if (!url) {
    return (
      <div className="scanner-panel relative grid aspect-video place-items-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(0,240,255,0.12),transparent)]" />
        <div className="relative text-center">
          <span className="mx-auto mb-5 grid size-16 place-items-center rounded-full border border-[#ff525c] text-[#ff525c] shadow-[0_0_28px_rgba(255,82,92,0.32)]">
            <Play size={30} fill="currentColor" />
          </span>
          <p className="font-tech text-sm uppercase text-white/60">Video placeholder</p>
          <p className="font-display mt-2 text-2xl font-bold">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className="aspect-video w-full border-0"
      src={url}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
