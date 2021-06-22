import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';

class BookFormModel extends React.Component {


    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.hiding}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding Your Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(event) => this.props.addingBooks(event)}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name of the Book</Form.Label>
                                <Form.Control type="text" placeholder="Enter book name" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter the book description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Check type="checkbox" label="Available Status" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => this.props.hiding()}>
                                Save Changes
                            </Button>
                            <Button variant="secondary" onClick={() => this.props.hiding()}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        )
    }
}



export default BookFormModel;
