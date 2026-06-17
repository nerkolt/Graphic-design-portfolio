import Image from "next/image";
import { Mail, Send } from "lucide-react";
import { Eyebrow, PageShell } from "@/components/site-shell";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="art-canvas py-16 sm:py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="glitch-title font-display mt-4 text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
              Tell me what you are making next.
            </h1>
          </div>
          <div className="scanner-panel grid gap-0 overflow-hidden p-0">
            <div className="relative mx-auto mt-6 aspect-[4/3] w-[min(78%,340px)] overflow-hidden border border-[#00f0ff]/35 bg-[#201f1f] shadow-[0_0_28px_rgba(0,240,255,0.16)] sm:mt-8">
              <Image
                src="/nour-ltaief-pfp.png"
                alt={`${profile.name} portrait`}
                fill
                sizes="(min-width: 768px) 340px, 78vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mx-5 mt-7 border border-[#849495]/25 bg-[#0a0a0a]/60 p-5 sm:mx-8 sm:p-6">
              <p className="text-center text-lg leading-8 text-[#b9cacb]">
                For now, this uses a simple email link so the site can deploy without backend setup.
                Later we can add a Vercel-ready contact form with Resend, Formspree, or another service.
              </p>
            </div>
            <div className="flex justify-center px-5 py-7 sm:py-8">
              <a
                href={`mailto:${profile.email}?subject=Portfolio inquiry`}
                className="button-primary"
              >
                <Mail size={18} />
                Email {profile.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="art-section py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {["Project type", "Timeline", "Budget range"].map((item) => (
              <div key={item} className="kinetic-card flex items-center gap-4 p-5">
                <span className="grid size-10 place-items-center border border-[#00f0ff]/50 text-[#00f0ff]">
                  <Send size={17} />
                </span>
                <p className="font-semibold text-[#e5e2e1]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
