import {BrowserRouter, Routes ,Route} from "react-router-dom"
import React from 'react'
import About from "./pages/About.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import Home from "./pages/Home.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Project from "./pages/Project.jsx"
import Header from "./components/Header.jsx"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/project" element={<Project/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App