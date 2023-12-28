import react from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "./NavigationBar";
import TableData from "./TableData";
import DonutChart from "./DonutChatData";

const PageLayout = () => {
  return (
    <>
      <Container fluid>
            <NavigationBar />
        <Row>
          <Col>
            <TableData />
          </Col>
          <Col><DonutChart/></Col>
        </Row>
      </Container>
    </>
  );
};

export default PageLayout;
