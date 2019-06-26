import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './style.css';

class Example extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    render() {
        return (
            <>
                <Button variant="outline-primary" onClick={this.handleShow}>
                    Message
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                >
                    <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                            This is a good Message
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="img"/>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Example;