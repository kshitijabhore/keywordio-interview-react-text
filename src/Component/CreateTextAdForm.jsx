import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CreateTextAdForm = () => {
  const [textAdData, setTextAdData] = useState({
    heading1: "",
    heading2: "",
    description: "",
    businessName: "",
    buttonLabel: 0,
    url: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await sleep(600);
    setIsLoading(false);
    navigate("/createAdPage");
  };

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    setTextAdData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container fluid>
      <NavigationBar />
      <Row>
        <Col>
          <Card className={`${isLoading && "opacity-10"}`}>
            <Card.Body>
              <div className="formTextAlign">
                <Card.Text className="fw-medium">Create Text & Media</Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group controlId="heading1">
                        <Form.Label>Heading 01</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Add a heading that would make user interested"
                          value={textAdData.heading1}
                          name="heading1"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="heading2">
                        <Form.Label>Heading 02</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Add a heading that would make user interested"
                          value={textAdData.heading2}
                          name="heading2"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col >
                      <Form.Group controlId="description">
                        <Form.Label>Description 01</Form.Label>
                        <Form.Control
                        className="textArea"
                          as="textarea"
                          type="text"
                          required
                          name="description"
                          value={textAdData.description}
                          onChange={handleChange}
                          placeholder="Add primary text to help user understand more about your products, services or offers."
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="businessName">
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Add your business name"
                        name="businessName"
                        value={textAdData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="buttonLabel">
                      <Form.Label>Button Label</Form.Label>
                      <Form.Select>
                        <option>Select a label that best suits your ad</option>
                        <option value="1" onChange={handleChange}>
                          One
                        </option>
                        <option value="2" onChange={handleChange}>
                          Two
                        </option>
                        <option value="3" onChange={handleChange}>
                          Three
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group as={Col} controlId="url">
                      <Form.Label>Website URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Add the URL of landing page you want to redirect user to."
                        name="url"
                        value={textAdData.url}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col className="formButton">
                        <Button
                          variant="secondary"
                          type="submit"
                          style={{ marginRight: "1rem" }}
                          onClick={() => {
                            navigate("/createAdPage");
                          }}
                        >
                          Back
                        </Button>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {
        isLoading && (
          <Card  className="onSubmitPopPup">
            <Card.Body>
              <span class="material-symbols-outlined checkIcon">check</span>{" "}
              <Card.Text>Submitted</Card.Text>
            </Card.Body>
          </Card>
        )
      }
      
    </Container>
  );
};

export default CreateTextAdForm;
