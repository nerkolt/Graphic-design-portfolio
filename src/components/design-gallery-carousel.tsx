"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type GalleryAsset = {
  label: string;
  src: string;
};

export function DesignGalleryCarousel({
  title,
  assets,
}: {
  title: string;
  assets: GalleryAsset[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAsset = assets[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? assets.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === assets.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,240,255,0.14),transparent_28%),#0a0a0a] p-4">
      <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.34)]">
        <Image
          key={activeAsset.src}
          src={activeAsset.src}
          alt={`${title} ${activeAsset.label}`}
          fill
          sizes="(min-width: 768px) 42vw, 88vw"
          className="carousel-slide object-contain"
        />
        <span className="font-tech absolute left-3 top-3 z-20 rounded-full bg-[#0a0a0a]/80 px-3 py-2 text-[10px] uppercase text-[#e5e2e1]">
          {activeAsset.label}
        </span>
        <div className="absolute inset-x-3 top-1/2 z-30 flex -translate-y-1/2 justify-between">
          <button
            type="button"
            onClick={showPrevious}
            className="grid size-9 place-items-center rounded-full border border-[#849495]/35 bg-[#0a0a0a]/80 text-[#e5e2e1] backdrop-blur transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
            aria-label={`Show previous ${title} slide`}
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="grid size-9 place-items-center rounded-full border border-[#849495]/35 bg-[#0a0a0a]/80 text-[#e5e2e1] backdrop-blur transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
            aria-label={`Show next ${title} slide`}
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
