import React, { Component } from "react";
class ApiCall extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    this.getAPI();
  };

  getAPI = async () => {
    const res = await fetch("http://13.53.33.190:8080/web-services/details");
    //const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    if (data && data.length) {
      this.setState({ data });
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data && this.state.data.length > 0
          ? this.state.data.map((item, index) => (
              <p key={index}>
                {item.id}
                {item.title}
              </p>
            ))
          : ""}
      </div>
    );
  }
}
export default ApiCall;
