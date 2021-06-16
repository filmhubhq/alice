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

        <p className={styles.description}>
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

          <a href="https://struum.com/sf/D66535DC-0CDA-4155-ACA0-45195905B8C6;origin=8F11A40C-96C3-4A01-A634-78E049AF1880" className={styles.card}>
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
        <a
          href="https://filmhub.com?utm_source=alice&utm_medium=web&utm_campaign=alice"
        >
          Filmmaker? Submit via
          <span className={styles.logo}>
            <Image src="/filmhub-dark.png" alt="Filmhub Logo" width={1200/9} height={128/9} />
          </span>
        </a>
      </footer>
    </div>
  )
}
