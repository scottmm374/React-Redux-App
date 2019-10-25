import React from "react";
import { Container, Card, CardText, CardBody, Button } from "reactstrap";
import styled from "styled-components";

// const NewCard = styled(Card)`
//   background-color: #f6f6f71f;
//   box-shadow: 0 4px 15px black;
//   padding-top: 30px;
//   margin-top: 66px;
//   margin-bottom: 80px;
// `;

function Quiz(props) {
  console.log("quiz", props);
  return (
    <Container>
      <Card>
        <CardBody>
          <CardText>{props.question}?</CardText>
          <Button color="success" size="lg" value="True">
            True
          </Button>
          <Button color="danger" size="lg" value="False">
            False
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Quiz;
