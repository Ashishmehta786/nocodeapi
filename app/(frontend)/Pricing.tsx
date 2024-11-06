"use client";

import { useState } from "react";
import check from "../../components/images/check.svg";
import Image from "next/image";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  console.log(check);
  const tiers = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: 290,
      Activeplan: true,
      features: [
        { name: "API calls per day", value: "1,000" },
        { name: "Custom endpoints", value: "5" },
        { name: "Authentication methods", value: "API Key" },
        { name: "Rate limiting", value: "Basic" },
        { name: "Analytics dashboard", value: "Basic" },
        { name: "Email support", value: "Yes" },
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 99,
      yearlyPrice: 990,
      isPopular: true,
      features: [
        { name: "API calls per day", value: "10,000" },
        { name: "Custom endpoints", value: "Unlimited" },
        { name: "Authentication methods", value: "API Key, OAuth 2.0" },
        { name: "Rate limiting", value: "Advanced" },
        { name: "Analytics dashboard", value: "Advanced" },
        { name: "Priority email support", value: "Yes" },
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        { name: "API calls per day", value: "Unlimited" },
        { name: "Custom endpoints", value: "Unlimited" },
        { name: "Authentication methods", value: "API Key, OAuth 2.0, SSO" },
        { name: "Rate limiting", value: "Custom" },
        { name: "Analytics dashboard", value: "Custom" },
        { name: "Dedicated support team", value: "Yes" },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-indigo-900 py-24 sm:py-32">
      {/* Radial gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[800px] w-[800px] rounded-full bg-indigo-400 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-200">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Unleash Your API Potential
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-indigo-200">
          Choose the perfect plan to power your NoCode API development. Scale
          effortlessly as you grow.
        </p>
        <div className="mt-16 flex justify-center">
          <div className="relative flex rounded-full bg-white/10 p-1">
            <button
              type="button"
              className={`${
                !isYearly ? "bg-indigo-500 text-white" : "text-indigo-200"
              } relative w-28 rounded-full py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-indigo-900`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${
                isYearly ? "bg-indigo-500 text-white" : "text-indigo-200"
              } relative ml-0.5 w-28 rounded-full py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-indigo-900`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white/10 backdrop-blur-lg p-8 ring-1 ring-white/20 xl:p-10 ${
                tier.isPopular ? "lg:z-10 lg:rounded-b-none" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight ${
                      tier.isPopular ? "text-indigo-300" : "text-white"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.isPopular ? (
                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-indigo-200">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-indigo-200"
                >
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3">
                      <Image
                        src={check}
                        className="h-6 w-5 flex-none text-indigo-400"
                        alt="check"
                      />
                      <span>
                        <span className="font-semibold text-white">
                          {feature.name}:
                        </span>{" "}
                        {feature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.isPopular
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                }`}
              >
                {tier.Activeplan ? "Current plan " : "Get started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
