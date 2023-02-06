import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import { items } from "../lib/tools-resources"

export default function ToolsResources() {
  return (<>
    <Metatags title="Kajis | [Skyhax]" description="Methods to go past your limites. (Not physically, of course), oh yea, and its your computers limites."/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
    <header className={styles.header}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
      <h1>Kajigs (Bypass Methods)</h1>  
      <p>A library of tools and resources that can help you bypass (almost) any restrictions set by your administrator.</p>
    </header>
    <main className={`${styles.main} ${styles.tr}`}>
      {items.map((item, key) => {
        return (<article className={styles.trCard} key={key}>
          <div>
            <div>
              {item.icon && <img src={item.icon} alt={`${item.title} logo`}/>}
              <h2>{item.title}</h2>
            </div>
            <p>{item.description}</p>
          </div>
          <a href={item.link} target="_blank">
            <span>{item.displayLink}</span>
            <img src="../media/arrow.svg"/>
          </a>
        </article>)
      })}
    </main>
  </>)
}