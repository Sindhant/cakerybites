import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../img/about1.jpg";
import Footer from './Footer';
const About = () => {
  return (
     <div>
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend mi libero,
              a varius erat dignissim at. Maecenas sed ligula id magna aliquam ullamcorper eu nec
              turpis. Phasellus semper purus sit amet tortor tincidunt dapibus.
            </p>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Quisque ac elit ac felis pharetra sagittis vitae eget metus. Nulla sollicitudin ipsum
              lectus, nec tristique enim vestibulum vel. Duis id nunc non arcu porttitor tincidunt
              nec a ligula.
            </p>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nunc ultrices aliquam metus, sed scelerisque justo consectetur ut. Nulla facilisi.
              Mauris auctor felis non ligula pellentesque tincidunt. Morbi lacinia nulla id tellus
              efficitur lacinia.
            </p>
          </div>
        </div>
       
      </div>
    </section>

    <div className="">
       <Footer className="" />
       </div>
    </div>
  )
}

export default About
