import React, { useState } from "react"
import { useTransition, animated } from "react-spring"
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa"
import MenuBurgerButton from "./menuBurgerButton"
import { Link } from "gatsby"
import { HeaderLink } from "../types/header"
import styles from "./mobileMenu.module.css"

interface MobileMenuProps {
  links: HeaderLink[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, toggleMenu] = useState(false)

  const socialLinks = [
    {
      fa: <FaGithubSquare />,
      link: "https://www.linkedin.com/in/marcin-janus-b5718b147/"
    },
    {
      fa: <FaLinkedin />,
      link: "https://github.com/schriker"
    },
    {
      fa: <FaBehanceSquare />,
      link: "https://www.behance.net/janekmachi6d5b"
    },
  ]

  const fadeIn = useTransition(isOpen, null, {
    enter: {
      opacity: 1,
      transform: "translateX(0vw)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(100vw)",
    },
    from: {
      opacity: 0,
      transform: "translateX(100vw)",
    },
  })

  return (
    <div className="hide-large">
      <MenuBurgerButton isOpen={isOpen} toggleMenu={() => toggleMenu(!isOpen)} />
      {fadeIn.map(
        ({ item, key, props: { opacity, transform } }) => item && (
          <animated.div key={key} style={{ opacity: opacity }} className={styles.wrapper}>
            <div role="button" tabIndex={0} onKeyDown={() => toggleMenu(false)} onClick={() => toggleMenu(false)} className={styles.backdrop}></div>
            <animated.div key={key} style={{ transform: transform }} className={styles.container}>
              <ul className={styles.menu}>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={`/#${link.title.toLowerCase()}`}>
                      <span>{`0${link.id}.`}</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.social}>
                {socialLinks.map((link, index) => <li key={index}><a aria-label="Social link" href={link.link}>{link.fa}</a></li>)}
              </ul>
            </animated.div>
          </animated.div>
        )
      )}
    </div>
  )
}

export default MobileMenu
