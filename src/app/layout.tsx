import '@/styles/globals.css'

export const metadata = {
  title: 'My Blog',
  description: 'Minimal blog by Linkeshvaran',
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
