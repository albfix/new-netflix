import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; //IMPORTED FORM AND BUTTON

//CREATE COMPONENT 'REGISTER' WITH BOOTSTRAP FORM AND BUTTON
//CREATE FORM FOR EACH REQUESTED FIELD

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            address: "",
            city: "",
            creditCard: "",

        }
    }

    handleChange = (e) => {

        let newState = this.state
        newState[e.currentTarget.id] = e.currentTarget.value

        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
        console.log(this.state)
    }

    /*isFormValid = (name, surname, email, password, address, city, creditCard) => {
        let error = [],
        
        if (name.lenght < 0) {
            error.push("This field is empty")
        }
        if (surname.lenght < 0) {
            error.push("This field is empty")
        }
        if (address.lenght < 0) {
            error.push("This field is empty")
        }
        
        SOLO TEST, NON VA E DA RIPROVARE

      }*/



    render() {
        return (

            <Container>
                <Row>

                    <Col>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control value={this.state.name} onChange={this.handleChange} type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="surname">
                                <Form.Label>Your Surname </Form.Label>
                                <Form.Control type="text" placeholder="Enter your surname" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Address" />
                            </Form.Group>

                            <Form.Group controlId="formCity">
                                <Form.Label>City </Form.Label>
                                <Form.Control type="Invalid" placeholder="Enter your City" />
                            </Form.Group>

                            <Form.Group controlId="formCreditCard">
                                <Form.Label>Credit card </Form.Label>
                                <Form.Control type="number" placeholder="Enter your credit card" />
                            </Form.Group>

                           // <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                </Row>

            </Container>
        )
    }
}

export default Register;
