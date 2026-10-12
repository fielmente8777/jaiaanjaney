import clsx from "clsx";

/** Id of the shared <clipPath>; identical on every dome, so duplicates are harmless. */
const DOME_CLIP_ID = "arch-frame-dome";

/** Onion-dome silhouette in objectBoundingBox units (0–1), so it scales with the frame. */
const DOME_PATH =
  "M0.5 0 C0.5 0.03 0.47 0.05 0.41 0.07 C0.2 0.125 0.01 0.15 0 0.26 L0 1 L1 1 L1 0.26 C0.99 0.15 0.8 0.125 0.59 0.07 C0.53 0.05 0.5 0.03 0.5 0 Z";

interface ArchFrameProps {
  children: React.ReactNode;
  /** `arch` = plain photo · `dome` = photo clipped to an onion-dome shape */
  shape?: "arch" | "dome";
  /** Size the frame here (e.g. an aspect ratio) — children fill it. */
  className?: string;
  /** Text-colour class for the thin inset outline, e.g. `text-cream/70`. */
  outlineClassName?: string;
}

/**
 * Photo frame with the thin inset outline used across the rooms page.
 * `arch`  → semicircular-top outline (villa cards).
 * `dome`  → the same onion-dome silhouette as the photo clip, inset (presidential villa).
 * Put a `fill` <Image /> inside as the child.
 */
const ArchFrame: React.FC<ArchFrameProps> = ({
  children,
  shape = "arch",
  className,
  outlineClassName = "text-cream/70",
}) => {
  const isDome = shape === "dome";

  return (
    <div className={clsx("relative", className)}>
      {isDome && (
        <svg aria-hidden width={0} height={0} className="absolute">
          <clipPath id={DOME_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path d={DOME_PATH} />
          </clipPath>
        </svg>
      )}

      <div
        className="absolute inset-0"
        style={isDome ? { clipPath: `url(#${DOME_CLIP_ID})` } : undefined}
      >
        {children}
      </div>

      {isDome ? (
        /* Inset copy of the dome silhouette, so the line follows the dome instead of a plain semicircle */
        <svg
          aria-hidden
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className={clsx(
            "pointer-events-none absolute left-[4%] top-[3%] h-[94.5%] w-[92%]",
            outlineClassName
          )}
        >
          <path
            d={DOME_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : (
        <span
          aria-hidden
          className={clsx(
            "pointer-events-none absolute inset-x-[4%] top-[3%] bottom-[2.5%] rounded-t-full border border-current",
            outlineClassName
          )}
        />
      )}
    </div>
  );
};

export default ArchFrame;
