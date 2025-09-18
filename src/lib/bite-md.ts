import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src/content/bites')

export function getBiteSlugs() {
  return fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
}

export function getBite(slug: string) {
  const file = fs.readFileSync(path.join(postsDir, slug + '.md'), 'utf8')
  const { data, content } = matter(file)
  return { data, content }
}

export async function getPostHtml(slug: string) {
  const { data, content } = getBite(slug)
  const htmlContent = await remark().use(html).process(content)
  return { data, html: htmlContent.toString() }
}

// ✅ New: Get all bites sorted by created date
export function getAllBites() {
  const slugs = getBiteSlugs()

  const bites = slugs.map(slug => {
    const file = fs.readFileSync(path.join(postsDir, slug), 'utf8')
    const { data, content } = matter(file)

    return {
      slug: slug.replace(/\.md$/, ''),
      data,
      content,
    }
  })

  // Sort by created date (newest first)
  const sorted = bites.sort(
    (a, b) => new Date(b.data.created).getTime() - new Date(a.data.created).getTime()
  )

  // Add auto numbering (newest = #1)
  return sorted.map((bite, index) => ({
    ...bite,
    autoNumber: `SFBITE #${index + 1}`,
  }))
}

