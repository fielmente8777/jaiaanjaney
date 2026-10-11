import clsx from "clsx";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const base =
  "flex h-9 min-w-9 items-center justify-center px-3 text-[11px] uppercase tracking-widest transition-colors";

/** Numbered pager with Prev / Next. Renders nothing when there is only one page. */
const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <button type="button" onClick={() => onChange(page - 1)} className={clsx(base, "bg-white text-dark hover:text-primary")}>
          Prev
        </button>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={clsx(base, n === page ? "bg-primary text-white" : "bg-white text-dark hover:text-primary")}
        >
          {n}
        </button>
      ))}

      {page < totalPages && (
        <button type="button" onClick={() => onChange(page + 1)} className={clsx(base, "bg-white text-dark hover:text-primary")}>
          Next
        </button>
      )}
    </nav>
  );
};

export default Pagination;
