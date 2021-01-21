import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import image1 from "./images/carousel-1.jpg";
import image2 from "./images/carousel-2.jpg";
import image3 from "./images/carousel-3.jpg";

export const Home = () => {
  return (
    <div>
      <div className='container-fluid'>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src={image1} alt='First slide' />
            <Carousel.Caption>
              <h3>Publish your passions, your way</h3>
              <p>Create a unique and beautiful blog. It’s easy and free.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image2} alt='Third slide' />

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
            <img className='d-block w-100' src={image3} alt='Third slide' />

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
