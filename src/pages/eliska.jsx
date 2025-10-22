import {useEffect} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Eliska = ({setProjectCounter, visitPage}) => {
  // ROOM 03
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/03")
  }, [])

const workdata = {
    "title": "user goes to kether",
    "artist": [{
      "name": "Angel Kether",
      "ig": "eliskajah",
      "web": "http://angelkether.neocities.org/"
    },{
      "name": "BLUEBUNNY & twinflamegirl",
      "ig": "bluebunny_twinflamegirl"
    }],
    "date": "2022-ongoing"
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

export default Eliska