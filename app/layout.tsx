import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
  title: 'SoloShare',
  description: 'Discover and share guitar skills',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-5">
        <Nav />
        {children}
      </body>
    </html>
  )
}
