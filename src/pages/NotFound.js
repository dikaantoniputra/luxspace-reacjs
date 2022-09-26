import React from "react";
import Header from "parts/Header";


import ErrorMessege from "parts/ErrorMessege";
import Sitemap from "parts/Sitemap";

import Footer from "parts/Footer";


export default function NotFound() {
  return (
    <>
      <Header theme ="black" />
    
    
      <ErrorMessege />
      <Sitemap />
      <Footer />
      
    </>
  )
}
