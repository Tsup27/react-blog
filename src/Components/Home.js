import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://unsplash.com/photos/s9CC2SKySJM"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../Images/carousel-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="create-blog">
        <Button variant="primary" size="lg">
          + Create Blog
        </Button>
      </div> */}
      <Example />
    </div>
  );
};

function Example() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setLgShow(true)} className="create-blog">
        CREATE YOUR BLOG
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className="create-blog-btn"
          >
            Create Your Blog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                e.g. Techspot, FUN with TECH, etc.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Add Image File" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
