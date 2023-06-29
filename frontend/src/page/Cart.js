import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../img/empty.gif";
import Footer from "./Footer";
import { toast } from "react-hot-toast";

import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem);
 

  const user = useSelector((state) => state.user);
  
  const navigate =useNavigate()

  const totalPrice = productCartItems.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItems.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productCartItems),
        }
      );
      if (res.statusCode === 500) return;

      const data = await res.json();
      console.log(data);

      toast("Redirect to payment Gateway....!");
      stripePromise.redirectToCheckout({ sessionId: data });
    }
    else{
      toast(" Login Please ");
      setTimeout(()=>{
        navigate("/login")
      },1000)
    }
  };
  return ( 
    <div>
      <>
        <div className="p-2 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold  text-slate-600">
            {" "}
            Your Cart Items
          </h2>
          {productCartItems[0] ? (
            <div className="my-4 flex gap-3">
              {/* Display cart items */}
              <div className="w-full max-w-3xl">
                {productCartItems.map((el) => {
                  return (
                    <CartProduct
                      key={el._id}
                      id={el._id}
                      name={el.name}
                      image={el.image}
                      price={el.price}
                      category={el.category}
                      qty={el.qty}
                      total={el.total}
                    />
                  );
                })}
              </div>

              {/* Total cart items */}
              <div className="w-full max-w-md  ml-auto">
                <h2 className="bg-blue-500 text-white p-2 text-lg">Summary </h2>
                <div className="flex w-full py-2 text-lg border-b ">
                  <p> Total Quantity : </p>
                  <p className="ml-auto w-32  font-bold">{totalQty}</p>
                </div>
                <div className="flex w-full py-2 text-lg border-b">
                  <p> Total Price</p>
                  <p className="ml-auto w-32  font-bold">
                    <span className="text-red-500">₹ </span>
                    {totalPrice}
                  </p>
                </div>
                <button
                  className="bg-red-500 w-full text-lg font-bold py-2 text-white"
                  onClick={handlePayment}
                >
                  Payment
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className=" flex w-full justify-center items-center flex-col">
                <img src={emptyCartImage} className=" w-full max-w-sm" />
                <p className="text-slate-500 text-3xl font-bold">
                  Your Cart is Empty{" "}
                </p>
              </div>
            </>
          )}
        </div>
      </>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
