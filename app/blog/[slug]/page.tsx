import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.ogTitle ?? post.title
  const description = post.ogDescription ?? post.description

  return {
    title: `${title} | Sitecraf Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    alternates: { canonical: `https://sitecraf.com/blog/${slug}` },
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  })

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    image: post.image || undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Sitecraf',
      url: 'https://sitecraf.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="flex flex-col min-h-screen bg-[#000000]">
        {/* Hero */}
        <section className="w-full pt-32 pb-12 px-6 bg-[color:var(--color-bg)]">
          <div className="w-full md:w-[80%] max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[color:var(--color-text-muted)] text-sm mb-8 hover:text-[color:var(--color-primary)] transition-colors"
            >
              ← Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[color:var(--color-primary)] text-xs uppercase tracking-widest font-medium">
                {post.category}
              </span>
              {post.seoTag && (
                <span className="bg-[color:var(--color-surface)] border border-white/[0.08] text-[color:var(--color-text-muted)] text-xs px-2 py-0.5 rounded-full">
                  {post.seoTag}
                </span>
              )}
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-[color:var(--color-text-muted)] text-sm mb-10">
              <span>{post.author}</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {post.image && (
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Article Body */}
        <section className="w-full pb-24 px-6 bg-[color:var(--color-bg)]">
          <div className="w-full md:w-[80%] max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none
              prose-headings:font-[family-name:var(--font-display)]
              prose-headings:text-[color:var(--color-text)]
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[color:var(--color-text-muted)] prose-p:leading-relaxed
              prose-li:text-[color:var(--color-text-muted)]
              prose-strong:text-[color:var(--color-text)]
              prose-a:text-[color:var(--color-primary)] prose-a:no-underline hover:prose-a:underline
              prose-table:border-collapse
              prose-th:border prose-th:border-white/10 prose-th:bg-[color:var(--color-surface)] prose-th:px-4 prose-th:py-2 prose-th:text-[color:var(--color-text)]
              prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-2 prose-td:text-[color:var(--color-text-muted)]
              prose-hr:border-white/10
              prose-code:text-[color:var(--color-primary)] prose-code:bg-[color:var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            ">
              {content}
            </article>

            <div className="mt-16 pt-8 border-t border-[color:var(--color-border)]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[color:var(--color-text-muted)] text-sm hover:text-[color:var(--color-primary)] transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
