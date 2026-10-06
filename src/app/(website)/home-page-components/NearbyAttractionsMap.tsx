"use client";

import { LatLng, LocationSectionType } from "@/@types/homePage";
import { Container } from "@/components/sectionComponants";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Polyline,
  useMap,
} from "@vis.gl/react-google-maps";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Set these in .env.local (see README note at the bottom of this file).
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID";

type Props = Pick<LocationSectionType, "origin" | "places">;

const NearbyAttractionsMap: React.FC<Props> = ({ origin, places }) => {
  const [active, setActive] = useState(0);
  // Until the visitor interacts, show every pin; afterwards, zoom to the route.
  const [hasInteracted, setHasInteracted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = places.length;
  const current = places[active];

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.min(Math.max(index, 0), total - 1));
      setHasInteracted(true);
    },
    [total]
  );
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const onKeyDown = (e: React.KeyboardEvent) => {
    // Don't steal arrow keys from the map itself (it uses them to pan).
    if ((e.target as HTMLElement).closest(".gm-style")) return;
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  if (!total) return null;

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1` +
    `&origin=${origin.coords.lat},${origin.coords.lng}` +
    `&destination=${current.coords.lat},${current.coords.lng}`;

  return (
    <div className="w-full" onKeyDown={onKeyDown}>
      {/* ───────────── Google Map ───────────── */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[2.4/1] bg-linear-to-br from-primary to-secondary">
        {API_KEY ? (
          <APIProvider apiKey={API_KEY}>
            <Map
              mapId={MAP_ID}
              defaultCenter={origin.coords}
              defaultZoom={8}
              gestureHandling="cooperative" // page scroll isn't hijacked; ctrl/two-finger to zoom
              disableDefaultUI
              zoomControl
              fullscreenControl
              clickableIcons={false}
              className="h-full w-full"
            >
              <FitToView
                origin={origin.coords}
                places={places.map((p) => p.coords)}
                active={hasInteracted ? current.coords : null}
              />

              {/* Dashed route line: resort → selected place */}
              <Polyline
                path={[origin.coords, current.coords]}
                strokeOpacity={0}
                icons={[
                  {
                    icon: {
                      path: "M 0,-1 0,1",
                      strokeOpacity: 1,
                      strokeColor: "#E9621C",
                      strokeWeight: 3,
                      scale: 5,
                    },
                    offset: "0",
                    repeat: "14px",
                  },
                ]}
              />

              <AdvancedMarker
                position={origin.coords}
                title={origin.label}
                zIndex={50}
              >
                <OriginPin label={origin.label} />
              </AdvancedMarker>

              {places.map((place, i) => (
                <AdvancedMarker
                  key={place.title}
                  position={place.coords}
                  title={`${place.title}, ${place.distance}`}
                  zIndex={i === active ? 100 : 10}
                  onClick={() => goTo(i)}
                >
                  <PlacePin title={place.title} isActive={i === active} />
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center font-primary text-white">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to load the map
          </div>
        )}
      </div>

      {/* ───────────── Details ───────────── */}
      <Container className="pt-8 md:pt-10">
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-live="polite"
        >
          <div key={active} className="map-details-in flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="font-primary text-dark text-xl md:text-2xl">
                {current.title}
              </h3>
              <span className="shrink-0 text-dark md:text-lg">
                {current.distance}
              </span>
            </div>
            <p className="text-light leading-relaxed">{current.description}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <NavButton
                label="Previous place"
                disabled={active === 0}
                onClick={prev}
              >
                <IoChevronBack />
              </NavButton>
              <NavButton
                label="Next place"
                disabled={active === total - 1}
                onClick={next}
              >
                <IoChevronForward />
              </NavButton>
            </div>
            <p className="font-secondary text-primary text-2xl tabular-nums">
              {active + 1}/{total}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NearbyAttractionsMap;

/* ───────────────────────── Map helpers ───────────────────────── */

/**
 * Moves the camera: shows every pin on load, then frames the resort + the
 * selected place whenever the selection changes.
 */
const FitToView: React.FC<{
  origin: LatLng;
  places: LatLng[];
  active: LatLng | null;
}> = ({ origin, places, active }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    // Plain bounds object — no `google` global needed.
    const points = [origin, ...(active ? [active] : places)];
    const lats = points.map((p) => p.lat);
    const lngs = points.map((p) => p.lng);
    map.fitBounds(
      {
        north: Math.max(...lats),
        south: Math.min(...lats),
        east: Math.max(...lngs),
        west: Math.min(...lngs),
      },
      { top: 80, bottom: 60, left: 60, right: 60 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, origin, active?.lat, active?.lng]);

  return null;
};

/* ───────────────────────── Markers ───────────────────────── */

// Advanced Markers anchor at the bottom-centre of their content,
// so each pin ends in a point that sits exactly on the location.

const PlacePin: React.FC<{ title: string; isActive: boolean }> = ({
  title,
  isActive,
}) => (
  <div className="flex flex-col items-center">
    {isActive && (
      <span className="mb-1 whitespace-nowrap rounded-full bg-white px-3 py-1 font-body text-xs md:text-sm text-dark shadow-md">
        {title}
      </span>
    )}
    <svg
      viewBox="0 0 24 32"
      className={clsx(
        "drop-shadow transition-all duration-300",
        isActive ? "h-10 w-[30px]" : "h-7 w-[21px] opacity-90 hover:opacity-100"
      )}
      aria-hidden
    >
      <path
        d="M12 0C5.4 0 0 5.2 0 11.7 0 20.5 12 32 12 32s12-11.5 12-20.3C24 5.2 18.6 0 12 0z"
        fill={isActive ? "#E9621C" : "#DF951D"}
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11.5" r="4.2" fill="white" />
    </svg>
  </div>
);

const OriginPin: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex flex-col items-center">
    <span className="mb-1 whitespace-nowrap rounded-full bg-dark px-3 py-1 font-primary text-[10px] md:text-xs tracking-wide text-white shadow-md">
      {label}
    </span>
    <span className="flex size-10 items-center justify-center rounded-full border-2 border-primary bg-white shadow-lg">
      <TempleIcon />
    </span>
    {/* little pointer so the marker's tip lands on the location */}
    <span className="-mt-px h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-primary" />
  </div>
);

const NavButton: React.FC<{
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ label, disabled, onClick, children }) => (
  <button
    type="button"
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    className="flex size-9 items-center justify-center rounded-full text-lg text-primary transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:text-light/50 disabled:hover:bg-transparent"
  >
    {children}
  </button>
);

const TempleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="text-primary"
    aria-hidden
  >
    <path
      d="M12 2v2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M12 2l3 1-3 1" fill="currentColor" />
    <path
      d="M12 5c-2.2 2.2-4 4.2-4 6.5h8C16 9.2 14.2 7.2 12 5z"
      fill="currentColor"
    />
    <path d="M5 11.5h14v2H5z" fill="currentColor" />
    <path
      d="M6.5 13.5V21h4v-3.5a1.5 1.5 0 013 0V21h4v-7.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M4 21h16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

/*
 * Setup (.env.local):
 *   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key   ← Google Cloud → APIs & Services → enable "Maps JavaScript API"
 *   NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your-map-id ← optional; Google Cloud → Map Management. "DEMO_MAP_ID" works for testing.
 * Restrict the key to your domain(s) under "Website restrictions".
 */
