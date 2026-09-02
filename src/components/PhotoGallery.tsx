"use client";

import { useState } from "react";
import type { Photo } from "@/data/galleries";

/**
 * Reusable, responsive photo gallery.
 *
 * - Drives itself from a Photo[] array (see src/data/galleries.ts).
 * - Missing / broken images degrade to a neutral placeholder tile with no
 *   broken-image icon (onError swaps to a styled fallback).
 * - Entries whose src starts with "/images/_placeholder" render as an explicit
 *   "add a photo" tile so the layout is visible before real photos are added.
 * - `variant="masonry"` gives a denser, editorial layout (used for Kenya).
 */

type Props = {
  photos: Photo[];
  variant?: "grid" | "masonry" | "bulletin" | "collage";
};

function isPlaceholder(src: string) {
  return src.startsWith("/images/_placeholder");
}

function Tile({
  photo,
  tall,
  bulletin = false,
  collage = false,
}: {
  photo: Photo;
  tall?: boolean;
  bulletin?: boolean;
  collage?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const placeholder = isPlaceholder(photo.src) || failed;

  return (
    <figure
      className={`group relative bg-surface ${
        bulletin
          ? "bulletin-photo"
          : collage
            ? "closing-collage-photo"
          : "overflow-hidden rounded-xl border border-line"
      }`}
    >
      {bulletin ? <span className="bulletin-thumbtack" aria-hidden="true" /> : null}
      <div
        className={`relative w-full ${bulletin ? "bulletin-photo-image" : collage ? "closing-collage-image" : ""} ${
          bulletin || collage ? "" : tall ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        {placeholder ? (
          // Neutral fallback — no broken-image icon.
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-line/60 to-surface">
            <span className="meta-label px-4 text-center leading-relaxed">
              Photo coming soon
            </span>
          </div>
        ) : (
          // Plain <img> — next.config sets images.unoptimized for static export.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className={
              bulletin
                ? "block h-auto w-full object-contain"
                : `h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105${collage ? " closing-collage-img" : ""}`
            }
          />
        )}
      </div>

      {photo.caption ? (
        <figcaption
          className={
            bulletin
              ? "bulletin-photo-caption"
              : collage
                ? "closing-collage-caption"
              : "border-t border-line px-3 py-2 text-sm text-muted"
          }
        >
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function PhotoGallery({ photos, variant = "grid" }: Props) {
  if (variant === "bulletin") {
    return (
      <div className="bulletin-gallery">
        {photos.map((photo, i) => (
          <Tile key={`${photo.src}-${i}`} photo={photo} bulletin />
        ))}
      </div>
    );
  }

  if (variant === "collage") {
    return (
      <div className="closing-collage">
        {photos.map((photo, i) => (
          <Tile key={`${photo.src}-${i}`} photo={photo} collage />
        ))}
      </div>
    );
  }

  if (variant === "masonry") {
    return (
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
        {photos.map((photo, i) => (
          <Tile key={`${photo.src}-${i}`} photo={photo} tall={i % 3 === 1} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <Tile key={`${photo.src}-${i}`} photo={photo} />
      ))}
    </div>
  );
}
