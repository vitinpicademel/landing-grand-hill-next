import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
<<<<<<< HEAD
import GoogleTagManager from '@/components/GoogleTagManager'
=======
>>>>>>> 66e52cf0f7d817d34a5b4b1659960abafa7862d6

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grand Hill - Empreendimento de Alto Padrão',
  description: 'Empreendimento de Alto Padrão em Rifaina-SP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
<<<<<<< HEAD
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'} />
=======
>>>>>>> 66e52cf0f7d817d34a5b4b1659960abafa7862d6
        {children}
      </body>
    </html>
  )
}