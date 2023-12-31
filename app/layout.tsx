import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  // title appears on the web browser tab
  title: 'Price Tracker',
  description: 'Track prices of products from different e-commerce websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body className={inter.className}>
          <main className='max-w-10xl mx-auto'>
            <Navbar />
            {children}
          </main>
        </body>
      </html >
    </ClerkProvider>
  )
}
