import { useSpring, config } from "react-spring"

const useFadein = (trigger?: boolean) => {
  let options = {
    opacity: 1
  }

  if ( typeof(trigger) === 'boolean' ) {
    options = {
      opacity: trigger ? 1 : 0
    }
  }

  const props = useSpring({
    ...options,
    from: {
      opacity: 0,
    },
    config: config.stiff,
  })

  return props
}

export default useFadein
