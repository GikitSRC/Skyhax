import Link from 'next/link'
import styles from '../styles/404.module.scss'

export default function FOF() {
  return <main id={styles.main}>
    <img src="https://media.tenor.com/ZBIsRzLZfoYAAAAC/spongebob-where.gif" alt="Spongebob looking"/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
    <h1>[404] - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </main>
}