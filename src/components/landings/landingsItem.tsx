import React from "react"
import ImageCarousel from "../imageCarousel"
import { Landing } from "../types/landings"
import styles from "./landingsItem.module.css"

const LandingsItem: React.FC<{ item: Landing }> = ({ item }) => {
  return (
    <div className={styles.item}>
      {item.name}
      <a aria-label={item.name} rel="noopener noreferrer" target="_blank" href={item.link}>
        <ImageCarousel fileName={item.img} alt={item.name} />
      </a>
    </div>
  )
}

export default LandingsItem
