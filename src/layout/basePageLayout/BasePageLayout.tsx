import Head from "next/head";
import styles from "./basePageLayout.module.scss";
import Link from "next/link";
import React from "react";
import Typography from "#components/common/typography/Typography";
import PageHeader from "#components/pageHeader/PageHeader";
import PageFooter from "#components/pageFooter/PageFooter";

export const siteTitle = "Next js starter kit";

interface BasePageLayoutProps {
  children: React.ReactNode;
  home?: boolean;
  metaTitle?: string;
  spacingTop?: boolean;
}

const BasePageLayout = ({
  children,
  home,
  metaTitle = "meta title",
  spacingTop = true,
}: BasePageLayoutProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageHeader>
        <Typography text="This is the header area" variant="h2" color="light" />
      </PageHeader>
      <main
        className={`${styles.main} ${spacingTop ? `${styles.topGap}` : null}`}
      >
        {children}
        {!home && <Link href="/">Back to home</Link>}
      </main>
      <PageFooter>
        <Typography text="This is the footer area" variant="h2" color="light" />
      </PageFooter>
    </>
  );
};

export default BasePageLayout;
