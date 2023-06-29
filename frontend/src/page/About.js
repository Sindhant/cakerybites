import React from "react";
import { Link } from "react-router-dom";
import pic from "../img/about1.png";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            About Us
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Link to={""}>
                <div className="h-35">
                  <img src={pic} className="h-full" />
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to Cakery Bites, where sweetness meets perfection! Our
                journey began with a simple passion for baking and a dream to
                spread joy through delectable treats. At Cakery Bites, we strive
                to create an extraordinary bakery experience that will tantalize
                your taste buds and leave you craving for more.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Cakery Bites, our mission is to create a haven of sweetness
                and joy through our exceptional bakery offerings. We are
                dedicated to delighting our customers with exquisite treats that
                not only satisfy their cravings but also create lasting
                memories.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Team</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Driven by the overwhelming response, *Name* decided to take a
                leap of faith and open Cakery Bites, a haven for all dessert
                lovers. Nestled in the heart of a vibrant neighborhood, our
                bakery shop has become a beloved destination for anyone seeking
                heavenly confections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <Footer className="" />
      </div>
    </div>
  );
};

export default About;
