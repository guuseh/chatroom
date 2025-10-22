import {useRef,useEffect,useState} from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion, useSpring, useInView } from "motion/react"
import useDetectScroll from "@smakss/react-scroll-direction"
import AboutWork from "../components/AboutWork.jsx"


const Ester = ({setProjectCounter, visitPage}) => {
  //ROOM 04

  const texts = `She’s fascinated with a fairytale that never ends. Petals going sideways, ollying off the rails. I died and came back with more limbs, and more, and more. Like a ghost I reach for something that is dead to me. Sipping on the limit, a hey-day spritz.
  \nWomen dreaming of being orbs, smooth, metallic. Orbs with voices dreaming of becoming women. Skin like nitrous oxide.
  \nConical, creamy, condensation-shimmered endpoint. I met you in a space that everyone knows but nobody can touch. I tried to hold you in my softpalms and I only meet dead air. I can’t breathe in you but I sure as hell can think. Thinking rootless, thinking like a black hole sucked swan white. My body rounds and rounds, going back, going ritzy protean.
  \nI met my girl on your underside. I reconstructed the girl later.
  \nPlastic is my birthstone. Plastic is my sun, moon, and rising. I said I know a place and I took you to plastic.\nPlastic? I don’t even know her. Yes I do. Nobody’s perfect but some people are plastic.\nPlastic? I sure hope it does.
  \nMarshmallow shaped like Gigafactory Texas of Tesla, Inc.
  \n100 girls, one cup.\n1000 girls, one cup.\nOne million trillion girls, one tiny teeny red Solo cup I stole from your cousin’s Halloween frat party at Penn State.
  \nShibari show on an Eames chair with all of the wires in my house that have accumulated since 1995.
  \nI can make a Latte out of Jesus Christ himself.\nNow a cappuccino… that’s asking too much.
  \nFolding a pancake into a pillow. LELO pancake pillow.
  \nI read your future and in it you die. I know you won’t believe me but you do die. I know it’s crazy. You die and there’s the end. You thought this was a Wendy’s. You silly. I am Wendy. You have finally met Wendy at Wendy’s and you don’t even want to hear about the fact that you die. How did Cassandra not kill herself. But I suppose Wendy doesn’t die. Doesn’t die. Until the company folds.
  \nMy limbs are going narcotic. My limbs reach out more than they can come back. Like lost bait or broken mountaineer rope. I sprouted a hand to stroke the other one. Everything I make wants to be stroked.\nHoly balls.
  \nHitting the cirrus cloud like a bong. Or a shisha?\nOne sheep two sheep three sheep, hoes. Gillette commercial shaving sheep til they’re sleek like a fish. A swordfish.
  \n`

  const workdata = {
    "title": "videospeculum",
    "artist": [{
      "name": "Ester Freider",
      "ig": "stargir1z",
    },
    {
      "name": "Julia Halasy",
      "ig": "meta4ngelic",
    },
    {
      "name": "Sofya Rakitina",
      "ig": "_lavender_fi",
    },
    {
      "name": "– as everyoneisagirl",
      "ig": "everyoneisagirl"
    }],
    "date": "2025"
  }

    // const texts = `She’s fascinated with a fairytale that never ends. Petals going sideways, ollying off the rails.`

  const [done, setDone] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [progress, setProgress] = useState(0)
  const [startType, setStartType] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [closed, setClosed] = useState(false)
  const [vidFullscreen, setVidFullscreen] = useState(false)
  const [vidClosed, setVidClosed] = useState(false)

  const frameCustomRef = useRef(null);
  const [frameRef, setFrameRef] = useState();
  const elementRef = useRef();
  const isInView = useInView(elementRef);
  const typeRef = useRef();

  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/04")
  }, [])

  const { scrollDir } = useDetectScroll({target: frameRef})
  useEffect(() => {
    if(frameCustomRef.current){
      setFrameRef(frameCustomRef.current)
    }
  }, [frameCustomRef])

  useEffect(() => {
    if(!done && !scroll){ 
      elementRef.current.scrollIntoView()
    }
  }, [isInView]);

  const handleScroll = (e) => {
    if(scrollDir == "up"){
      setScroll(true)
    }else if(scrollDir == "down"){
      setScroll(false)
    }
  }

  const scaleX = useSpring(progress)

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(typeRef.current.outerText.length)
      let progresscount = typeRef.current.outerText.length
      let maxcount = texts.length-26
      let percentage = progresscount / maxcount;
      
      setProgress(Math.ceil(percentage*100))
      scaleX.set(percentage)

      if(typeRef.current.outerText.length >= texts.length){
      clearInterval(interval)
    }

    }, 100);
    // console.log(typeRef.current.outerText.length, texts.length)

    
    
    return () => clearInterval(interval);
    
  }, [done])


  const frameVariants = {
    start: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeIn"
      }
    },
    grow: {
      width: "90vw",
      height: "80vh",
      top: "5%",
      right: "5%"
    },
    shrink: {
      width: "50vw",
      height: "50vh",
      top: "15%",
      right: "15%"
    }
  }

  const videoVariants = {
    start: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
        ease: "easeIn"
      }
    },
    grow: {
      width: "90vw",
      height: "85vh",
      top: "5%",
      left: "5%"
    },
    shrink: {
      width: "30vw",
      height: "50vh",
      top: "35%",
      left: "20%"
    }
  }
  // animate={{opacity: 1, transition: {duration: 1, delay: 1, ease: "easeIn"}}}
  //  style={{width: fullscreen ? "90vw" : "50vw", aspectRatio: fullscreen ? "4 / 2" : "4 / 2.5"}}

  // const scaleX = useSpring(progress, {stiffness: 100, damping: 30, restDelta: 0.001})
  // console.log(scaleX)
  

  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

    <motion.div id="ester-container" className="center-container">
      
      <motion.div id="ester-video-frame" variants={videoVariants} initial={{opacity: 0}} animate={vidClosed? {scale: 0} : vidFullscreen ? ["start", "grow"] : ["start", "shrink"]}>
          <div className="ester-border-container">
            <div style={{backgroundColor: "#ff4548"}} onClick={() => setVidClosed(true)}></div>
            <div style={{backgroundColor: "var(--pink)"}} onClick={() => setVidFullscreen(!vidFullscreen)}></div>
          </div>
        </motion.div>


      <motion.div id="ester-frame" variants={frameVariants} animate={closed? {scale: 0} : fullscreen?["start", "grow"]:["start", "shrink"]}
        initial={{opacity: 0}} onAnimationComplete={(latest) => {latest == "start" && setStartType(true)}}
       >
        <div className="ester-border-container">
          <div style={{backgroundColor: "#ff4548"}} onClick={() => setClosed(true)}></div>
          <div style={{backgroundColor: "var(--pink)"}} onClick={() => setFullscreen(!fullscreen)}></div>
          <div id="progress-ester">{progress}%</div>
        </div>
          
        <div id="ester-text-container" ref={frameCustomRef} onScroll={(e) => handleScroll(e)}>
          
          {startType&&<TypeAnimation
              style={{whiteSpace: 'pre-line'}}
              sequence={[
                texts, () => setDone(true)]}
              speed={50}
              ref={typeRef}
          />}
          <motion.div ref={elementRef} style={{width: 10, height: 50, backgroundColor: ""}}></motion.div>
        </div>
      </motion.div>

      {/* <motion.div id="ester-progress" style={{scaleX}}></motion.div> */}
    </motion.div>
    <AboutWork data={workdata}/>
    </>
  )
}

export default Ester