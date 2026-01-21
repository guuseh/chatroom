import {useState} from 'react'
import {isMobile} from 'react-device-detect'
import {motion} from 'motion/react'

const PopUp = () => {
    const [closePop, setClosePop] = useState(false)


  return (
    isMobile && 
        <motion.div id="pop-up-bg" initial={{background: "rgba(255,240,255,0.7)"}} animate={closePop? {background: "rgba(255,240,255,0)"} : {background: "rgba(255,240,255,0.7)"}}>
            <motion.div initial={{scale: 1}} animate={closePop? {scale: 0} : {scale: 1}} id="pop-up-mobile">
                <div>this website is optimised for big horizontal devices. it is how the artworks truly shine. but if you must, I suppose you can also visit from your phone...</div>
                <div onClick={() => setClosePop(true)}>i am a rebel &gt;</div>
            </motion.div>
        </motion.div>
  )
}

export default PopUp