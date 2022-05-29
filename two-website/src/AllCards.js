import React from "react";
import OneCard from "./OneCard";

const AllCards = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <OneCard
            src_image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            card_title="Card Title 1"
            card_txt="Some quick example text to build on the card title and make up
                  the bulk of the card's content.1"
          ></OneCard>
          <OneCard
            src_image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            card_title="Card Title 2"
            card_txt="Some quick example text to build on the card title and make up
                  the bulk of the card's content.2"
          ></OneCard>
          <OneCard
            src_image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            card_title="Card Title 3"
            card_txt="Some quick example text to build on the card title and make up
                  the bulk of the card's content.3"
          ></OneCard>
        </div>
      </div>
    </section>
  );
};

export default AllCards;
