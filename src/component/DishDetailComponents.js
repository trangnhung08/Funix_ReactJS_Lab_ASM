import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }
    
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    renderComments(comments) {

        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4><b>Comments</b></h4>
                    {comments.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {dateFormat(comment.date, "fullDate")}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        let dish;
        if (this.props.dish) {
            dish = (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            )

        }
        return (
            <div className="container">
                {dish}
            </div>
        );
    }
}
export default DishDetail;