import React, { useState } from 'react';
import B from './b';
import ChildToParent from './childToparent';
import MContext from './context';

const Parent = () => {

  const getData=(dataval)=>{
  console.log(dataval);
}

  const cData = { Iname: 'Naresh  MAMA IT', Iid: '12345', area: 'PUNE', country: 'pAK' }

  return (
  <div className='bg-warning'>
  <h5>A (Parent) Component</h5>
    <MContext.Provider value={cData}>
    <B />
    </MContext.Provider>
 
    <ChildToParent  getData={getData}  />
  </div>
  )
}
export default Parent;