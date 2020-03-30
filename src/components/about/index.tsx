import React from "react"
import { animated, interpolate } from "react-spring"
import useParalax from "../../hooks/useParalax"
import useFadein from "../../hooks/useFadein"
import useSlidein from "../../hooks/useSlidein"
import styles from "./about.module.css"

interface AboutProps {
  inView: boolean
  data: {
    id: number
    title: string
    stackHeading: string
    stack: string[]
    paragraph: string
  }
}

const trans = (x: number, y: number) =>
  `translate3d(${x / 80}px, ${y / 60}px, 0)`

const About: React.FC<AboutProps> = ({ inView, data }) => {
  const paralax = useParalax()
  const fadeIn = useFadein(inView)
  const slideIn = useSlidein(inView)

  return (
    <div className={styles.container}>
      <animated.div style={{ ...fadeIn, ...slideIn }} className={styles.flex}>
        <p>{data.paragraph}</p>
      </animated.div>
      <animated.div style={{ ...fadeIn, ...slideIn }} className={styles.flex}>
        <p>{data.stackHeading}</p>
        <ul>
          {data.stack.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </animated.div>
      <animated.div
        style={{
          ...fadeIn,
          transform: interpolate([paralax.x, paralax.y], trans),
        }}
        className={styles.background}
      ></animated.div>
    </div>
  )
}

export default About
