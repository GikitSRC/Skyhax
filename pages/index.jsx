import Metatags from '../components/Metatags'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef();
  const upText = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".your", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        }
      })
      gsap.to(".webpage", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      })
      gsap.to(".is", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      })
      gsap.to(".boring", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        }
      })
      gsap.to(".subtitle", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        }
      })
      gsap.to(".scroll", {
        y: "20vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
      gsap.to(upText.current.children, {
        y: "-10em",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        }
      })
      gsap.to(".link1", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link1",
          start: "top bottom",
        }
      })
      gsap.to(".link2", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link2",
          start: "top bottom-=100",
        }
      })
      gsap.to(".link3", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link3",
          start: "top bottom",
        }
      })
      gsap.to(".link4", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link4",
          start: "top bottom-=100",
        }
      })
      if (window.innerWidth > 1000) {
        gsap.to(".more11", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more1",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more12", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more1",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more21", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more2",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more22", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more2",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
      } else {
        if (localStorage.getItem('alertShown')) {} else {
          alert("Welcome to Skyhax! Please note that this is a LIBRARY for scripts and not everything in here is made by us. Our work include: DuckOS, Shadow Bruteforcer. If you understand, press OK to continue. P.S Website may not work as intended on mobile devices; Cellphones, Tablets, etc.")
          localStorage.setItem('alertShown', true)
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={root}>
      <Metatags/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
      
      <header id={styles.header} className="header">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
        <h1>
          <span id={styles.heroTxt}>
            <div><span className="your">Welcome</span> <span className="webpage">to</span></div> 
            <div><span className="is">Skyhax</span> <span className="boring">Library</span></div>
          </span>
          <span id={styles.bgTxt}>Welcome to<br/>Skyhax Library</span>
        </h1>
        <h3 className="subtitle">Skyhax is a service to help you bypass censorship. More info below!</h3>
        <div id={styles.scrollPrompt} className="scroll">
          <div className={styles.scrollAnim}/>
          <h2>Scroll</h2>
        </div>
        <span id={styles.upText} ref={upText} aria-hidden="true">
          {Array(30).fill(true).map((_, i) => <span key={i}>[HACK]</span>)}
        </span>
      </header>
      <main id={styles.main}>
        <section id={styles.gridSection}>
          <div id={styles.grid}>
            <Link href="/kajigs">
              <article className="link1">
                <div className={styles.outer}>
                  <h2>Kajigs (Bypass Methods)</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="https://cdn-icons-png.flaticon.com/512/31/31056.png"/>
                  <div>
                    <h3>Kajigs</h3>
                    <h3>(Bypass methods)</h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/comingsoon">
              <article className="link2">
                <div className={styles.outer}>
                  <h2>Bookmarklets</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/005/200/965/small/bookmark-black-color-icon-vector.jpg" alt="Lightbulb idea icon"/>
                  <div>
                    <h3>Scripts</h3>
                    <h3>and hacks</h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/projects">
              <article className="link2">
                <div className={styles.outer}>
                  <h2>Other projects</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozgSEaOiGTtPE_llj51ZLDh1ZcwLXWI-SKZEeA-FMbg&s" alt="Lightbulb idea icon"/>
                  <div>
                    <h3>Proxies</h3>
                    <h3>& more!</h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/contributors">
              <article className="link4">
                <div className={styles.outer}>
                  <h2>Contributions</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="https://static.thenounproject.com/png/3282548-200.png" alt="People icon"/>
                  <div>
                    <h3>Contributions</h3>
                    <h3>Contributors?</h3>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
        <section id={styles.moreInfo}>
          <article className="more1">
            <h2 className="more11">What is <strong>Skyhax?</strong></h2>
            <p className="more12">Skyhax is a service provided by people who hates censorship, and we prefer to stay anonymous. We provide a vast library of scripts and methods to get tid of internet censorship, like bookmarklet and our DuckOS listed on our Projects page.</p>
          </article>
          <article className="more2">
            <h2 className="more21"><strong>WHY</strong> use Skyhax?</h2>
            <p className="more22">Skyhax is a wonderful online platform with many great hacks and games. Just don't get caught, and good luck!</p>
          </article>
        </section>
      </main>
    </div>
  )
}
