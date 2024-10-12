import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState } from "react";

// ... سایر واردات و کدهای اولیه

export default function Home() {
  // ... سایر کدها

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NXH33MHMQ9"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NXH33MHMQ9');
          `}
        </script>
      </Head>
      {/* سایر کامپوننت‌ها */}
      <Layout>
        <Header />
        <ProgressIndicator />
        <Cursor isDesktop={isDesktop} />
        <main className="flex-col flex">
          {renderBackdrop()}
          <HeroSection />
          <AboutSection />
          <ProjectsSection isDesktop={isDesktop} />
          <QuoteSection />
          <SkillsSection />
          <TimelineSection isDesktop={isDesktop} />
          <CollaborationSection />
          <Footer />
        </main>
      </Layout>
      <Scripts />
    </>
  );
}
