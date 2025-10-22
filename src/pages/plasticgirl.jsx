import {useEffect} from 'react'

const Plasticgirl = ({setProjectCounter, visitPage}) => {
  // ROOM 08
  useEffect(() => {
    setProjectCounter(prev => prev+1)
    visitPage("/08")
  }, [])
  return (
    <div>Plasticgirl</div>
  )
}

export default Plasticgirl