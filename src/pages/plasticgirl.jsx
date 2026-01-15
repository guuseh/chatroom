import {useEffect} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Plasticgirl = ({setProjectCounter, visitPage, isSmall}) => {
  // ROOM 08 = 6 winged moth
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
          
        <div className="theatre-container">

          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
            
          <div style={{position: "absolute", zIndex: 0, top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "var(--pink)"}}>loading video...</div>
          <div className="theatre-video">
            <iframe style={{height: isSmall ? null : "100%", width: isSmall ? "100%": null, aspectRatio: "4/3", border: "none"}} src="https://drive.google.com/file/d/1wCT1cjG4kx0IRHrKa0qLxZKqACqYOHXD/preview"></iframe>
          </div>

          </motion.div>

        </div>

        <AboutWork data={workdata} isSmall={isSmall}/>
    </>
  )
}

export default Plasticgirl