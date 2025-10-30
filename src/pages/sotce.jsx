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
      "name": "Sotce",
      "ig": "sotce",
      "yt": "s0tce",
      "web": "https://sotce.com/"
    }],
    "date": "2025"
    }

  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

    <div className="theatre-container">
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1, ease: "easeIn"}}}>
      {/* <video className="theatre-video" controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
        <source src="/img/10/sotce.mp4" />
      </video> */}
      <div style={{position: "absolute", zIndex: 0, top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "var(--pink)"}}>loading video...</div>
      <div className="theatre-video" style={{cursor: "var(--pointer)"}}>
        <iframe style={{height: "100%", aspectRatio: "16/9", border: "none", cursor: "var(--pointer)"}} src="https://drive.google.com/file/d/1JHI8P2lDSmcdsPvkJr5lavGBO27p9l2P/preview"></iframe>
      </div>
    </motion.div>
    </div>

    <AboutWork data={workdata}/>
    </>
  )
}

export default Sotce