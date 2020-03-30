import React, { useState } from "react"
import { animated, interpolate } from "react-spring"
import LandingsItem from "./landingsItem"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Swiper from "react-id-swiper"
import "./swiper.css"
import styles from "./landings.module.css"
import useParalax from "../../hooks/useParalax"
import useFadein from "../../hooks/useFadein"
import useSlidein from "../../hooks/useSlidein"
import { useStaticQuery, graphql } from "gatsby"
import { Landing } from "../types/landings"

const trans = (x: number, y: number) =>
  `translate3d(${-x / 100}px, ${-y / 70}px, 0)`

const Landings: React.FC<{ inView: boolean }> = ({ inView }) => {
  const {
    allLandingsJson: { edges },
  } = useStaticQuery(graphql`
    query LandingsQuery {
      allLandingsJson {
        edges {
          node {
            img
            link
            name
          }
        }
      }
    }
  `)

  const paralax = useParalax()
  const fadeIn = useFadein(inView)
  const slideIn = useSlidein(inView)

  const landings = Array.from<any, Landing>(edges, edge => {
    return {
      ...edge.node,
    }
  })

  const [swiper, updateSwiper] = useState(null)

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      960: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      }
    }
  }

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  return (
    <animated.div style={{ ...fadeIn, ...slideIn }} className={styles.container}>
      <button aria-label="Previous" className={styles.button} onClick={goPrev}>
        <FaAngleLeft />
        <animated.span style={{ transform: interpolate([paralax.x, paralax.y], trans) }}></animated.span>
      </button>
      <Swiper {...swiperParams} getSwiper={updateSwiper}>
        {landings.map((landing, index) => (
          <div className={styles.item} key={index}>
            <LandingsItem item={landing} />
          </div>
        ))}
      </Swiper>
      <button aria-label="Next" className={styles.button} onClick={goNext}>
        <FaAngleRight />
        <animated.span style={{ transform: interpolate([paralax.x, paralax.y], trans) }}></animated.span>
      </button>
    </animated.div>
  )
}

export default Landings
