import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route,Switch ,Redirect} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Courses from "./component/Courses"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
<Switch>
 <Route  exact path="/" component={Home}/> 
 <Route exact path="/about" component={About}/> 
 <Route exact path="/courses"  component={Courses}/>
 <Route exact  path="/contact"  component={Contact}/>
<Redirect to="/"></Redirect>
 </Switch>
 </>
  );
}

export default App

// <Switch>
// <Route  path="/" component={Home}> </Route>

// <Route   exact  path="/about" component={About}> </Route>

// <Route exact path="/courses"  component={Courses}></Route>

// <Route exact  path="/contact"  component={Contact}></Route>

// </Switch>