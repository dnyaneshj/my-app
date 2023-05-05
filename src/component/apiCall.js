import React, { Component } from "react";
class ApiCall extends Component {

    state = {
        data : []
    };

    componentDidMount = () => {
        this.getAPI();
    }

    getAPI = async()=> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        if(data && data.length){
            this.setState({ data });
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data && this.state.data.length > 0 ? this.state.data.map((item, index) =>
                        <p key={index}>
                            {item.id}{item.title}
                        </p>) : ''
                }
            </div>
        )
    }
}
export default ApiCall;