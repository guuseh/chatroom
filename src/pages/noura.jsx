import {useEffect} from 'react'

const Noura = ({setProjectCounter, visitPage}) => {
  // ROOM 06
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/06")
  }, [])
  return (
    <div>Noura</div>
  )
}

export default Noura