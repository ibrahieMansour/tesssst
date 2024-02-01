import React from "react";
import { useState } from "react";
import { Cash, Laptop, Newspaper } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">
          Create success campaign with us!
        </h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">
          Elit, sed do eiusmod tempor{" "}
        </h2>
        <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
          Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate.
        </p>

        <div className="row pb-4">
          <div className="col-lg-4">
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="py-3 mb-2 text-center border rounded text-secondary">
                  <Newspaper className="display-6 bx bx-news"></Newspaper>
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9  light-300">
                <li className="h5 mb-0">Media Contact</li>
                <li className="text-muted">Mr. John Doe</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>

            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-secondary">
                  <Laptop className="bx bx-laptop display-6"></Laptop>
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Technical Contact</li>
                <li className="text-muted">Mr. John Stiles</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>

            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-secondary">
                  <Cash className="bx bx-money display-6"></Cash>
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Billing Contact</li>
                <li className="text-muted">Mr. Richard Miles</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>
          </div>

          {/*<!-- Start Contact Form -->*/}
          <div className="col-lg-8 ">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control required type="text" placeholder="Name" d />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomEmail">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a user Email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Control type="phon" placeholder="Phon" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phon.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Control type="text" placeholder="Company"  defaultValue="ProTech" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="12" controlId="validationCustom05" className=" mb-3">
                  <Form.Control type="text" placeholder="Subject" required   />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Subject.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom05" className=" mb-3">
                  <Form.Control
                  as="textarea" 
                  rows={5}  
                    type="text"
                    placeholder="Message"
                    
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Message.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Send Message</Button>
            </Form>
          </div>
          {/*<!-- End Contact Form -->*/}
        </div>
      </section>
    </>
  );
}

export default Contact;
