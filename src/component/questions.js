import React from "react";
const Questions = ()=>{
  const questions =[
    {que:'what is current react version',
    options:['18.2','17.1','16.8','none'],
    type:'S'
    },
    {que:'what is useState hooks return type',
    options:['string','array','boolean','obj'],
    type:'S'
    },
    {que:'what is current react version',
    options:['render','props','setState','getState'],
    type:'M'
    }
  ];
const PaperKey = {1:'A', 2:'C',3:'BC'}

const Values = ['A','B','C','D'];

const MyAnswers = {};

const HandleChange =(e)=>{
    const {name,value,type} = e.target;
    console.log(name,value,type);
    MyAnswers[name] = value;
}

const onSubmit =()=>{
   console.log(MyAnswers);
}

  return( 
    <>
  <div style={{maxHeight:'90vh',overflowY:'auto'}}>
    {
        questions.map((obj,index) =>{
            const {que,options,type} = obj;
            return <div key={index}>
                <h6 className="mt-4"> {index+1} .{que} </h6>
            {
              options.map((val,id)=>{
                return <span key={id} className="mx-4 my-4">
               {type === 'S' ? <input name={index+1} type="radio" value={Values[id]} onChange={HandleChange}/> : 
               <input type="checkbox" value={val}/>}
               {val}
                </span>
              })
            }
            </div>
        })
    }
    <div className="container mt-4"><button onClick={onSubmit}>Submit</button></div>
    </div>
    </>
    )
}
export default Questions