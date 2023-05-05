import React, { useState, useEffect } from "react";
// import Header from './component/Header';
// import { logInfo, logWarning, logError, logDebug } from './util/log-utils';
import './App.css';
import Layout from "./component/layout";
function App() {
 
  return(
    <main className="container-fluid">
      <div className="row ">
        <div className="col-12">
        <Layout/>
        </div>
      </div>
    </main>
  )
}
export default App;