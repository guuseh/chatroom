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
    '/img/03/01.png', '/img/03/02.png', '/img/03/03.png', '/img/03/04.png', '/img/03/05.png', '/img/03/06.png', '/img/03/07.png', '/img/03/08.png', '/img/03/09.png', '/img/03/10.png',
    '/img/03/11.png', '/img/03/12.png', '/img/03/13.png', '/img/03/14.png', '/img/03/15.png', '/img/03/16.png', '/img/03/17.png', '/img/03/18.png', '/img/03/19.png', '/img/03/20.png',
    '/img/03/21.png', '/img/03/22.png', '/img/03/23.png', '/img/03/24.png', '/img/03/25.png', '/img/03/26.png', '/img/03/27.png', '/img/03/28.png', '/img/03/29.png', '/img/03/30.png', 
    '/img/03/31.png', '/img/03/32.png', '/img/03/33.png', '/img/03/34.png', '/img/03/35.png', '/img/03/36.png', '/img/03/37.png', '/img/03/38.png', '/img/03/39.png', '/img/03/40.png',
    '/img/03/41.png', '/img/03/42.png', '/img/03/43.png', '/img/03/44.png', '/img/03/45.png', '/img/03/46.png', '/img/03/47.png', '/img/03/48.png', '/img/03/49.png', '/img/03/50.png', 
    '/img/03/51.png', '/img/03/52.png', '/img/03/53.png', '/img/03/54.png', '/img/03/55.png', '/img/03/56.png', '/img/03/57.png', '/img/03/58.png', '/img/03/59.png', '/img/03/60.png',
    '/img/03/61.png', '/img/03/62.png', '/img/03/63.png', '/img/03/64.png', '/img/03/65.png', '/img/03/66.png', '/img/03/67.png', '/img/03/68.png', '/img/03/69.png', '/img/03/70.png',
    '/img/03/71.png', '/img/03/72.png', '/img/03/73.png', '/img/03/74.png', '/img/03/75.png', '/img/03/76.png', '/img/03/77.png', '/img/03/78.png', '/img/03/79.png', '/img/03/80.png',
    '/img/03/81.png', '/img/03/82.png', '/img/03/83.png', '/img/03/84.png', '/img/03/85.png', '/img/03/86.png', '/img/03/87.png', '/img/03/88.png', '/img/03/89.png', '/img/03/90.png',
    '/img/03/91.png', '/img/03/92.png', '/img/03/93.png', '/img/03/94.png'
  ]

  // const [imgUrl, setImgUrl] = useState(img[index])
  const [index, setIndex] = useState(0)
  const [dice, setDice] = useState('/img/03/dice-still.png')
  const [click, setClick] = useState(false)
  const timerId = useRef(null);
  const [shuffled, setShuffled] = useState([])

  useEffect(() => {
    const shuffledImgs = img
          .map(v => ({v, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({v}) => v)

    setShuffled(shuffledImgs)
    // console.log(shuffledUrls)
  }, [])

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

          <motion.div style={{display: 'flex', alignItems: 'center', gap: '20px'}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
            
            <div style={{opacity: 0, pointerEvents: "none"}}><img src={dice}/></div>
            
            <div id="kether-imgdiv">
              <img src={shuffled[index]} />
            </div>

            <div onClick={() => handleNext()}><img src={dice} style={{cursor: "var(--pointer)"}}/></div>

          </motion.div>

        </div>

        <AboutWork data={workdata}/>
    </>
  )
}

export default Eliska