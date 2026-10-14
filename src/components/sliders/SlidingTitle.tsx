import "./sliding.title.scss";

export default function SlidingTitle({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  const titles = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-3 text-white max_screen_width bg-linear-to-r from-primary to-secondary"
      aria-hidden={ariaHidden}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {titles.map((t, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="marquee-item font-secondary font-semibold italic text-lg leading-6 tracking-normal text-center"
            >
              <span dangerouslySetInnerHTML={{ __html: t }}></span>
              <span className="separator">
                <ICon />
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ICon = () => (
<svg
  width={12}
  height={12}
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.54445 11.077L0.000453155 5.544L5.54445 3.57628e-07L11.0775 5.544L5.54445 11.077ZM5.54445 10.076L10.0765 5.544L5.54445 1.001L1.01245 5.544L5.54445 10.076ZM5.54445 7.843L3.23445 5.544L5.54445 3.234L7.85445 5.544L5.54445 7.843Z"
    fill="white"
  />
</svg>

);
