import {useEffect} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Plasticgirl = ({setProjectCounter, visitPage}) => {
  // ROOM 08
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/08")
  }, [])
  const workdata = {
    "title": "I am Home",
    "artist": [{
      "name": "Plastic Girl",
      "ig": "happytearsforever",
      "yt": "happytearsforever",
      "web": "https://www.happytearsforever.com/"
    }],
    "date": "2025"
    }

  return (
    <>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>
          
        <div className="center-container">

          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
            heeee
          </motion.div>

        </div>

        <AboutWork data={workdata}/>
    </>
  )
}

export default Plasticgirl