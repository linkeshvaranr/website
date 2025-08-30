import Link from 'next/link'
import Contact from '@/components/Contact'
import { getSlugs, getPost } from '@/lib/md'

export default function Home() {
const slugs = getSlugs()
const posts = slugs
  .map(slug => {
    const { data } = getPost(slug.replace(/\.md$/, ''))
    return {
      slug: slug.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())


return (
  <div className="flex flex-col min-h-screen bg-black text-gray-200">
    {/* Sticky Header */}
    <header className="sticky top-0 z-10 bg-black text-gray-200 py-6 px-6 md:px-24">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Linkeshvaran <span className="bg-green-400 text-black px-1">R</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-xl">
        Salesforce Developer, Engineer, Learn / Solve.
      </p>
    </header>

    {/* Main Content */}
    <main className="flex-grow px-6 md:px-24 py-12">
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          I&apos;m a Salesforce Developer with a focus on CRM Analytics and experience in Lightning Web Components (LWC). I enjoy solving business problems with practical Salesforce solutions. Outside of work, I play CS:GO and Valorant.
        </p>
      </section>

      {/* Scrollable Blog Section */}
      <section className="mb-16 max-h-[400px] overflow-y-auto pr-2">
        <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-6 cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-100 hover:text-green-400 transition">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>

    {/* Footer with Contact Section */}
    

<div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-white-500 px-6 py-2">
  <div className="flex items-center justify-center">
    <Contact />
  </div>
</div>

  </div>
)
}
