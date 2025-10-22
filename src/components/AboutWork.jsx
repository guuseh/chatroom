import {useState} from 'react'
import {motion, AnimatePresence} from 'motion/react'

const AboutWork = ({data}) => {

    const [open, setOpen] = useState(false)

  return (
    <>
    <div id="about-button" onClick={() => setOpen(prev => !prev)}>
        (i)
    </div>
    <AnimatePresence>
        {open && <motion.div id="about-overlay" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div id="demon-underlay-close" onClick={() => setOpen(false)}></div>
            <div style={{fontFamily: "pinyon", fontSize: "5rem", lineHeight: "5rem"}}>"{data.title}"</div>
            <div>
                {data.artist.map((a) => {
                    return <div>
                        <span style={{fontSize: "2rem"}}>{a.name}</span>
                        {a.ig&& <span style={{fontSize: "1rem"}}>&nbsp;<a href={`https://www.instagram.com/${a.ig}/`} target="_blank">(Instagram)</a></span>}
                        {a.yt&& <span style={{fontSize: "1rem"}}>&nbsp;<a href={`https://www.youtube.com/@s${a.yt}`} target="_blank">(YouTube)</a></span>}
                        {a.web&& <span style={{fontSize: "1rem"}}>&nbsp;<a href={`${a.web}`} target="_blank">(Website)</a></span>}
                    </div>
                })}
            </div>
            <div style={{fontSize: "2rem"}}>{data.date}</div>
        </motion.div>}
    </AnimatePresence>
    </>
  )
}

export default AboutWork