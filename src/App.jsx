import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Exit from "./pages/Exit.jsx";
import Projects from "./pages/Projects.jsx"
import PageMenu from "./components/PageMenu.jsx"
import Error from "./pages/Error.jsx"
import ExitDoor from "./components/ExitDoor.jsx"
import PopUp from "./components/PopUp.jsx"

import Bogna from "./pages/bogna.jsx"; //text ROOM 01
import Demonlovers from "./pages/demonlovers.jsx"; // custom google maps ROOM 02
import Eliska from "./pages/eliska.jsx"; // images ROOM 03
import Ester from "./pages/ester.jsx" // custom auto writing text ROOM 04
import James from "./pages/james.jsx" // images ROOM 05
import Noura from "./pages/noura.jsx" // custom character sprites -> video ROOM 06
import Parkerito from "./pages/parkerito.jsx" // custom eyes html ROOM 07
import Plasticgirl from "./pages/plasticgirl.jsx" // video ROOM 08
import Sarahchefka from "./pages/sarahchefka.jsx" // text ROOM 09
import Sotce from "./pages/sotce.jsx" // video ROOM 10
import Richard from "./pages/richard.jsx" // video ROOM 11
import Denzel from "./pages/denzel.jsx" // text ROOM 12

function App() {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
  
      const listener = () => {
        setMatches(media.matches);
      };
  
      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", listener);
      } else {
        media.addListener(listener);
      }
  
      return () => {
        if (typeof media.removeEventListener === "function") {
          media.removeEventListener("change", listener);
        } else {
          // media.removeListener(listenerList);
        }
      };
    }, [matches, query]);
  
    return matches;
  }
  const useIsSmall = () => useMediaQuery("(max-width: 600px");

  const isSmall = useIsSmall();

  const urls = ["/01", "/02", "/03", "/04", "/05",
                 "/06", "/07", "/08", "/09", "/10", "/11", "/12"]
  const [shuffledUrls, setShuffledUrls] = useState([]) // will only contain urls
  const [projectCounter, setProjectCounter] = useState(0)
  const [shuffledDivs, setShuffledDivs] = useState([]) // will contain also empty 0 divs
  // const [array, setArray] = useState(isSmall ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "/11", "/12"] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "/11", "/12"]) // on desktop: 7x4 (28) grid, on mobile 4x6 (24) grid
  const [array, setArray] = useState([])
  const [visited, setVisited] = useState({count: 0})
  const [showObjects, setShowObjects] = useState(null)

  const visitPage = (nr) => {
    // if(visited[nr]){
    //   return;
    // } else{
    //   setVisited({
    //     ...visited,
    //     [nr]: true,
    //     count: visited.count++ 
    //   })
    // }
    setVisited((prev) => {
      if (prev[nr]) return prev; // already visited
      const newCount = prev.count + 1;
      return { ...prev, [nr]: true, count: newCount };
    });
  }

  // shuffle urls for randomised list
  useEffect(() => {

    // LOCAL STORAGE
    const saved = localStorage.getItem("visited");
    if (saved) {
      setVisited(JSON.parse(saved));
    }

    const show = localStorage.getItem("showObjects");
    if(show){
      setShowObjects(JSON.parse(show))
    }

    const shuffled = urls
          .map(v => ({v, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({v}) => v)

    setShuffledUrls(shuffled)

    document.documentElement.style.setProperty('--vh-p', window.innerHeight + "px")
  }, [])


  // LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("visited", JSON.stringify(visited));
  }, [visited]);

  useEffect(() => {
    if(showObjects != null){
    localStorage.setItem("showObjects", JSON.stringify(showObjects));
    }
  }, [showObjects]);

  const resetVisited = () => {  
  // clear localStorage
  localStorage.removeItem("visited");
  localStorage.removeItem("showObjects")
  setVisited({ count: 0 });
  setShowObjects(false);
  setProjectCounter(0);
  };

  // set array for adding projects to empty divs for grid
  useEffect(() => {
    if(isSmall){
      let empty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "/13", "/14"]
      setArray([...shuffledUrls, ...empty])
    } else{
      let empty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "/13", "/14"]
      setArray([...shuffledUrls, ...empty])
    }
    // setArray(prev => [...prev, ...shuffledUrls])

  }, [shuffledUrls])


  // shuffle divs of grid
  useEffect(() => {
    const shuffled = array
          .map(v => ({v, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({v}) => v)

      setShuffledDivs(shuffled)
  }, [array])

  const nextWork = () => {
    // const currentWork = shuffledUrls.findIndex((url) => url == window.location.pathname.slice(5))
    // if(currentWork == shuffledUrls.length-1){
    //   return "/room"+shuffledUrls[0]
    //   } else{
    //     return "/room"+shuffledUrls[currentWork+1]
    //   }
    const current = window.location.pathname.replace("/room", "")

    const unvisited = shuffledUrls.filter((url) => !visited[url] && url !== current)
    const hasvisited = shuffledUrls.filter((url) => visited[url] && url !== current)

    console.log(unvisited, hasvisited)

    if(unvisited.length > 0){
      return "/room" + unvisited[0];
    }
    if(hasvisited.length > 0){
      return "/room" + hasvisited[0]
    }
    return "/room" + shuffledUrls[0]
    }

  
  

  return (
    <>
      <Router basename={import.meta.env.PUBLIC_URL}>

      <PopUp />

        <Routes>
          <Route path="*" element={<Error isSmall={isSmall}/>} />
          <Route index path="/" element={<Home isSmall={isSmall}/>} />
          <Route path="/exit" element={<Exit resetVisited={resetVisited} visited={visited} isSmall={isSmall}/>} />

          <Route element={<ExitDoor isSmall={isSmall} urls={urls} visited={visited} showObjects={showObjects} setShowObjects={setShowObjects}/>} >
          <Route path="/works" element={<Projects projects={shuffledDivs} urls={urls} visited={visited} showObjects={showObjects} isSmall={isSmall}/>} />

          <Route path="room" element={<PageMenu next={nextWork} urls={urls} visited={visited} isSmall={isSmall}/>}>
            
              <Route path="01" element={<Bogna setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="02" element={<Demonlovers setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="03" element={<Eliska setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="04" element={<Ester setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="05" element={<James setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="06" element={<Noura setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="07" element={<Parkerito setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="08" element={<Plasticgirl setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="09" element={<Sarahchefka setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="10" element={<Sotce setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="11" element={<Richard setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
              <Route path="12" element={<Denzel setProjectCounter={setProjectCounter} visitPage={visitPage} isSmall={isSmall}/>} />
            
          </Route>
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
