import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Exit from "./pages/Exit.jsx";
import Projects from "./pages/Projects.jsx"
import PageMenu from "./components/PageMenu.jsx"

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

function App() {
  const urls = ["/01", "/02", "/03", "/04", "/05",
                "/06", "/07", "/08", "/09", "/10", "/11", "/12"]
  const [shuffledUrls, setShuffledUrls] = useState([])
  const [projectCounter, setProjectCounter] = useState(0)
  const [shuffledDivs, setShuffledDivs] = useState([])
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  const [visited, setVisited] = useState({})
  const visitPage = (nr) => {
    setVisited({
      ...visited,
      [nr]: true
    })
  }

  useEffect(() => {
    const shuffled = urls
          .map(v => ({v, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({v}) => v)

    setShuffledUrls(shuffled)
    // console.log(shuffledUrls)
  }, [])

  useEffect(() => {
    setArray(prev => [...prev, ...shuffledUrls])

  }, [shuffledUrls])

  useEffect(() => {
    const shuffled = array
          .map(v => ({v, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({v}) => v)

      setShuffledDivs(shuffled)
  }, [array])

  console.log(shuffledDivs)

  const nextWork = () => {
    const currentWork = shuffledUrls.findIndex((url) => url == window.location.pathname.slice(5))
    if(currentWork == shuffledUrls.length-1){
      return "/room"+shuffledUrls[0]
    } else{
      return "/room"+shuffledUrls[currentWork+1]
    }
  }

  // console.log(nextWork)

  return (
    <>
      <Router basename={import.meta.env.PUBLIC_URL}>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="/works" element={<Projects projects={shuffledDivs}/>} />

          <Route path="room" element={<PageMenu next={nextWork} urls={urls} visited={visited}/>}>
            
              <Route path="01" element={<Bogna setProjectCounter={setProjectCounter} visitPage={visitPage} />} />
              <Route path="02" element={<Demonlovers setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              <Route path="03" element={<Eliska setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              <Route path="04" element={<Ester setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              <Route path="05" element={<James setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              {/* <Route path="06" element={<Noura setProjectCounter={setProjectCounter} visitPage={visitPage}/>} /> */}
              <Route path="07" element={<Parkerito setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              <Route path="08" element={<Plasticgirl setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              <Route path="09" element={<Sarahchefka setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
              <Route path="10" element={<Sotce setProjectCounter={setProjectCounter} visitPage={visitPage}/>} />
            
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
