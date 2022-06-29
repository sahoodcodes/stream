import React from 'react'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import {originals,action,documentary,science} from '../urls' 

function Home() {
  return (
    <div>
        <Banner/>
        <RowPost title="Netflix Originals" url={originals} />
        <RowPost title="Action"  url={action} />
        <RowPost title="Documentary"  url={science} />
    </div>
  )
}

export default Home 