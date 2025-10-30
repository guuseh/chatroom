import {useEffect, useState} from 'react'
import {motion} from 'motion/react'
import AboutWork from "../components/AboutWork.jsx"

const Noura = ({setProjectCounter, visitPage}) => {
  // ROOM 06
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/06")
  }, [])

   const workdata = {
    "title": "Gijinka Complex",
    "artist": [
      {
      "name": "Check back come December to experience the full adventure...",
      "extra": " "
    },{
      "name": undefined
    },{
      "name": "Noura Tafeche",
      "ig": "nouratafeche",
      "web": "https://nouratafeche.com/"
    },{
      "name": "Tobia Paolo Bettoni",
      "ig": "archiviotpb",
    },{
      "name": undefined
    }, {
      "name": "✦",
      "extra": " ",
    },{
      "name": undefined
    }, {
      "name": "Noura Tafeche & Tobia Paolo Bettoni",
      "extra": "Concept, development & direction"
    },{
      "name": "Silvia Gnocchi",
      "extra": "Game Illustrations"
    },{
      "name": "Tobia Paolo Bettoni, Noura Tafeche & Silvia Gnocchi",
      "extra": "Character Design"
    },{
      "name": "Pierfrancesco Asuni",
      "extra": "Logo Design"
    }],
    "date": "2025"
    }

    const [left, setLeft] = useState(false)
    const [center, setCenter] = useState(false)
    const [right, setRight] = useState(false)
    const [leftH, setLeftH] = useState(true)
    const [centerH, setCenterH] = useState(true)
    const [rightH, setRightH] = useState(true)

    const fileVariants = {
      down: (i) => ({
        y: 0,
        zIndex: i == 'l' ? 3 : i == 'c' ? 4 : 5,
        scale: 1
      }),
      up: (i) => ({
        y: "-105%",
        zIndex: i == 'l' ? 10 : i == 'c' ? 11 : 12,
        scale: 1.2
      }),
      hover: (i) => ({
        y: i == 'l' && !left ? "-5%" 
            : i == 'r' && !right ? "-5%" 
            : i == "c" && !center ? "-5%" 
            : null
      })
    }

    // onAnimationComplete={(latest) => {latest == "start" && setStartType(true)}}

  return (
    <>
      <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

      <div className="page-container">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1, ease: "easeIn"}}}>
          <div id="noura-coverart" style={{height: "50vh", marginTop: "8vh"}}><img src="/img/06/coverart.png" style={{height: "100%"}}/></div>
          
          
        <motion.div onClick={() => {setRight(!right); right && setRightH(false)}} onAnimationComplete={(latest) => {latest == "down" && setRightH(true)}} whileHover={!right && rightH && "hover"} className="noura-file" id="noura-right" variants={fileVariants} custom="l" animate={right ? "up" : "down"}><img src="/img/06/character1.png" style={{height: "100%"}}/></motion.div>
        <motion.div onClick={() => {setCenter(!center); center && setCenterH(false)}} onAnimationComplete={(latest) => {latest == "down" && setCenterH(true)}} whileHover={!center && centerH && "hover"} className="noura-file" id="noura-center" variants={fileVariants} custom="c" animate={center ? "up" : "down"}><img src="/img/06/character2.png" style={{height: "100%"}}/></motion.div>
        <motion.div onClick={() => {setLeft(!left); left && setLeftH(false)}} onAnimationComplete={(latest) => {latest == "down" && setLeftH(true)}} whileHover={!left && leftH && "hover"} className="noura-file" id="noura-left" variants={fileVariants} custom="r" animate={left ? "up" : "down"}><img src="/img/06/character3.png" style={{height: "100%"}}/></motion.div>
         
        </motion.div>
      </div>

      <AboutWork data={workdata}/>
    </>
  )
}

export default Noura