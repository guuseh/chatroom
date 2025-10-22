import {useEffect, useState, useRef} from 'react'
import {motion, useMotionValue} from 'motion/react'
import AboutWork from "../components/AboutWork.jsx"
// @refresh reset

const James = ({setProjectCounter, visitPage}) => {
  // ROOM 05

  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/05")
  }, [])



  const imgWidth = window.innerWidth * 0.4
  const [left, setLeft] = useState(true)
  const [right, setRight] = useState(false)
  const [activeSide, setSide] = useState('l')
  const [click, setClick] = useState(false)
  const timerId = useRef(null);

  const xleft = useMotionValue(imgWidth/2-50)
  const xright = useMotionValue(-imgWidth/2+50)
  const opleft = useMotionValue(1)
  const opright = useMotionValue(0.3)

    const workdata = {
    "title": activeSide == 'l' ? "Solace" : "Pawns",
    "artist": [{
      "name": "BloodPiano1",
      "ig": "bloodpiano1",
    }],
    "date": "2025"
    }

  const handleClick = (side) => {
    if(side !== activeSide){
      setClick(true)
      setSide(side)
      xright.set(25)
      xleft.set(-25)
      opleft.set(opright.current)
      opright.set(opleft.prev)
    }
    if(side == 'l'){
      setLeft(true); setRight(false)
    }
    if(side == 'r'){
      setLeft(false); setRight(true)
    }
    
  }
  useEffect(() => {
        if (click) {

            //Creating a timeout
            timerId.current = setTimeout(() => {
                setClick(false);
                xright.set(-imgWidth/2+50)
                xleft.set(imgWidth/2-50)
            }, 200);
        }

        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };
    }, [click]);


  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"Solace <span style={{fontSize: "3rem"}}>&nbsp;&nbsp;& &nbsp;</span> Pawns"</motion.div>

    <div className="center-container">
      <motion.div id="james-imgs-container" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
        <motion.div custom={"l"} initial={{x: xleft.current, opacity: opleft.current}} whileHover={!left && {x: xleft.current-25, transition: {duration: 0.2}}} animate={{x: xleft.current, opacity: opleft.current, transition: {duration: 0.2}}} style={{zIndex: left ? 10 : 0, cursor: left ? 'default' : 'pointer'}} onClick={() => {handleClick('l')}} className="james-img-div"><img src="/img/05/james1.png" /></motion.div>
        <motion.div custom={"r"} initial={{x: xright.current, opacity: opleft.current}} whileHover={!right && {x: xright.current+25, transition: {duration: 0.2}}} animate={{x: xright.current, opacity: opright.current, transition: {duration: 0.2}}} style={{zIndex: right ? 10 : 0, cursor: right ? 'default' : 'pointer'}} onClick={() => {handleClick('r')}} className="james-img-div"><img src="/img/05/james2.png" /></motion.div>
      </motion.div>
    </div>

    <AboutWork data={workdata}/>
    </>
  )
}

export default James