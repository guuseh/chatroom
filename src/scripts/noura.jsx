import {useEffect, useState, useRef} from 'react'
import {motion} from 'motion/react'
import AboutWork from "../components/AboutWork.jsx"
import {isMobile} from 'react-device-detect'
// import "./renpy-pre.js"

const Noura = ({setProjectCounter, visitPage, isSmall}) => {
  // ROOM 06 = ball and chains
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/06")
  }, [])

const [audioStarted, setAudioStarted] = useState(false);
const iframeRef = useRef(null);

const handleStartAudio = () => {
  setAudioStarted(true);
  // This sends a message to the iframe to tell it to wake up
  if (iframeRef.current) {
    iframeRef.current.contentWindow.postMessage('resumeAudio', '*');
  }
};

  // const gameLoaded = useRef(false);

  // useEffect(() => {
  //   setProjectCounter(prev => prev + 1)
  //   visitPage("/06")

  //   // --- REN'PY INJECTION LOGIC ---
  //   if (!gameLoaded.current) {
  //     gameLoaded.current = true;

  //     // 1. Define the global variable RenPy needs
  //     // Note: We use the absolute path from the public folder
  //     window.gameZipURL = '/gijinka/game.zip';

  //     // 2. Helper to load scripts sequentially
  //     const loadScript = (src) => {
  //       return new Promise((resolve, reject) => {
  //         const script = document.createElement('script');
  //         script.src = src;
  //         script.async = true;
  //         script.onload = resolve;
  //         script.onerror = reject;
  //         document.body.appendChild(script);
  //       });
  //     };

  //     // 3. Load the pre-run script, then the main engine
  //     const loadGame = async () => {
  //       try {
  //         await loadScript('/gijinka/renpy-pre.js');
  //         await loadScript('/gijinka/renpy.js');
  //       } catch (error) {
  //         console.error("Failed to load RenPy scripts:", error);
  //       }
  //     };

  //     loadGame();
  //   }

  //   // Cleanup: We attempt to hide/stop the game on unmount, 
  //   // but RenPy modifies global state heavily, so a full cleanup is difficult.
  //   // Ideally, users shouldn't navigate back and forth rapidly.
  //   return () => {
  //       // Optional: reload the page if they leave to clear memory
  //       // window.location.reload(); 
  //   }
  // }, [])

  const [popup, setPopup] = useState(true)

   const workdata = {
    "title": "Gijinka Complex",
    "artist": [
      {
      "name": "Noura Tafeche",
      "ig": "nouratafeche",
      "web": "https://nouratafeche.com/"
    },{
      "name": "Tobia Paolo Bettoni",
      "ig": "archiviotpb",
    },{
      "name": undefined
    }, {
      "name": "✦",
      "extra": "",
    },{
      "name": undefined
    }, {
      "name": "Noura Tafeche & Tobia Paolo Bettoni",
      "extra": "Concept, development & direction"
    },{
      "name": "Silvia Gnocchi",
      "extra": "Game Illustrations"
    },{
      "name": "Tobia Paolo Bettoni, Noura Tafeche & Silvia Gnocchi",
      "extra": "Character Design"
    },{
      "name": "Pierfrancesco Asuni",
      "extra": "Logo Design"
    }],
    "date": "2025"
    }

    const [left, setLeft] = useState(false)
    const [center, setCenter] = useState(false)
    const [right, setRight] = useState(false)
    const [leftH, setLeftH] = useState(true)
    const [centerH, setCenterH] = useState(true)
    const [rightH, setRightH] = useState(true)

    const fileVariants = {
      down: (i) => ({
        y: 0,
        x: 0,
        zIndex: i == 'l' ? 3 : i == 'c' ? 4 : 5,
        scale: 1
      }),
      up: (i) => ({
        y: isSmall ? "-150%": i == 'l' ? "-80%" : i == 'c' ? "-90%" : i == 'r' && "-100%",
        x: isSmall && i == 'l' ? "-8%" : isSmall && i == "c" ? "0%" : isSmall && i == "r" ? "8%" : "-10%",
        zIndex: i == 'l' ? 10 : i == 'c' ? 11 : 12,
        scale: 1.2
      }),
      hover: (i) => ({
        y: i == 'l' && !left ? "-5%" 
            : i == 'r' && !right ? "-5%" 
            : i == "c" && !center ? "-5%" 
            : null
      })
    }

    // onAnimationComplete={(latest) => {latest == "start" && setStartType(true)}}

  return (
    <>
      <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

      <div className="page-container">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1, ease: "easeIn"}}} id="noura-page-container">
          {/* <div id="noura-coverart" style={{height: "50vh", marginTop: "8vh"}}><img src="/img/06/coverart.png" style={{height: "100%"}}/></div> */}
          {/* <div id="noura-iframe">
                          <div style={{position: "relative"}}>
                            {isMobile && popup &&
                              <div id="noura-mobilepopup">
                                This demo is not optimised for mobile. If for some reason it does not work for you, please follow the <div style={{display: "inline-block"}}>&lt;Read more&gt;</div> button to open the demo directly on itch.io!<br/><br/>
                                <div className="exit-btn" style={{margin: "auto", width: "fit-content"}} onClick={() => setPopup(false)}>&nbsp;let me play&nbsp;</div>
                                </div>
                              }
                            {!isMobile && popup && 
                              <div id="noura-mobilepopup">There's a small chance this demo does not run smoothly on this website in your browser. If you notice any problems, please follow the <div style={{display: "inline-block"}}>&lt;Read more&gt;</div> button to open the demo directly on itch.io! <br/><br/>
                              <div className="exit-btn" style={{margin: "auto", width: "fit-content"}} onClick={() => setPopup(false)}>&nbsp;let me play&nbsp;</div>
                              </div>}
                            <iframe msallowfullscreen="true" frameborder="0" allowfullscreen="true" id="game_drop" src="https://html-classic.itch.zone/html/16281294/index.html?v=1769621876" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                        </div>
          </div> */}

        <div id="noura-iframe">
          <div style={{position: "relative", width: "100%", height: '100%'}}>
              {isMobile && popup &&
                <div id="noura-mobilepopup">
                  This work is, by artistic choice, not optimized for mobile devices as it parodies early-2000s desktop-only bishoujo games. Please run it on a desktop or laptop only.<br/><br/>
                  <div className="exit-btn" style={{margin: "auto", width: "fit-content"}} onClick={() => {setPopup(false); handleStartAudio()}}>&nbsp;let me play&nbsp;</div>
                  </div>
                }
              {!isMobile && popup && 
                <div id="noura-mobilepopup">There's a small chance this demo does not run smoothly on this website in your browser. If you notice any problems, please follow the <div style={{display: "inline-block"}}>&lt;Read more&gt;</div> button to open the demo directly on itch.io! <br/><br/>
                <div className="exit-btn" style={{margin: "auto", width: "fit-content"}} onClick={() => {setPopup(false); handleStartAudio()}}>&nbsp;let me play&nbsp;</div>
                </div>}
            <iframe
              ref={iframeRef}
              src="/gijinka/index.html"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block"
              }}
              title="Gijinka Complex"
              allow="autoplay; fullscreen; gamepad" // Important permissions for games
            />
          </div>
      </div>

        <div id="noura-info">
          {!isSmall&&<img src="/img/06/coverart.png" style={{height: "100%", width: "100%"}}/>}
          <div id="noura-button" className="exit-btn"><a href="https://tobia-paolo-bettoni.itch.io/gijinka-complex-demo" target="_blank" rel="noreferrer">Read more &#8594;</a></div>
        </div>

        <motion.div onClick={() => {setRight(!right); right && setRightH(false)}} onAnimationComplete={(latest) => {latest == "down" && setRightH(true)}} whileHover={!right && rightH && "hover"} className="noura-file" id="noura-right" variants={fileVariants} custom="l" animate={right ? "up" : "down"}><img src="/img/06/character1.png" style={{height: "100%"}}/></motion.div>
        <motion.div onClick={() => {setCenter(!center); center && setCenterH(false)}} onAnimationComplete={(latest) => {latest == "down" && setCenterH(true)}} whileHover={!center && centerH && "hover"} className="noura-file" id="noura-center" variants={fileVariants} custom="c" animate={center ? "up" : "down"}><img src="/img/06/character2.png" style={{height: "100%"}}/></motion.div>
        <motion.div onClick={() => {setLeft(!left); left && setLeftH(false)}} onAnimationComplete={(latest) => {latest == "down" && setLeftH(true)}} whileHover={!left && leftH && "hover"} className="noura-file" id="noura-left" variants={fileVariants} custom="r" animate={left ? "up" : "down"}><img src="/img/06/character3.png" style={{height: "100%"}}/></motion.div>
         
        </motion.div>
      </div>

      <AboutWork data={workdata} isSmall={isSmall}/>

    </>
  )
}

export default Noura