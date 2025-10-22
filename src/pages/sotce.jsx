import {useEffect} from 'react'
import {motion} from 'motion/react'

const Sotce = ({setProjectCounter, visitPage}) => {
  // ROOM 10
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/10")
  }, [])

  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"is it genuine interest you feel?"</motion.div>

    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1, ease: "easeIn"}}} className="theatre-container">
      <video className="theatre-video" controls>
        <source src="/img/10/sotce.mp4" />
      </video>
    </motion.div>
    </>
  )
}

export default Sotce