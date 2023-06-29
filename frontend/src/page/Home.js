import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const homeProductCartList = productData.slice(10, 14);
  const homeProductCartListCakes = productData.filter(
    (el) => el.category === "cakes",
    []
  );
  // console.log(homeProductCartListCakes);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
 

  

  return (
    <div>
    <div className="p-2 md:p-4">
      <div className=" md:flex gap-4 py-2">
        <div className="md:w-1/2  ">
          <h1 className="text-4xl md:text-6xl  text-amber-600  font-bold ">
            CAKERY <span className="text-red-600">BITES</span>
          </h1>
          <h2 className="text-3xl font-medium py-4">
            100% Eggless, Freshly Baked & Theme Based
            <span className="text-green-600 ">
              Cakes are Avalaible here
            </span>{" "}
          </h2>

          <p className="py-3 text-base ">
            Welcome to the best online cake bakery aka{" "}
            <span className="text-red-600">Cakery Bites</span> , Cakes are the
            centerpieces of all celebrations. We take the hassle of getting the
            perfect birthday cakes or anniversary cakes or for a special
            occasion. Our homestyle collection of cakes, cookies, and pastries
            will satisfy anyone craving a delicious desserts.
          </p>
          <Link to={"/menu/6496aa83960b5b1fbb236dc7"}>
        
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
          
      </Link>
          
        </div>

        <div className="md:w-1/2  flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading...."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full  items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4 py-7">Cakes</h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListCakes[0]
            ? homeProductCartListCakes.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"cakes"}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"}/>
              ))}
        </div>
      </div>
       <AllProduct heading={"Your Product"}/>
        
       
    </div>
    <div className="">
       <Footer />
       </div>
    </div>
  );
};

export default Home;
