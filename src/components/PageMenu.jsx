import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PageMenu = (props) => {
    const navigate = useNavigate();
    // const url = window.location.pathname


  return (
    <>
    <div id="back-to-works" onClick={() => navigate("/works")}><img src="/img/front/dollhouse-open.png" style={{height: "100%"}}/></div>
    <div id="page-menu-gradient">
      
        <div id="img-navbar">
          {props.urls.map((p) => {
            return <>
            {props.visited[p] ?
              <div className="nav-img" onClick={() => navigate(`/room${p}`)}><img src={`/img/front${p}.png`} style={{height: "100%", cursor: "var(--pointer)"}} /></div> : <div style={{filter: "drop-shadow(0 0 2px #bcbcbcff)", color: "var(--pink)"}}>●</div>
            }
            </>
          })}
          <div id="page-menu-next" onClick={() => navigate(props.next())}><img className="nav-img" style={{cursor: "var(--pointer)"}} src="/img/front/next.png" /></div>
        </div>

          
      </div>
      <Outlet />
    </>
  )
}

export default PageMenu