import {useState, useEffect, useRef} from 'react'

const Parkerito = ({setProjectCounter, visitPage}) => {
  // ROOM 07
  const ref = useRef();
  const [shiftLeft, setShiftLeft] = useState()
  const [shiftTop, setShiftTop] = useState()

  // console.log(ref.current.offsetWidth)
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/07")
  }, [])

  useEffect(() => {
    getMeasurements();
  }, [shiftLeft])

  const getMeasurements = () => {
    let left = (1840 - ref.current.offsetWidth) / 2
    let top = (1210 - ref.current.offsetHeight) / 2
    setScroll(left, top)
  }
  const setScroll = (left, top) => {
    setShiftLeft(left)
    setShiftTop(top)
  }

  window.addEventListener('resize', getMeasurements)

  return (
    <div class="theatre-container">
      <div id="eyes-container" className="theatre-item" ref={ref}>
        {/* {html} */}
        <iframe id="parkerframe" src="https://parker.sex/eyes" 
          style={{backgroundColor:"#aaa", left: `-${shiftLeft}px`, top: `-${shiftTop}px`}}/>
      </div>
    </div>
  )
}

export default Parkerito