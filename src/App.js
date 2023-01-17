import { useEffect, useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LogIn from './components/LogIn';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [login, setlogin] = useState(false);
  const [search, setSearch] = useState("");
  console.log(login, "Login")
  useEffect(() => {
    const log = localStorage.getItem("login");
    if(log === true){
      setlogin(true);
    }
    if(log !== null)
      setlogin(log);
  },[]);
  useEffect(()=>{
    // localStorage.clear()
    setTimeout(()=>{
      localStorage.setItem("login", login);
    },0)
    
    
  },[login]);

  // console.log(search);  
  
  return (
    <>
    {!login &&
    <LogIn anonymousFunc = {login => setlogin(login)}/>
    }
    {login &&
    <>
    <Router>
     <Navbar LogOutFunc = {login => setlogin(login)} SearchFunc = {search => setSearch(search)} />
   <div>
    <Switch>
      <Route exact path='/'>
        <Main search={search} />
      </Route>
      <Route  path='/contactUs'>
      <ContactUs/>
      </Route>
      <Route  path='/aboutUs'>
      <AboutUs/>
      </Route>
      <Route path="/singleProduct/:id">
       <Detail /> 
      </Route>
   </Switch>
  </div>

  </Router>
  </>
}
   </>
  );
}
export default App;
