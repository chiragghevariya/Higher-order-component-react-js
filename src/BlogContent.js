import React, { Component } from 'react';
import HocBlogData from "./hoc/HocBlogData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap'

class BlogContent extends Component{


    render(){

        return(
        <div className="row"> 
            {   
                this.props.data.map((blog,index) =>{
                    
                    return (
                        <div className="col-md-4" key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://via.placeholder.com/600/d32776" />
                            <Card.Body>
                                <Card.Title>{blog.name}</Card.Title>
                                <Card.Text>
                                    <b>Address:</b><br/>
                                    {blog.address.street},{blog.address.city},
                                    {blog.address.zipcode}
                                </Card.Text>
                                <Button variant="primary">{blog.username}</Button>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
        );  
    }

}

export default HocBlogData(BlogContent);