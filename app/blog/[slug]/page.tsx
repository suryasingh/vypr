import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | VibePay Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />

      <main className="w-full sm:max-w-7xl sm:mx-auto sm:border-l sm:border-r border-border/80 min-h-screen pt-20 sm:pt-28 lg:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-14">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8 sm:mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4 sm:mb-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <article
            className="prose prose-base sm:prose-lg prose-invert max-w-none 
                       prose-headings:text-white prose-headings:font-semibold
                       prose-p:text-gray-300 prose-p:leading-relaxed
                       prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                       prose-strong:text-white prose-code:text-purple-300 prose-code:bg-card/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                       prose-pre:bg-card/50 prose-pre:border prose-pre:border-border/40 prose-pre:text-sm prose-pre:overflow-x-auto
                       prose-blockquote:border-l-purple-500 prose-blockquote:text-gray-300
                       prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300
                       prose-img:rounded-lg prose-img:border prose-img:border-border/40"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <CTASection className="bg-card/30 border mt-12 sm:mt-16 lg:mt-20 rounded-xl lg:rounded-4xl mx-4 sm:mx-8 lg:mx-20" />
        <Footer className="border-t-0" />
      </main>
    </div>
  );
}
