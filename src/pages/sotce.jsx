import {useEffect} from 'react'
import {motion} from 'motion/react'
import AboutWork from "../components/AboutWork.jsx"

const Sotce = ({setProjectCounter, visitPage}) => {
  // ROOM 10
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/10")
  }, [])

  const workdata = {
    "title": "is it genuine interest you feel?",
    "artist": [{
      "name": "Bogna Konior",
      "ig": "bognamk",
      "web": "https://www.bognamk.com/"
    }],
    "date": "2025"
    }

  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

    <div className="theatre-container">
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1, ease: "easeIn"}}}>
      <video className="theatre-video" controls>
        <source src="/img/10/sotce.mp4" />
      </video>
    </motion.div>
    </div>

    <AboutWork data={workdata}/>
    </>
  )
}

export default Sotce