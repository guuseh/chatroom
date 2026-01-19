import {useEffect} from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Sarahchefka = ({setProjectCounter, visitPage, isSmall}) => {
  // ROOM 09 = magazines
  useEffect(() => {
      setProjectCounter(prev => prev+1)
      visitPage("/09")
    }, [])

     const workdata = {
    "title": "Why Am I Seeing This",
    "artist": [{
      "name": "Sarah Chekfa",
      "ig": "girlboss__interrupted",
      "web": "https://sarahchekfa.me/"
    }],
    "date": "2025"
    }
    
  return (
    <>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>
          
        <div className="text-container">

          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
          
          <div className="text-page-before">ESSAY by <span style={{fontFamily: "oldbold"}}>SARAH CHEKFA</span></div>
          <div className="text-page-title" style={{fontSize: isSmall ? "4rem" : "7rem", lineHeight: isSmall ? "3rem": "5rem", marginBottom: isSmall ? "20px":"50px"}}>Why Am I Seeing This</div>

          <div className="text-page-normal">I am seeing an advertisement for David Protein Bar on the Internet because a friend told me she tried their Peanut Butter Chocolate Chunk Flavor. </div>
          <div className="text-page-normal">I am seeing a meadow filled with millions of red peonies blooming, in time lapse, in my dreams, because a girl on the Internet in a Lululemon sports bra explained how she got her period back after two years of anorexia. </div>
          <div className="text-page-normal">I am seeing a relationship counselor on the Internet instruct me on the importance of keeping the flames of marital love alive if I want to avoid divorce, because my boyfriend is too tired to hang out tonight.</div>
          <div className="text-page-normal">I am seeing a deer on the trail, dead, vultures pecking at its eyes, because a vegetarian influencer on the Internet told me, tears in hers, about a deer she saw run into traffic when she was six.</div>
          <div className="text-page-normal">I am seeing a girl reading Carol J. Adams’ quintessential feminist text, <span className="text-page-italic">The Sexual Politics of Meat</span>, in a café, because I watched a voluptuous blonde influencer on the Internet perform peppy sponcon for Arby’s new steak nuggets.</div>
          <div className="text-page-normal">I am seeing two skeletons embracing one another, in love, in the dirt, on the Internet, because I overheard a woman fighting with her husband on the train.</div>
          <div className="text-page-normal">I am seeing a mirror, split perfectly in half, discarded, on the street, because a girl on the Internet told me I can be a size 4, 5, or 6, and still start a GLP-1.</div>
          <div className="text-page-normal">I am seeing a new mother on the Internet demonstrate to me how her body transformed through pregnancy, because a doula at a death meditation reminded me that mine is fragile and vulnerable.</div>
          <div className="text-page-normal">I am seeing a girl on the Internet wearing hoop earrings because I was thinking about reincarnation earlier today.</div>
          <div className="text-page-normal" style={{width: "fit-content", marginTop: "30px", marginBottom: isSmall ? "150px" : null}}>The Internet see-saw:<br/>I see, therefore I saw.</div>
          </motion.div>

        </div>

        <AboutWork data={workdata} isSmall={isSmall}/>
    </>
  )
}

export default Sarahchefka