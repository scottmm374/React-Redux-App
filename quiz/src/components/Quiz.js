import React from "react";
import { Container, Card, CardText, CardBody, Button, Alert } from "reactstrap";

function Quiz(props) {
  const revealAnswer = () => {
    return (
      <>
        {/* let result={props.result} */}
        {alert(props.result)}
      </>
    );
  };
  console.log("quiz", props);
  return (
    <div>
      <Container>
        <Card>
          <CardBody>
            <CardText>{props.question}</CardText>
            {/* <Button color="success" size="lg" value="True">
              True
            </Button>
            <Button color="danger" size="lg" value="False">
              False
            </Button> */}
            <Button onClick={revealAnswer} color="success">
              Reveal Answer
            </Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default Quiz;
