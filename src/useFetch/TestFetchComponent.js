import React from "react";
import reactstrap, { FormGroup } from "reactstrap";
import { baseURL } from "../shared/baseURL";
import { Card, CardImg, CardText, CardBody, CardTitle, Form, Label, Input, Button} from "reactstrap";

export function RenderComments({comments}){
    const comment=comments.map( (item) =>{
        return(
            <div>
                <h6>{"id:"+ item.id +"- rating" + item.rating }</h6>
                <p>{item.comment}</p>
                <p>{item.author} {item.date}</p>
            </div>
        );
    });

    return (
        <div className="col-12 col-sm-7">
            <h2>comments</h2>
            {comment}
        </div>
    )
}

class TestFetchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dishes:[],
            comments:[],
            //these are used to create new comment
                id:-1,
                dishId:-1,
                rating:1,
                comment:"",
                author:"",
                date:new Date()

        }
        this.handleInputChange=this.handleInputChange.bind(this);

        //loading dishes, comments from db.json of json server
        this.fetchDishes();
        this.fetchComments();
    }

    handleInputChange(event){
        const nameControl=event.target.name;
        const value=event.target.value;
        this.setState( { [nameControl]:value} );
        console.log(nameControl + "," + value)
    }

    handleSubmit(dish){
        const newComment={
            id:this.state.comment.length,
            dishId:dish.id,
            rating:this.state.rating,
            comment:this.state.comment,
            author:this.state.author,
            date:this.state.date.toString()
        }
        console.log(newComment);
        this.addComment(newComment);
    }

    fetchDishes(){
        return fetch(baseURL+'dishes')
        .then(response => response.json())
        .then(data => {
            this.setState( {dishes:data});
        });
    }

    fetchComments(){
        return fetch(baseURL+'comments')
        .then(response => response.json())
        .then(data => {
            this.setState( {comments:data});
        });
    }

    addComment(newComment){
        return fetch(baseURL+'comments',{
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(response => {
            if(response.ok){
                console.log(response);
                this.setState( {comments:this.state.comments.concat(newComment)});
            }
        });
    }

    render(){
        const content=this.state.dishes.map( (dish) =>{
            return(
                <div className="col-12 col-sm-8" key={dish.id}>
                    <Card>
                        <CardImg top src={baseURL+dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <h4>Comments</h4>
                    <RenderComments comments={this.state.comments.filter((comment) =>
                        comment.dishId === parseInt(dish.id,10))} />
                    <h4>Your comment</h4>
                    <Form>
                        <FormGroup>
                            <Label for="author"> Author:</Label>
                            <Input type="text" id="author" name="author" placeholder="Author"
                                value={this.state.author} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comment"> Comment:</Label>
                            <Input type="text" id="comment" name="comment" placeholder="comment"
                                value={this.state.comment} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="rating"> Rating:</Label>
                            <Input type="number" id="rating" name="rating" placeholder="rating"
                                min="1" max="5" value={this.state.rating} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.handleSubmit.bind(this,dish)}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            );
        });
        
        return(
            <div className="col-12 col-sm-5">
                {content}
            </div>
        );
    }
}

export default TestFetchComponent;