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
import App8 from './App8_useMemo_and_memo/App8';
import App9 from './App9_useCallback/App9';
import App10 from './App10_memorizedhook/App10';
import App11 from './App11_compare_redux_wth_3hooks/App11';
import Hottable from './Hot/Hottable';
import App12 from './App12/App12';
import App13 from './App13_backend/App13';
import App14 from './App14/App14';

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
           <Route path="/app8" element={<App8/>}>        </Route>
           <Route path="/app9" element={<App9/>}>        </Route>
           <Route path="/app10" element={<App10/>}>        </Route>
           <Route path="/app11" element={<App11/>}>        </Route>
           <Route path="/hottable" element={<Hottable/>}>        </Route>
           <Route path="/app12" element={<App12/>}>        </Route>
           <Route path="/app13" element={<App13/>}>        </Route>
           <Route path="/app14" element={<App14/>}>        </Route>

           

        </Routes>
      </div>
    </BrowserRouter>
      )
}
