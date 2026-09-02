"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { Photo } from "@/data/galleries";

type StackStyle = CSSProperties & {
  "--postcard-x": string;
  "--postcard-y": string;
  "--postcard-rotate": string;
};

const stackPositions = [
  { x: "0px", y: "0px", rotate: "-1deg" },
  { x: "12px", y: "9px", rotate: "1.4deg" },
  { x: "-10px", y: "17px", rotate: "-2deg" },
  { x: "16px", y: "24px", rotate: "2.4deg" },
  { x: "-15px", y: "31px", rotate: "-2.8deg" },
  { x: "8px", y: "38px", rotate: "1.8deg" },
];

export default function OxfordPostcardStack({ photos }: { photos: Photo[] }) {
  const [topIndex, setTopIndex] = useState(0);

  const cycleStack = () => {
    setTopIndex((current) => (current + 1) % photos.length);
  };

  return (
    <div className="postcard-stack-shell">
      <div className="postcard-stack-heading" aria-hidden="true">
        <span>Postcards from abroad</span>
        <span>Click to shuffle ↘</span>
      </div>

      <div className="postcard-stack" aria-label="Oxford study abroad postcard gallery">
        {photos.map((photo, index) => {
          const depth = (index - topIndex + photos.length) % photos.length;
          const position = stackPositions[depth] ?? stackPositions[stackPositions.length - 1];
          const isTop = depth === 0;
          const style: StackStyle = {
            "--postcard-x": position.x,
            "--postcard-y": position.y,
            "--postcard-rotate": position.rotate,
            zIndex: photos.length - depth,
          };

          return (
            <button
              key={photo.src}
              type="button"
              className={`postcard${isTop ? " is-top" : ""}`}
              style={style}
              onClick={isTop ? cycleStack : undefined}
              tabIndex={isTop ? 0 : -1}
              aria-label={`${photo.caption} Move this postcard to the back of the stack.`}
              aria-hidden={!isTop}
            >
              <span className="postcard-photo">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 570px, calc(100vw - 96px)"
                  className="object-contain"
                />
              </span>
              <span className="postcard-writing">
                <span className="postcard-stamp" aria-hidden="true">OX</span>
                <span className="postcard-mark" aria-hidden="true">POST CARD</span>
                <span className="postcard-message">{photo.caption}</span>
                <span className="postcard-lines" aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing postcard {topIndex + 1} of {photos.length}: {photos[topIndex]?.caption}
      </p>
    </div>
  );
}
