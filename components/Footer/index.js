import React from "react";
import Image from "next/image";

import Logo from "../../assets/logo.png";
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  const navigation = {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" },
    ],
    support: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
    ],

    social: [
      {
        name: "Youtube",
        href: "#",
        icon: (props) => <AiOutlineYoutube className="h-7 w-6" />,
      },
      {
        name: "Facebook",
        href: "#",
        icon: (props) => <AiOutlineFacebook className="h-5 w-5" />,
      },
      {
        name: "Instagram",
        href: "#",
        icon: (props) => <AiOutlineInstagram className="h-5 w-5" />,
      },
      {
        name: "Twitter",
        href: "#",
        icon: (props) => <FiTwitter className="h-4 w-4" />,
      },
    ],
  };
  return (
    <>
      <footer className="bg-brown-100" aria-labelledby="footer-heading">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-orange-100 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul role="list" className="mt-3 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-white hover:text-ornage-100"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-orange-100 tracking-wider uppercase">
                    Learn More
                  </h3>
                  <ul role="list" className="mt-3 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-white hover:text-orange-100"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-orange-100 tracking-wider capitalize md:ml-7">
                Sell with us
              </h3>
              <button className="inline-flex h-10 items-center px-8 mt-4 py-1 text-sm font-medium rounded-full shadow-sm text-white bg-orange-100 focus:outline-none hover:shadow">
                Sell your book
              </button>
            </div>

            <div className="space-y-8 xl:col-span-1">
              <Image src={Logo} alt="" width={250} height={50} />
              <div className="flex space-x-3 items-center justify-center">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
