import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, Row, Label, Col, Button } from "reactstrap";
import { Control, Errors, LocalForm } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <div>
                    <Button outline onClick={this.toggleModal} >
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                    </Button>
                </div>
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody >
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model='.rating' name='rating' className='form-control' >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model='.name' name='name' className='form-control' placeholder="Your Name"
                                            validators={{ required, maxLength: maxLength(15), minLength: minLength(3) }} />
                                        <Errors className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 character or less'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='comment' md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model='.comment' id='comment' name='comment' rows='12' className='form-control' />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type='submit' value='submit' color='primary'>Comment</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>

            </div>
        )
    }
}

export default CommentForm;
