import Nav from '@/components/Nav'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'SoloShare',
  description: 'Discover and share guitar skills',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="px-5 flex flex-col h-screen">
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
