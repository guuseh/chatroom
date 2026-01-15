import {useState, useEffect, useRef} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Parkerito = ({setProjectCounter, visitPage, isSmall}) => {
  // ROOM 07 = 3 8-ball
  const ref = useRef();
  const [shiftLeft, setShiftLeft] = useState()
  const [shiftTop, setShiftTop] = useState()

  // console.log(ref.current.offsetWidth)
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/07")
  }, [])

  const workdata = {
    "title": "eyes",
    "artist": [{
      "name": "Parker Ito",
      "ig": "creamydreamy",
      "web": "https://parker.sex"
    }],
    "date": "2024"
    }

  useEffect(() => {
    getMeasurements();
  }, [shiftLeft])

  const getMeasurements = () => {
    console.log(ref.current)
    let left = (1840 - ref.current.offsetWidth) / 2
    let top = (1210 - ref.current.offsetHeight) / 2
    setScroll(left, top)
    
  }
  const setScroll = (left, top) => {
    setShiftLeft(left)
    setShiftTop(top)
  }
  
  useEffect(() => {
      window.addEventListener('resize', getMeasurements)
      return () => window.removeEventListener("resize", getMeasurements)
  }, [])

  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

    <div class="theatre-container">
      <motion.div id="eyes-container" ref={ref}  initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
        {/* {html} */}
        <iframe id="parkerframe" src="https://parker.sex/eyes" 
          style={{backgroundColor:"#aaa", left: `-${shiftLeft}px`, top: `-${shiftTop}px`, pointerEvents: "none"}}/>
      </motion.div>
    </div>

    <AboutWork data={workdata} isSmall={isSmall}/>
    </>
  )
}

export default Parkerito