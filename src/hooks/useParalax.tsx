import { useEffect } from "react"
import { useSpring } from "react-spring"

const calcX = (x: number) => x - window.innerWidth / 2
const calcY = (y: number) => y - window.innerHeight / 2

const useParalax = () => {
  const [cords, set] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  useEffect(() => {
    const mouseMoveHandler = ({ clientX: x, clientY: y }) =>
      set({ x: calcX(x), y: calcY(y) })
    window.addEventListener("mousemove", mouseMoveHandler)

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [set])

  return cords
}

export default useParalax
