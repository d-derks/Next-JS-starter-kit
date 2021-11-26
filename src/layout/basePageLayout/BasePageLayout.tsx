import Head from 'next/head';
import styles from './basePageLayout.module.scss';
import Link from 'next/link';
import React from 'react';
import Typography from "#components/common/typography/Typography";

export const siteTitle = 'Next js starter kit';

type BasePageLayoutProps = {
    children: React.ReactNode,
    home?: boolean,
    metaTitle?: string,
}

const BasePageLayout = ({children, home, metaTitle = 'meta title'}: BasePageLayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Learn how to build a personal website using Next.js"/>
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>{metaTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet"/>
            </Head>
            <header>
                <Typography text='This is the header area' variant='h2'/>
            </header>
            <main className={styles.main}>
                {children}
                {!home && (
                    <Link href="/">
                        Back to home
                    </Link>
                )}
            </main>
            <footer>
                <Typography text='This is the footer area' variant='h2'/>
            </footer>
        </div>
    )
}

export default BasePageLayout;
