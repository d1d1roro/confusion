import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render () {
        return (
            <>
                <Button
                    outline
                    color="secondary"
                    onClick={this.toggleModal}
                ><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentForm;