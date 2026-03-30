import './globals.css'
import ThemeProvider from '@/app/components/ThemeProvider'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Fullstack Developer | Portfolio',
  description: 'Portfolio website of a fullstack software engineer specializing in React, Next.js, and modern web technologies',
  keywords: 'fullstack developer, software engineer, react, next.js, portfolio, web development',
  authors: [{ name: 'Asanka Sampath' }],
  openGraph: {
    title: 'Fullstack Developer | Portfolio',
    description: 'Portfolio website of a fullstack software engineer',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Devicon CDN for technology icons */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* Google Font for Black Ops One */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
