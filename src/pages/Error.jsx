import React from 'react'
import {useNavigate} from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh", gap: "50px"}}>
      <div onClick={() => navigate('/works')} style={{position: "absolute", top: "var(--margin)", right: "var(--margin)", cursor: 'var(--pointer)'}}>back</div>
      <div style={{fontFamily: "jacquard", fontSize: "6rem", color: "var(--glow)"}}>404</div>
      <div style={{background: "white", padding: "40px", boxShadow: "var(--pinkshadow)", textAlign: "center", fontSize: "1rem", border: "1px solid black"}}>
        Have you been seeing 404 everywhere lately? 
        <br/><br/>
        The angels say some doors are not meant to open just yet. 
        <br/><br/>
        Follow the flutter of the cyber moth, and it will lead you back to the light.
      </div>
    </div>
  )
}

export default Error