import {useState} from 'react'
import {motion, AnimatePresence} from 'motion/react'

const AboutWork = ({data, isSmall}) => {

    const [open, setOpen] = useState(false)

  return (
    <>
    <div id="about-button" onClick={() => setOpen(prev => !prev)}>
        <motion.img src="/img/front/info.png" animate={open ? {rotate: 180, transition: {duration: 0.3}} : {rotate: 0, transition: {duration: 0.3}}} style={{height: "100%"}}/>
    </div>
    <AnimatePresence>
        {open && <motion.div id="about-overlay" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div id="demon-underlay-close" onClick={() => setOpen(false)}></div>
            <div style={{fontFamily: "pinyon", fontSize: isSmall ? "3.5rem":"5rem", lineHeight: isSmall? "3rem":"5rem"}}>"{data.title}"</div>
            <div>
                {data.artist.map((a) => {
                    return (
                    a.name != undefined && a.name != "" && !a.extra ?
                    <div>
                        <span style={{fontSize: isSmall? "1.5rem": "2rem"}}>{a.name}</span> {isSmall&& <br/>}
                        {a.extra&& <span style={{fontSize: isSmall ? "0.9rem" : "1rem"}}>&nbsp;{a.extra}</span>}
                        {a.ig&& <span style={{fontSize:isSmall ? "0.9rem" :  "1rem"}}>&nbsp;<a href={`https://www.instagram.com/${a.ig}/`} target="_blank">(Instagram)</a></span>}
                        {a.yt&& <span style={{fontSize: isSmall ? "0.9rem" : "1rem"}}>&nbsp;<a href={`https://www.youtube.com/@s${a.yt}`} target="_blank">(YouTube)</a></span>}
                        {a.web&& <span style={{fontSize: isSmall ? "0.9rem" : "1rem"}}>&nbsp;<a href={`${a.web}`} target="_blank">(Website)</a></span>}
                    </div>
                    : a.extra != undefined && a.extra != "" ?
                        <div style={{margin: "0"}}>
                            <span style={{fontSize: isSmall ? "1.2rem" :  "1.5rem"}}>{a.name}</span> {isSmall&& <br/>}
                            <span style={{fontSize: isSmall ? "0.9rem" :  "1rem"}}>&nbsp;{a.extra}</span>
                        </div>
                    :
                        <div style={{height: isSmall ? "1rem":"1.5rem"}}></div>
                    )
                })}
            </div>
            <div style={{fontSize: isSmall ? "1.5rem" : "2rem"}}>{data.date}</div>
        </motion.div>}
    </AnimatePresence>
    </>
  )
}

export default AboutWork