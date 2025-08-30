import { getSlugs, getPostHtml } from '@/lib/md'
import { notFound } from 'next/navigation'
import { type Metadata } from 'next'
import Link from 'next/link'

export async function generateStaticParams() {
  return getSlugs().map(slug => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getPostHtml(slug)
  return {
    title: data.title,
    description: data.excerpt || '',
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostHtml(slug)

  if (!post) return notFound()

  return (
    <div className="px-6 md:px-24 py-8">
      {/* Blog Header with title + "R" */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          {post.data.title}
        </h1>

        {/* Same "R" as homepage */}
        <Link href="/" className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="bg-green-400 text-black px-1">R</span>
        </Link>
      </header>

      <p className="text-sm text-gray-500 mb-6">{post.data.date}</p>

      {/* <article>
        <div
          className="prose prose-neutral dark:prose-invert max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article> */}
      <article
  className="prose prose-invert max-w-none
             prose-headings:mb-4 prose-headings:mt-8
             prose-p:my-4 prose-p:leading-relaxed
             prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
             prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4
             prose-strong:text-white
             prose-code:bg-gray-900 prose-code:text-green-400 prose-code:px-1 prose-code:rounded
             prose-pre:bg-gray-900 prose-pre:border prose-pre:border-green-500 prose-pre:rounded-lg
             prose-blockquote:border-l-green-400 prose-blockquote:pl-4 prose-blockquote:text-gray-400"
  dangerouslySetInnerHTML={{ __html: post.html }}
/>

    </div>
  )
}
