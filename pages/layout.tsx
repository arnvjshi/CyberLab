import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CyberLab',
  description: 'Reserve A Classroom',
  generator: 'Arnav Joshi',
  icons: "../public/favicon.png"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
