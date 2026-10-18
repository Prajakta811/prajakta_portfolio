"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectScreenshot } from "../data/screenshots";

type Props = {
  screenshots: ProjectScreenshot[];
};

export default function ProjectGallery({ screenshots }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const active = activeIndex === null ? null : screenshots[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function move(direction: number) {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + direction + screenshots.length) % screenshots.length,
    );
  }

  if (!screenshots.length) return null;

  return (
    <section className="pg-section" aria-label="Product screenshots">
      <div className="pg-heading">
        <div>
          <p className="eyebrow muted">A CLOSER LOOK</p>
          <h2>
            Inside the <span className="serif-text">product.</span>
          </h2>
        </div>
        <p>Click a screenshot to explore.</p>
      </div>

      <div className="pg-grid">
        {screenshots.map((screen, index) => (
          <figure className="pg-card" key={screen.src}>
            <button
              className="pg-trigger"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Enlarge ${screen.title}`}
              aria-haspopup="dialog"
            >
              <div className="pg-chrome" aria-hidden="true">
                <span>● ● ●</span>
                <span>{screen.title}</span>
                <span>↗</span>
              </div>

              <div className="pg-thumbnail">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={screen.src}
                  alt={screen.description}
                  loading="lazy"
                  decoding="async"
                />
                <span className="pg-enlarge">Explore ↗</span>
              </div>
            </button>

            <figcaption>
              <span className="pg-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="pg-dialog"
        aria-labelledby="pg-preview-title"
        onCancel={(event) => {
          event.preventDefault();
          setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (
            event.target instanceof HTMLButtonElement &&
            (event.key === "ArrowLeft" || event.key === "ArrowRight")
          ) {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {active && (
          <>
            <header className="pg-dialog-header">
              <h3 id="pg-preview-title">{active.title}</h3>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                autoFocus
              >
                Close ✕
              </button>
            </header>

            <div className="pg-full-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.src} alt={active.description} />
            </div>

            <footer className="pg-dialog-footer">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous screenshot"
              >
                ← Previous
              </button>
              <span aria-live="polite">
                {(activeIndex ?? 0) + 1} / {screenshots.length}
              </span>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next screenshot"
              >
                Next →
              </button>
            </footer>
          </>
        )}
      </dialog>
    </section>
  );
}