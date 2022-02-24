import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import CommentForm from "./CommentFormComponents";


function RenderDish({ dish }) {
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
function RenderComments({ comments }) {

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
                <CommentForm />
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }
}
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>

            </div>
        );
    }
    return (
        <div></div>
    );
}

export default DishDetail;