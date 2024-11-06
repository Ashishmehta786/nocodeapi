import nodelogo from "./images/nodejs.svg";
import { Button } from "./ui/Button";
import Image from "next/image";
import thunder from "./images/thunder.gif";
export default function Hero() {
  return (
    <div>
      <div className="flex justify-between lg:justify-between container max-w-7xl  h-[500px] mx-auto ">
        <span className="flex flex-col ">
          <h1 className="md:text-5xl lg:text-6xl leading-10 text-4xl font-bold lg:max-w-3xl sm:max-w-sm  items-center space-x-3">
            Build Api's in nodejs Easily and Fastly
            <span className="">
              <Image src={thunder} className="inline" width={50} height={50} alt="flash" />
            </span>
            !
          </h1>
          <span className="mt-5">
            <p className="text-sm lg:text-base text-gray-600 my-3 lg:max-w-lg  sm:max-w-full max-w-sm my-2 block tracking-loose">
              Tired of making apis in nodejs? Streamline your development use
              NocodeApi to fasten your development and make apis at light
              drizzling speed.
            </p>
          </span>
          <span className="flex ">
            <span></span>
            <span className="justify-start my-4 flex gap-2">
              <Button className="bg-indigo-600 hover:bg-indigo-500 group">
                Get Started
                <span className="group-hover:translate-x-[5px] transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </span>
              </Button>
              <Button
                variant="outline"
                className="border border-indigo-600 bg-background shadow-sm hover:bg-indigo-600 hover:text-white group"
              >
                Learn more
              </Button>
            </span>
          </span>
        </span>
        <span className="translate-y-20 lg:translate-y-0 ">
          <Image src={nodelogo} alt="nodelogo" width={100} height={100} />
        </span>
      </div>
    </div>
  );
}
