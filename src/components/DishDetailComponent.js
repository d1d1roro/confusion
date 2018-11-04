import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';

class DishDetailComponent extends Component {
    render() {
        const comments = this.props.selectedDish.comments.map((comment) => {
            return (
                <div className="row m-1" key={comment.id}>
                    <div className="m-2">{comment.comment}</div>
                    <div className="m-2">-- {comment.author}, {comment.date}</div>
                </div>
            );
        })

        return (
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText style={{color: '#353535'}}>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {comments}
                </div>
            </React.Fragment>
        );
    }
}

export default DishDetailComponent;