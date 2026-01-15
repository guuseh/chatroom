import {useEffect, useState, useRef} from 'react'
import {motion, useMotionValue} from 'motion/react'
import AboutWork from "../components/AboutWork.jsx"
// @refresh reset

const James = ({setProjectCounter, visitPage, isSmall}) => {
  // ROOM 05 = hands

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

  const xleft = isSmall ? useMotionValue(imgWidth/2) : useMotionValue(imgWidth/2-50)
  const xright = isSmall ? useMotionValue(-imgWidth/2) : useMotionValue(-imgWidth/2+50)
  const opleft = useMotionValue(1)
  const opright = useMotionValue(0.3)

    const workdata = {
    "title": activeSide == 'l' ? "Solace" : "Pawns",
    "artist": [{
      "name": "bloodpiano1",
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
                xright.set(isSmall ? -imgWidth/2 : -imgWidth/2+50)
                xleft.set(isSmall ? imgWidth/2 : imgWidth/2-50)
            }, 200);
        }

        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };
    }, [click]);


  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"Solace <span style={{fontSize: isSmall ? "1.5rem" : "3rem"}}>&nbsp;&nbsp;& &nbsp;</span> Pawns"</motion.div>

    <div className="center-container">
      {!isSmall && <motion.div id="james-imgs-container" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
        <motion.div custom={"l"} initial={{x: xleft.current, opacity: opleft.current, scale: 1}} whileHover={!left && {x: xleft.current-25, transition: {duration: 0.2}}} animate={{x: xleft.current, opacity: opleft.current, scale: left? 1 : 0.95, transition: {duration: 0.2}}} style={{zIndex: left ? 10 : 0, cursor: left ? 'var(--default)' : 'var(--pointer)'}} onClick={() => {handleClick('l')}} className="james-img-div"><img src="/img/05/james1.jpeg" style={{cursor: left ? 'var(--default)' : 'var(--pointer)'}}/></motion.div>
        <motion.div custom={"r"} initial={{x: xright.current, opacity: opleft.current, scale: 0.95}} whileHover={!right && {x: xright.current+25, transition: {duration: 0.2}}} animate={{x: xright.current, opacity: opright.current, scale: right? 1 : 0.95, transition: {duration: 0.2}}} style={{zIndex: right ? 10 : 0, cursor: right ? 'var(--default)' : 'var(--pointer)'}} onClick={() => {handleClick('r')}} className="james-img-div"><img src="/img/05/james2.jpeg" style={{cursor: right ? 'var(--default)' : 'var(--pointer)'}}/></motion.div>
      </motion.div>}
      {isSmall && <motion.div id="james-imgs-container" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
        <motion.div custom={"l"} initial={{y: xleft.current, opacity: opleft.current, scale: 1}} whileHover={!left && {y: xleft.current-25, transition: {duration: 0.2}}} animate={{y: xleft.current, opacity: opleft.current, scale: left? 1 : 0.95, transition: {duration: 0.2}}} style={{zIndex: left ? 10 : 0, cursor: left ? 'var(--default)' : 'var(--pointer)'}} onClick={() => {handleClick('l')}} className="james-img-div"><img src="/img/05/james1.jpeg" style={{cursor: left ? 'var(--default)' : 'var(--pointer)'}}/></motion.div>
        <motion.div custom={"r"} initial={{y: xright.current, opacity: opleft.current, scale: 0.95}} whileHover={!right && {y: xright.current+25, transition: {duration: 0.2}}} animate={{y: xright.current, opacity: opright.current, scale: right? 1 : 0.95, transition: {duration: 0.2}}} style={{zIndex: right ? 10 : 0, cursor: right ? 'var(--default)' : 'var(--pointer)'}} onClick={() => {handleClick('r')}} className="james-img-div"><img src="/img/05/james2.jpeg" style={{cursor: right ? 'var(--default)' : 'var(--pointer)'}}/></motion.div>
      </motion.div>}
    </div>

    <AboutWork data={workdata} isSmall={isSmall}/>
    </>
  )
}

export default James