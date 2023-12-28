import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "./NavigationBar";
import textImg from "../Resources/textAd.png";
import mediaImg from "../Resources/mediaAd.png";
import { useNavigate } from "react-router-dom";

const CreateAdPage = () => {
  const [switchAd, setSwitchAd] = useState();
  const [adSelected, setAdSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const selectTextAd = () => {
    setAdSelected(true);
    setErrorMessage(''); 
    setSwitchAd(true);
  };

  const selectMediaAd = () => {
    setAdSelected(true);
    setErrorMessage(''); 
    setSwitchAd(false);
  };

  const handleSubmit = () =>{
    if (!adSelected) {
      setErrorMessage('Please select a field!');
    } else {
      switchAd
      ? navigate("/createTextAdForm")
      : navigate("/createMediaAdForm")
  }
  }
  const SelectionCard = ({
    cardId,
    onCheckClick,
    imageSrc,
    label,
    checked,
  }) => {
    return (
      <Card id={cardId}>
        <Form.Check
          className="selectionCardCheckbox"
          checked={checked}
          aria-label={label}
          onClick={onCheckClick}
          required
        />
        <Card.Img className="selectionCardImg" variant="top" src={imageSrc} />
        <Card.Body>
          <span class="fs-6 fw-light">create</span>
          <div class="fs-5">{label}</div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Container fluid>
        <NavigationBar />

        <Row>
          <Col>
            <Card className="selectionCardWrapperCard">
              <Card.Body className="selectionCardWrapperCardText">
                Create Ads
              </Card.Body>
              <div className="selectionCard">
                <SelectionCard
                  cardId="textAdSelectCard"
                  onCheckClick={() => selectTextAd()}
                  imageSrc={textImg}
                  label="Text Ad"
                  checked={switchAd === true}
                />

                <SelectionCard
                  cardId="mediaAdSelectCard"
                  onCheckClick={() => selectMediaAd()}
                  imageSrc={mediaImg}
                  label="Media Ad"
                  checked={switchAd === false}
                />
              </div>
              <div className="errMessage"> {errorMessage && <p>{errorMessage}</p>}</div>
              
              <div className="createAdNextWrapper">
                  <Button
                  variant="primary"
                  onClick={handleSubmit}
                >
                   Next
                </Button>
               
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateAdPage;
