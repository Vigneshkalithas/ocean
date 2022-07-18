import React from "react";
import BlogCard from "./BlogCard";
import brand2 from "../assets/digital-x-logo.png";
import brand3 from "../assets/excel-brand-logo.png";
import brand5 from "../assets/hikvison.png";
import brand4 from "../assets/Logitech-logo-300x300.png";
import brand1 from "../assets/tp-link.png";

function Blog() {
  const BrandsData = [brand1, brand2, brand3, brand4, brand5];

  return (
    <>
      <section className="container blogContainer">
        <div className="row">
          <div className="">
            <h3 className="my-3">Our Blog</h3>
            <h6 className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              <br />
              dapibus vehicula elit vel egestas.
            </h6>
          </div>
        </div>

        <div className="row my-5">
          <BlogCard />
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          {BrandsData.map((data, index) => {
            return (
              <>
                <div className="col brand-size">
                  <img src={data} key={index} alt="brandLogo img-fluid" />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blog;
