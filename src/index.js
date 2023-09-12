import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import Footer from "./components/Footer/Footer"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  } ,
  {
    path: '/about',
    element: <About/> 
  } ,
  {
    path: '/contact',
    element: <Contact/>
  }
]
)

// function App(){
//     const path = window.location.pathname;
//     if(path==="/Home"){
//     return<Home/>
// }
// else if(path==="/About"){
//     return<About/>
// }
// else if(path==="/Contact"){
//  return<Contact/>
// }
// else <h1>404</h1>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render (
<>
<RouterProvider router={router}/>
 {/* <App/>   */}

</>
);
