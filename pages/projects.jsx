import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import { items } from "../lib/inspiration"

export default function Inspiration() {
  return (<>
    <Metatags title="Projects" description="Projects from Skyhax"/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
    <header className={styles.header}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
      <h1>Projects</h1>  
      <p>All of Skyhax's work here. See developers on contribution page.</p>
    </header>
    <main className={`${styles.main} ${styles.inspiration}`}>
      {items.map((item, key) => {
        return (<a className={styles.inspirationCard} key={key} href={item.link} target="_blank">
          <img src={item.image} alt={item.title} className={styles.mainImage}/>
          <div>
            <h2>{item.title}</h2>
            <img src="/media/open.svg" alt="Open in new tab"/>
          </div>
          <p>{item.description}</p>
        </a>)
      })}
    </main>
  </>)
}