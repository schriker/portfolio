import { useSpring, config } from "react-spring"

const useSlidein = (trigger?: boolean) => {
  let options = {
    transform: `translateY(0px)`,
  }

  if ( typeof(trigger) === 'boolean' ) {
    options = {
      transform: trigger ? `translateY(0px)` : `translateY(+15px)`,
    }
  }

  const props = useSpring({
    ...options,
    from: {
      transform: `translateY(+15px)`,
    },
    config: config.stiff,
  })

  return props
}

export default useSlidein
