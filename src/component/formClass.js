import React, { Component } from "react";
class FormClass extends Component{
     
    
      state = {
        myResponse : [],
        dataIbject : {
            fname:"",
            lname:"",
            address:"",
            picode :""
        },
        payLoad:{}
      }

      componentDidMount =()=>{
        this.getData();
      }

      getData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonResponse =  await response.json();
      this.setState({myResponse : jsonResponse})
      }

      nameChaneHandler = (event) =>{
      const {value} =  event.target;
      this.setState(prevState => ({
        dataIbject:{
            ...prevState.dataIbject, fname:value
        }

      }))
     }
     lnamesChaneHandler = (event) =>{
      const {value} = event.target;
      this.setState(prev => ({
        dataIbject:{
            ...prev.dataIbject, lname:value
        }
      }))
    }
    addressChaneHandler = (event) =>{
      const {value} = event.target;
      this.setState(prev => ({
        dataIbject:{
            ...prev.dataIbject, address:value
        }
      }))
    }
    picodeChaneHandler = (event) =>{
      const {value} = event.target;
      this.setState(prev => ({
        dataIbject:{
            ...prev.dataIbject, picode:value
        }
      }))
    }
    submitHandler = (event) =>{
        
      event.preventDefault();
      const {dataIbject} = this.state;
      this.setState(prevState =>({
        ...prevState,
        payLoad:{...prevState.payLoad, ...dataIbject},
        dataIbject : {
            fname:"",
            lname:"",
            address:"",
            picode :""
        }
      }))
    }

    render(){
        return(<>
     <form onSubmit={this.submitHandler}>
        <input type="text" value={this.state.dataIbject.fname} onChange={this.nameChaneHandler} placeholder="fname"/>
        <input type="text" value={this.state.dataIbject.lname} onChange={this.lnamesChaneHandler} placeholder="lname"/>
        <input type="text" value={this.state.dataIbject.address} onChange={this.addressChaneHandler} placeholder="address"/>
        <input type="text" value={this.state.dataIbject.picode} onChange={this.picodeChaneHandler} placeholder="pincode"/>
            <button type="subnit">submit</button>
            <h2>{this.state.payLoad.fname}   {this.state.payLoad.lname}  {this.state.payLoad.address} {this.state.payLoad.picode}</h2>
     </form>
     <ul style={{minHeight:'auto'}}>
     {
        this.state.myResponse.map((item,index) =>{
            return <li key={index} style={{fontSize : '10px'}}>{item.userID} {item.id} {item.title}</li>
        })
     }
     </ul>
    
        </>)
    }
}
export default FormClass;

























































// import React, {Component} from "react";
// class FormClass extends Component{
//     state = {
//         mainForm  : {
//             name : '',
//             email: '',
//             id:  ''
//         },
//         result : {}
//     }
//     nameHandler = (event) =>{
//        const {value} = event.target;
//        this.setState(prevState => ({
//         mainForm:{
//             ...prevState.mainForm, name:value
//         }
//        }))
//     }


//     emailHandler = (event) =>{
//     const {value} = event.target;
//     this.setState (prevState => ({
//         mainForm : {
//          ...prevState.mainForm, email:value
//         }
//     }))
//     }

//     idHandler = (event) =>{
//         const {value} = event.target;
//         this.setState(prev => ({
//             mainForm:{
//                 ...prev.mainForm, id:value
//             }
//         }))
//     }
//     submitHandler = (event) =>{
//         event.preventDefault();
//          const {mainForm} = this.state;
//          this.setState ((prev) => ({
//             ...prev,
//             result : {
//                 ...prev.mainForm, ...mainForm
//             },
//             mainForm :{
//                 name : '',
//                 email: '',
//                 id:  ''
//             }
//          }))
//       }
//    render(){
   
//     return(<>
//     <form onSubmit={this.submitHandler}>
//         <label>name</label>
//         <input type="text" value = {this.state.mainForm.name} onChange = {this.nameHandler} />
//         <label>email</label>
//         <input type="text" value = {this.state.mainForm.email} onChange = {this.emailHandler} />
//         <label>id</label>
//         <input  type="text" value = {this.state.mainForm.id} onChange = {this.idHandler} />
//         <button type="submit">Submit</button>
//     </form>
//     <br/>
//     <p><span>name{this.state.result.name}</span></p>
//     <p><span>email{this.state.result.email}</span></p>
//     <p><span>id{this.state.result.id}</span></p>
//     </>)
//    }
// }
// export default FormClass;
