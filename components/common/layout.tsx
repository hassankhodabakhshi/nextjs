import Head from "next/head";
import { METADATA } from "../../constants";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>ایزونتورک | طراحی سایت در تهران</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="ایزونتورک، ارائه دهنده خدمات طراحی سایت و بهینه‌سازی SEO در تهران." />
      <meta name="keywords" content="طراحی سایت, سئو, ایزونتورک, خدمات وب, توسعه وب" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://isonetwork.ir" />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph tags */}
      <meta property="og:title" content="ایزونتورک" />
      <meta property="og:description" content="ایزونتورک، ارائه دهنده خدمات طراحی سایت و بهینه‌سازی SEO در تهران." />
      <meta property="og:url" content="https://isonetwork.ir" />
      <meta property="og:image" content="/path/to/your/image.jpg" />
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ایزونتورک" />
      <meta name="twitter:description" content="ایزونتورک، ارائه دهنده خدمات طراحی سایت و بهینه‌سازی SEO در تهران." />
      <meta name="twitter:image" content="/path/to/your/image.jpg" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={METADATA.description} />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={METADATA.title} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:url" content={METADATA.siteUrl} />
        <meta property="og:site_name" content={METADATA.title} />
        <meta property="og:image:secure_url" content={METADATA.siteUrl} />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T6MP4VVC');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T6MP4VVC"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      {children}
    </>
  );
};

export default Layout;
