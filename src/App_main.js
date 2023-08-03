import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';

import AppProps from './App1_props_fct_value/AppProps';
import AppRedux from './App2_Redux/AppRedux';
import AppProps3byme from './App3_test_props_byme/AppProps3byme';
import App4 from './App4_using_redux_instead_of_props/App4';
import App5 from './App5testprops/App5'
import App6 from './App6_useeffect/App6';
import App7 from './App7_useref/App7';

export default function App_main() {
    
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container"> {/* Add container class here */}
         <Routes>
           <Route path="/" element={<AppProps/>}>        </Route>
           <Route path="/redux" element={<AppRedux/>}>        </Route>
           <Route path="/props3" element={<AppProps3byme/>}>        </Route>
           <Route path="/redux" element={<App4/>}>        </Route>
           <Route path="/props5" element={<App5/>}>        </Route>
           <Route path="/app6" element={<App6/>}>        </Route>
           <Route path="/app7" element={<App7/>}>        </Route>

        </Routes>
      </div>
    </BrowserRouter>
      )
}
