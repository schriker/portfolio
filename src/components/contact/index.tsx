import React from "react"
import Button from "../button"
import { animated } from "react-spring"
import useFadein from "../../hooks/useFadein"
import useSlidein from "../../hooks/useSlidein"
import styles from "./contact.module.css"

interface ContactProps {
  inView: boolean,
  data: {
    heading: string
  }
}

const Contact: React.FC<ContactProps> = ({ inView, data }) => {
  const fadeIn = useFadein(inView)
  const slideIn = useSlidein(inView)

  return (
    <animated.div style={{ ...fadeIn, ...slideIn }} className={styles.container}>
      <h3>{data.heading}</h3>
      <div className={styles.buttons}>
        <Button text="Contact Me" anchor="mailto:janekmachine@gmail.com" />
      </div>
    </animated.div>
  )
}

export default Contact
