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

  const mapImg = document.getElementById("demon-map-img");
  if (!mapImg) return;

  const triggerReflow = () => {
    // Force a reflow after Safari's initial incorrect layout pass
    console.log("triggerReflow")
    mapRef.current?.offsetHeight; // read layout
    mapRef.current?.offsetWidth;
    mapRef.current?.style.setProperty("--safari-fix", Math.random()); // trigger a repaint
  };

  // Run after image loads
  if (mapImg.complete) {
    // already loaded — still trigger
    requestAnimationFrame(triggerReflow);
  } else {
    mapImg.addEventListener("load", triggerReflow, { once: true });
  }

  // Also rerun after small delay to catch any missed timing
  const timeout = setTimeout(triggerReflow, 500);

  return () => clearTimeout(timeout);
}, []);

  const workdata = {
    "title": "Location Scouting",
    "artist": [{
      "name": "Demon Lovers Inc.",
      "ig": "daemonlovers",
    }],
    "date": "2025"
    }

  
  const imgData = [
    {"index": 0,
      "url": "/img/02/1.png",
      "pin": "",
      "map": "/img/02/maps/1b.png",
      "x": "90",
      "y": "0",
      "place": "Boyaca",
      "date": "Nov 2023"
    },
    {"index": 1,
      "url": "/img/02/2.png",
      "pin": "",
      "map": "/img/02/maps/2b.png",
      "x": "55",
      "y": "43",
      "place": "Boyaca",
      "date": "Nov 2023"
    },
    {"index": 2,
        "url": "/img/02/3.png",
        "pin": "",
        "map": "/img/02/maps/3b.png",
        "x": "37",
        "y": "53",
        "place": "Boyaca",
        "date": "Nov 2023"
      },
    {"index": 3,
        "url": "/img/02/4.png",
        "pin": "",
        "map": "/img/02/maps/4b.png",
        "x": "18",
        "y": "62",
        "place": "Boyaca",
        "date": "Jun 2014"
      },
    {"index": 4,
        "url": "/img/02/5.png",
        "pin": "",
        "map": "/img/02/maps/5b.png",
        "x": "42",
        "y": "67",
        "place": "Cra. 1a",
        "date": "Oct 2023"
      },
    {"index": 5,
        "url": "/img/02/6.png",
        "pin": "",
        "map": "/img/02/maps/6b.png",
        "x": "53",
        "y": "59",
        "place": "Chivata",
        "date": "Nov 2023"
      },
    {"index": 6,
        "url": "/img/02/7.png",
        "pin": "",
        "map": "/img/02/maps/7b.png",
        "x": "66",
        "y": "52",
        "place": "Boyaca",
        "date": "Nov 2023"
      },
    {"index": 7,
        "url": "/img/02/8.png", //from here check place
        "pin": "",
        "map": "/img/02/maps/8b.png",
        "x": "83",
        "y": "50",
        "place": "Boyaca",
        "date": "Jun 2014"
      },
    {"index": 8,
        "url": "/img/02/9.png",
        "pin": "",
        "map": "/img/02/maps/9b.png",
        "x": "80",
        "y": "58",
        "place": "Chivata",
        "date": "Nov 2023"
      },
    {"index": 9,
        "url": "/img/02/10.png",
        "pin": "",
        "map": "/img/02/maps/10b.png",
        "x": "70",
        "y": "69",
        "place": "Boyaca",
        "date": "Jun 2014"
      },
    {"index": 10,
        "url": "/img/02/11.png",
        "pin": "",
        "map": "/img/02/maps/11b.png",
        "x": "80",
        "y": "20",
        "place": "Boyaca",
        "date": "Jun 2014"
      },
    {"index": 11,
        "url": "/img/02/12.png",
        "pin": "",
        "map": "/img/02/maps/12b.png",
        "x": "83",
        "y": "26",
        "place": "Boyaca",
        "date": "Jun 2014"
      },
    {"index": 12,
        "url": "/img/02/13.png",
        "pin": "",
        "map": "/img/02/maps/13b.png",
        "x": "13",
        "y": "38",
        "place": "Boyaca",
        "date": "Nov 2023"
      },
    {"index": 13,
        "url": "/img/02/14.png",
        "pin": "",
        "map": "/img/02/maps/14b.png",
        "x": "14",
        "y": "57",
        "place": "Boyaca",
        "date": "Nov 2023"
      }
    ,{"index": 14,
        "url": "/img/02/15.png",
        "pin": "",
        "map": "/img/02/maps/15b.png",
        "x": "58",
        "y": "65",
        "place": "Boyaca",
        "date": "Jun 2014"
      }
    ,{"index": 15,
        "url": "/img/02/16.png",
        "pin": "",
        "map": "/img/02/maps/16b.png",
        "x": "59",
        "y": "80",
        "place": "62",
        "date": "Mar 2024"
      }
    ,{"index": 16,
        "url": "/img/02/17.png",
        "pin": "",
        "map": "/img/02/maps/17b.png",
        "x": "54",
        "y": "93",
        "place": "Cra 1a",
        "date": "Oct 2023"
      }
    ,{"index": 17,
        "url": "/img/02/18.png",
        "pin": "",
        "map": "/img/02/maps/18b.png",
        "x": "47.5",
        "y": "83",
        "place": "Cra 1a",
        "date": "Oct 2023"
      }
    ,{"index": 18,
        "url": "/img/02/19.png",
        "pin": "",
        "map": "/img/02/maps/19b.png",
        "x": "45",
        "y": "85",
        "place": "Cra 1a",
        "date": "Oct 2023"
      }
    ,{"index": 19,
        "url": "/img/02/20.png",
        "pin": "",
        "map": "/img/02/maps/20b.png",
        "x": "47",
        "y": "87.5",
        "place": "Boyaca",
        "date": "Nov 2023"
      }]
  
  const [index, setIndex ] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const props = {
    height: '75vh',
    width: '80vw',
    fisheye: 0.5,
    navbar: [],
    defaultZoomLvl: 0,
    src: "/img/02/1.png",
    plugins: [
         [ MapPlugin, {
            imageUrl: '/img/02/maps/1b.png',
            center: { x: 150, y: 87},
            shape: 'square',
            buttons: {north: false, maximize: false, close: false, reset: false},
            overlayImage: null,
            static: true,
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
    }).then(() => {
      viewerRef.current.getPlugin(MapPlugin).setImage(imgData[i].map)
      setLoading(false)
    })
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
    viewerRef.current.getPlugin(MapPlugin).setImage(item.map)
    viewerRef.current.setPanorama(item.url, {
      showLoader: false,
      transition: false}).then(() => {setOpen(true)})
  }


  const viewerVariants = {
    hidden: (i) => ({ 
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut"
      } }),
    visible: (i) => ({ 
      scale: 1,
      x: "-50%",
      y: "-50%",
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
          
          <ReactPhotoSphereViewer ref={viewerRef} {...props}/>

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
              <div id="demon-prev-btn" onClick={() => handleNext()} style={{zIndex: 100, cursor: loading? "var(--default)" : "var(--pointer)"}}><img src="/img/02/left.svg" style={{width: "100%", cursor: loading? "var(--default)" : "var(--pointer)"}}/></div>
              <div id="demon-next-btn" onClick={() => handlePrev()} style={{zIndex: 100, cursor: loading? "var(--default)" : "var(--pointer)"}}><img src="/img/02/right.svg" style={{width: "100%", cursor: loading? "var(--default)" : "var(--pointer)"}}/></div>
            </div>
            <div style={{fontFamily: 'google', opacity: 0.5}}>Google</div>
          </div>

          {loading && <div id="demon-loading-map">
            loading new map...
          </div>
          }
        </motion.div>

        <div id="demon-map-container" ref={mapRef}>
          <img src="/img/02/map.png" id="demon-map-img" style={{height: "100%"}}/>
          {
            imgData.map((item, i) => {
              return <div className="demon-map-item" style={{top: item.y+'%', left: item.x+'%'}} key={i}
                onClick={() => handleMapItem(item)}><img className="demon-marker" src="/img/02/marker.png" style={{cursor: "var(--pointer)"}}/></div>
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