import React from "react"
import MobileMenu from "./mobileMenu"
import { Link } from "gatsby"
import { useTrail, animated, config } from "react-spring"
import { HeaderLink } from "../types/header"
import styles from "./menu.module.css"

interface MenuProps {
  links: HeaderLink[]
}

const Menu: React.FC<MenuProps> = ({ links }) => {
  const animatedLinks = useTrail(links.length, {
    opacity: 1,
    delay: 300,
    transform: `translateY(0px)`,
    config: config.stiff,
    from: { opacity: 0, transform: `translateY(-20px)` },
  })

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {animatedLinks.map((props, index) => (
          <animated.li style={props} key={index}>
            <Link to={`/#${links[index].title.toLowerCase()}`}>
              <span>{`0${links[index].id}.`}</span>
              {links[index].title}
            </Link>
          </animated.li>
        ))}
      </ul>
      <MobileMenu links={links} />
    </div>
  )
}

export default Menu
