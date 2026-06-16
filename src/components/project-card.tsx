import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article className="kinetic-card overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#201f1f]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-80 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.72))]" />
          <div
            className="absolute left-4 top-4 h-2 w-20 shadow-[0_0_18px_currentColor]"
            style={{ backgroundColor: project.accent }}
            aria-hidden="true"
          />
          <p className="font-tech absolute bottom-4 right-4 bg-[#0a0a0a]/80 px-3 py-2 text-xs uppercase text-[#e5e2e1]">
            16:9 / RGB / WEB
          </p>
        </div>
        <div className="grid gap-5 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">
                {project.category} / {project.year}
              </p>
              <h3 className="font-display mt-2 text-3xl font-bold text-[#e5e2e1]">{project.title}</h3>
            </div>
            <span className="grid size-10 shrink-0 place-items-center border border-[#849495]/40 text-[#e5e2e1] transition group-hover:border-[#ff525c] group-hover:bg-[#ff525c] group-hover:text-[#0a0a0a]">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="text-sm leading-6 text-[#b9cacb]">{project.summary}</p>
        </div>
      </article>
    </Link>
  );
}
