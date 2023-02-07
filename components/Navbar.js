import Link from 'next/link'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import React, { useLayoutEffect, useRef } from "react";

export default function Navbar() {
  const nav = useRef();
  useLayoutEffect(() => {
    gsap.to(nav.current, {
      y: "8vh",
      scrollTrigger: {
        trigger: nav.current,
        scrub: true,
        start: "top top",
        end: "bottom+=100 top",
      }
    })
  }, []);
  return (
    <nav ref={nav}>
      <a href="/" className="logo">
        <h2>[S<span className="oring">kyhax</span><span className="close">]</span></h2>
      </a>
      <div className="navLinks">
        <Link href="kajigs">
          <span>Kajigs (Bypass Methods)</span>
        </Link>
        <Link href="comingsoon">
          <span>Bookmarklets</span>
        </Link>
        <Link href="contributors">
          <span>Contributors</span>
        </Link>
        <Link href="projects">
          <span>Our Projects</span>
        </Link>
      </div>
    </nav>
  )
}