'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Declaração do dataLayer para TypeScript
declare global {
  interface Window {
    dataLayer: any[]
  }
}

interface GoogleTagManagerProps {
  gtmId: string
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Debug: verificar se o GTM está carregando
    console.log('GTM ID:', gtmId)
    
    // Verificar se dataLayer existe
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      console.log('DataLayer inicializado:', window.dataLayer)
      
      // Aguardar um pouco e verificar se o GTM carregou
      setTimeout(() => {
        console.log('DataLayer após carregamento:', window.dataLayer)
        if (window.dataLayer.length > 0) {
          console.log('GTM carregado com sucesso!')
        } else {
          console.log('GTM pode não ter carregado ainda')
        }
      }, 2000)
    }
  }, [gtmId])

  return (
    <>
      {/* GTM Script - versão mais robusta */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
        onLoad={() => {
          console.log('GTM Script carregado')
        }}
        onError={(e) => {
          console.error('Erro ao carregar GTM:', e)
        }}
      />
      
      {/* GTM noscript - versão mais robusta */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
      
      {/* Script adicional para garantir carregamento */}
      <Script
        id="gtm-dataLayer-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `,
        }}
      />
    </>
  )
} 