import React from 'react'
import RowPost from '../Components/RowPost/RowPost'
import {tvpopular,mvpopular} from '../urls' 

function Popular() {
  return (
      
    <div style={{marginTop:"67px"}} >
        <h1 style={{textAlign:"center", color:"white"}} >POPULAR</h1>
        <RowPost isSmall title='Popular Movie' url={mvpopular}/>
        <RowPost isSmall title='Popular Movie' url={tvpopular}/>

    </div>
  )
}

export default Popular