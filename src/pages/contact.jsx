import React from 'react';
import { Form, Button } from 'react-bootstrap';

import PrimaryLayout from '../layout/PrimaryLayout';

const ContactUs = () => {
    return (
        <PrimaryLayout column="col-10">
            <div className="pt-5">
                <h1>Contact Us</h1>
                <Form className="pt-5">
                    <Form.Group controlId="contactForm.email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email..." />
                    </Form.Group>
                    <Form.Group controlId="contactForm.subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject..." />
                    </Form.Group>
                    <Form.Group controlId="contactForm.message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form controlId="contactform.submit">
                        <Button>Submit</Button>
                    </Form>
                </Form>
            </div>
        </PrimaryLayout>
    )
}

export default ContactUs;
