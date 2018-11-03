import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';

class DishDetailComponent extends Component {
    render() {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DishDetailComponent;