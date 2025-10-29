import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PageMenu = (props) => {
    const navigate = useNavigate();
    // const url = window.location.pathname


  return (
    <>
    <div id="page-menu-gradient">
      
        <div id="back-to-works" onClick={() => navigate("/works")}><img src="/img/front/dollhouse-open.png" style={{height: "100%"}}/></div>
      
        <div id="img-navbar">
          {props.urls.map((p) => {
            return <>
            {props.visited[p] ?
              <div><img src={`/img/front${p}.png`} className="nav-img" /></div> : <div style={{filter: "drop-shadow(0 0 2px #bcbcbcff)"}}>●</div>
            }
            </>
          })}
        </div>

          <div id="page-menu" onClick={() => navigate(props.next())}><img src="/img/front/next.png" /></div>
      </div>
      <Outlet />
    </>
  )
}

export default PageMenu