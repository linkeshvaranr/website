import { getSlugs, getPostHtml } from '@/lib/md'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getSlugs().map(slug => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostHtml(slug)

  if (!post) return notFound()

  return (
    <article className="prose">
      <h1 className="text-2xl font-bold">{post.data.title}</h1>
      <p className="text-gray-500 text-sm">{post.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
