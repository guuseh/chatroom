import {useRef, useState, useEffect} from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import { MapPlugin } from '@photo-sphere-viewer/map-plugin'
import { VisibleRangePlugin } from '@photo-sphere-viewer/visible-range-plugin'
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin'
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"
import { motion } from "motion/react"
import AboutWork from "../components/AboutWork.jsx"

// import PageMenu from "../components/PageMenu.jsx"

const Demonlovers = ({setProjectCounter, visitPage}) => {
  //ROOM 02
  const viewerRef = useRef(null);
  const mapRef = useRef();

  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/02")
  }, [])

  const workdata = {
    "title": "Location Scouting",
    "artist": [{
      "name": "Demon Lovers inc",
      "ig": "daemonlovers",
    }],
    "date": "2025"
    }

  
  const imgData = [
    {"index": 0,
      "url": "/img/02/1.png",
      "pin": "",
      "map": "",
      "x": "90",
      "y": "0",
      "place": "Boyaca",
      "date": "Jun 2024"
    },
    {"index": 1,
      "url": "/img/02/2.png",
      "pin": "",
      "map": "",
      "x": "55",
      "y": "43",
      "place": "Chivata",
      "date": "Nov 2023"
    },
    {"index": 2,
        "url": "/img/02/3.png",
        "pin": "",
        "map": "",
        "x": "37",
        "y": "53",
        "place": "62",
        "date": "Mar 2024"
      },
    {"index": 3,
        "url": "/img/02/4.png",
        "pin": "",
        "map": "",
        "x": "18",
        "y": "62",
        "place": "Cra 1a",
        "date": "Oct 2023"
      },
    {"index": 4,
        "url": "/img/02/5.png",
        "pin": "",
        "map": "",
        "x": "42",
        "y": "67",
        "place": "Cra 1a",
        "date": "Oct 2023"
      },
    {"index": 5,
        "url": "/img/02/6.png",
        "pin": "",
        "map": "",
        "x": "53",
        "y": "59",
        "place": "Cra 1a",
        "date": "Oct 2023"
      },
    {"index": 6,
        "url": "/img/02/7.png",
        "pin": "",
        "map": "",
        "x": "66",
        "y": "52",
        "place": "Cra 1a",
        "date": "Oct 2023"
      },
    {"index": 7,
        "url": "/img/02/panoramatest4.jpeg",
        "pin": "",
        "map": "",
        "x": "83",
        "y": "50",
        "place": "Cra 1a",
        "date": "Oct 2023"
      },
    {"index": 8,
        "url": "/img/02/panoramatest4.jpeg",
        "pin": "",
        "map": "",
        "x": "80",
        "y": "58",
        "place": "Cra 1a",
        "date": "Oct 2023"
      },
    {"index": 9,
        "url": "/img/02/panoramatest4.jpeg",
        "pin": "",
        "map": "",
        "x": "70",
        "y": "69",
        "place": "Cra 1a",
        "date": "Oct 2023"
      }]
  
  const [index, setIndex ] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const props = {
    height: '80vh',
    width: '80vw',
    fisheye: 0,
    navbar: [],
    defaultZoomLvl: 0,
    src: "/img/02/1.png",
    plugins: [
         [ MapPlugin, {
            imageUrl: '/img/02/panoramatest.jpeg',
            center: { x: 700, y: 500},
            shape: 'square',
            buttons: {north: false, maximize: false, close: false, reset: false},
            overlayImage: null
          } ],
          [ VisibleRangePlugin, {
            horizontalRange: [-Math.PI / 1.5, Math.PI / 1.5],
            verticalRange: [-Math.PI / 2.5, Math.PI / 2.5]
          } ],
          [ CompassPlugin, {
            size: '70px',
            position: "bottom right"
          } ]
        ]
  }

  const changePanorama = (i) => {
    setIndex(i)
      viewerRef.current.setPanorama(imgData[i].url, {
      showLoader: false,
      position: {
        yaw: (((Math.random() - 0.5) * 3) / 2) * Math.PI,
        pitch: (((Math.random() - 0.5) * 3) / 4) * Math.PI,
      }
    }).then(() => setLoading(false))
  }

  const handleNext = () => {
    if(loading) return;
    setLoading(true)
    if(index == imgData.length-1){
      changePanorama(0)
    } else{
      changePanorama(index+1)
    }
  }
  const handlePrev = () => {
    if(loading) return;
    setLoading(true)
    if(index == 0){
      changePanorama(imgData.length-1)
    } else{
      changePanorama(index-1)
    }
  }

  const handleMapItem = (item) => {
    setIndex(item.index)
    viewerRef.current.setPanorama(imgData[item.index].url, {
      showLoader: false,
      transition: false}).then(() => setOpen(true))
  }

  const viewerVariants = {
    hidden: (i) => ({ 
      scale: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut"
      } }),
    visible: (i) => ({ 
      scale: 1,
      transition: {
          duration: 0.3,
          type: "tween",
          ease: "easeInOut",
        } })
  }

  const sideSpace = (window.innerWidth - window.innerHeight) / 2
  const sidePercentage =  sideSpace / window.innerWidth * 100 - 5

  const mapValue = (number, [inMin, inMax], [outMin, outMax]) => {
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
  }

  // maybe make share button share the link to the artwork on the website??

  return (
    <>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 2.5}}} className="title-overlay">"{workdata.title}"</motion.div>

    <div className="center-container">

      <div id="demon-underlay-close" onClick={() => setOpen(false)}></div>
      <motion.div id="demon-container" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeIn"}}}>

        <motion.div id="demon-panorama-container" 
          initial={{scale: 0}} variants={viewerVariants} custom={index} animate={open? "visible" : "hidden"}
          style={{transformOrigin: `${mapValue(imgData[index].x, [0, 100], [0+sidePercentage, 100-sidePercentage])}% ${imgData[index].y}%`}}>
          
          <ReactPhotoSphereViewer ref={viewerRef} {...props} />

          <div id="demon-address-overlay">
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
              <div style={{fontWeight: "bold", fontSize: "0.9rem"}}>{imgData[index].place}</div>
              <div style={{height: "20px", width: "20px"}}><img src="/img/02/marker.png" style={{width: "100%"}}/></div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
              <div style={{width: "20px", height: "20px", padding: "3px", borderRadius: "10px", background: "white"}}><img src="/img/02/google.png" style={{width: "100%"}}/></div>
              <div>Google Street View</div>
            </div>
            <div style={{borderBottom: "1px solid #aaa"}}></div>
            <div style={{color: "#aaa"}}>{imgData[index].date}</div>
          </div>

          <div id="demon-close-btn" onClick={() => setOpen(false)}><img src="/img/02/cross.svg" style={{width: "100%"}}/></div>

          <div id="demon-bottom-center">
            <div style={{display: "flex", gap: "15px", opacity: loading? 0.3 : 1}}>
              <div id="demon-prev-btn" onClick={() => handleNext()} style={{zIndex: 100, cursor: loading? "default" : "pointer"}}><img src="/img/02/left.svg" style={{width: "100%"}}/></div>
              <div id="demon-next-btn" onClick={() => handlePrev()} style={{zIndex: 100, cursor: loading? "default" : "pointer"}}><img src="/img/02/right.svg" style={{width: "100%"}}/></div>
            </div>
            <div style={{fontFamily: 'google'}}>Google</div>
          </div>
        </motion.div>

        <div id="demon-map-container" ref={mapRef}>
          <img src="/img/02/map.png" id="demon-map-img" />
          {
            imgData.map((item, i) => {
              return <div className="demon-map-item" style={{top: item.y+'%', left: item.x+'%'}} key={i}
                onClick={() => handleMapItem(item)}><img className="demon-marker" src="/img/02/marker.png" /></div>
            })
          }
        </div>

      </motion.div>
    </div>

    <AboutWork data={workdata}/>
    </>
  )
}

export default Demonlovers