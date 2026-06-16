import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Gem, Grid3X3, Heart, Search, Settings } from "lucide-react";
import { Eyebrow, PageShell } from "@/components/site-shell";
import { designShowcase } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Design Archive | Nour Ltaief",
  description: "A full board of rollups, logos, and UI/UX designs shown in their natural aspect ratios.",
};

const aspectClasses = {
  portrait: "aspect-[9/16] md:row-span-2",
  square: "aspect-square",
  landscape: "aspect-[16/10] md:col-span-2",
};

export default function DesignsPage() {
  return (
    <PageShell>
      <section className="art-canvas py-12 sm:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Link href="/#designs" className="button-ghost">
            <ArrowLeft size={18} />
            Back home
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Design board</Eyebrow>
              <h1 className="glitch-title font-display mt-4 text-5xl font-extrabold leading-tight text-[#e5e2e1] sm:text-7xl">
                Full-ratio shelves for design work.
              </h1>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-[#b9cacb]">
              Rollups stay tall, logos stay square, and UI layouts keep their wider frame so the archive feels like a board of real design pieces rather than cropped thumbnails.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#c7e3aa] py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] bg-black p-5 shadow-[0_36px_70px_rgba(35,55,20,0.38)] sm:p-8">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-white text-xl font-black text-black">
                  NL
                </span>
                {["Rollups", "Logos", "UI/UX"].map((filter) => (
                  <span
                    key={filter}
                    className="font-tech rounded-full bg-[#202020] px-5 py-3 text-xs font-bold uppercase text-[#e5e2e1]"
                  >
                    {filter}
                  </span>
                ))}
                <span className="grid size-12 place-items-center rounded-full bg-[#202020] text-[#e5e2e1]">
                  <Search size={18} />
                </span>
              </div>
              <div className="font-tech text-xs uppercase text-[#e5e2e1]">
                <span className="text-[#a9ff5f]">Design shelf</span> / Full aspect archive
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[56px_1fr]">
              <aside className="hidden flex-col items-center gap-4 lg:flex">
                {[Heart, Grid3X3, Gem, Settings].map((Icon) => (
                  <span key={Icon.displayName} className="grid size-11 place-items-center rounded-full bg-[#202020] text-[#e5e2e1]">
                    <Icon size={18} />
                  </span>
                ))}
                <span className="mt-auto grid size-11 place-items-center rounded-full bg-[#202020] text-2xl text-[#e5e2e1]">
                  +
                </span>
              </aside>

              <div>
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-tech text-xs font-bold uppercase text-[#a9ff5f]">Check box</p>
                    <h2 className="font-display mt-2 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
                      Full-ratio shelves
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Date: Now", "Product: All", "Profile: Nour"].map((pill) => (
                      <span key={pill} className="font-tech rounded-full bg-[#202020] px-5 py-3 text-xs uppercase text-[#e5e2e1]">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-4">
                  {designShowcase.map((item) => (
                    <article
                      id={item.slug}
                      key={item.slug}
                      className={`group scroll-mt-28 overflow-hidden rounded-[1.35rem] bg-[#202020] p-3 shadow-[0_18px_38px_rgba(0,0,0,0.35)] ${aspectClasses[item.aspect]}`}
                    >
                      <div className="relative h-full min-h-64 overflow-hidden rounded-[1rem] bg-[#111]">
                        <Image
                          src={item.image}
                          alt={`${item.title} full design preview`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover opacity-100 transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.78))]" />
                        <span
                          className="absolute left-4 top-4 h-2 w-20 rounded-full shadow-[0_0_18px_currentColor]"
                          style={{ backgroundColor: item.accent }}
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="font-tech text-[10px] font-bold uppercase text-[#a9ff5f]">{item.type}</p>
                          <h2 className="font-display mt-1 text-xl font-bold leading-tight text-[#e5e2e1] sm:text-2xl">
                            {item.title}
                          </h2>
                          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-80 group-hover:opacity-100 group-focus-within:max-h-80 group-focus-within:opacity-100">
                            <p className="mt-3 max-w-xl text-sm leading-6 text-[#d4ded2]">{item.summary}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.deliverables.map((deliverable) => (
                                <span
                                  key={deliverable}
                                  className="font-tech rounded-full bg-black/70 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]"
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                            <p className="font-tech mt-4 text-xs uppercase text-[#b9cacb]">
                              {item.format} / {item.tools.join(" / ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
