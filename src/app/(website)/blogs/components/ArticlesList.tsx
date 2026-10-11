"use client";

import { ArticlesListType } from "@/@types/articlesPage";
import BlogCard from "@/components/cards/BlogCard";
import Pagination from "@/components/CommonComponents/Pagination";
import { SectionHeading } from "@/components/typography";
import clsx from "clsx";
import { useMemo, useState } from "react";

/** "Latest Stories": heading + category chips, card grid and pagination. */
const ArticlesList: React.FC<ArticlesListType> = ({
  title,
  allLabel,
  pageSize,
  posts,
}) => {
  const [category, setCategory] = useState(allLabel);
  const [page, setPage] = useState(1);

  // chips come from the data, so adding a post with a new category adds a chip
  const categories = useMemo(
    () => [allLabel, ...Array.from(new Set(posts.map((p) => p.category)))],
    [allLabel, posts]
  );

  const filtered = category === allLabel ? posts : posts.filter((p) => p.category === category);
  const totalPages = Math.ceil(filtered.length / pageSize);
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  const selectCategory = (c: string) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <>
      <div className="flex flex-col gap-4 border-b border-secondary/20 pb-4 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          level={2}
          title={title}
          titleColor="dark"
          titleClassName="md:text-3xl!"
        />

        <div className="hide-scroll -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => selectCategory(c)}
              aria-pressed={c === category}
              className={clsx(
                "shrink-0 px-4 py-2 text-[11px] uppercase tracking-widest transition-colors",
                c === category ? "bg-primary text-white" : "bg-white text-dark hover:text-primary"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {visible.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </>
  );
};

export default ArticlesList;
