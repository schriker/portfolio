import React from "react"
import styles from "./portfolioThumbnail.module.css"
import ImagePortfolio from "../imagePortfolio"

interface PortfolioThumbnailProps {
  link: string
  img: string
  name: string
}


const PortfolioThumbnail: React.FC<PortfolioThumbnailProps> = ({ link, img, name }) => {
  return (
    <div className={styles.thumbnail}>
      <a aria-label={name} href={link}><ImagePortfolio fileName={img} alt={name} /></a>
    </div>
  )  
}

export default PortfolioThumbnail
