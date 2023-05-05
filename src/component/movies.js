import React from "react";

const Moview = ({title,year,img}) => {
    return (
            <div className="col-12 col-sm-12 col-md-4">
                <div className="card text-center py-2 mb-2"  style={{height:'260'}}>
                <h5>{title}</h5>
                <strong>{year}</strong>
                <img src={img} alt="not found" width="100%" height={240}/>
            </div>
            </div>
    )
}
export default Moview;