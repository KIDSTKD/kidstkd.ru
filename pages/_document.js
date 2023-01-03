import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>

        <meta name="msapplication-TileColor" content="#255d98" />
        <meta name="theme-color" content="#255d98" /> 
        <meta name="description" content="Тхэквондо в Уссурийске" key="description"/>

        <meta property="og:site_name" content="KIDSTKD - ТХЭКВОНДО в УССУРИЙСКЕ" key="sitename"/>
        <meta property="og:url" content="https://kidstkd.ru"  key="url" />
        <meta property="og:title" content="Тхэквондо в Уссурийске"  key="title" />
        <meta property="og:type" content="website"  key="type" />
        <meta property="og:description" content="Мы приглашаем детей от 4 лет на занятия олимпийским видом спорта. Занятия проходят в мини-группах детей одного возраста, что обеспечивает положительный результат занятий. Занятия охватывают все аспекты тхэквондо, и включают в себя базовую подготовку, обучение ударной технике, обучение техническому комплексу пхумсэ."  key="description"/>
        <meta property="og:image" content="https://kidstkd.ru/img/logo_black.png"  key="image" />
           
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