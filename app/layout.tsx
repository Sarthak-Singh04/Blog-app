import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dharmic Ecology',
  description: 'Embracing Hindu Ethics and Nature Conservation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='pt-10'>
        {children}

        </div>
       
        <Footer/>
       
        </body>
      
    
    </html>
  )
}
