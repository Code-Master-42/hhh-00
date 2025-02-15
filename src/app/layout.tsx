import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luxury Hotel',
  description: 'Experience luxury and comfort at our hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
  <Footer/>
      </body>
    </html>
  )
}

