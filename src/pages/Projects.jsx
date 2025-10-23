import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion, AnimatePresence, stagger} from 'motion/react'

const Projects = ({projects}) => {
  const navigate = useNavigate()
  const [window, setWindow] = useState('[+]')
  const [open, setOpen] = useState(false)
  const [display, setDisplay] = useState(false)
  const [hover, setHover] = useState(false)
  const [mouse, setMouse] = useState([])

  const handleAbout = () => {
    setOpen(!open)
    setWindow(open? "[+]" : "[ ]")
  }


  return (
    <motion.div id="projects-page" style={{zIndex: -1}} initial={{backgroundColor: "#000000"}} animate={{backgroundColor: "#00000000", transition: {delay: 0.2, duration: 0.5}}}>
        <div id="projects-about-window"  onClick={() => handleAbout()}>{window}</div>

        <motion.div id="projects-img-container">
            {projects.map((p, i) => {
                return <motion.div key={i*100} style={{alignSelf: i % 3 == 0 ? "center" : i % 5 == 0 ? "flex-end" : "flex-start", justifySelf: i % 3 == 0 ? "flex-end" : i % 5 == 0 ? "flex-start" : "center"}}>
                  { p != 0 && p != "/06" && p != "/11" && p != "/12" ?
                  <motion.div className="projects-img-div" initial={{scale: 0}} animate={{scale: 1, transition: {duration: 0.2, delay: i/20}}}>
                      <img key={i} onMouseEnter={(e) => {setHover(true); setMouse([e.clientX, e.clientY])}} onMouseLeave={(e) => setHover(false)} style={{alignSelf: i % 3 == 0 ? "center" : i % 5 == 0 ? "flex-start" : "flex-end", margin: i % 3 == 0 ? "0 auto 0 0" : i % 5 == 0 ? "0 0 0 auto" : "0 auto 0 auto", cursor: "pointer"}} onClick={() => {navigate("/room"+p)}} className="projects-img" src={`/img/front${p}.png`}/>
                      {/* {hover&& <span style={{position: "absolute", zIndex: 20, left: mouse[0], top: mouse[1], fontFamily: "jacquard", background: "#d9d9d9", lineHeight: "1rem"}}>enter</span>} */}
                  </motion.div>   : p != 0 && 
                    <motion.div initial={{scale: 0}} animate={{scale: 1, transition: {duration: 0.2, delay: i/20}}} className="projects-img-div" style={{position: "relative", pointerEvents: "none"}}>
                      <img key={i*50} style={{alignSelf: i % 4 == 0 ? "center" : i % 5 == 0 ? "flex-start" : "flex-end", margin: i % 4 == 0 ? "0 auto 0 0" : i % 3 == 0 ? "0 0 0 auto" : "0 auto 0 auto", opacity: 0.4}} onClick={() => {navigate("/room"+p)}} className="projects-img" src={`/img/front${p}.png`}/>
                      <span style={{position: "absolute", left: i % 4 == 0 ? "10%" : i % 3 == 0 ? "40%" : "25%", top: i % 5 == 0 ? "40%" : i % 4 == 0 ? "50%" : "60%", fontFamily: "jacquard", background: "#d9d9d9", lineHeight: "1rem"}}>locked</span>
                    </motion.div>    
                    }
                </motion.div>
            })}
        </motion.div>

        <div><img id="exit-door" src={"img/front/exit.png"} /></div>

        <AnimatePresence>
          {open && <>
          
          <motion.div id="projects-about" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div id="demon-underlay-close" onClick={() => handleAbout()}></div>
              <p>The Chatroom & The Dollhouse</p>
              
              <p>
                presents artists investigating how identities are staged and constructed in digital spaces. Visitors navigate AI-enhanced thresholds, miniature relics, tokens, and artefacts to encounter works such as blinking ASCII eyes, self-writing chatbots, angelic memes, and an anthropomorphic war fantasy.
              </p>
              <p>
                The pavilion traces wandering online, searching, discovering, and negotiating identity and attention, turning media consumption into a performative exploration of presence, perception, and unseen forces.
              </p>
              <p style={{fontFamily: "olditalic"}}>
                Who lives in the dollhouse, and who watches from the chatroom?
              </p>
              <p style={{fontFamily: "olditalic", fontSize: "1rem"}}>
                Curated by Sarah Khadra Hasni and Joshua Esser<br/>
                Developed by Guus Hoeberechts
              </p>
          </motion.div></>}
        </AnimatePresence>
    </motion.div>
  )
}

export default Projects