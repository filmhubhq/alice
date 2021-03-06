import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alice</title>
        <meta name="description" content="Welcome to Alice" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <Image
            src="/alice_color.png"
            alt="Alice Logo"
            width={1920/4}
            height={940/4}
          />
        </div>

        <p className={styles.tagline}>
          Stories told through a female lens.
        </p>

        <p className={styles.description}>
          Named after pioneer director{' '}
          <a href="https://www.google.com/search?client=firefox-b-1-d&q=Alice+Guy-Blach%C3%A9">
            Alice Guy-Blaché
          </a>.
        </p>

        <p className={styles.stream}>
          Stream on
        </p>

        <div className={styles.grid}>
          <a href="https://www.xumo.tv/channel/9999300/alice-movies" className={styles.card}>
            <Image
              src="/xumo.png"
              alt="Xumo Logo"
              width={151}
              height={34}
            />
          </a>

          <a href="https://struum.com" className={styles.card}>
            <Image
              src="/struum.png"
              alt="Struum Logo"
              width={181}
              height={34}
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://filmhub.com?utm_source=alice&utm_medium=web&utm_campaign=alice">
          <span>
            Filmmaker?&nbsp;Submit&nbsp;via{' '}
          </span>
          <span className={styles.logo}>
            <Image src="/filmhub-dark.png" alt="Filmhub Logo" width={1200/9} height={128/9} />
          </span>
        </a>
      </footer>
    </div>
  )
}
