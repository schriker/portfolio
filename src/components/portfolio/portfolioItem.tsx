import React from "react"
import { animated } from "react-spring"
import { FaGithubSquare, FaExternalLinkSquareAlt } from 'react-icons/fa';
import PortfolioThumbnail from "./portfolioThumbnail"
import { useInView } from "react-intersection-observer"
import useSlidein from "../../hooks/useSlidein"
import useFadein from "../../hooks/useFadein"
import { Project } from "../types/portfolio"
import styles from "./portfolioItem.module.css"

interface ProjectItemProps {
  data: Project
}

const PortfolioItem: React.FC<ProjectItemProps> = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: .2,
    triggerOnce: true,
  })

  const fadeIn = useFadein(inView)
  const slideIn = useSlidein(inView)

  return (
    <animated.div style={{ ...fadeIn, ...slideIn }} className={styles.container}>
      <div ref={ref} className={styles.content}>
        <div className={styles.title}>
          <h4>{data.name}</h4>
          <ul>
            <li>
              <a aria-label="Github" href={data.github}><FaGithubSquare /></a>
            </li>
            <li>
              <a aria-label="LinkedIn" href={data.link}><FaExternalLinkSquareAlt /></a>
            </li>
          </ul>
        </div>
        <p>{data.description}</p>
        <ul className={styles.stack}>
          {data.stack.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </div>
      <PortfolioThumbnail link={data.link} name={data.name} img={data.img} />
    </animated.div>
  )
}

export default PortfolioItem
