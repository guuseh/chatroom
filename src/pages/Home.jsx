import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const Home = () => {
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);


  const nameVariants = {
    hidden: (i) => ({
      x: i[0]+"vw",
      y: i[1]+"vh",
      transition: {
        duration: 0.2,
        // delay: i[2] / 10
      }
    }),
    show: (i) => ({
      x: 0,
      y: 0,
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
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
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
    }
  }

  return (
    <motion.div id="landing-container" initial={{background: "#00000000"}} animate={click&&{background: "#000000FF", transition: {delay: 0.2, duration: 0.7}}}>
      <motion.div className="landing-below landing-names" >
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, 20, 1]}>CrystalArmour</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, 10, 2]}>guus hoeberechts</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, 5, 3]}>plastic girl</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, 0, 4]}>demonlovers</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, -5, 5]}>sotce</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, -10, 6]}>angelkether</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[25, -20, 7]}>sarah khadra</motion.div>
      </motion.div>

      <div>
        <motion.img id="landing-dollhouse" onClick={()=>setClick(true)} animate={click&&"clicked"} variants={houseVariants} onAnimationComplete={() => navigate("/works")} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => setHover(false)} src="/img/front/dollhouse-front.png"/>
        <motion.div className="landing-below pink-button" variants={whoVariants} animate={hover? "show" : "hidden"} initial="hidden">who lives in the dollhouse?</motion.div>
      </div>

      <div className="landing-below landing-names">
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, 20, 8]}>noura tafeche</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, 10, 9]}>tobia paolo bettoni</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, 5, 10]}>sarah chefka</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, 0, 11]}>everyoneisagirl</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, -5, 12]}>parker ito</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, -10, 13]}>bogna konior</motion.div>
        <motion.div variants={nameVariants} animate={hover? "show" : "hidden"} initial="hidden" custom={[-25, -20, 14]}>joshua esser</motion.div>
      </div>
      
    </motion.div>
  )
}

export default Home