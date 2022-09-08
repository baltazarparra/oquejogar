import Script from 'next/script'

const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-5VDZTKK3P5`}
    />
    <Script
      id="my-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VDZTKK3P5', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics
