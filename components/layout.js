import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Menu from './menu';

const name = 'Adrian Faz Jr.';
export const siteTitle = 'Adrians home on the web';

export default function Layout({ children, home , calendaropage ,lostpage}) {
    return (
      <div className={styles.main}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>        
        <Menu></Menu>
        <header className={styles.header}>
          {home ? (
            <>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : lostpage ? (
            <>
              <h1 className={utilStyles.heading2Xl}>404 Page</h1><br/>
            </>
          ) : calendaropage ? (
            <>
              <h1 className={utilStyles.heading2Xl}>Let's meet!</h1><br/>
            </>
          ) : (
            <>
            </>
          )}
        </header>
        <main className={styles.container}>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    );
  }