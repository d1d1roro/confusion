import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments, dishId, addComment }) {
    const comment = comments.map((comment) => {
        return (
            <div className="row m-1" key={comment.id}>
                <div className="m-2">{comment.comment}</div>
                <div className="m-2">
                    -- {comment.author},
                    {
                        new Intl.DateTimeFormat(
                            'en-US',
                            { year: 'numeric', month: 'short', day: '2-digit' }
                        ).format(new Date(Date.parse(comment.date)))
                    }
                </div>
            </div>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            {comment}
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    );
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.dish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />
                </div>
            </div>
        );
    } else return (null);
}

export default DishDetail;