import { useEffect, useState } from "react"
import { BrowserRouter , Routes , Route , Link} from "react-router-dom"
// import Navbar from "./component/navbar.jsx"
import Layout from "./component/layout.jsx";
import Home from "./component/Home.jsx";

function App() {
 

  return <div>
    
     <BrowserRouter>
     <Layout /> 
             <Routes>
                <Route path="/" element={<Home/>}/>
                  
         </ Routes>
        </BrowserRouter>
     </div>
}


export default App
