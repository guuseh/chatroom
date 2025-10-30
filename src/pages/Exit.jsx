import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'motion/react'

const Exit = () => {
  const navigate = useNavigate();
  const [restart, setRestart] = useState(false)

  const handleRestart = () => {
    localStorage.removeItem("visited");
    setRestart(true)
  }

  return (
    <div id="exit-page">

      <motion.div id="exit-restart" onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")} animate={restart&& {scale: 6.4, transition: {duration: 1}}} style={{right: restart ? "48.5vw" : "var(--margin)", top: restart ? "39.5vh": "20px"}}><img className="exit-img" src="/img/front/dollhouse-front.png" /></motion.div>
      
      <motion.div id="exit-left">
        <div className="exit-shelf">
          <div className="exit-img-div" style={{}}>
              <img className="exit-img" src="/img/exit/CR_1.png" />
              <div className="exit-img-text">a girl who grew wings accidentally</div>
          </div>
        </div>
        <div className="exit-shelf centered-shelf">
          <div className="exit-img-div" style={{justifySelf: "center"}}>
              <img className="exit-img" src="/img/exit/CR_2.png" />
              <div className="exit-img-text">an influencer folding herself into the screen</div>
          </div>
        </div>
        <div className="exit-shelf">
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_3.png" />
              <div className="exit-img-text">ghosts trapped in .jpg files</div>
          </div>
        </div>
      </motion.div>

      <motion.div id="exit-center">
        <div id="exit-info-title">The Chatroom<br/>&<br/>The Dollhouse</div>
        <div className="exit-shelf">
          <div style={{justifySelf: "center", width: "300px", transform: "translateY(10px)"}}>
              <img className="exit-img" src="/img/exit/CR_computer.png" style={{width: "100%"}}/>
              <div id="exit-signup">
                <div>is an interactive and hybrid exhibition project as part of the Wrong Biennale.
                  The doll.house is now active as of November 1st 2025. The chatroom will be announced soon</div>
                <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSenMiPVBC29Pl1h9PBehbivuFpgXhqn_qUfXKItLPQYz8swDA/viewform" target="_blank">sign up for updates</a></div>
              </div>
          </div>
        </div>
      </motion.div>

      <motion.div id="exit-right">
        <div className="exit-shelf">
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_4.png" />
              <div className="exit-img-text">a jar of innocence</div>
          </div>
        </div>
        <div className="exit-shelf">
          <div className="exit-img-div">
              <img className="exit-img" src="/img/exit/CR_5.png" />
              <div className="exit-img-text">horses, dolls, bunnies and apparitions</div>
          </div>
        </div>
      </motion.div>

      <motion.div className="pink-button" id="exit-whowatches">who watches from the chatroom?</motion.div>

      {/* INCLUDING CHAT */}
      {/* <motion.div id="exit-leftgrid" animate={restart &&{opacity: 0, transition: {duration: 0.7}}}>
          <div style={{gridArea: "top-left"}} className="exit-shelf">
            <div className="exit-img-div">
              <img className="exit-img" src="/img/front/01.png" />
              <div className="exit-img-text">what happens if this text is super long?</div>
            </div>
          </div>
          <div style={{gridArea: "top-right"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}>
              <img className="exit-img" src="/img/front/02.png" />
              <div className="exit-img-text">small text</div>
            </div>
          </div>

          <div style={{gridArea: "center-left"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}><img className="exit-img" src="/img/front/03.png" /></div>
          </div>
          <div style={{gridArea: "center-right"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "end"}}><img className="exit-img" src="/img/front/04.png" /></div>
          </div>

          <div style={{gridArea: "bottom-left"}} className="exit-shelf">
            <div className="exit-img-div" style={{justifySelf: "center"}}><img style={{height: "50%", alignSelf: "flex-end"}} className="exit-img" src="/img/front/05.png" /></div>
          </div>
          <div style={{gridArea: "bottom-right"}} className="exit-shelf">

          </div>

          <div style={{gridArea: "title", alignSelf: "end"}} className="pink-button">who watches from the chatroom?</div>
      </motion.div>

      <motion.div id="exit-rightgrid" animate={restart &&{opacity: 0, transition: {duration: 0.7}}}>
        <div style={{gridArea: "info"}}>
          <div id="exit-info-title">The Chatroom<br/>&<br/>The Dollhouse</div>
          <div id="exit-info-text">is an interactive and hybrid exhibition project as part of the Wrong Biennale.
              The doll.house is now active as of November 1st 2025. The chatroom will be announced soon
          </div>
        </div>
        <div style={{gridArea: "chat"}}>chat</div>
        <div style={{gridArea: "type"}}>type</div>
      </motion.div> */}

    </div>
  )
}

export default Exit