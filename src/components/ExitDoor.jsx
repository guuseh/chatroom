import {useState, useEffect, useRef} from 'react'
import {useNavigate, Outlet} from 'react-router-dom'
import {motion} from 'motion/react'

const ExitDoor = ({urls, visited, showObjects, setShowObjects}) => {
    const navigate = useNavigate()
    const [notice, setNotice] = useState(false)

    console.log(window.location.pathname)

    const handleExit = () => {
    if(!showObjects){
        setShowObjects(true)
    }
    if(visited.count < urls.length){
        setNotice(true)
    } else{
        navigate('/exit')
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

 
    return (
    <>
    <div id="exit-door" onClick={() => handleExit()}>
        <img src={visited.count < urls.length ? "/img/front/exit.png" : "/img/front/door.gif"} style={{cursor: "var(--pointer)", height: "100%"}}/>
    </div>

    <motion.div style={{position: "absolute", width: "max-content", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "tages", background: "var(--pink)", boxShadow: "0 0 20px 10px var(--pink)", zIndex: "200", pointerEvents: "none"}} initial={{opacity: 0}} animate={notice ? {opacity: 1} : {opacity: 0}}>
          You must collect &#123;{urls.length - visited.count}&#125; more objects from the &#123;doll house&#125;. The &#123;chatroom&#125; remains locked...
    </motion.div>

    <Outlet />
    </>
  )


  
}

export default ExitDoor