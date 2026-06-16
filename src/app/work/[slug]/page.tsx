import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow, PageShell, VideoFrame } from "@/components/site-shell";
import { profile, projects } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${profile.name} Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageShell>
      <article>
        <section className="art-canvas py-10 sm:py-16">
          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
            <Link href="/#work" className="button-ghost">
              <ArrowLeft size={18} />
              Back to work
            </Link>
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <Eyebrow>{project.category}</Eyebrow>
                <h1 className="glitch-title font-display mt-4 text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
                  {project.title}
                </h1>
              </div>
              <p className="text-xl leading-8 text-[#b9cacb]">{project.summary}</p>
            </div>
          </div>
        </section>

        <section className="art-section">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <div className="scanner-panel relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} hero image`}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.55))]" />
              <p className="font-tech absolute bottom-5 right-5 bg-[#0a0a0a]/80 px-3 py-2 text-xs uppercase text-[#e5e2e1]">
                RGB / Case File / {project.year}
              </p>
            </div>
          </div>
        </section>

        <section className="art-section py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="scanner-panel grid gap-5 self-start p-6">
              {[
                ["Role", project.role],
                ["Year", project.year],
                ["Tools", project.tools.join(", ")],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{label}</p>
                  <p className="mt-2 font-semibold text-[#e5e2e1]">{value}</p>
                </div>
              ))}
            </aside>
            <div className="grid gap-10">
              {[
                ["Challenge", project.challenge],
                ["Approach", project.approach],
                ["Outcome", project.outcome],
              ].map(([label, value]) => (
                <section key={label}>
                  <h2 className="font-display text-3xl font-extrabold text-[#e5e2e1]">{label}</h2>
                  <p className="mt-3 max-w-3xl text-lg leading-8 text-[#b9cacb]">{value}</p>
                </section>
              ))}
              <section>
                <h2 className="font-display text-3xl font-extrabold text-[#e5e2e1]">Deliverables</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((deliverable) => (
                    <p key={deliverable} className="kinetic-card p-4 font-semibold text-[#e5e2e1]">
                      {deliverable}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {(project.videoUrl || project.category === "Video Editing") && (
          <section className="art-section py-16 text-white sm:py-24">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Video presentation</p>
              <h2 className="font-display mt-3 text-4xl font-extrabold">Final edit or reel embed</h2>
              <div className="mt-8 overflow-hidden bg-black">
                <VideoFrame url={project.videoUrl} title={project.title} />
              </div>
            </div>
          </section>
        )}

        <section className="art-section py-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href={`/work/${nextProject.slug}`}
              className="kinetic-card flex items-center justify-between gap-6 p-6"
            >
              <span>
                <span className="font-tech block text-xs font-bold uppercase text-[#00f0ff]">Next project</span>
                <span className="font-display mt-2 block text-2xl font-extrabold text-[#e5e2e1]">{nextProject.title}</span>
              </span>
              <ArrowRight className="text-[#ff525c]" size={24} />
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
