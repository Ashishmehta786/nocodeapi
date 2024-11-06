import { Server } from "lucide-react";
import "../globals.css";
import bg from "../../components/images/bgnocode.svg";
import nodelogo from "../../components/images/nodejs.svg";
import expresslogo from "../../components/images/express.svg";
import Navbar from "./Navbar";
import Hero from "../../components/Hero";
import Image from "next/image";
import Footer from "./Footer";
import Pricing from "./Pricing";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="px-4 sm:px-6 lg:px-8 pt-40 bgnocode">
          <Hero />
        </div>
        <div>
          <Pricing />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
