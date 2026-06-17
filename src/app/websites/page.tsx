import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Eyebrow, PageShell } from "@/components/site-shell";
import { websiteShowcase } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Website Archive | Nour Ltaief",
  description: "A full archive of websites, web interfaces, Figma concepts, and staged frontend projects.",
};

export default function WebsitesPage() {
  return (
    <PageShell>
      <section className="art-canvas section-reveal py-12 sm:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Link href="/#websites" className="button-ghost">
            <ArrowLeft size={18} />
            Back home
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Web interface archive</Eyebrow>
              <h1 className="glitch-title font-display mt-4 text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
                Websites designed, staged, or ready to develop.
              </h1>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-[#b9cacb]">
              A fuller board for web projects: live captures, Figma concepts, staged builds, and interfaces that
              are ready for development or hosting.
            </p>
          </div>
        </div>
      </section>

      <section className="art-section section-reveal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6">
            {websiteShowcase.map((site, index) => (
              <article
                key={site.slug}
                id={site.slug}
                className="scanner-panel grid scroll-mt-28 gap-5 overflow-hidden p-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
              >
                <div className={`relative aspect-video overflow-hidden border border-[#849495]/30 bg-[#201f1f] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="font-tech flex h-9 items-center gap-2 border-b border-[#849495]/25 bg-[#0a0a0a]/80 px-4 text-[10px] uppercase text-[#b9cacb]">
                    <span className="size-2 rounded-full bg-[#ff525c]" />
                    <span className="size-2 rounded-full bg-[#d2c972]" />
                    <span className="size-2 rounded-full bg-[#00f0ff]" />
                    <span className="ml-3 truncate">{site.status}</span>
                  </div>
                  <div className="relative h-[calc(100%-36px)]">
                    <Image
                      src={site.image}
                      alt={`${site.title} website preview`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover opacity-90 transition duration-700 hover:scale-105 hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,240,255,0.12),transparent_35%,rgba(255,82,92,0.12))]" />
                  </div>
                </div>

                <div className="p-2 sm:p-6">
                  <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{site.status}</p>
                  <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#e5e2e1]">
                    {site.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-[#b9cacb]">{site.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {site.screens.map((screen) => (
                      <span
                        key={screen}
                        className="font-tech border border-[#849495]/30 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]"
                      >
                        {screen}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {site.liveUrl ? (
                      <a href={site.liveUrl} target="_blank" rel="noreferrer" className="button-ghost">
                        Open live site
                        <ExternalLink size={16} />
                      </a>
                    ) : site.figmaUrl ? (
                      <a href={site.figmaUrl} target="_blank" rel="noreferrer" className="button-ghost">
                        Open Figma
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <div className="font-tech flex items-center border border-[#849495]/40 px-4 py-3 text-xs uppercase text-[#b9cacb]">
                        {site.figmaStatus}
                      </div>
                    )}
                    <Link href={`/websites/${site.slug}`} className="button-primary">
                      See more
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {site.repoUrl && (
                    <a
                      href={site.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-tech mt-4 inline-flex items-center gap-2 text-xs uppercase text-[#00f0ff] transition hover:text-[#7df4ff]"
                    >
                      View repository
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
