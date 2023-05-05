import React, {useReducer} from "react";

const reducer = (state,action) =>  {
    if(action.type == 'INCREMENT'){
        return state + 1;
    }
    else if(action.type == 'DECREMENT'){
        return state -1;
    }
    else if(action.type == 'MULTIPLE'){
          return state * 2;
    }
    else{
        return state;
    }
}

const Mail = () => {
    const [state, dispatch]  = useReducer(reducer,0);
    return (
        <>
        <h4 className="mt-4">useReducer Hook Example</h4>
        <p>{state}</p>
        <button className="mb-2 me-2 btn btn-success w-25" onClick={() => dispatch({type:"INCREMENT"})}>INCREMENT</button> 
        <button className="mb-2 me-2 btn btn-danger w-25" onClick={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>
        <button className="mb-2 btn btn-info w-25" onClick={() => dispatch({type:"MULTIPLE"})}>MULTIPLE</button>
        </>
)
}
export default Mail;