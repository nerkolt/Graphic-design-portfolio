"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ExternalLink, Heart, MessageCircle, Play, Repeat2, Share2 } from "lucide-react";
import { postedVideos, projects } from "@/data/portfolio";

type ActiveView = "portfolio" | "published";

export function VideoShowcase() {
  const videoProjects = projects.filter((project) => project.category === "Video Editing" || project.videoUrl);
  const [activeView, setActiveView] = useState<ActiveView>("portfolio");

  return (
    <section className="art-section section-reveal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8">
            <div>
              <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Video library</p>
              <h2 className="font-display mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[#e5e2e1] sm:text-6xl">
                Choose what you want to watch.
              </h2>
            </div>
          </div>

          <div className="scanner-panel mb-10 grid overflow-hidden p-2 sm:grid-cols-2">
            {[
              {
                id: "portfolio" as const,
                title: "Portfolio Videos",
                detail: "Case-study edits, reels, motion work",
                count: `${videoProjects.length} items`,
              },
              {
                id: "published" as const,
                title: "Published Posts",
                detail: "LinkedIn posts and studio uploads",
                count: `${postedVideos.length} posts`,
              },
            ].map((tab) => {
              const isActive = activeView === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveView(tab.id)}
                  className={`group border p-5 text-left transition ${
                    isActive
                      ? "border-[#00f0ff] bg-[#00f0ff]/12 shadow-[0_0_28px_rgba(0,240,255,0.18)]"
                      : "border-[#849495]/25 bg-[#0a0a0a]/45 hover:border-[#00f0ff]/60"
                  }`}
                >
                  <span className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{tab.count}</span>
                  <span className="font-display mt-2 block text-3xl font-bold text-[#e5e2e1]">{tab.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-[#b9cacb]">{tab.detail}</span>
                </button>
              );
            })}
          </div>

          {activeView === "portfolio" ? <PortfolioVideoGrid videoProjects={videoProjects} /> : <PublishedPostFeed />}
        </div>
      </section>
  );
}

function PortfolioVideoGrid({ videoProjects }: { videoProjects: typeof projects }) {
  return (
    <div className="grid gap-8">
      <div className="scanner-panel overflow-hidden">
        <iframe
          className="aspect-video w-full border-0"
          src="https://www.youtube.com/embed/Bh1xyiOPjQc"
          title="Featured showreel"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Featured reel</p>
            <h2 className="font-display mt-2 text-2xl font-bold text-[#e5e2e1]">
              A dedicated reel area for your strongest edit.
            </h2>
          </div>
          <Link href="/contact" className="button-primary">
            Book editing work
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {videoProjects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
            <article className="kinetic-card grid gap-4 p-4">
              <div className="relative aspect-video overflow-hidden bg-[#201f1f]">
                <Image
                  src={project.image}
                  alt={`${project.title} video thumbnail`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-full border border-[#ff525c] bg-[#0a0a0a]/80 text-[#ff525c] shadow-[0_0_24px_rgba(255,82,92,0.3)]">
                  <Play size={20} fill="currentColor" />
                </span>
                <span className="font-tech absolute bottom-4 right-4 bg-[#0a0a0a]/80 px-3 py-2 text-xs uppercase text-[#e5e2e1]">
                  00:30 / 1080P
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">{project.category}</p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-[#e5e2e1]">{project.title}</h3>
                </div>
                <ArrowRight className="mt-1 text-[#ff525c]" size={18} />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

function PublishedPostFeed() {
  return (
    <div className="grid gap-6">
      {postedVideos.map((video) => (
        <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="group block">
          <article className="scanner-panel grid overflow-hidden p-4 transition duration-300 hover:border-[#00f0ff]/70 hover:shadow-[0_0_32px_rgba(0,240,255,0.18)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative grid aspect-video place-items-center overflow-hidden border border-[#849495]/30 bg-[#201f1f]">
              <Image
                src={video.thumbnail}
                alt={`${video.title} thumbnail`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.38),rgba(0,240,255,0.08)_42%,rgba(0,0,0,0.55))]" />
              <div className="absolute inset-0 border border-white/5" />
              <div className="absolute left-4 top-4 flex items-center gap-3">
                <span className="grid size-11 place-items-center border border-[#00f0ff]/50 bg-[#0a0a0a]/75 backdrop-blur-md">
                  <span className="font-tech text-xs font-black text-[#00f0ff]">IGS</span>
                </span>
                <div className="rounded-sm bg-[#0a0a0a]/55 px-3 py-2 backdrop-blur-md">
                  <p className="font-tech text-xs font-bold uppercase text-[#e5e2e1]">Inherited Games Studio</p>
                  <p className="font-tech text-[10px] uppercase text-[#b9cacb]">{video.source}</p>
                </div>
              </div>
              <span
                className="absolute bottom-4 left-4 h-2 w-24 shadow-[0_0_18px_currentColor]"
                style={{ backgroundColor: video.accent }}
              />
              <span className="relative grid size-16 place-items-center rounded-full border border-[#ff525c] bg-[#0a0a0a]/70 text-[#ff525c] shadow-[0_0_28px_rgba(255,82,92,0.32)] backdrop-blur-md transition group-hover:scale-110">
                <Play size={28} fill="currentColor" />
              </span>
              <p className="font-tech absolute bottom-4 right-4 bg-[#0a0a0a]/70 px-3 py-2 text-xs uppercase text-[#e5e2e1] backdrop-blur-md">
                Open post
              </p>
            </div>
            <div className="flex flex-col justify-between p-4 sm:p-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">LinkedIn video post</p>
                    <h3 className="font-display mt-2 text-3xl font-bold text-[#e5e2e1] sm:text-4xl">
                      {video.title}
                    </h3>
                  </div>
                  <ExternalLink className="mt-2 shrink-0 text-[#ff525c]" size={20} />
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#b9cacb]">{video.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-tech border border-[#849495]/30 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]"
                    >
                      #{tag.replaceAll(" ", "")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#849495]/20 pt-4">
                <div className="font-tech flex gap-4 text-xs uppercase text-[#b9cacb]">
                  <span className="inline-flex items-center gap-2"><Heart size={15} /> React</span>
                  <span className="inline-flex items-center gap-2"><MessageCircle size={15} /> Comment</span>
                  <span className="inline-flex items-center gap-2"><Repeat2 size={15} /> Repost</span>
                  <span className="inline-flex items-center gap-2"><Share2 size={15} /> Share</span>
                </div>
                <span className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Watch on LinkedIn</span>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
