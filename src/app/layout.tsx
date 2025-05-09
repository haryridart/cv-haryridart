import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hary Ridart | Backend Developer & Solutions Engineer',
  description: 'Professional portfolio of Hary Ridart, a Backend Developer and Solutions Engineer with experience in enterprise applications, cloud technologies, and system architecture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
