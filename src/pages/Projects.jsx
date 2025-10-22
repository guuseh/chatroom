import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion, AnimatePresence} from 'motion/react'

const Projects = ({projects}) => {
  const navigate = useNavigate()
  const [window, setWindow] = useState('[+]')
  const [open, setOpen] = useState(false)
  const [display, setDisplay] = useState(false)
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [shuffled, setShuffled] = useState()

  const handleAbout = () => {
    setOpen(!open)
    setWindow(open? "[+]" : "[ ]")
  }

  useEffect(() => {
    setArray(prev => [...prev, ...projects])

  }, [])

  useEffect(() => {
    const shuffledDivs = array
          .map(v => ({v, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({v}) => v)

      setShuffled(shuffledDivs)
  }, [array])

  console.log(array, shuffled)


  return (
    <div id="projects-page">
        <div id="projects-about-window"  onClick={() => handleAbout()}>{window}</div>
        <div id="projects-img-container">
            {projects.map((p, i) => {
                return <motion.div key={i*100}>
                  { p != 0 &&
                  <img key={i} onClick={() => {console.log("hello?"); navigate("/room"+p)}} className="projects-img" src={`/img/front${p}.png`}/>
                  }
                </motion.div>
            })}
        </div>

        <div><img id="exit-door" src={"img/front/exit.png"} /></div>

        <AnimatePresence>
          {open && <motion.div id="projects-about" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              The Chatroom & The Dollhouse
              <br/><br/>
              presents artists investigating how identities are staged and constructed in digital spaces. Visitors navigate AI-enhanced thresholds, miniature relics, tokens, and artefacts to encounter works such as blinking ASCII eyes, self-writing chatbots, angelic memes, and an anthropomorphic war fantasy.
              <br/><br/>
              The pavilion traces wandering online, searching, discovering, and negotiating identity and attention, turning media consumption into a performative exploration of presence, perception, and unseen forces.
              <br/><br/>
              Who lives in the dollhouse, and who watches from the chatroom?
              <br/><br/>
              Curated by Sarah Khadra Hasni and Joshua Esser<br/>
              Developed by Guus Hoeberechts
          </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default Projects