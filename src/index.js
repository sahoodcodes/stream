import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SignUp from './Components/SingnUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import TvShows from './Pages/TvShows';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import Upcoming from './Pages/Upcoming';
import {FirebaseContext} from './Firebase/Context'
import firebase from './Firebase/Config'
import MyList from './Pages/MyList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
    <BrowserRouter basename="/netflix" >
    {/* <BrowserRouter  > */}

      <Routes>

        <Route path='/' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route  element={<App />}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/mylist' element={<MyList/>}/>
          <Route path='/tvshows' element={<TvShows/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
