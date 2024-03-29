import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <meta name="msapplication-TileColor" content="#255d98" />
        <meta name="theme-color" content="#255d98" /> 
        <meta name="keywords" content="тхэквондо, тхэквондо в уссурийске, тхэквондо для детей, секции для детей, детский спорт, taekwondo" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(91602935, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              `,
            }}
          />

      </body>
    </Html>
  )
}