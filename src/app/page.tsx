import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ExternalLink, Film, Layers, MousePointer2 } from "lucide-react";
import { Eyebrow, PageShell } from "@/components/site-shell";
import { ProjectCard } from "@/components/project-card";
import { designShowcase, profile, projects, services, websiteShowcase } from "@/data/portfolio";

const toolIcons = [
  { name: "Illustrator", src: "/tool-icons/illustrator.png" },
  { name: "Photoshop", src: "/tool-icons/photoshop.png" },
  { name: "Premiere Pro", src: "/tool-icons/premiere-pro.png" },
  { name: "Figma", src: "/tool-icons/figma.png" },
  { name: "InDesign", src: "/tool-icons/indesign.png" },
];

const workflowSteps = [
  {
    label: "01",
    title: "Discovery board",
    body: "Collect references, brand cues, required formats, and the clearest commercial goal before building the visual direction.",
    tags: ["Brief", "Mood", "Audience"],
  },
  {
    label: "02",
    title: "Direction system",
    body: "Translate the idea into typography, color, layout rhythm, motion references, and reusable components for faster production.",
    tags: ["Type", "Color", "Motion"],
  },
  {
    label: "03",
    title: "Delivery polish",
    body: "Prepare final exports, responsive captures, social cuts, print files, or handoff frames with clear naming and review notes.",
    tags: ["Export", "QA", "Handoff"],
  },
];

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <PageShell>
      <section className="art-canvas section-reveal">
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <Eyebrow>Selected visual work</Eyebrow>
            <h1 className="glitch-title reveal-up font-display mt-5 text-6xl font-extrabold leading-[0.9] text-[#e5e2e1] sm:text-8xl lg:text-[120px]">
              {profile.name}
            </h1>
            <p className="reveal-up delay-1 mt-5 max-w-2xl text-xl leading-8 text-[#b9cacb] sm:text-2xl">{profile.headline}</p>
            <div className="reveal-up delay-2 mt-8 flex flex-wrap gap-3">
              <Link
                href="#work"
                className="button-primary"
              >
                View projects
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="button-ghost"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="reveal-up delay-3 grid gap-4">
            <div className="scanner-panel grid aspect-[4/5] content-between overflow-hidden p-6 text-white">
              <div className="font-tech flex items-center justify-between text-xs uppercase text-white/55">
                <span>{profile.role}</span>
                <span>{profile.location}</span>
              </div>
              <div className="grid grid-cols-6 gap-2 [perspective:600px]">
                {Array.from({ length: 30 }).map((_, index) => (
                  <span
                    key={index}
                    className="aspect-square animate-pulse border border-white/10"
                    style={{
                      backgroundColor: ["#00f0ff", "#ff525c", "#d2c972", "#353534"][index % 4],
                      opacity: index % 5 === 0 ? 1 : 0.72,
                      animationDelay: `${index * 70}ms`,
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="font-display max-w-md text-4xl font-bold leading-tight">
                  Brand visuals, campaign systems, and edited stories with a clear pulse.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border border-[#849495]/30 bg-[#131313]">
              {[
                ["06+", "Project slots"],
                ["04", "Core services"],
                ["01", "Focused portfolio"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-[#849495]/30 p-4 last:border-r-0">
                  <p className="font-display text-2xl font-black text-[#e5e2e1]">{value}</p>
                  <p className="font-tech mt-1 text-xs uppercase text-[#b9cacb]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="tool-marquee-band overflow-hidden border-y border-[#00f0ff]/65 bg-[#353534]/35 py-4 shadow-[0_0_28px_rgba(0,240,255,0.12)] backdrop-blur-md">
        <div className="ticker flex w-max items-center gap-6">
          {Array.from({ length: 3 }).map((_, loop) => (
            <div key={loop} className="flex items-center gap-6">
              {toolIcons.map((tool) => (
                <div key={`${loop}-${tool.name}`} className="tool-badge">
                  <Image
                    src={tool.src}
                    alt={`${tool.name} tool badge`}
                    width={320}
                    height={120}
                    className="h-14 w-auto sm:h-16"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="art-section section-reveal py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Interface rhythm</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#e5e2e1] sm:text-6xl">
              A clearer path from idea to finished visual.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#b9cacb]">
              A practical production loop for identity, campaign, interface, and video work: enough structure to
              stay sharp, enough room for the visual idea to breathe.
            </p>
          </div>
          <div className="scanner-panel overflow-hidden p-3 sm:p-5">
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <div key={step.label} className="border border-[#849495]/25 bg-[#0a0a0a]/55 p-4">
                  <p className="font-tech text-xs uppercase text-[#00f0ff]">{step.label}</p>
                  <div className="mt-3 h-2 overflow-hidden bg-[#353534]">
                    <span
                      className="block h-full bg-[linear-gradient(90deg,#00f0ff,#ff525c)]"
                      style={{ width: `${(index + 1) * 33.33}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {workflowSteps.map((step, index) => (
                <details
                  key={step.title}
                  open={index === 0}
                  className="workflow-accordion group border border-[#849495]/25 bg-[#0a0a0a]/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                    <span>
                      <span className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{step.label}</span>
                      <span className="font-display mt-1 block text-2xl font-bold text-[#e5e2e1]">{step.title}</span>
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center border border-[#849495]/35 text-[#d2c972] transition group-open:rotate-180 group-open:border-[#00f0ff] group-open:text-[#00f0ff]">
                      <ChevronDown size={18} />
                    </span>
                  </summary>
                  <div className="grid gap-4 border-t border-[#849495]/20 px-5 pb-5 pt-1 sm:grid-cols-[1fr_auto] sm:items-end">
                    <p className="max-w-2xl text-base leading-7 text-[#b9cacb]">{step.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-tech inline-flex items-center gap-2 border border-[#849495]/30 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]"
                        >
                          <CheckCircle2 size={13} className="text-[#00f0ff]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="art-section section-reveal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Eyebrow>Featured work</Eyebrow>
              <h2 className="font-display mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[#e5e2e1] sm:text-6xl">
                Case studies made for quick scanning and deeper review.
              </h2>
            </div>
            <Link href="/video" className="button-ghost">
              See video work
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section id="designs" className="art-section section-reveal scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <Eyebrow>Design archive</Eyebrow>
              <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#e5e2e1] sm:text-6xl">
                Rollups, logos, and UI/UX directions.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#b9cacb]">
              A focused gallery for standalone design work: print layouts, identity marks, and interface concepts
              that do not need a full case study to show craft.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {designShowcase.map((item, index) => (
              <Link
                href={`/designs#${item.slug}`}
                key={item.title}
                className={`kinetic-card group block overflow-hidden ${index === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#201f1f]">
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover opacity-65 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.78))]" />
                  <span
                    className="absolute left-4 top-4 h-2 w-24 shadow-[0_0_18px_currentColor]"
                    style={{ backgroundColor: item.accent }}
                  />
                  <p className="font-tech absolute bottom-4 right-4 bg-[#0a0a0a]/80 px-3 py-2 text-xs uppercase text-[#e5e2e1]">
                    {item.format}
                  </p>
                </div>
                <div className="p-5">
                  <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{item.type}</p>
                  <h3 className="font-display mt-2 text-3xl font-bold text-[#e5e2e1]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#b9cacb]">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="font-tech border border-[#849495]/30 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                  <p className="font-tech mt-5 text-xs uppercase text-[#b9cacb]">
                    Tools: {item.tools.join(" / ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link href="/designs" className="button-primary">
              See all designs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="websites" className="art-section section-reveal scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>Web interfaces</Eyebrow>
              <h2 className="font-display mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-[#e5e2e1] sm:text-6xl">
                Websites designed, staged, or ready to develop.
              </h2>
            </div>
            <p className="font-tech max-w-md text-sm uppercase leading-6 text-[#b9cacb]">
              Figma frames / screenshots / not hosted yet
            </p>
          </div>

          <div className="grid gap-6">
            {websiteShowcase.map((site, index) => (
              <article
                key={site.title}
                className="scanner-panel grid gap-5 overflow-hidden p-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
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
                      alt={`${site.title} website screenshot`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover opacity-85 transition duration-700 hover:scale-105 hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,240,255,0.12),transparent_35%,rgba(255,82,92,0.12))]" />
                  </div>
                </div>
                <div className="p-2 sm:p-6">
                  <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{site.status}</p>
                  <h3 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#e5e2e1]">
                    {site.title}
                  </h3>
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
                    {site.figmaUrl ? (
                      <a
                        href={site.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-ghost"
                      >
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

      <section className="art-section section-reveal py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-[#e5e2e1] sm:text-6xl">Built for visual launches.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = [Layers, Film, MousePointer2][index % 3];
              return (
                <div key={service} className="kinetic-card flex items-center gap-4 p-5">
                  <span className="grid size-11 place-items-center border border-[#00f0ff]/50 text-[#00f0ff]">
                    <Icon size={20} />
                  </span>
                  <span className="font-semibold text-[#e5e2e1]">{service}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
