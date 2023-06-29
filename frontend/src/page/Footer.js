import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-300  ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row   ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="text-center sm:text-left">
            <Link to={""}>
              <h3 className="text-2xl font-bold  mb-4">CAKERY BITES</h3>
            </Link>
            <p className="text-red-600 mb-4">123 Main Street</p>
            <p className="text-red-600 mb-4">City, State ZIP</p>
            <p className="text-red-600 mb-4">Phone: (123) 456-7890</p>
            <p className="text-red-600 mb-4">Email: info@example.com</p>
            <p className="text-red-600 mb-4">
              #Customized Cakes Available #Freshly Baked# Love At First Bite
              #Theme Based Cakes# Sugar Free Cakes #DRY TEA TIME Cakes #Home
              
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold ">Social Media</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://sw-ke.facebook.com/people/Cakery-Bites/100063899898093/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-700 hover:text-red-700"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/cakery_bites11?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-700  hover:text-red-700"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-bold  mb-4">Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-cyan-100 to-blue-200 p-4 rounded-md shadow-lg">
                <h4 className="text-lg font-bold  text-center">Cakes</h4>
              </div>
              <div className="bg-gradient-to-r from-cyan-100 to-blue-200 p-4 rounded-md shadow-lg">
                <h4 className="text-lg font-bold  text-center">Cupcakes</h4>
              </div>
              <div className="bg-gradient-to-r from-cyan-100 to-blue-200 p-4 rounded-md shadow-lg">
                <h4 className="text-lg font-bold  text-center">Doughnuts</h4>
              </div>
              <div className=" bg-gradient-to-r from-cyan-100 to-blue-200 p-4 rounded-md shadow-lg">
                <h4 className="text-lg font-bold text-center">Jar Cake</h4>
              </div>
              {/* Add more product items as needed */}
            </div>
          </div>
        </div>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start ">
          {/* Add your social media icons or links here */}
          <a className="text-red-600" href="#">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 2v20l-4-4h-4.586l2.293-2.293a7.98 7.98 0 0 0-1.414-1.414L12 14.586l-1.293 1.293a7.98 7.98 0 0 0-1.414 1.414L6.586 18H2V2h20zM16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
            </svg>
          </a>
          {/* Add more social media icons or links as needed */}
        </span>
      </div>

      <div className=" text-center">
        <p className="text-green-700">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">
          <Link to={"/about"}>
          CAKERY BITES
            </Link>
         
          </span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
