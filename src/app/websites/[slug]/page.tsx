import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Eyebrow, PageShell } from "@/components/site-shell";
import { websiteShowcase } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return websiteShowcase.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const site = websiteShowcase.find((item) => item.slug === slug);

  if (!site) {
    return {};
  }

  return {
    title: `${site.title} | Website Showcase`,
    description: site.summary,
  };
}

export default async function WebsiteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const site = websiteShowcase.find((item) => item.slug === slug);

  if (!site) {
    notFound();
  }

  const captures = site.gallery.length > 0 ? site.gallery : [site.image];

  return (
    <PageShell>
      <article>
        <section className="art-canvas py-12 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
            <Link href="/websites" className="button-ghost">
              <ArrowLeft size={18} />
              Back to websites
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <Eyebrow>{site.status}</Eyebrow>
                <h1 className="glitch-title font-display mt-4 text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
                  {site.title}
                </h1>
              </div>
              <p className="max-w-2xl text-xl leading-8 text-[#b9cacb]">{site.details.overview}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {site.liveUrl ? (
                <a href={site.liveUrl} target="_blank" rel="noreferrer" className="button-primary">
                  Open live site
                  <ExternalLink size={16} />
                </a>
              ) : site.figmaUrl ? (
                <a href={site.figmaUrl} target="_blank" rel="noreferrer" className="button-primary">
                  Open Figma
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span className="font-tech border border-[#849495]/40 px-4 py-3 text-xs uppercase text-[#b9cacb]">
                  {site.figmaStatus}
                </span>
              )}
              {site.repoUrl && (
                <a href={site.repoUrl} target="_blank" rel="noreferrer" className="button-ghost">
                  View repository
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="art-section py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="scanner-panel overflow-hidden p-4">
              <div className="font-tech flex h-9 items-center gap-2 border-b border-[#849495]/25 bg-[#0a0a0a]/80 px-4 text-[10px] uppercase text-[#b9cacb]">
                <span className="size-2 rounded-full bg-[#ff525c]" />
                <span className="size-2 rounded-full bg-[#d2c972]" />
                <span className="size-2 rounded-full bg-[#00f0ff]" />
                <span className="ml-3 truncate">{site.walkthrough}</span>
              </div>
              <div className="relative aspect-video overflow-hidden bg-[#201f1f]">
                <Image
                  src={site.image}
                  alt={`${site.title} primary screenshot`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="art-section py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="scanner-panel grid gap-6 self-start p-6">
              <div>
                <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Role</p>
                <p className="mt-2 leading-7 text-[#e5e2e1]">{site.details.role}</p>
              </div>

              <div>
                <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Stack</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {site.stackItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 border border-[#849495]/30 bg-[#0a0a0a]/55 p-3"
                    >
                      <span
                        className="font-tech grid size-10 shrink-0 place-items-center border text-xs font-black"
                        style={{
                          borderColor: item.color,
                          color: item.color,
                          boxShadow: `0 0 18px ${item.color}33`,
                        }}
                      >
                        {item.mark}
                      </span>
                      <span className="font-tech text-xs uppercase text-[#e5e2e1]">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Status</p>
                <p className="mt-2 leading-7 text-[#e5e2e1]">{site.status}</p>
              </div>
            </aside>

            <div className="grid gap-10">
              <section>
                <h2 className="font-display text-3xl font-extrabold text-[#e5e2e1]">Focus</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.details.focus.map((item) => (
                    <span key={item} className="font-tech border border-[#849495]/30 px-3 py-2 text-xs uppercase text-[#e5e2e1]">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl font-extrabold text-[#e5e2e1]">Key Features</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {site.details.features.map((feature) => (
                    <p key={feature} className="kinetic-card p-4 font-semibold text-[#e5e2e1]">
                      {feature}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="art-section py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-8">
              <Eyebrow>Screenshot Scroll</Eyebrow>
              <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#e5e2e1] sm:text-6xl">
                Live captures and design states.
              </h2>
            </div>

            <div className="grid gap-8">
              {captures.map((capture, index) => (
                <figure key={capture} className="scanner-panel overflow-hidden p-3">
                  <div className="font-tech flex h-9 items-center justify-between border-b border-[#849495]/25 bg-[#0a0a0a]/80 px-4 text-[10px] uppercase text-[#b9cacb]">
                    <span>Capture {String(index + 1).padStart(2, "0")}</span>
                    <span>{site.screens[index] || "Design state"}</span>
                  </div>
                  <div className={capture.includes("mobile") ? "mx-auto max-w-sm" : ""}>
                    <Image
                      src={capture}
                      alt={`${site.title} screenshot ${index + 1}`}
                      width={capture.includes("mobile") ? 390 : 1440}
                      height={capture.includes("mobile") ? 844 : 1100}
                      sizes={capture.includes("mobile") ? "390px" : "100vw"}
                      className="h-auto w-full border border-[#849495]/20"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
