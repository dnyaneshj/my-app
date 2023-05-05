import React from 'react';
class  ClassForm extends React.Component {

     state = {
       FormData : {
        names: '',
        email: '',
        id: '' 
       },
       finalFormDara:{}
     }

    onNameHandler = (event) =>{
       const {value} = event.target;
       this.setState(prevState => ({
        FormData : {...prevState.FormData, names:value}
       }))
    }
    onEmailHandler = (event) =>{    
       const {value} = event.target;
       this.setState(prevState => ({
        FormData : {...prevState.FormData, email:value}
       }))
    }
    onIdHandler = (event) =>{
       const {value} = event.target;
       this.setState(prevState => ({
        FormData:{...prevState.FormData, id:value}
       }))
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {FormData} = this.state;
        this.setState(prevState =>({
            ...prevState,
            finalFormDara : {...prevState.finalFormDara,...FormData}
        }))
    }

    render(){
       console.log(this.state)
        return(
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label>Class Name</label>   
                    <input type="text" className="form-control" placeholder="Enter Class Name"  
                    value={this.state.FormData.names} onChange={this.onNameHandler}/>   
                    <br />
                    <label>email</label>   
                    <input type="text" className="form-control" placeholder="Enter Class email" 
                    value={this.state.FormData.email} onChange={this.onEmailHandler} />   
                    <br />
                    <label>Class ID</label>   
                    <input type="text" className="form-control" placeholder="Enter Class ID" 
                    value={this.state.FormData.id} onChange={this.onIdHandler}/>   
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>   
                    <br />

                </div>
            </form>
        )
    }
}
export default ClassForm