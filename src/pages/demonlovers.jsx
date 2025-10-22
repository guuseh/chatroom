import {useRef, useState, useEffect} from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import { MapPlugin } from '@photo-sphere-viewer/map-plugin'
import { VisibleRangePlugin } from '@photo-sphere-viewer/visible-range-plugin'
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin'
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"
import { motion } from "motion/react"

// import PageMenu from "../components/PageMenu.jsx"

const Demonlovers = ({setProjectCounter, visitPage}) => {
  //ROOM 02
  const viewerRef = useRef(null);
  const mapRef = useRef();

  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/02")
  }, [])

  
  const imgData = [
    {"index": 0,
      "url": "/img/02/panoramatest.jpeg",
      "pin": "",
      "map": "",
      "x": "10%",
      "y": "10%",
      "place": "Boyaca",
      "date": "Jun 2024"
    },
    {"index": 1,
      "url": "/img/02/panoramatest2.jpeg",
      "pin": "",
      "map": "",
      "x": "30%",
      "y": "40%",
      "place": "Chivata",
      "date": "Nov 2023"
    },
    {"index": 2,
        "url": "/img/02/panoramatest3.jpeg",
        "pin": "",
        "map": "",
        "x": "80%",
        "y": "30%",
        "place": "62",
        "date": "Mar 2024"
      },
    {"index": 3,
        "url": "/img/02/panoramatest4.jpeg",
        "pin": "",
        "map": "",
        "x": "60%",
        "y": "60%",
        "place": "Cra 1a",
        "date": "Oct 2023"
      }]
  
  const [index, setIndex ] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const props = {
    height: '80vh',
    width: '80vw',
    fisheye: 1.0,
    navbar: [],
    defaultZoomLvl: 0,
    src: "/img/02/panoramatest.jpeg",
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

  // maybe make share button share the link to the artwork on the website??

  return (
    <div className="center-container">

      <div id="demon-underlay-close" onClick={() => setOpen(false)}></div>
      <div id="demon-container" >
        <motion.div id="demon-panorama-container" 
          initial={{scale: 0}} variants={viewerVariants} custom={index} animate={open? "visible" : "hidden"}
          style={{transformOrigin: `${imgData[index].x} ${imgData[index].y}`}}>
          <ReactPhotoSphereViewer ref={viewerRef} {...props} />
          <div id="demon-address-overlay">
            <div style={{fontWeight: "bold"}}>{imgData[index].place}</div>
            <div>Google Street View</div>
            <div style={{borderBottom: "1px solid #ddd"}}></div>
            <div>{imgData[index].date}</div>
          </div>
          <div id="demon-close-btn" onClick={() => setOpen(false)}>X</div>
          <div id="demon-bottom-center">
            <div style={{display: "flex", gap: "15px", opacity: loading? 0.3 : 1}}>
              <div id="demon-prev-btn" onClick={() => handleNext()} style={{zIndex: 100, cursor: loading? "default" : "pointer"}}> &lt; </div>
              <div id="demon-next-btn" onClick={() => handlePrev()} style={{zIndex: 100, cursor: loading? "default" : "pointer"}}> &gt; </div>
            </div>
            <div>Google</div>
          </div>
        </motion.div>
        <div id="demon-map-container" ref={mapRef}>
          {
            imgData.map((item, i) => {
              return <div className="demon-map-item" style={{top: item.y, left: item.x}} key={i}
                onClick={() => handleMapItem(item)}><img src={item.url} /></div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Demonlovers