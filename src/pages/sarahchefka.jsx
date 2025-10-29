import {useEffect} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Sarahchefka = ({setProjectCounter, visitPage}) => {
  // ROOM 09
  useEffect(() => {
      setProjectCounter(prev => prev+1)
      visitPage("/09")
    }, [])

     const workdata = {
    "title": "Why I Am Seeing This",
    "artist": [{
      "name": "Sarah Chekfa",
      "ig": "girlboss__interrupted",
      "web": "https://sarahchekfa.me/"
    }],
    "date": "2025"
    }
    
  return (
    <>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>
          
        <div className="center-container">

          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
            text... fiction
          </motion.div>

        </div>

        <AboutWork data={workdata}/>
    </>
  )
}

export default Sarahchefka