import axios from "axios";
import React, { useState, useEffect } from "react";
import Contact from './component/contact';
import Localdata from "./component/localData";
import { logInfo,logWarning,logError,logDebug } from './util/log-utils'
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [post, setPost] = useState(null);
  const [data, setData] = useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      logInfo('succesfully fetch data');
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
   
    axios.get(baseURL).then((response) => {
      logInfo('api call is success');
      setData(response.data);
    }).catch(function (error) {
    if (error.response.status === 404) {
      //console.log(error.response.status);
      logDebug(error.response);
      logError('Request failed with status code 404', error.response.status);
    } else {
      logWarning(' The client never received a results, and the request was never left');
    } 
})
}, []);

  if (!post){
      return
  } 

  return (
    <>
    <Localdata/>
    <Contact/>
   
      {/* <table>
        <thead><tr><th>title</th><th>body</th></tr></thead>
        <tbody>
          {
            post.map((items, index) => (
             <tr key={index}><td>{items.title}</td><td>{items.body}</td></tr>
            )
            )}
        </tbody>
      </table> */}

      <br/>
      {/* <table>
        <thead><tr><th>title</th><th>body</th></tr></thead>
        <tbody>
          {
            data?.map((items, index) => (
             <tr key={index}><td>{items.title}</td><td>{items.body}</td></tr>
            )
            )}
        </tbody>
      </table> */}
      {/* <Contact /> */}
    </>
  );
}
export default App;