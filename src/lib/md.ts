import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src/content')

export function getSlugs() {
  return fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
}

export function getPost(slug: string) {
  const filePath = path.join(postsDir, slug + '.md')
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)

  // get file system metadata
  const stats = fs.statSync(filePath)
  const createdDate = stats.birthtime.toISOString()

  return { 
    data: {
      ...data,
      date: data.date || createdDate // fallback to file created date
    }, 
    content 
  }
}

export async function getPostHtml(slug: string) {
  const { data, content } = getPost(slug)
  const htmlContent = await remark().use(html).process(content)
  return { data, html: htmlContent.toString() }
}
