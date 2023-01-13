import React, { useEffect } from 'react'

const Sucess = ({setClosed}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setClosed(true)
      window.close()
    },2000)
  },[])
  
  
  return (
    <div>Sucess</div>
  )
}

export default Sucess