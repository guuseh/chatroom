import {useState, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion, AnimatePresence, stagger} from 'motion/react'
import ExitDoor from "../components/ExitDoor.jsx"

const Projects = ({projects, urls, visited, showObjects}) => {
  const navigate = useNavigate()
  const [window, setWindow] = useState('about-closed')
  const [open, setOpen] = useState(false)
  const [display, setDisplay] = useState(false)
  const [hover, setHover] = useState(false)
  const [mouse, setMouse] = useState([])
  const [animated, setAnimated] = useState(false)



  const handleAbout = () => {
    setOpen(!open)
    // setWindow(open? "about-closed" : "about-open")
  }




  return (
    <motion.div id="projects-page" style={{zIndex: -1}} initial={{backgroundColor: "#000000"}} animate={{backgroundColor: "#00000000", transition: {delay: 0.2, duration: 0.5}}}>
        <motion.div id="projects-about-window" onClick={() => handleAbout()} ><motion.img animate={open ? {rotate: 180, transition: {duration: 0.3}} : {rotate: 0, transition: {duration: 0.3}}} src={`/img/front/about-closed.png`} style={{height: "100%", cursor: "var(--pointer)"}}/></motion.div>

        <motion.div id="projects-img-container">
            {projects.map((p, i) => {
                return <motion.div key={i*100} style={{alignSelf: i % 3 == 0 ? "center" : i % 5 == 0 ? "flex-end" : "flex-start", justifySelf: i % 3 == 0 ? "flex-end" : i % 5 == 0 ? "flex-start" : "center"}}>
                  { p != 0 && p != "/09" && p != "/11" && p != "/12" ?
                  <motion.div className="projects-img-div" initial={{scale: 0}} animate={showObjects && {scale: 1, transition: {duration: 0.2, delay: i/15}}}>
                      <img key={i} onMouseEnter={(e) => {setHover(true); setMouse([e.clientX, e.clientY])}} onMouseLeave={(e) => setHover(false)} style={{alignSelf: i % 3 == 0 ? "center" : i % 5 == 0 ? "flex-start" : "flex-end", margin: i % 3 == 0 ? "0 auto 0 0" : i % 5 == 0 ? "0 0 0 auto" : "0 auto 0 auto", cursor: "var(--pointer)"}} onClick={() => {navigate("/room"+p)}} className="projects-img projects-img-active" src={`/img/front${p}.png`}/>
                  </motion.div>   : p != 0 && 
                    <motion.div initial={{scale: 0}} animate={showObjects && {scale: 1, transition: {duration: 0.2, delay: i/15}}} className="projects-img-div" style={{position: "relative"}}>
                      <img key={i*50} style={{alignSelf: i % 4 == 0 ? "center" : i % 5 == 0 ? "flex-start" : "flex-end", margin: i % 4 == 0 ? "0 auto 0 0" : i % 3 == 0 ? "0 0 0 auto" : "0 auto 0 auto", opacity: 0.4}} className="projects-img" src={`/img/front${p}.png`}/>
                      <span style={{position: "absolute", left: i % 4 == 0 ? "0%" : i % 3 == 0 ? "0%" : "0%", top: i % 5 == 0 ? "40%" : i % 4 == 0 ? "50%" : "60%", fontFamily: "jacquard", background: "var(--grey)", lineHeight: "1rem", cursor: "var(--pointer)"}}><a href="https://docs.google.com/forms/d/e/1FAIpQLSenMiPVBC29Pl1h9PBehbivuFpgXhqn_qUfXKItLPQYz8swDA/viewform" target="_blank">receive clue?</a></span>
                    </motion.div>    
                    }
                </motion.div>
            })}
        </motion.div>

        {/* <ExitDoor /> */}

        <AnimatePresence>
          {open && <>
          
          <motion.div id="projects-about" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div id="demon-underlay-close" onClick={() => handleAbout()}></div>
              <p style={{marginTop: "20px"}}>
                The &#123;Chatroom&#125; & The &#123;Dollhouse&#125;<br/>
                …is a hybrid art project…
              </p>

              <p>The &#123;Dollhouse&#125; exists at &lt;URL&gt; ‘thedoll.house’ as a poetic webspace where collectable objects open portals. Each participant is assigned a /room/ where their artwork lives.</p>
              
              <p>The website will be updated with new artefacts between its launch on November 1st, 2025, and its completion on March 31st, 2026.</p>
              
              <p>A first IRL and intimate online exploration will offer visitors a guided engagement with its immersive digital world, deepening the interactive experience. Date and location TBA.</p>
              
              <p>The &#123;Chatroom&#125; is the &lt;IRL&gt; mirror. Date and location TBA.</p>
              
              <p>
                Who lives in the Dollhouse<br/>
                and who watches from the Chatroom?
              </p>
              
              <p style={{marginTop: "20px", fontSize: "1rem"}}>
                Curated by 
                Sarah Khadra Hasni <span style={{fontSize: "0.9rem", opacity: 0.8}}><a href={`https://www.instagram.com/succubi`} target="_blank">(Instagram)</a> <a href={`https://sarahkhadra.com`} target="_blank">(Website)</a></span> 
                &nbsp;and Joshua Esser <span style={{fontSize: "0.9rem", opacity: 0.8}}><a href={`https://www.instagram.com/joshuaesser/`} target="_blank">(Instagram)</a></span><br/>
                Developed by Guus Hoeberechts <span style={{fontSize: "0.9rem", opacity: 0.8}}><a href={`https://www.guushoeberechts.nl`} target="_blank">(Website)</a></span><br/><br/>
                <a href="mailto:thechatroomandthedollhouse@gmail.com" style={{opacity: 0.8}}>(Send us an email)</a><br/><br/>
                As part of The Wrong Biennale 2025–26
              </p>
          </motion.div></>}
        </AnimatePresence>
    </motion.div>
  )
}

export default Projects