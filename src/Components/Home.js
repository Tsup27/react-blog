import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import image1 from "./images/carousel-1.jpg";
import image2 from "./images/carousel-2.jpg";
import image3 from "./images/carousel-3.jpg";

export const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3>Publish your passions, your way</h3>
              <p>Create a unique and beautiful blog. It’s easy and free.</p>
              <Example />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Choose the perfect design</h3>
              <p>
                Create a beautiful blog that fits your style. Choose from a
                selection of easy-to-use templates – all with flexible layouts
                and hundreds of background images – or design something new.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Hang onto your memories</h3>
              <p>
                Save the moments that matter. Blogger lets you safely store
                thousands of posts, photos, and more with Google for free.
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
