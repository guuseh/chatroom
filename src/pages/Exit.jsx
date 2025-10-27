import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'motion/react'

const Exit = () => {
  const navigate = useNavigate();
  const [restart, setRestart] = useState(false)

  const handleRestart = () => {
    setRestart(true)
  }

  return (
    <div id="exit-page">

      <motion.div id="exit-restart" onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")} animate={restart&& {scale: 6.4, transition: {duration: 1}}} style={{right: restart ? "48.5vw" : "var(--margin)", top: restart ? "39.5vh": "20px"}}><img className="exit-img" src="/img/front/dollhouse-front.png" /></motion.div>
      
      <motion.div id="exit-leftgrid" animate={restart &&{opacity: 0, transition: {duration: 0.7}}}>
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
      </motion.div>
    </div>
  )
}

export default Exit