import {useEffect} from 'react'

const Sarahchefka = ({setProjectCounter, visitPage}) => {
  // ROOM 09
  useEffect(() => {
      setProjectCounter(prev => prev+1)
      visitPage("/09")
    }, [])
    
  return (
    <div>Sarahchefka</div>
  )
}

export default Sarahchefka