import { getSlugs, getPostHtml } from '@/lib/md'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getSlugs().map(slug => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data } = await getPostHtml(params.slug)
  return {
    title: data.title,
    description: data.excerpt || '',
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = params
  const post = await getPostHtml(slug)

  if (!post) return notFound()

  return (
    <article className="prose">
      <h1 className="text-2xl font-bold">{post.data.title}</h1>
      <p className="text-sm text-gray-500">{post.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
