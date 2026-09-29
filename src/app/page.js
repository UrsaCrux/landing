"use client";

import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Hitos from "./components/Hitos";
import Team from "./components/Team";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <Hitos />
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
}
