import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion, AnimatePresence} from 'motion/react'
import GuestBook from "../components/GuestBook.jsx"

const Exit = ({visited, isSmall}) => {

    const navigate = useNavigate();
    const [restart, setRestart] = useState(false)
    const [tooltip, setTooltip] = useState(false)
    const [mouse, setMouse] = useState([])
    const [tipText, setTipText] = useState('')
    const [info, setInfo] = useState(false)
    const [noise, setNoise] = useState(false)

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




  return (
    <div id="exit-page-new">
        
        {isSmall && <div style={{gridArea: "button"}} id="exit-new-infobutton" className="exit-btn" onClick={() => setInfo((prev) => !prev)}>{info ? "Close" : "More info"}</div>}

        <div className="exit-shelves-container" style={{gridArea: "top"}}>
            <div className="exit-shelf"><img src="/img/front/01.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><img src="/img/front/02.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><img src="/img/front/07.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><img src="/img/front/04.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><img src="/img/front/05.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
        </div>

        {!isSmall && <div style={{gridArea: "info"}} id="exit-new-info-div">
                <div id="exit-new-info-info">
                    <div>Thank you for exploring TC&TD: an interactive and hybrid exhibition project as part of the Wrong Biennale.</div>
                    <div>An intimate online exploration as part of Vorspiel will offer visitors a guided engagement of the &#123;Dollhouse&#125; on thursday 29.01.2026, 18:00–21:00.</div>
                    <div>Come back again, the &#123;Dollhouse&#125; still hides secret rooms...</div>
                    <div>The &#123;Chatroom&#125; opens its doors soon... Visit the exhibition's &lt;IRL&gt; mirror at SomoS Art House, 03.03–14.03.2026.</div>
                </div>
                <div id="exit-new-info-btns">
                    <div className="exit-btn">newsletter</div>
                    <div className="exit-btn">email us</div>
                </div>
            <motion.div id="exit-dollhouse" 
                // onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('start over')}} onMouseLeave={() => setTooltip(false)} onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")} animate={restart&& {scale: 6.4, transition: {duration: 1}}} style={{right: restart ? "48.5vw" : "var(--margin)", top: restart ? "39.5vh": "20px"}}
                onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")}>
                <img className="exit-img" src="/img/front/dollhouse-open.png" style={{cursor: "var(--pointer)", width: "auto"}}/>
                <div className="exit-img-text">start over</div>
            </motion.div>
        </div>}

        {!isSmall && <div style={{gridArea: "title"}} id="exit-new-title">
            <div style={{backgroundColor: "var(--mediumpink)"}}>The Chatroom</div>
            <div>+</div>
            <div style={{backgroundColor: "var(--mediumpink)"}}>The Dollhouse</div>
        </div>}

        {!isSmall && <div style={{gridArea: "pc"}} id="exit-new-computer">
            <div className="exit-shelf" id="exit-new-computer-shelf">
                <img src="/img/exit/CR_computer.png" style={{height: "100%"}}/>
                <div id="exit-new-pc-screen">
                    <motion.img initial={{opacity: 0}} animate={noise ? {opacity: 0.5} : {opacity: 0}} src="/img/exit/static.gif" />
                </div>
            </div>
        </div>}

        <div style={{gridArea: "bubble"}} id="exit-new-bubble"><div className="pink-button">Who watches from the Chatroom?</div></div>

        <div style={{gridArea: "chat"}} id="exit-new-chatdiv">
            <div id="exit-new-dates">
                <div><span>03.03–14.03.2026</span> The &#123;Chatroom&#125; @ <span>SomoS Art House</span></div>
                <div><span>29.01.2026, 18:00–21:00</span> The &#123;Dollhouse&#125; @ <span>SomoS Art House</span></div>
            </div>
            <GuestBook />
        </div>

        <div className="exit-shelves-container" style={{gridArea: "bottom"}}>
            <div className="exit-shelf"><img src="/img/front/06.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><a href="https://www.instagram.com/bby.t00th/" target="_blank" rel="noreferrer" style={{height: "100%"}}><img src="/img/front/babytooth.png" style={{opacity: 0.5, cursor: "var(--pointer)"}}/></a></div>
            <div className="exit-shelf"><img src="/img/front/08.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><img src="/img/front/09.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
            <div className="exit-shelf"><img src="/img/front/10.png" onMouseEnter={() => setNoise(true)} onMouseLeave={() => setNoise(false)}/></div>
        </div>

        <AnimatePresence>
        {isSmall && info && 
            <motion.div id="exit-new-overlay-mobile" initial={{y: "-100%"}} animate={{y: 0, transition: {duration: 0.2}}} exit={{y: "-100%", transition: {duration: 0.2}}}>

                <div id="exit-new-info-info">
                    <div>Thank you for exploring TC&TD: an interactive and hybrid exhibition project as part of the Wrong Biennale.</div>
                    <div>An intimate online exploration as part of Vorspiel will offer visitors a guided engagement of the &#123;Dollhouse&#125; on thursday 29.01.2026, 18:00–21:00.</div>
                    <div>Come back again, the &#123;Dollhouse&#125; still hides secret rooms...</div>
                    <div>The &#123;Chatroom&#125; opens its doors soon... Visit the exhibition's &lt;IRL&gt; mirror at SomoS Art House, 03.03–14.03.2026.</div>
                </div>
                <div id="exit-new-info-btns">
                    <div className="exit-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSenMiPVBC29Pl1h9PBehbivuFpgXhqn_qUfXKItLPQYz8swDA/viewform" target="_blank">newsletter</a></div>
                    <div className="exit-btn"><a href="mailto:thechatroomandthedollhouse@gmail.com">email us</a></div>
                </div>
                <motion.div id="exit-dollhouse"
                //  onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true), setTipText('start over')}} onMouseLeave={() => setTooltip(false)} onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")} animate={restart&& {scale: 6.4, transition: {duration: 1}}} style={{right: restart ? "48.5vw" : "var(--margin)", top: restart ? "39.5vh": "20px"}}
                    onClick={() => handleRestart()} onAnimationComplete={() => navigate("/")}>
                    <img className="exit-img" src="/img/front/dollhouse-open.png" style={{cursor: "var(--pointer)", width: "auto"}}/>
                    <div className="exit-img-text">start over</div>
                </motion.div>

                <div style={{gridArea: "title"}} id="exit-new-title">
                    <div style={{backgroundColor: "var(--mediumpink)"}}>The Chatroom</div>
                    <div>+</div>
                    <div style={{backgroundColor: "var(--mediumpink)"}}>The Dollhouse</div>
                </div>
            </motion.div>
        }
        </AnimatePresence>
    </div>
  )
}

export default Exit