import React, {  useState } from 'react'
import './SignUp.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap';
import logoNetflix from "../../Store/logoNetflix.png"
import backGround from "../../Store/backGround.jpeg"



function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const [alertStyle, setAlertStyle] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [spinner, setSpinner] = useState(false)
  let navigate = useNavigate()
    
    const handleSubmit = (e) => {
     e.preventDefault()
     setSpinner(true)
     const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
     setSpinner(false)
        setAlertMessage("Account Successfully Created ")
        setAlertStyle("success")
        setTimeout(() => {
          setAlertStyle("")
          navigate("/signin") 
      }, 2000);
      })
      .catch((error) => {
     setSpinner(false)
        setAlertMessage( error.message)
        setAlertStyle("danger")
        setTimeout(() => {
          setAlertStyle("")
      }, 1500);
      });                               
    }

    const signIn = () => {
      navigate('/signin')
    }
  return (
    <div className='signup col-12 fluid' >
    <img src={backGround}
    className='signup-image'
    alt="background" />
        <div className='dark'>
            <div className="nav col-12 mb-0 mb-md-5" style={{position:"static"}} >
              
                <img className='logo-signup' src={logoNetflix} alt="" />
               
                 <button type="submit" className='SIGNup' onClick={signIn} >Sign In</button>
                
            </div>
            
            <div className="body ">
                <div className="content col-sm-12 col-md-6">
                <p id='signup-title' >Unlimited movies, TV 
                 shows and more.</p>
                <p id='signup-title-2'>Watch anywhere. Cancel anytime.</p>
                <p id='signup-title-3' >Ready to watch? 
                Enter your email to create your membership.</p> 
                
                <input type="email" placeholder='Email' 
                onChange={(e)=>setEmail(e.target.value)} />  
                <input type="text" placeholder='Password' 
                onChange={(e)=>setPassword(e.target.value)} /><br /> 
                
                <button type='submit' onClick={handleSubmit} 
                className='signin-button-start' >Get Started { 
                spinner ? <Spinner animation="border" /> :
                 <i class="fa fa-angle-right"></i> } </button>
                </div>
            </div>
             { alertStyle && <div className='alert-support' >
                     <Alert variant={alertStyle}>
                        {alertMessage}
                    </Alert> 
                </div> }
        </div>
    </div>
  )
}

export default SignUp