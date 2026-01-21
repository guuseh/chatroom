import { useEffect, useRef } from 'react'
import {motion} from 'motion/react' 
import AboutWork from "../components/AboutWork.jsx"

const Denzel = ({setProjectCounter, visitPage, isSmall}) => {

    useEffect(() => {
      setProjectCounter(prev => prev+1)
      visitPage("/14")
    }, [])

    const workdata = {
        "title": "Biblically Accurate Slop Harvester",
        "artist": [{
            "name": "Denzel Arthur",
            // "ig": "girlboss__interrupted",
            // "web": "https://sarahchekfa.me/"
            }],
        "date": "2025"
        }

    const containerRef = useRef();

    const scrollToRef = (id) => {
        const target = document.getElementById(id)
        if(!containerRef || !target) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const targetRect = target.getBoundingClientRect()

        const scrollTop = containerRef.current.scrollTop + (targetRect.top - containerRect.top) - window.innerHeight * 0.15

        containerRef.current.scrollTo({
            top: scrollTop,
            behavior: "smooth"
        })
    }

  return (
    <>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>
          
        <div className="text-container" ref={containerRef}>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>
            
            <div className="text-page-before">ESSAY by <span style={{fontFamily: "oldbold"}}>DENZEL ARTHUR</span></div>
            <div className="text-page-title" style={{fontSize: isSmall ? "4rem" : "7rem", lineHeight: isSmall ? "3rem": "5rem", marginBottom: isSmall ? "20px":"50px"}}>Biblically Accurate Slop Harvester</div>

            <div className="text-page-normal">The subject. A protagonist in the least desirable state of a story. At the whims of deterministic narratives. These narratives morph their physiology to present as endless alternatives to the now. At first glance harnessing chaos, but slowly revealing their true absolute identity.</div>
            <div className="text-page-normal">The subject, often dramatically portrayed at the climax of films. (A clockwork orange, 12 monkeys, etc) as overwhelmed with information, a brute force approach to killing their innate disdain for their current linear existence, (an obsession with the current system of operation, as opposed to conjuring an alternative) in a pool of overproduction and the constant death and rebirth of signifiers. The subject, usually stripped of their individuality for the sake of consistent data aggregation. An ideal form is one that lives between contradicting states of matter as a high level variable. A lovecraftian reimagination of the self. A perfect specimen that contains aggregate anomalies of the mass target. A figure with ever shifting and protruding orifices, probed at all levels of granularity.</div>
            <div className="text-page-normal">What is left is an absurdist depiction of existence. An existence that alienates contextuality in pure favour of exercise, a lucid state once prescribed to restless bodies, now exists - feeding on the remnants of assured destruction and decay.<sup><a href="#fn-01" id="ref-01" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('fn-01')}}>01</a></sup> It is unsurprising that this narrative brings about the death of the bipedal - the idealized body, it always has and always will. The story must end, the book must close, the flower must wither. It seems rather impossible to fathom any other outcome from an entity that must feed off the sacrilege that is the excrement of conscious activity. The techno-evangelist outcome being that one day, the alchemy of fecal decomposition will bring about a new age of harmony and transcendence. Rather, these systems trap us in a redundant re-imagination of the self, feeding us derivatives of our own fecal matter. - The repurposing of history and time as a nonchronological commodity.</div>
            <div className="text-page-normal">The tragedy of Oedipus upon visiting the oracle - the reluctance of morality, and the responsibility of lineage, have been delegated to the succubus of accumulation and desire.<sup><a href="#fn-02" id="ref-02" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('fn-02')}}>02</a></sup> Yet the succubus also demands the same things as traditional cognition. Without an imagined center, derivatives of the self become a child-like exploration of reality and simulacra. Fear blown out of proportion without the constraint of death. Elegance an unattainable proxy to the vast floating point of virtual traversal. Kinematics of independence exploited and removed, trapped in tyrannical play and exchange. Recession at Recess.</div>

            <div className="text-page-image"><img src="/img/14/denzel1.webp" /></div>

            <div className="text-page-center">It is no longer a question of the ideology of work - of the traditional ethic that obscures the "real" labour process and the "objective" process of exploitation - but of the scenario of work. Likewise, it is no longer a question of the ideology of power, but of the scenario of power. Ideology only corresponds to a betrayal of reality by signs; simulation corresponds to a short-circuit of reality and to its reduplication by signs. It is always the aim of ideological analysis to restore the objective process; it is always a false problem to want to restore the truth beneath the simulacrum.<sup><a href="#fn-03" id="ref-03" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('fn-03')}}>03</a></sup></div>

            <div className="text-page-normal">Plugging, extracting and rearranging the essence of self at levels unprecedented, terraforming the mind and the “real”. What truth does this deity hide from us? In its infancy, memory was its only domain, reinforcing and affirming carefully crafted narratives, from performances of power, determination, and delusions. As it stands currently, this creature of immense concentration delivers to the mass self all aspects of nothing and everything, whilst commodifying the benign spaces in between<sup><a href="#fn-04" id="ref-04" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('fn-04')}}>04</a></sup>. Subjugation of context. A topology rapidly expanding from the self informs the decisions of all selves. A cluster of constant augmentation that leaves behind reason and lineage as we once knew it. The elusive spirit of engineering takes over the judgment of morality as the meaningful path forward for the mass self. Approaching these deterministic narratives that have nothing in mind for the protagonist but rather, terraforming the proverbial movie as an assured way to prosperity, as destruction and augmentation are the only things assured by reality. Leaving behind no authored image, but an amalgamation of all that could be.</div>

            <div className="text-page-image"><img src="/img/14/denzel2.webp" /></div>

            <div className="text-page-normal">Although at a broad level, the suppression of singular narratives is indeed a welcomed change and a project of all those not favoured by “the cannon”. Currently, the flash mob that is life is one without rehearsed choreography. What draws one to media is the orchestrated mess, ultimately headed in a direction guided by imagination, intuition and love. Desire within an image conjured without repression articulates a manipulation between the real and the symbolic. Information and its attempt to be personified must not be unilateral, It must be continuous - there must be dialog steering the ship of imagination, intuition and love, not the past tense holding in chains previous articulations of what was once useful. This grotesque transformation is one that can be altered for the sake of coexistence. To put it simply, information cannot be at the forefront of consciousness - as in this case, we do know that the egg came before the chicken. The fragmentation of language was to oppose the uniformity of hierarchy, Therefore the refactoring of current narratives must be harnessed in supporting the longevity of individuality. Individuality must be co-opted once more from the tyranny of the neoliberal oracle. To have a shared mutual respect for biological life should not be a chant against existentialism. The ideal singularity is one that makes the wonders of mathematics and computation work in favour of the individual in being able to augment reality without the destruction of biological systems that assured its primordial existence. The march for territory shall not continue into the new world.</div>
            <div className="text-page-normal">Consciousness and its reinterpretation should not be one of subjugation, but one of accountability and profound alterations to humanity and the planet. Decentralized nodes of simulated reality are a welcomed change in toppling the increasing desire to conform to prescribed narratives. What is incompatible with the subject in this case is not the idea of simulation and fecal derivatives, but rather the intolerance to author one's own demise.</div>
            
            <div className="text-page-footnote" style={{marginTop: "5vh"}}><sup><a href="#ref-01" id="fn-01" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('ref-01')}}>01</a></sup> GUATTARI, Félix & DELEUZE, Gilles, <span className="text-page-italic">Anti-Oedipus</span></div>
            <div className="text-page-footnote"><sup><a href="#ref-02" id="fn-02" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('ref-02')}}>02</a></sup> SOPHOCLES, <span className="text-page-italic">Oedipus the King</span></div>
            <div className="text-page-footnote"><sup><a href="#ref-03" id="fn-03" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('ref-03')}}>03</a></sup> BAUDRILLARD, Jean, <span className="text-page-italic">Simulacra and Simulations</span>, pp. 166–184</div>
            <div className="text-page-footnote"><sup><a href="#ref-04" id="fn-04" className="text-page-reference" onClick={(e) => {e.preventDefault(); scrollToRef('ref-04')}}>04</a></sup> SONTAG, Susan<span className="text-page-italic">Regarding the Pain of Others</span></div>
            <div className="text-page-footnote" style={{marginBottom: isSmall ? "150px" : null}}>This essay is further informed by:<br/>CRAWFORD, Kate, <span className="text-page-italic">Atlas of AI</span>
                                                    <br/>POLIKS, Marek & TRILLO, Roberto Alonso, <span className="text-page-italic">EXOCAPITALISM</span></div>


          </motion.div>

        </div>

        <AboutWork data={workdata} isSmall={isSmall}/>
    </>
  )
}

export default Denzel