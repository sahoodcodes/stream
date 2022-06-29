import React, { useState } from 'react'
import './SignIn.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Alert,Spinner } from 'react-bootstrap';
import logoNetflix from "../../Store/logoNetflix.png"
import backGround from "../../Store/backGround.jpeg"




function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertStyle, setAlertStyle] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [spinner, setSpinner] = useState(false)
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        setSpinner(true)
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        setSpinner(false)
                setAlertMessage("Successfully Signed In")
                setAlertStyle("success")
                setTimeout(() => {
                    setAlertStyle("")
                    navigate("/home")
                }, 2000);
            })
            .catch((error) => {
                setAlertMessage(error.message)
        setSpinner(false)

                setAlertStyle("danger")
                setTimeout(() => {
                    setAlertStyle("")
                }, 2000);

            });
    }

    return (

        <div className='signup col-12 fluid' >
    <img src={backGround} 
    className='signup-image'
    alt="background" />
            <div className='dark'>
                <div className="nav">
                    <img className='logo1' src={logoNetflix} alt="" />
                </div>
                {alertStyle && <div className='alert-support' >
                    <Alert variant={alertStyle}>
                        {alertMessage}
                    </Alert>
                </div>}
                <div style={{display:"flex",alignItems:"center",minHeight:"100%",justifyContent:"center"}} >

                    <div className="content1-signin col-12  col-md-4">

                        <h3>Sign In</h3>

                        <input className='box' type="input" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input className='box' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
                        <button onClick={handleSubmit} className='SIGNin' >{
                        spinner ? <Spinner animation="border" /> : "Sign In" }</button>
                        <div>
                            <p id='pp'>Need Help?</p>
                        </div>
                        <div>
                            <p style={{ display: "inline-block", marginRight: "45px", marginTop: "10px" }}>New to Netflix?</p><a style={{ display: "inline-block", margin: "0px", textDecoration: "none", color: "white", fontWeight: "bolder" }} href="/" >Sign Up Now</a>
                            <p style={{ display: "inline-block", fontSize: "12px", paddingTop: "10px", paddingLeft: "80px", paddingRight: "80px" }} > This page is protected by Google reCAPTCHA to ensure you're not a bot.</p> <br />
                            <a style={{ display: "inline-block", fontSize: "12px" }} href="https://policies.google.com/privacy">learn more</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        // <div className='signin-page' >
        //     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/8e07a611-4ced-4d4e-81e6-d278862c952b/IN-en-20220502-popsignuptwoweeks-perspective_alpha_website_small.jpg "
        //         className='signin-image'
        //         alt="background" ></img>

        //         <div className='signin-fuction' >

        //         </div>

        // </div>

    )
}

export default SignIn