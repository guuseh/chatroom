import {useState} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PageMenu = (props) => {
    const navigate = useNavigate();
    const [tooltip, setTooltip] = useState(false)
    const [mouse, setMouse] = useState([])
    // const url = window.location.pathname


  return (
    <>
    {tooltip && !props.isSmall && <div className="tooltip" style={{top: mouse[1], left: mouse[0]}}>collect more</div>}

    <div id="back-to-works" onClick={() => navigate("/works")}><img src="/img/front/dollhouse-open.png" style={{height: "100%"}}/></div>
    {props.isSmall && <div id="page-menu-next" onClick={() => navigate(props.next())} onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true)}} onMouseLeave={() => setTooltip(false)}><img style={{cursor: "var(--pointer)", height: "100%"}} src="/img/front/next.png" /></div>}       

    <div id="page-menu-gradient">
      
        <div id="img-navbar">
          {props.urls.map((p) => {
            return <>
            {props.visited[p] ?
              <div className="nav-img" onClick={() => navigate(`/room${p}`)}><img src={`/img/front${p}.png`} style={{height: "100%", cursor: "var(--pointer)"}} /></div> 
              : 
              <div style={{filter: "drop-shadow(0 0 2px #bcbcbcff)", width: "40px", color: "var(--pink)", textAlign: "center"}}>●</div>
            }
            </>
          })}
        {!props.isSmall && <div id="page-menu-next" onClick={() => navigate(props.next())} onMouseMove={(e) => {setMouse([e.clientX, e.clientY]), setTooltip(true)}} onMouseLeave={() => setTooltip(false)}><img style={{cursor: "var(--pointer)", height: "100%"}} src="/img/front/next.png" /></div>}       
        </div>
   
      </div>
      
      <Outlet />
    </>
  )
}

export default PageMenu