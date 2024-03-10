import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Alice"
              description="It is aimed to develop a voice assistant using Python. Alice allows you to translate the presidents of countries, their capitals, market values ​​of leading companies, mathematical operations, translate and have short conversations."
              ghLink="None"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Prediction with Random Forest Classification"
              description="Predicting whether a car company's new SUV brand vehicle will be purchased by people using Random Forest Classification."
              ghLink="https://github.com/akgulatalay"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Prediction with Naive Bayes"
              description="Predicting whether a car company's new SUV brand vehicle will be purchased by people using Naive Bayes."
              ghLink="https://github.com/akgulatalay"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Prediction with K-NN Algorithms"
              description="Predicting whether a car company's new SUV brand vehicle will be purchased by people using K-NN."
              ghLink="https://github.com/akgulatalay"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Prediction with Decision Tree Classification"
              description="Predicting whether a car company's new SUV brand vehicle will be purchased by people using Decision Tree Classification."
              ghLink="https://github.com/akgulatalay"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/akgulatalay"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
