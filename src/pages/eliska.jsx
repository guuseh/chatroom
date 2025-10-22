import {useEffect} from 'react'

const Eliska = ({setProjectCounter, visitPage}) => {
  // ROOM 03
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/03")
  }, [])
  return (
    <div>Eliska</div>
  )
}

export default Eliska