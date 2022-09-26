import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import ShippingDetails from "parts/Cart/ShippingDetails";
import ShoppingDetails from "parts/Cart/ShoppingDetails";

import Sitemap from "parts/Sitemap";

import Footer from "parts/Footer";


export default function Cart() {
  return (
    <>
      <Header theme ="black" />

      <Breadcrumb 
      list= {[
        {url: "/", name: "Home" },
        {url: "/cart",  name:"Shopping Cart" },
      ]}
      />
    
         <section class="md:py-16">
          <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
          <ShippingDetails />
          <ShoppingDetails />
          </div>
          </div>
          </section>
     
      <Sitemap />
      <Footer />
      
    </>
  )
}
