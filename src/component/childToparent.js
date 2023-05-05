import React, {useRef,useEffect } from "react";

const ChildToParent = ({getData}) => {
    const y='dnyanesh jadhav';
    // props.getData(y);

    let inputRef = useRef();

    const handleSubmit = () => {
       let name2 = inputRef.current.value;
       inputRef.current.focus();
       inputRef.current.style.border = '2px solid red';
       inputRef.current.style.color = 'red';
      // props.f2(name2);
    }

    return (<>
        <div className="row mt-5">
            <div className="col-1">
                <label forname="name" className="form-label">name: *</label>
            </div>
            <div className="col-3">
                <input type="text" id="name" ref={inputRef} className="col-6 form-control" />
            </div>
            <div className="col-3">
                <button className="btn btn-success" onClick={handleSubmit}>submit</button>
            </div>
        </div>
    </>)
}
export default ChildToParent;