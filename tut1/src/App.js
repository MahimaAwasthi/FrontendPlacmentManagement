import './App.css';
import LoginForm from './component/LoginForm';
import Home from './component/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const [isLoggedIn,setisLoggedIn] = useState()
  // useEffect(()=>{
  //   var allcookies = document.cookie;
  //   var cookiearray = allcookies.split(';');
  //   for(var i=0; i<cookiearray.length; i++) {
  //     var name = cookiearray[i].split('=')[0];
  //     var value = cookiearray[i].split('=')[1];
  //     // console.log("Key is : " + name + " and Value is : " + value);
  //     if(name.includes("Authentication")) {
  //       console.log(value)
  //     axios.get('http://localhost:8080/verify',{headers: {
  //       'Authorization': `Bearer ${value}`
  //     }}).then((res) => {
  //       console.log(res)
  //       setisLoggedIn(true)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //   }
  // }
  //   },[])
  return (
    <div className="App">
     {/* <div>
      <LoginForm/>
     </div> */}
     <Router>
            
            <Routes>  
                 <Route exact path='/' element={< LoginForm />}></Route>  
                 <Route exact path='/home' element={< Home />}></Route>  
            </Routes>  
     </Router>
     </div>
  );
}
export default App;
