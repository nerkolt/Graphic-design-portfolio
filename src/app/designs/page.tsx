import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  ExternalLink,
  Gem,
  Grid3X3,
  Heart,
  LinkIcon,
  Search,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import { DesignGalleryCarousel } from "@/components/design-gallery-carousel";
import { PageShell } from "@/components/site-shell";
import { designShowcase, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Design Archive | Nour Ltaief",
  description: "A full board of rollups, logos, and UI/UX designs shown in their natural aspect ratios.",
};

const aspectClasses = {
  portrait: "md:row-span-2",
  square: "",
  landscape: "md:col-span-2",
};

const navFilters = [
  { label: "Rollups", icon: Box, href: "#event-rollup-system" },
  { label: "Collateral", icon: Box, href: "#igs-business-card" },
  { label: "Logos", icon: Gem, href: "#logo-direction-study" },
  { label: "UI/UX", icon: Grid3X3, href: "#mobile-app-interface" },
];

const railItems = [
  { label: "Favorites", icon: Heart },
  { label: "Board", icon: Grid3X3 },
  { label: "Identity", icon: Gem },
  { label: "Settings", icon: Settings },
];

const pageLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#websites", label: "Websites" },
  { href: "/video", label: "Video" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function DesignsPage() {
  const archiveCount = designShowcase.length;
  const designLanes = new Set(designShowcase.map((item) => item.type)).size;
  const rollupCount = designShowcase.filter((item) => item.type === "Rollups").length;

  return (
    <PageShell hideHeader hideFooter>
      <section className="design-dashboard-page section-reveal min-h-screen py-4 sm:py-6">
        <div className="mx-auto max-w-[1480px] px-3 sm:px-5">
          <div className="design-dashboard-shell min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] border border-[#00f0ff]/25 bg-[#050505] p-4 shadow-[0_40px_90px_rgba(0,0,0,0.5)] sm:min-h-[calc(100vh-3rem)] sm:rounded-[2.5rem] sm:p-7">
            <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/#designs"
                  aria-label="Back home"
                  title="Back home"
                  className="grid size-12 place-items-center rounded-full border border-[#00f0ff]/45 bg-[#0a0a0a] text-[#00f0ff] transition hover:border-[#ff525c] hover:text-[#ff525c] hover:shadow-[0_0_24px_rgba(255,82,92,0.22)]"
                >
                  <ArrowLeft size={19} />
                </Link>
                <span className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-white/15 bg-[#9dc5b5]">
                  <Image src="/nour-ltaief-logo.png" alt="Nour Ltaief logo" fill sizes="48px" className="object-cover" />
                </span>
                <div className="mr-2 hidden h-8 w-px bg-[#849495]/25 lg:block" />
                {navFilters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <a
                      key={filter.label}
                      href={filter.href}
                      className="font-tech inline-flex items-center gap-2 rounded-full border border-[#849495]/25 bg-[#181818] px-4 py-3 text-xs font-bold uppercase text-[#e5e2e1] transition hover:border-[#00f0ff]/70 hover:text-[#00f0ff]"
                    >
                      <Icon size={15} />
                      {filter.label}
                    </a>
                  );
                })}
                <span className="grid size-12 place-items-center rounded-full border border-[#849495]/25 bg-[#181818] text-[#e5e2e1]">
                  <Search size={18} />
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <nav className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-[#849495]/20 bg-[#181818]/80 p-1">
                  {pageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-tech shrink-0 rounded-full px-3 py-2 text-[10px] font-bold uppercase text-[#b9cacb] transition hover:bg-[#00f0ff]/10 hover:text-[#00f0ff]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="text-right">
                  <p className="font-tech text-xs font-bold uppercase text-[#e5e2e1]">Nour Ltaief</p>
                  <p className="font-tech text-[10px] uppercase text-[#b9cacb]">@design-board</p>
                </div>
                <span className="grid size-11 place-items-center rounded-full border border-[#ff525c]/55 bg-[#181818] font-tech text-xs font-black text-[#ff525c]">
                  NL
                </span>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[56px_1fr]">
              <aside className="hidden flex-col items-center gap-4 lg:flex">
                {railItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      title={item.label}
                      className="grid size-11 place-items-center rounded-full border border-[#849495]/25 bg-[#181818] text-[#e5e2e1] transition hover:border-[#00f0ff]/70 hover:text-[#00f0ff]"
                    >
                      <Icon size={18} />
                    </span>
                  );
                })}
                <span className="mt-auto grid size-11 place-items-center rounded-full border border-[#ff525c]/45 bg-[#181818] text-2xl text-[#ff525c]">
                  +
                </span>
              </aside>

              <div>
                <div className="mb-7 grid gap-5 xl:grid-cols-[0.95fr_auto] xl:items-end">
                  <div>
                    <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Design board</p>
                    <h1 className="font-display mt-3 max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] text-[#e5e2e1] sm:text-6xl lg:text-7xl">
                      Full-ratio shelves
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-[#b9cacb] sm:text-lg">
                      Rollups stay tall, logos stay square, and UI layouts keep their wider frame so the archive
                      reads like a curated production board.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[repeat(3,minmax(0,auto))_auto]">
                    {[
                      ["Date", "Now"],
                      ["Product", "All"],
                      ["Profile", "Nour"],
                    ].map(([label, value]) => (
                      <span
                        key={label}
                        className="font-tech rounded-full border border-[#849495]/25 bg-[#181818] px-4 py-3 text-xs uppercase text-[#b9cacb]"
                      >
                        {label}: <strong className="text-[#e5e2e1]">{value}</strong>
                      </span>
                    ))}
                    <span className="grid size-11 place-items-center rounded-full border border-[#849495]/25 bg-[#181818] text-[#e5e2e1]">
                      <SlidersHorizontal size={17} />
                    </span>
                  </div>
                </div>

                <div className="mb-5 grid gap-4 md:grid-cols-3">
                  {[
                    [String(archiveCount), "Archive pieces", "#00f0ff"],
                    [String(designLanes), "Design lanes", "#ff525c"],
                    [String(rollupCount), "Rollups added", "#d2c972"],
                  ].map(([value, label, color]) => (
                    <div key={label} className="rounded-[1.35rem] border border-[#849495]/20 bg-[#181818] p-5">
                      <p className="font-display text-4xl font-black text-[#e5e2e1]">{value}</p>
                      <p className="font-tech mt-2 text-xs uppercase text-[#b9cacb]">{label}</p>
                      <span
                        className="mt-4 block h-2 rounded-full shadow-[0_0_16px_currentColor]"
                        style={{ backgroundColor: color, color }}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-4">
                  {designShowcase.map((item) => (
                    <article
                      id={item.slug}
                      key={item.slug}
                      className={`design-shelf-card group scroll-mt-28 overflow-hidden rounded-[1.35rem] border border-[#849495]/20 bg-[#181818] p-3 shadow-[0_18px_38px_rgba(0,0,0,0.35)] ${aspectClasses[item.aspect]}`}
                      style={{ aspectRatio: item.ratio }}
                    >
                      <div className="relative h-full min-h-64 overflow-hidden rounded-[1rem] bg-[#0a0a0a]">
                        {item.gallery ? (
                          <DesignGalleryCarousel title={item.title} assets={item.gallery} />
                        ) : (
                          <Image
                            src={item.image}
                            alt={`${item.title} full design preview`}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover opacity-100 transition duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.12)_45%,rgba(10,10,10,0.86))]" />
                        <span
                          className="absolute left-4 top-4 h-2 w-20 rounded-full shadow-[0_0_18px_currentColor]"
                          style={{ backgroundColor: item.accent }}
                        />
                        <p className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#0a0a0a]/80 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]">
                          {item.format}
                        </p>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                          <p className="font-tech text-[10px] font-bold uppercase text-[#00f0ff]">{item.type}</p>
                          <h2 className="font-display mt-1 text-xl font-bold leading-tight text-[#e5e2e1] sm:text-2xl">
                            {item.title}
                          </h2>
                          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-80 group-hover:opacity-100 group-focus-within:max-h-80 group-focus-within:opacity-100">
                            <p className="mt-3 max-w-xl text-sm leading-6 text-[#d5ddde]">{item.summary}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.deliverables.map((deliverable) => (
                                <span
                                  key={deliverable}
                                  className="font-tech rounded-full border border-[#849495]/25 bg-black/70 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]"
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                            <p className="font-tech mt-4 text-xs uppercase text-[#b9cacb]">
                              {item.tools.join(" / ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-7 grid gap-4 border-t border-[#849495]/20 pt-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Archive status</p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#b9cacb]">
                      Full-ratio design board for rollups, logos, and UI/UX directions. More pieces can drop into
                      this same shelf system without changing the page structure.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-tech inline-flex items-center gap-2 rounded-full border border-[#849495]/25 bg-[#181818] px-4 py-3 text-xs uppercase text-[#e5e2e1] transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
                    >
                      <LinkIcon size={15} />
                      GitHub
                    </a>
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-tech inline-flex items-center gap-2 rounded-full border border-[#849495]/25 bg-[#181818] px-4 py-3 text-xs uppercase text-[#e5e2e1] transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
                    >
                      <LinkIcon size={15} />
                      LinkedIn
                    </a>
                    <Link
                      href="/contact"
                      className="font-tech inline-flex items-center gap-2 rounded-full border border-[#ff525c]/45 bg-[#181818] px-4 py-3 text-xs uppercase text-[#ff8a91] transition hover:border-[#ff525c] hover:text-[#ff525c]"
                    >
                      Contact
                      <ExternalLink size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
