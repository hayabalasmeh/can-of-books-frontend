import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';

class UpdateForm extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.showForm} onHide={this.props.hideUpdateForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Updating Your Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(event) => this.props.updatingForm(event)}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name of the Book</Form.Label>
                                <Form.Control type="text" placeholder="Enter book name" defaultValue={this.props.defaultName} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter the book description" defaultValue={this.props.defaultDescription} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Check type="checkbox" label="Available Status" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => this.props.hideUpdateForm()}>
                                Save Changes
                            </Button>
                            <Button variant="secondary" onClick={() => this.props.hideUpdateForm()}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>

            </>
        )
    }
}

export default UpdateForm;