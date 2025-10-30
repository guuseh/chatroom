import {useState, useEffect, useRef} from 'react'
import {useNavigate, Outlet} from 'react-router-dom'
import {motion} from 'motion/react'

const ExitDoor = ({urls, visited, showObjects, setShowObjects}) => {
    const navigate = useNavigate()
    const [notice, setNotice] = useState(false)
    const [exit, setExit] = useState(false)

    console.log(window.location.pathname)

    const handleExit = () => {
        if(!showObjects){
            setShowObjects(true)
        }
        if(visited.count < urls.length){
            setNotice(true)
        } else{
            // navigate('/exit')
            setExit(true)
        }
    }
    
    const timerId = useRef(null);

    useEffect(() => {
    if (notice) {
            //Creating a timeout
            timerId.current = setTimeout(() => {
                setNotice(false);
            }, 3000);
        }

        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };
  }, [notice])

  const doorVariants = {
    exit: {
        scale: 25,
        x: "-45vw",
        zIndex: 500,
        transition: {
            duration: 1.3
        }
    }
  }
  const bgVariants = {
    exit: {
        zIndex: 550,
        background: "rgba(0,0,0,1)",
        transition: {
            delay: 1,
            duration: 0.5
        }
    }
  }

 
    return (
    <>
    {exit ? 
    <motion.div initial={{background: "rgba(0,0,0,0)"}} variants={bgVariants} animate={exit && "exit"} style={{position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw", overflow: "hidden"}}>
        <motion.div id="exit-door" onClick={() => handleExit()} variants={doorVariants} animate={exit && "exit"}>
            <img src={visited.count < urls.length ? "/img/front/exit.png" : "/img/front/door.gif"} style={{cursor: "var(--pointer)", height: "100%"}}/>
        </motion.div>
        <motion.div onAnimationComplete={() => navigate("/exit")} initial={{background: "rgba(0,0,0,0)"}} variants={bgVariants} animate={exit && "exit"} style={{position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw", zIndex: -1}}></motion.div>
    </motion.div>
    : 
    <motion.div id="exit-door" onClick={() => handleExit()} variants={doorVariants} animate={exit && "exit"}>
            <img src={visited.count < urls.length ? "/img/front/exit.png" : "/img/front/door.gif"} style={{cursor: "var(--pointer)", height: "100%"}}/>
    </motion.div>
    }

    <motion.div style={{position: "absolute", width: "max-content", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "tages", background: "var(--pink)", boxShadow: "0 0 20px 10px var(--pink)", zIndex: "200", pointerEvents: "none"}} initial={{opacity: 0}} animate={notice ? {opacity: 1} : {opacity: 0}}>
        You must collect &#123;{urls.length - visited.count}&#125; more objects from the &#123;doll house&#125;. The &#123;chatroom&#125; remains locked...
    </motion.div>
    

    <Outlet />
    </>
  )


  
}

export default ExitDoor