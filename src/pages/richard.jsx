import { useEffect, useRef } from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Richard = ({setProjectCounter, visitPage, isSmall}) => {

     useEffect(() => {
          setProjectCounter(prev => prev+1)
          visitPage("/11")
        }, [])
    
        const workdata = {
            "title": "Recovered Network Transmission 09.05.2046",
            "artist": [{
                "name": "Larry Sportello",
                "ig": "larry.sportello",
                // "web": "https://sarahchekfa.me/"
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
      <div className="theatre-video" style={{cursor: "var(--pointer)", display: "flex", justifyContent: "center"}}>
        <iframe style={{height: isSmall ? "70dvh" : "100%", width: isSmall ? "auto" : null, aspectRatio: "10/16", border: "none", cursor: "var(--pointer)"}} fullScreen src="https://drive.google.com/file/d/11ViICbxbgc98c0D_F4jHFgHwdlBS005A/preview"></iframe>
      </div>
    </motion.div>
    </div>

    <AboutWork data={workdata} isSmall={isSmall}/>
    </>
  )
}

export default Richard