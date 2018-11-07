import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';

class DishDetailComponent extends Component {

    onSelectedDishRender = (dish) => {
        if (dish === undefined) {
            return (
                <div></div>
            );
        } else {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    onCommentsRedner = (dish) => {
        if (dish === undefined) {
            return (
                <div></div>
            );
        } else {
            const comment = dish.comments.map((comment) => {
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
                    { comment }
                </div>
            );
        }
    }

    render() {

        return (
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.onSelectedDishRender(this.props.dish)}
                    </div>
                    {this.onCommentsRedner(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetailComponent;