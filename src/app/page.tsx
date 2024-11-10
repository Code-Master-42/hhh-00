import React from 'react'
import Home from './Home/page'
import Rooms from './room/page'
import Contact from './contact/page'



const page = () => {
  return (
    <div>
      <Home/>
      <Rooms/>
      <Contact/>
    </div>
  )
}

export default page