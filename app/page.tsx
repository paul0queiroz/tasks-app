import Image from "next/image";
import Header from "./component/sections/Header";
import "../styles/global.css";
import Hero from "./component/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );  }