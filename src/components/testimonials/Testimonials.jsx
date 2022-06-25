import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laboriosam, exercitationem nisi alias doloremque quos sunt, tenetur architecto praesentium illo explicabo corrupti ratione velit quo voluptatem. Optio, consequuntur. Illum, laborum!",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Sofia",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laboriosam, exercitationem nisi alias doloremque quos sunt, tenetur architecto praesentium illo explicabo corrupti ratione velit quo voluptatem. Optio, consequuntur. Illum, laborum!",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Albert",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laboriosam, exercitationem nisi alias doloremque quos sunt, tenetur architecto praesentium illo explicabo corrupti ratione velit quo voluptatem. Optio, consequuntur. Illum, laborum!",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "James",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laboriosam, exercitationem nisi alias doloremque quos sunt, tenetur architecto praesentium illo explicabo corrupti ratione velit quo voluptatem. Optio, consequuntur. Illum, laborum!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
