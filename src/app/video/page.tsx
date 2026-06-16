import { Eyebrow, PageShell } from "@/components/site-shell";
import { VideoShowcase } from "@/components/video-showcase";

export default function VideoPage() {
  return (
    <PageShell>
      <section className="art-canvas py-16 sm:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>Video editing</Eyebrow>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="glitch-title font-display text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
              Edits built around rhythm, clarity, and platform fit.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#b9cacb]">
              Choose between portfolio video work and published social posts, then follow updates for new drops.
            </p>
          </div>
        </div>
      </section>

      <VideoShowcase />
    </PageShell>
  );
}
