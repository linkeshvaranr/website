import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

// Define frontmatter type
export type PostMeta = {
  title: string
  excerpt?: string
  date: string
  [key: string]: unknown // allows extra fields without breaking TS
}

const postsDir = path.join(process.cwd(), "src/content")

// Return all slugs (filenames without .md)
export function getSlugs(): string[] {
  return fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"))
}

// Get raw post data + frontmatter
export function getPost(slug: string): { data: PostMeta; content: string } {
  const filePath = path.join(postsDir, slug + ".md")
  const file = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(file)

  const stats = fs.statSync(filePath)
  const createdDate = stats.birthtime.toISOString()

  if (!data.title) {
    throw new Error(`Post ${slug} is missing required "title" in frontmatter`)
  }

  return {
    data: {
      ...(data as Omit<PostMeta, "date">),
      title: data.title as string,
      date: (data as PostMeta).date || createdDate,
    },
    content,
  }
}


// Convert markdown → HTML
export async function getPostHtml(
  slug: string
): Promise<{ data: PostMeta; html: string }> {
  const { data, content } = getPost(slug)
  const htmlContent = await remark().use(html).process(content)
  return { data, html: htmlContent.toString() }
}
