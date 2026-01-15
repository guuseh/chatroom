import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const Home = ({isSmall}) => {
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [mouse, setMouse] = useState([])
  const [showNames, setShowNames] = useState(false);


  const nameVariants = {
    hidden: (i) => ({
      x: i[0]+"vw",
      y: i[1]+"vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        // delay: i[2] / 10
      }
    }),
    show: (i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: i[2] / 10 + 0.1
      }
    })
  }
  const whoVariants = {
    hidden: {
      y: "-20vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        // delay: i[2] / 10
      }
    },
    show: {
      y: isSmall ? 130 : 10,
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    },
    up: {
      // y: -500,
      opacity: 0,
      transition: {
        duration: 0.4,
      }
    }
  }

  const houseVariants = {
    clicked: {
      scale: 10,
      opacity: 0,
      transition: {
        scale: {duration: 1,
          ease: "easeIn"},
        opacity: {
          duration: 0.3,
          delay: 0.7
        }
      }
    },
    up: {
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    init: {
      y: 80
    }
  }

  console.log(showNames)

  return (
    <>
    {hover && <div className="tooltip" style={{top: mouse[1], left: mouse[0]}}>enter</div>}

    <motion.div id="landing-container" initial={{background: "linear-gradient(180deg, rgba(255, 240, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)"}} animate={click&&{background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)", transition: {delay: 0.2, duration: 0.7}}}>
      {!isSmall && <motion.div className="landing-below landing-names" >
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 20, 1]}>bloodpiano1</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 10, 2]}>Guus Hoeberechts</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 5, 3]}>Plastic Girl</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 0, 4]}>Demon Lovers Inc.</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, -5, 5]}>Sotce</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, -10, 6]}>Angel Kether</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, -20, 7]}>Sarah Khadra</motion.div>
      </motion.div>}

      <div style={{position: "relative"}}>
        <motion.img id="landing-dollhouse" onClick={()=>setClick(true)} animate={click ? "clicked" : showNames && isSmall ? "up" : isSmall ? "init" : null} variants={houseVariants} onAnimationComplete={(latest) => {latest == "clicked" && navigate("/works")}} onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), !isSmall && setHover(true)}} onMouseLeave={() => !isSmall && setHover(false)} src={hover || click ? "/img/front/dollhouse-open.png" : "/img/front/dollhouse-front.png"}/>
        {isSmall && <div style={{position: "absolute", top: "65%", fontFamily: "jacquard", background: "var(--grey)", fontSize: "1rem", pointerEvents: "none", opacity: click ? 0 : 1}}>click to enter</div>}
        <motion.div onClick={() => isSmall && setShowNames(!showNames)} className="landing-below pink-button" variants={whoVariants} animate={showNames && isSmall ? "up" : hover || isSmall? "show" : "hidden"} initial="hidden" style={{zIndex: click ? -1 : 10}}>who lives in the dollhouse?</motion.div>
      </div>

      <div className="landing-below landing-names">
        {isSmall && <> <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 20, 1]}>bloodpiano1</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 10, 2]}>Guus Hoeberechts</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 5, 3]}>Plastic Girl</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, 0, 4]}>Demon Lovers Inc.</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, -5, 5]}>Sotce</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, -10, 6]}>Angel Kether</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[25, -20, 7]}>Sarah Khadra</motion.div>
        </>}
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, 20, 8]}>Noura Tafeche</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, 10, 9]}>Tobia Paolo Bettoni</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, 5, 10]}>Sarah Chekfa</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, 0, 11]}>Everyoneisagirl</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, -5, 12]}>Parker Ito</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, -10, 13]}>Bogna Konior</motion.div>
        <motion.div variants={nameVariants} animate={hover || showNames? "show" : "hidden"} initial="hidden" custom={[-25, -20, 14]}>Joshua Esser</motion.div>
      </div>
      
    </motion.div>
    </>
  )
}

export default Home