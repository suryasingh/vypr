import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
  IconRocket,
  IconChartBar,
  IconScale,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// Map post slugs to appropriate icons
const getPostIcon = (slug: string) => {
  switch (slug) {
    case "introducing-vibepay":
      return IconRocket;
    case "ai-app-monetization-guide":
      return IconChartBar;
    case "credit-systems-vs-subscriptions":
      return IconScale;
    default:
      return IconChartBar;
  }
};

// Map post slugs to colors
const getPostColor = (slug: string) => {
  switch (slug) {
    case "introducing-vibepay":
      return "text-purple-400";
    case "ai-app-monetization-guide":
      return "text-green-400";
    case "credit-systems-vs-subscriptions":
      return "text-cyan-400";
    default:
      return "text-purple-400";
  }
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />

      <main className="max-w-7xl mx-auto border-l border-r border-border/80 min-h-screen pt-16">
        <div className="relative px-6 pt-16 pb-16 overflow-hidden">
          {/* Background FlickeringGrid */}
          <FlickeringGrid
            className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#FFFFFF"
            maxOpacity={0.08}
            flickerChance={0.1}
            height={1000}
            width={1400}
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-medium text-white mb-8 tracking-tight leading-none">
              Blog
            </h1>

            {/* Description */}
            <p className="text-2xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Insights, guides, and updates on{" "}
              <span className="text-white font-normal">
                AI app monetization
              </span>
              , <span className="text-white font-normal">credit systems</span>,
              and{" "}
              <span className="text-white font-normal">
                growth infrastructure
              </span>
              .
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              <div className="text-sm text-gray-500">
                <span className="text-white font-medium">{posts.length}</span>{" "}
                articles
              </div>
              <div className="text-sm text-gray-500">
                Updated <span className="text-white font-medium">weekly</span>
              </div>
              <div className="text-sm text-gray-500">
                For{" "}
                <span className="text-white font-medium">AI developers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-20 pt-0">
          {posts.map((post) => {
            const iconColor = getPostColor(post.slug);

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white/[0.02] border border-white/10 overflow-hidden group-hover:bg-white/[0.04] group-hover:border-white/20 transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl font-medium text-white mb-3 leading-tight group-hover:text-gray-200 transition-colors duration-200">
                      {post.title}
                    </h2>

                    {/* Short excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt.split(".")[0]}.
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {formatDate(post.date)}
                      </span>

                      <div
                        className={`flex items-center ${iconColor} group-hover:translate-x-1 transition-transform duration-200`}
                      >
                        <span className="text-sm font-medium">Read</span>
                        <IconArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <CTASection />

        <Footer />
      </main>
    </div>
  );
}
