import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Blog = () => {
  let user = localStorage.getItem("loggedIn");
  //   const [error, setError] = useState("");

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("blogs");
    data = JSON.parse(data);
    setBlogs(data);
  }, []);

  user = JSON.parse(user);

  function renderBlogs() {
    const renderedBlogs = blogs.map((blog) => {
      return (
        <div className="blog">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      );
    });
    return renderedBlogs;
  }

  return (
    <div>
      <Example user={user} />
      <div className="container">{renderBlogs()}</div>
    </div>
  );
};

function Example({ user }) {
  const [lgShow, setLgShow] = useState(false);
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  let blogs = localStorage.getItem("blogs");
  if (!blogs) {
    blogs = [];
  } else {
    blogs = JSON.parse(blogs);
  }
  console.log("blogs", blogs);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blogTitle);
    console.log(blogContent);
    console.log(user);
    let blog = {
      title: blogTitle,
      content: blogContent,
      user: user,
    };

    blogs.push(blog);
    console.log(blogs);

    localStorage.setItem("blogs", JSON.stringify(blogs));
  };
  if (!user) {
    return (
      <Button onClick={() => setLgShow(true)} className="create-blog">
        <a href="/login" color="#fff">
          Login to Create Post
        </a>
      </Button>
    );
  } else {
    return (
      <div>
        <Button
          onClick={() => setLgShow(true)}
          className="create-blog"
          variant="secondary"
        >
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
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setBlogTitle(e.target.value)}
                  value={blogTitle}
                />
                <Form.Text className="text-muted">
                  e.g. Techspot, FUN with TECH, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                />
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
}
