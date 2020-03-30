import React from "react"
import { animated } from "react-spring"
import useFadein from "../../hooks/useFadein"
import LogoSVG from "../../assets/logo.svg"

const Logo: React.FC = () => {

  const props = useFadein()

  return (
    <animated.a style={props} href="#home">
      <img style={{border: 'none'}} height={60} alt="Logo" src={LogoSVG} />
    </animated.a>
  )
}

export default Logo
