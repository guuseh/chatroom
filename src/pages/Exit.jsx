import React from 'react'

const Exit = () => {
  return (
    <div id="exit-page">
      <div id="exit-restart">start over?</div>
      <div id="exit-leftgrid">
          <div style={{gridArea: "top-left"}} className="exit-shelf">a</div>
          <div style={{gridArea: "top-right"}} className="exit-shelf">b</div>

          <div style={{gridArea: "center-left"}} className="exit-shelf">c</div>
          <div style={{gridArea: "center-right"}} className="exit-shelf">d</div>

          <div style={{gridArea: "bottom-left"}} className="exit-shelf">e</div>
          <div style={{gridArea: "bottom-right"}} className="exit-shelf">f</div>

          <div style={{gridArea: "title", alignSelf: "center"}} className="pink-button">who watches from the chatroom?</div>
      </div>
      <div id="exit-rightgrid">
        <div style={{gridArea: "info"}}>info</div>
        <div style={{gridArea: "chat"}}>chat</div>
        <div style={{gridArea: "type"}}>type</div>
      </div>
    </div>
  )
}

export default Exit