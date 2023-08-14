import React from "react"
import Card from "react-bootstrap/Card"
import pic from '../GitHubCard/IMG_20230117_094430_957.jpg'

function GitHubCard() {
  return (
      <div className="card">
            <Card style={{ width: "20rem"}}>
            <Card.Img variant="top" src={pic} width="400px" />
            <Card.Body>
            <Card.Title>Jennifer Devine</Card.Title>
            <Card.Text>
            I am a current student in UNLV and ThriveDX's software development program.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard