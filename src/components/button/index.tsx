import React from "react"
import useParalax from "../../hooks/useParalax"
import useFadein from "../../hooks/useFadein"
import { animated, interpolate } from "react-spring"
import styles from "./button.module.css"

interface ButtonProps {
  anchor: string
  text: string
}

const trans = (x: number, y: number) =>
  `translate3d(${-x / 80}px, ${-y / 50}px, 0)`

const Button: React.FC<ButtonProps> = ({ anchor, text }) => {
  const cords = useParalax()
  const fade = useFadein()

  return (
    <animated.a style={fade} href={anchor} className={styles.button}>
      <span>{text}</span>
      <animated.span
        style={{ transform: interpolate([cords.x, cords.y], trans) }}
      ></animated.span>
    </animated.a>
  )
}

export default Button
