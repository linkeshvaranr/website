import Link from 'next/link'
import Contact from '@/components/Contact'
import { getSlugs, getPost } from '@/lib/md'
import { getBiteSlugs, getBite } from '@/lib/bite-md'

export default function Home() {
  // Blog posts
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


  type Bite = {
  slug: string
  title: string
  created: string
  autoNum: string
}

  // Salesforce Bites
const biteSlugs = getBiteSlugs()
let bites: Bite[] = biteSlugs.map(slug => {
  const { data } = getBite(slug.replace(/\.md$/, ''))

  return {
    slug: slug.replace(/\.md$/, ''),
    title: data.title,
    created: data.created,
    autoNum: "", // temp placeholder
  }
})

bites = bites
  .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
  .map((bite, index) => ({
    ...bite,
    autoNum: `SFBITE #${index + 1}`,
  }))



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
            I&apos;m a{" "}
            <Link
              href="/salesforce"
              className="text-green-400 hover:underline"
            >
              Salesforce
            </Link>{" "}
            Developer with a focus on CRM Analytics and experience in Lightning Web Components (LWC). I enjoy solving business problems with practical Salesforce solutions. Outside of work, I play CS:GO and Valorant.
          </p>
        </section>

        {/* Salesforce Bites Section */}
        <section className="mb-16">
  <h2 className="text-2xl font-semibold mb-6">Salesforce Bites</h2>

  {/* Grid wrapper */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {bites.map(bite => (
      <Link key={bite.slug} href={`/bite/${bite.slug}`}>
  <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl 
                  hover:border-green-400 
                  hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] 
                  transition-transform hover:-translate-y-1 hover:scale-105 
                  duration-300 cursor-pointer">
    <h3 className="text-lg font-semibold text-gray-100">{bite.title}</h3>
    <p className="text-sm text-green-400 mt-1">{bite.autoNum}</p>
  </div>
</Link>

    ))}
  </div>
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
