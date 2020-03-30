import React from "react"
import Logo from "../logo"
import Menu from "../menu"
import styles from "./header.module.css"
import { HeaderLink } from "../types/header"

export interface HeaderProps {
  links: HeaderLink[]
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu links={links} />
    </header>
  )
}

export default Header
