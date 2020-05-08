import React, { Component } from 'react';
import axios from 'axios';

const HocBlogData = (WrappedComponent) => {

    class NewComponent extends Component{

        state = {
            data: []
          }
        
          componentDidMount() {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
              .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({ data:persons });
              })
          }

        render(){
            return(

                <WrappedComponent data={this.state.data}></WrappedComponent>
            );

        }
    }

    return NewComponent;
}; 

export default HocBlogData;