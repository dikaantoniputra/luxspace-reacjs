import React from "react";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

import useScrollAnchor from 'helpers/hooks/useScrollAnchor';
import useModalDOM from 'helpers/hooks/useModalDOM';
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function HomePage() {

  useScrollAnchor();
  useModalDOM();
  useScrollToTop();
  return (
    <>
      <Header theme="white" position="absolute"/>
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
      
    </>
  );
}
