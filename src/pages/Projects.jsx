import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion, AnimatePresence} from 'motion/react'

const Projects = ({projects}) => {
  const navigate = useNavigate()
  const [window, setWindow] = useState('[+]')
  const [open, setOpen] = useState(false)
  const [display, setDisplay] = useState(false)

  const handleAbout = () => {
    setOpen(!open)
    setWindow(open? "[+]" : "[ ]")
  }


  return (
    <div id="projects-page">
        <div id="projects-about-window"  onClick={() => handleAbout()}>{window}</div>
        <div id="projects-img-container">
            {projects.map((p, i) => {
                return <motion.div key={i*100} style={{alignSelf: i % 3 == 0 ? "center" : i % 5 == 0 ? "flex-start" : "flex-end", justifySelf: i % 3 == 0 ? "center" : i % 5 == 0 ? "flex-start" : "flex-end"}}>
                  { p != 0 && p != "/06" && p != "/11" && p != "/12" ?
                    <img key={i} style={{objectPosition: i % 5 == 0 ? "right top" : i % 3 == 0 ? "left bottom" : "center"}} onClick={() => {navigate("/room"+p)}} className="projects-img" src={`/img/front${p}.png`}/>
                  : p != 0 && 
                    <div style={{position: "relative"}}>
                      <img key={i*50} style={{objectPosition: i % 5 == 0 ? "right top" : i % 3 == 0 ? "left bottom" : "center", opacity: 0.4}} onClick={() => {navigate("/room"+p)}} className="projects-img" src={`/img/front${p}.png`}/>
                      <span style={{position: "absolute", left: i % 5 == 0 ? "30%" : i % 3 == 0 ? "0" : "25%", top: i % 5 == 0 ? "40%" : i % 3 == 0 ? "50%" : "40%", fontFamily: "jacquard", background: "#d9d9d9", lineHeight: "1rem"}}>locked</span>
                    </div>    
                    }
                </motion.div>
            })}
        </div>

        <div><img id="exit-door" src={"img/front/exit.png"} /></div>

        <AnimatePresence>
          {open && <motion.div id="projects-about" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
          </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default Projects