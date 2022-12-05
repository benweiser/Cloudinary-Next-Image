import Head from 'next/head'
import { Image } from '../components/shared/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          publicId="6c60fc403d99c653ef6372101abd3648"
          alt="Example"
          height={400}
          width={400}
        />
        <Image
          publicId="f9749867e2150300f6001eb60521778b"
          alt="Example2"
          aspectRatio="16:9"
          height={500}
          width={1200}
        />
      </main>
    </div>
  )
}
