import React, { useRef } from "react"
import Button from "../button"
import useParalax from "../../hooks/useParalax"
import useFadein from "../../hooks/useFadein"
import {
  useSpring,
  animated,
  useChain,
  config,
  interpolate,
} from "react-spring"
import styles from "./home.module.css"

interface HomeProps {
  inView: boolean
  data: {
    id: number
    title: string
    heading: string
    paragraph: string
  }
}

const trans = (x: number, y: number) =>
  `translate3d(${x / 80}px, ${y / 60}px, 0)`

const Home: React.FC<HomeProps> = ({ inView, data }) => {
  const headingAnimationRef = useRef()
  const paragraphAnimationRef = useRef()
  const paralax = useParalax()
  const fadeIn = useFadein()
  const animationConfig = {
    opacity: inView ? 1 : 0,
    transform: inView ? `translateY(0px)` : `translateY(+15px)`,
    config: config.stiff,
    from: {
      opacity: 0,
      transform: `translateY(+15px)`,
    },
  }

  const headingAnimation = useSpring({
    ...animationConfig,
    delay: 200,
    ref: headingAnimationRef,
  })

  const paragraphAnimation = useSpring({
    ...animationConfig,
    delay: 400,
    ref: paragraphAnimationRef,
  })

  useChain(
    inView
      ? [headingAnimationRef, paragraphAnimationRef]
      : [paragraphAnimationRef, headingAnimationRef]
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <animated.h2
          style={headingAnimation}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        ></animated.h2>
        <animated.p
          style={paragraphAnimation}
          dangerouslySetInnerHTML={{ __html: data.paragraph }}
        ></animated.p>
        <Button text="Contact Me" anchor="mailto:janekmachine@gmail.com" />
      </div>
      <animated.div
        style={{ ...fadeIn, transform: interpolate([paralax.x, paralax.y], trans) }}
        className={styles.background}
      ></animated.div>
    </div>
  )
}

export default Home
