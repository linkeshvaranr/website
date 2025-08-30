import { getSlugs, getPostHtml } from "@/lib/md"
import { notFound } from "next/navigation"
import { type Metadata } from "next"

// Generate static params for SSG
export async function generateStaticParams() {
  return getSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }))
}

// Generate <head> metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const { data } = await getPostHtml(slug)
  return {
    title: data.title,
    description: data.excerpt || "",
  }
}

// Blog post page
export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await getPostHtml(slug)

  if (!post) return notFound()

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-2xl font-bold">{post.data.title}</h1>
      <p className="text-sm text-gray-500">{post.data.date}</p>
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
