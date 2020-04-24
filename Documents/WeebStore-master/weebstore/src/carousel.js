import React from "react";
import {Carousel} from 'react-bootstrap';

import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

function Carousels() {
  return (
    <div class="container">
      <div class="row">
      <div class="col-sm-12">
        <Carousel>
             <Carousel.Item>
              <img class="d-block w-100" src={img1}/>
             </Carousel.Item>

             <Carousel.Item>
              <img class="d-block w-100" src={img2}/>
            </Carousel.Item>

            <Carousel.Item>
              <img class="d-block w-100" src={img3}/>
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
    </div>
  );
}

export default Carousels;
