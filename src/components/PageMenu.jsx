import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PageMenu = (props) => {
    const navigate = useNavigate();
    // const url = window.location.pathname


  return (
    <>
      <div id="page-menu">
          <div onClick={() => navigate(props.next())}>Different</div>
          {/* make the array random instead on refresh so you can't get the same work twice... */}
      </div>
      <div id="back-to-works" onClick={() => navigate("/works")}>Works</div>
      <div id="img-navbar">
        {props.urls.map((p) => {
          return <>
          {props.visited[p] ? 
            <div><img src={`/img/front${p}.png`} className="nav-img" /></div> : <div style={{filter: "drop-shadow(0 0 2px #bcbcbcff)"}}>●</div>
          }
          </>
        })}
      </div>
      <Outlet />
    </>
  )
}

export default PageMenu