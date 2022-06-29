import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs,doc,deleteDoc  } from "firebase/firestore";
import { db } from '../Firebase/Config'
import { getAuth } from "firebase/auth";
import { imageUrl } from '../Constants/Constants'
import { Alert } from 'react-bootstrap';


function MyList() {
  const [movie, setMovie] = useState([])
  const [pop, setPop] = useState(false)
    const [alertStyle, setAlertStyle] = useState('')
    const [Details, setPopDetails] = useState('')
  const [delet, setdelet] = useState('')
  const [sure, setsure] = useState(true)
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid 
  useEffect(() => {
    const colRef = collection(db, uid)
    getDocs(colRef)
      .then((snapshot) => {
        let data = []
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data().Details })
          setMovie(data)
        })
      })
      .catch(err => {
      })
  }, [])
  const handleChildElementClick = (e) => {
    e.stopPropagation()   }

    const handleStore = async () =>{
      setsure(!sure)
      const q = query(collection(db, uid), where("Details.id", "==", Details.id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setdelet(doc.id)
      });
      await deleteDoc(doc(db, uid, delet));
      setPop(false)
      setMovie(movie.filter((element) => element.id !== Details.id))
      setAlertStyle("danger")
      setTimeout(() => {
        setAlertStyle("")
        setsure(true)
    }, 1500);
      }
  

  

  return (
    <div style={{ marginTop: "100px" }} className='row' >
      <h2  >My List</h2>
      <div className="small_posters" >
        {movie.map((obj, index) =>
          <img onClick={() => {
            setPopDetails(obj)
            setPop(true)
          }} key={index} src={`${imageUrl + obj.backdrop_path}`} alt="" className="poster" />
        )}
      </div>

      {alertStyle && <div className='alert-support' >
                     <Alert variant={alertStyle}>
                        Deleted from My List
                    </Alert>
                </div>}

     
        {pop ?<div  className='pop_back' onClick={()=>setPop(!pop)}>
         <div className='pop col-10 col-md-8' onClick={(e) => handleChildElementClick(e)}>
           <div className='pop_left col-12 col-md-6'>
             <img src={`${ imageUrl+Details.backdrop_path }`} className='pop_img col-12' alt=''/>
             
             <div className='pop_button' >
             <button><i class="fa fa-play"></i></button>
               <button onClick={handleStore} ><i class="fa fa-trash"></i></button>
               <h6 id='b1'>Play</h6>{ sure ? <h6 id='b2' style={{marginLeft:"149px"}} >Delete</h6> : <h6 id='b2' style={{marginLeft:"110px",color:"red"}} >Click Again to Conform</h6>}
             </div>
           </div>

           <div className='pop_info col-12 col-md-6' style={{float:"left"}} >
            <div style={{overflow:"hidden", maxHeight:"80px"}} >
              <h2>{Details.title||Details.name} &nbsp;
              <span style={{color:"red", fontWeight:"300"}}>{Details.vote_average}</span>
              </h2>
            </div>
            <div className='pop_text' ><p>{Details.overview}</p></div>  
            <div className='pop_rate'>
             <h6>Vote Count  :<span style={{color:"red"}}>{Details.vote_count}</span></h6> 
             <h6>&emsp;Popularity :<span style={{color:"red", fontWeight:"33"}}>{Details.popularity}</span></h6>
           </div>
           </div>

           
         </div>
        </div> : ""}
    </div>
  )
}

export default MyList
