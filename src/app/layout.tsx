import '@/styles/globals.css'

export const metadata = {
  title: 'Lee',
  description: 'Just for my blogs and thoughts / linkeshvaranr',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto p-4">
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  )
}
