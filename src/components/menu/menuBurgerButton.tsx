import React from "react"
import styles from "./menuBurgerButton.module.css"

interface MenuBurgerButtonProps {
  isOpen: boolean,
  toggleMenu: () => void
}

const MenuBurgerButton: React.FC<MenuBurgerButtonProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div role="button" aria-pressed={isOpen} tabIndex={0} onClick={toggleMenu} onKeyDown={toggleMenu} className={isOpen ? `${styles.button} ${styles.active}` : `${styles.button}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuBurgerButton
