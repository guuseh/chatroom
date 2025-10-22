import {useEffect} from 'react'

const Bogna = ({setProjectCounter, visitPage}) => {
  // ROOM 01
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/01")
  }, [])
  return (
    <div>bogna</div>
  )
}

export default Bogna