import React from 'react'
import Footer from './Footer';
import backgroundImage from '../img/contact1.jpg'; 
const Contact = () => {


  return (
    <div>
    <section className="bg-gray-100 py-12">
    <div className='relative flex justify-center items-center'>
      <div className=" absolute inset-0 bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${backgroundImage})` ,filter: 'blur(5px)'}}>
      </div>
      <div className="container mx-auto px-4 relative p-4">
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
            <div>
              <h3 className="text-2xl   text-blue-100 font-semibold mb-4">Address</h3>
              <p className=" text-lg  text-white mb-2">123 Main Street</p>
              <p className=" text-lg  text-white  mb-2">City, State</p>
              <p className=" text-lg  text-white mb-2">Postal Code</p>
            </div>
            <div> 
              <h3 className="text-2xl  text-blue-100 font-semibold mb-4">Phone</h3>
              <p className="text-lg  text-white">123-456-7890</p>
            </div>
            <div>
              <h3 className="text-2xl   text-blue-100 font-semibold mb-4">Email</h3>
              <p className=" text-lg  text-white mb-2">cakerybites11@gmail.com</p>
            </div>
            <div>
              <h3 className="text-2xl  text-blue-100 font-semibold mb-4  ">Social Media</h3>
              <div className="flex space-x-4 flex justify-center items-center">
              <ul className="mt-4 space-y-2 ">
              <li>
                <a href="https://sw-ke.facebook.com/people/Cakery-Bites/100063899898093/" target="_blank" rel="noopener noreferrer" className="  text-lg text-white hover:text-red-300 ">Facebook</a>
              </li>

              <li>
                <a href="https://instagram.com/cakery_bites11?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="text-lg text-white  hover:text-red-300">Instagram</a>
              </li>
              
            </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 flex gap-6 justify-center items-center">
          <h2 className="text-3xl font-semibold text-blue-100 mb-6">Send us a Query</h2>
           <button className='font-bold bg-red-500 text-blue-100 px-4 py-2 rounded-md'>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSd65eyWRMU0RQSR35Zi4LmRQ_z9uJdkqkIUeoXe8c1CZrudOA/viewform?usp=pp_url" target="_blank"  rel="noopener noreferrer" >
           CLick Here
           </a>
           </button>
        </div>
        
        </div>
      </div>
    
     
    </section>
    <div className=" ">
       <Footer />
       </div>
    
    </div>
    
  );
};

export default Contact;
