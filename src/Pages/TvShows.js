import React from 'react'
import RowPost from '../Components/RowPost/RowPost'
import {tvpopular,tvdiscover} from '../urls'

function TvShows() {
  return (
    <div style={{marginTop:"67px"}}>
        <h1 style={{textAlign:"center", color:"white"}} >TV Show</h1>
        <RowPost isSmall title="TV Discover" url={tvdiscover} />
    </div>
  )
}

export default TvShows