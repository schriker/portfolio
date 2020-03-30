import React from "react"
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa"
import { animated, interpolate } from "react-spring"
import useParalax from "../../hooks/useParalax"
import useFadein from "../../hooks/useFadein"
import { useInView } from "react-intersection-observer"
import styles from "./footer.module.css"

const trans = (x: number, y: number) =>
  `translate3d(${x / 80}px, ${y / 60}px, 0)`

const Footer: React.FC<{ text: string }> = ({ text }) => {
  const links = [
    {
      fa: <FaLinkedin />,
      link: "https://www.linkedin.com/in/marcin-janus-b5718b147/"
    },
    {
      fa: <FaGithubSquare />,
      link: "https://github.com/schriker"
    },
    {
      fa: <FaBehanceSquare />,
      link: "https://www.behance.net/janekmachi6d5b"
    },
  ]
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  
  const paralax = useParalax()
  const fadeIn = useFadein(inView)
  const fadeInLinks = useFadein()

  return (
    <footer ref={ref}>
      <animated.div style={fadeInLinks} className={styles.links}>
        <ul>
          {links.map((link, index) => <li key={index}><a aria-label="Social link" href={link.link}>{link.fa}</a></li>)}
        </ul>
        <span></span>
      </animated.div>
      <animated.div
        style={{
          ...fadeIn,
          transform: interpolate([paralax.x, paralax.y], trans),
        }}
        className={styles.circle}
      ></animated.div>
      <div className={styles.footer}>{text}</div>
    </footer>
  )
}

export default Footer
