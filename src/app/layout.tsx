import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleTagManager from '@/components/GoogleTagManager'

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
        {/* GTM no head para melhor detecção */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NN6WXLBV');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-NN6WXLBV" />
        {children}
      </body>
    </html>
  )
}