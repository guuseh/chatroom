import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion, stagger} from 'motion/react'
import GuestBook from "../components/GuestBook.jsx"

const Exit = ({resetVisited}) => {
  const navigate = useNavigate();
  const [restart, setRestart] = useState(false)
  const [tooltip, setTooltip] = useState(false)
  const [mouse, setMouse] = useState([])
  const [tipText, setTipText] = useState('')

  const handleRestart = () => {
    if (typeof resetVisited === "function") {
      resetVisited();
    } else {
      // fallback: clear localStorage and force a reload
      localStorage.removeItem("visited");
      window.location.href = "/"; // full reload fallback
      return;
    }

    setRestart(true)
  }

  const shelfVariants = {
    init:{
      scale: 0
    },
    popUp: {
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0, 
      scale: 1,
      transition: {duration: 0.7}
    }
  }

  return (
    <div id="exit-page">

      {tooltip && <div className="tooltip" style={{top: mouse[1], left: mouse[0]}}>{tipText}</div>}

      {/* <GuestBook /> */}
      
      <motion.div id="exit-restart" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('start over')}} onMouseLeave={() => setTooltip(false)} onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")} animate={restart&& {scale: 6.4, transition: {duration: 1}}} style={{right: restart ? "48.5vw" : "var(--margin)", top: restart ? "39.5vh": "20px"}}>
        <img className="exit-img" src="/img/front/dollhouse-front.png" style={{cursor: "var(--pointer)", width: "auto"}}/>
      </motion.div>
      
      {/*
      <motion.div id="exit-left" variants={shelfVariants} initial="init" animate={restart ? "exit" : "popUp"}>
        <motion.div className="exit-shelf" variants={shelfVariants}>
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_1.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('a girl who grew wings accidentally')}} onMouseLeave={() => setTooltip(false)}/>
             // <div className="exit-img-text">a girl who grew wings accidentally</div>
          </div>
        </motion.div>
        <motion.div className="exit-shelf centered-shelf" variants={shelfVariants}>
          <div className="exit-img-div" style={{justifySelf: "center"}}>
              <img className="exit-img" src="/img/exit/CR_2.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('an influencer folding herself into the screen')}} onMouseLeave={() => setTooltip(false)}/>
              //<div className="exit-img-text">an influencer folding herself into the screen</div>
          </div>
        </motion.div>
        <motion.div className="exit-shelf" variants={shelfVariants}>
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_3.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('ghosts trapped in .jpg files')}} onMouseLeave={() => setTooltip(false)} />
             // <div className="exit-img-text">ghosts trapped in .jpg files</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div id="exit-center" variants={shelfVariants} initial="init" animate={restart ? "exit" : "popUp"}>
        <motion.div id="exit-info-title" variants={shelfVariants}>The Chatroom<br/>&<br/>The Dollhouse</motion.div>
        <motion.div className="exit-shelf" variants={shelfVariants}>
          <div style={{justifySelf: "center", width: "300px", transform: "translateY(10px)"}}>
              <img className="exit-img" src="/img/exit/CR_computer.png" style={{width: "100%"}}/>
              <div id="exit-signup">
                <div>
                  <div>Your journey pauses here but it's not over... Not all doors are open yet, some transcend the plains we have been moving on.</div>
                  <div>Thank you for exploring TC&TD: an interactive and hybrid exhibition project as part of the Wrong Biennale.</div>
                  <div>The &#123;Chatroom&#125; will be announced soon...The &#123;Dollhouse&#125; still hides secret rooms...</div>
                </div>
                <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSenMiPVBC29Pl1h9PBehbivuFpgXhqn_qUfXKItLPQYz8swDA/viewform" target="_blank">sign up for updates</a></div>
              </div>
              <div id="exit-comp-btns">
              <div id="exit-signup-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSenMiPVBC29Pl1h9PBehbivuFpgXhqn_qUfXKItLPQYz8swDA/viewform" target="_blank">Receive clues</a></div>
              <div id="exit-email-btn"><a href="mailto:thechatroomandthedollhouse@gmail.com" target="_blank">Have a question?</a></div>
              </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div id="exit-right" variants={shelfVariants} initial="init" animate={restart ? "exit" : "popUp"}>
        <motion.div className="exit-shelf" variants={shelfVariants}>
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_4.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('a jar of innocence')}} onMouseLeave={() => setTooltip(false)} />
             // <div className="exit-img-text">a jar of innocence</div>
          </div>
        </motion.div>
        <motion.div className="exit-shelf" variants={shelfVariants}>
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_5.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('horses, dolls, bunnies and apparitions')}} onMouseLeave={() => setTooltip(false)} />
             // <div className="exit-img-text">horses, dolls, bunnies and apparitions</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div initial="init" animate={restart ? "exit" : "popUp"} variants={shelfVariants} className="pink-button" id="exit-whowatches">who watches from the chatroom?</motion.div> */}

      {/* INCLUDING CHAT */}
       <motion.div id="exit-leftgrid" animate={restart &&{opacity: 0, transition: {duration: 0.7}}}>
          <div style={{gridArea: "top-left", justifyContent: "space-between"}} className="exit-shelf">
            <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_1.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('a girl who grew wings accidentally')}} onMouseLeave={() => setTooltip(false)}/>
              {/* <div className="exit-img-text">what happens if this text is super long?</div> */}
            </div>
            <div className="exit-img-div" >
              <img style={{justifySelf: "end"}} className="exit-img" src="/img/exit/CR_4.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('an influencer folding herself into the screen')}} onMouseLeave={() => setTooltip(false)}/></div>
          </div>
          <div style={{gridArea: "top-right"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}>
              <img className="exit-img" src="/img/exit/CR_2.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('ghosts trapped in .jpg files')}} onMouseLeave={() => setTooltip(false)}/>
              {/* <div className="exit-img-text">small text</div> */}
            </div>
          </div>

          <div style={{gridArea: "center-left"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}><img className="exit-img" src="/img/exit/CR_3.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('a jar of innocence')}} onMouseLeave={() => setTooltip(false)}/></div>
          </div>
          {/* <div style={{gridArea: "center-right"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "end"}}><img className="exit-img" src="/img/exit/CR_4.png" /></div>
          </div> */}

          <div style={{gridArea: "bottom-left"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}><img style={{height: "70%", justifySelf: "flex-end"}} className="exit-img" src="/img/exit/CR_5.png" onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('horses, dolls, bunnies and apparitions')}} onMouseLeave={() => setTooltip(false)}/></div>
          </div>
          <div style={{gridArea: "bottom-right"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}><img style={{width: "100%", objectFit: "contain", objectPosition: "bottom"}} className="exit-img" src="/img/exit/CR_computer.png" /></div>
          </div>

          <div style={{gridArea: "title", alignSelf: "end"}} className="pink-button">who watches from the chatroom?</div>
      </motion.div>

      <motion.div id="exit-rightgrid" animate={restart &&{opacity: 0, transition: {duration: 0.7}}}>
        <div style={{gridArea: "info", display: "flex", flexDirection: "column"}}>
          <div id="exit-info-title">The Chatroom<br/>&<br/>The Dollhouse</div>
          <div id="exit-info-text"> 
              
                {/* <div>Your journey pauses here but it's not over... Not all doors are open yet, some transcend the plains we have been moving on.</div> */}
                <div>Thank you for exploring TC&TD: an interactive and hybrid exhibition project as part of the Wrong Biennale.</div>
                <div>An intimate online exploration as part of Vorspiel will offer visitors a guided engagement of the &#123;Dollhouse&#125; on thursday 29.01.2026, 18:00–21:00.</div>
                <div>Come back again, the &#123;Dollhouse&#125; still hides secret rooms...</div>
                <div>The &#123;Chatroom&#125; opens its doors soon... Visit the exhibition's &lt;IRL&gt; mirror at SomoS Art House, 03.03–14.03.2026.</div>

          </div>
            <div id="exit-info-buttons">
                  <div id="exit-signup-btn" className="exit-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSenMiPVBC29Pl1h9PBehbivuFpgXhqn_qUfXKItLPQYz8swDA/viewform" target="_blank">Receive clues</a></div>
                  <div id="exit-email-btn" className="exit-btn"><a href="mailto:thechatroomandthedollhouse@gmail.com" target="_blank">Have a question?</a></div>
            </div>
        </div>
        {/* <div style={{gridArea: "chat"}} id="exit-chatcontainer"> */}
          <GuestBook />
          {/* </div> */}
        {/* <div style={{gridArea: "type"}}>type</div> */}
      </motion.div> 

    </div>
  )
}

export default Exit