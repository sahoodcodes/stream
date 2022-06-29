import axios from '../../Axios'
import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../Firebase/Config'
import './Bannner.css'
import { getAuth } from "firebase/auth";

function Banner() {
    const [movie, setMovie] = useState()
  
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid 

    const handleStore = async () =>{
        const docRef = await addDoc(collection(db, uid), {
          Details:movie
        });
        console.log("Document written with ID: ", docRef.id);
      }
    
  
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`)
         var items =response.data.results
         var random = items[Math.floor(Math.random() * items.length)];
         setMovie(random)
        // setMovie(response.data.results[1])
        })
    }, [])
    
  return (
      
    <div  style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}} className='banner col-12'>
        <div className="content2">
            <h1 className='titile'>{movie ? movie.title||movie.name : ""}</h1>
            <div className="banner_buttons">
                <button className='button2'>Play</button>
                <button className='button2' onClick={handleStore} >My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade12"></div>
    </div>
  )
}

export default Banner 