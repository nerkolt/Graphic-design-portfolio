import { Award, Clock, MapPin } from "lucide-react";
import { Eyebrow, PageShell } from "@/components/site-shell";
import { profile, services } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <PageShell showFooterCta>
      <section className="art-canvas py-16 sm:py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="glitch-title font-display mt-4 text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
              A practical creative partner for visuals that need to ship.
            </h1>
          </div>
          <div className="scanner-panel grid gap-6 p-6 text-lg leading-8 text-[#b9cacb] sm:p-8">
            <p>{profile.bio}</p>
            <p>
              This page is ready for your real story: your background, editing style, design strengths,
              favorite industries, and the kinds of clients you want to attract.
            </p>
          </div>
        </div>
      </section>

      <section className="art-section py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-3">
          {[
            { icon: MapPin, label: "Location", value: profile.location },
            { icon: Clock, label: "Availability", value: profile.availability },
            { icon: Award, label: "Focus", value: "Design systems, edits, and campaigns" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="kinetic-card p-6">
                <Icon className="text-[#00f0ff]" size={24} />
                <p className="font-tech mt-8 text-xs font-bold uppercase text-[#00f0ff]">{item.label}</p>
                <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-[#e5e2e1]">{item.value}</h2>
              </article>
            );
          })}
        </div>
      </section>

      <section className="art-section py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-display text-4xl font-extrabold text-[#e5e2e1] sm:text-6xl">Services</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <p key={service} className="kinetic-card p-5 font-semibold text-[#e5e2e1]">
                {service}
              </p>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
