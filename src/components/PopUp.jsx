import {useState} from 'react'
import {isMobile} from 'react-device-detect'
import {motion} from 'motion/react'

const PopUp = () => {
    const [closePop, setClosePop] = useState(false)

    console.log(closePop)


  return (
    isMobile && 
        <motion.div id="pop-up-bg" initial={{background: "rgba(255,240,255,0.7)"}} animate={closePop? {background: "rgba(255,240,255,0)"} : {background: "rgba(255,240,255,0.7)"}}>
            <motion.div initial={{scale: 1}} animate={closePop? {scale: 0} : {scale: 1}} id="pop-up-mobile">
                <div>this website is optimised for big horizontal devices. please have mercy on my developer soul and visit it on a desktop. i promise i'm working on making it mobile friendly.</div>
                <div onClick={() => setClosePop(true)}>i want to see your failures &gt;</div>
            </motion.div>
        </motion.div>
  )
}

export default PopUp