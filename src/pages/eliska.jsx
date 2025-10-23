import {useEffect, useState, useRef} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Eliska = ({setProjectCounter, visitPage}) => {
  // ROOM 03
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/03")
  }, [])

const workdata = {
    "title": "user goes to kether",
    "artist": [{
      "name": "Angel Kether",
      "ig": "eliskajah",
      "web": "http://angelkether.neocities.org/"
    },{
      "name": "BLUEBUNNY & twinflamegirl",
      "ig": "bluebunny_twinflamegirl"
    }],
    "date": "2022-ongoing"
  }

  const img = [
    '/img/03/1.png',
    '/img/03/2.png',
    '/img/03/3.png',
    '/img/03/4.png',
    '/img/03/5.png',
    '/img/03/6.png',
  ]

  // const [imgUrl, setImgUrl] = useState(img[index])
  const [index, setIndex] = useState(0)
  const [dice, setDice] = useState('/img/03/dice-still.png')
  const [click, setClick] = useState(false)
  const timerId = useRef(null);

  useEffect(() => {

    if (click) {

            //Creating a timeout
            timerId.current = setTimeout(() => {
                setClick(false);
                setDice('/img/03/dice-still.png')
            }, 1000);
        }

        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };

  }, [click])

  const handleNext = () => {
    setClick(true)
    setDice('/img/03/dice.gif')
    if(index < img.length-1){
      setIndex(prev => prev + 1)
    } else{
      setIndex(0)
    }
  }

  return (
    <>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>
          
        <div className="center-container">

          <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
            
            <div onClick={() => handleNext()}><img src={dice} style={{cursor: "pointer"}}/></div>
            
            <div id="kether-imgdiv">
              <img src={img[index]} />
            </div>

            <div>&nbsp;</div>

          </motion.div>

        </div>

        <AboutWork data={workdata}/>
    </>
  )
}

export default Eliska