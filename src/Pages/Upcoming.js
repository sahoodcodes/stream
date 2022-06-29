import React from 'react'
import RowPost from '../Components/RowPost/RowPost'
import {upcoming} from '../urls'


function Upcoming() {
  return (
    <div style={{marginTop:"67px"}} >
        <h1 style={{textAlign:"center", color:"white"}} >UPCOMING</h1>
        <RowPost isSmall title='Upcoming' url={upcoming}/>
    </div>
  )
}

export default Upcoming