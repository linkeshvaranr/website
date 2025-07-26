import { getSlugs, getPostHtml } from '@/lib/md'
import { notFound } from 'next/navigation'
import { type Metadata } from 'next'

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
  console.log(post.html)


  if (!post) return notFound()

  return (
<article>
  <h1 className="text-2xl font-bold">{post.data.title}</h1>
  <p className="text-sm text-gray-500">{post.data.date}</p>
  <div
    className="prose prose-neutral dark:prose-invert max-w-none mt-8"
    dangerouslySetInnerHTML={{ __html: post.html }}
  />
</article>


  )
}