import BlogCard from "@/components/cards/BlogCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, ArticlesPageData } from "../blogs/components/pagedata";
import ArticleContent from "../blogs/components/ArticleContent";
import VisitCta from "@/components/CommonComponents/VisitCta";
import { galleryPageData } from "../gallery/components/pageData";
import WelComeNote from "@/components/CommonComponents/WelComeNote";


interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = articles.find((p) => p.slug === slug);
  if (!post) return { title: "Story not found" };

  return {
    title: post.metaData.title,
    description: post.metaData.description,
    keywords: post.metaData.keyWords,
    openGraph: {
      title: post.metaData.title,
      description: post.metaData.description,
      images: [post.bannerImage],
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const index = articles.findIndex((p) => p.slug === slug);
  if (index === -1) return notFound();

  const post = articles[index];
  const related = Array.from(
    { length: Math.min(3, articles.length - 1) },
    (_, i) => articles[(index + 1 + i) % articles.length]
  );

  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute bg-linear-to-b from-[#FCEBD3] to-cream  after:bg-[#FAF6EC] after:z-[-3]">
      <SectionWithContainer containerClassName="flex flex-col items-center gap-8 md:gap-10 ">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <Tagline eyebrow={`${post.category} · ${post.readTime}`} />
          <SectionHeading
            level={1}
            title={post.title}
            titleColor="dark"
            titleClassName="md:text-[48px]! md:leading-[56px]!"
            textCenter
          />
          <p className="font-secondary text-lg italic text-light md:text-xl">{post.description}</p>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-11/5">
          <Image
            src={post.bannerImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1320px) 100vw, 1320px"
            className="object-cover"
          />
        </div>
      </SectionWithContainer>

      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="pb-12 md:pb-16"
        containerClassName="grid items-start gap-10 lg:grid-cols-[5fr_3fr] lg:gap-16"
      >
        <ArticleContent {...post} />

      </SectionWithContainer>

      <VisitCta {...galleryPageData.visitCta} />

      <WelComeNote {...ArticlesPageData.welcomeNote} />

      {related.length > 0 && (
        <SectionWithContainer
          sectionClassName="border-t border-secondary/20 bg-white/50"
          containerClassName="flex flex-col gap-8 md:gap-10"
        >
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Keep reading</p>
              <SectionHeading level={2} title="More from the Journal" titleColor="dark" titleClassName="md:text-3xl!" />
            </div>
            <Link href="/blogs" className="shrink-0 border-b border-primary pb-0.5 text-[11px] uppercase tracking-widest text-dark">
              All stories
            </Link>
          </div>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {related.map((p) => (
              <BlogCard key={p.slug} {...p} />
            ))}
          </div>
         
        </SectionWithContainer>
      )}
    </main>
  );
}
