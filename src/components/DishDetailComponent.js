import React from 'react';
import {
    Card,
    CardTitle,
    CardBody,
    CardImg,
    CardText
} from 'reactstrap';

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

function RenderComments({ comments }) {
    const comment = comments.comments.map((comment) => {
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
        </div>
    );
}

const DishDetail = (props) => {
    return (
        <div className="container" >
            <div className="row">
                { props.dish && <RenderDish dish={props.dish} /> }
                { props.dish && <RenderComments comments={props.dish} /> }
            </div>
        </div>
    );
}

export default DishDetail;