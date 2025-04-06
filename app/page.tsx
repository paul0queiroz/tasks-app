import Image from "next/image";
import Header from "./component/Header";
import "./globals.css";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );  }