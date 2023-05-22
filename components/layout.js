import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Menu from './menu';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const name = 'Adrian Faz Jr.';
export const siteTitle = 'Adrian\'s home on the web';

export default function Layout({ children, home , calendaropage ,lostpage}) {
    return (
      <div className={styles.main}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:image"
            content="/images/profile.jpg"
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