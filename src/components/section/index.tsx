import React from "react"
import { useInView } from "react-intersection-observer"
import { useSpring, animated, config } from "react-spring"
import useFadein from "../../hooks/useFadein"
import styles from "./section.module.css"

interface SectionProps {
  id: string
  title: string
  children: (inView: boolean) => JSX.Element
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {

  const [ref, inView] = useInView({
    threshold: .1,
    triggerOnce: true,
  })

  const fadeIn = useFadein()

  const props = useSpring({
    opacity: inView ? 1 : 0,
    width: inView ? "10%" : "50%",
    transform: inView ? `translateX(0px)` : `translateX(+100px)`,
    config: config.stiff,
    delay: 200,
    from: {
      opacity: 0,
      width: "50%",
      transform: `translateX(+100px)`,
    },
  })
  return (
    <section id={title.toLowerCase()} ref={ref}>
      <div className={styles.flex}>
        <div className={styles.title}>
          <animated.span style={fadeIn}>
            <span>{id}</span>
            {title}
          </animated.span>
          <div>
            <animated.span style={props}></animated.span>
          </div>
        </div>
        {children(inView)}
      </div>
    </section>
  )
}

export default Section
