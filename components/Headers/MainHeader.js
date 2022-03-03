import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Bg from "../../assets/home_main.png";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Main from "../../assets/main.png";
import Bell from "../../assets/Group 456.png";
import Avatar from "../../assets/avatar.png";
// import LoginModal from "./LoginModal"


const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Action and adventure", href: "#", current: true },
  { name: "Art/architecture", href: "#", current: false },
  { name: "Fantasy", href: "#", current: false },
  { name: "True crime", href: "#", current: false },
  { name: "Travel", href: "#", current: false },
  { name: "Thriller", href: "#", current: false },
  { name: "Self help", href: "#", current: false },
  { name: "Review", href: "#", current: false },
  { name: "Textbook", href: "#", current: false },
  { name: "Poetry", href: "#", current: false },
  { name: "Prayer", href: "#", current: false },
  { name: "Philosophy", href: "#", current: false },
  { name: "History", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];



function Navbar() {
  return (
    <div className="relative w-full h-[65vh] overflow-hidden pt-5 p-3 pb-0 flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-[65vh]">
        {/* <Image src={Bg} alt="header_img" className="w-full h-[65vh]" /> */}
      </div>
      <div>
        <Disclosure as="header" className="">
          {({ open }) => (
            <>
              <div className="max-w-7xl space-y-3 mx-auto">
                <div className="relative flex items-center justify-between">
                  <Image src={Logo} alt="" width={300} height={50} />
                  <div className="relative hidden z-0 flex-1 px-2 sm:flex items-center justify-center max-w-lg">
                    <input
                      id="search"
                      name="search"
                      className="font-raleway block w-full pl-6 pr-10 py-2 border border-black rounded-2xl leading-5 bg-transparent placeholder-black focus:outline-none focus:ring-1 focus:ring-orange-100 focus:border-orange-500 sm:text-sm"
                      placeholder="Search by Name Category and author"
                      type="search"
                    />
                    <div className="absolute right-7 flex items-center pointer-events-none">
                      <Image src={Search} alt="" height={16} width={16} />
                    </div>
                  </div>
                  <div className="sm:hidden flex items-center pointer-events-none">
                    <Image src={Search} alt="" height={16} width={16} />
                  </div>
                  <div className="hidden lg:z-10 lg:ml-4 lg:flex items-center font-roboto">
                    <button
                      className="ml-6 inline-flex h-10 items-center px-4 py-1 text-sm font-medium bg-transparent focus:outline-none hover:text-orange-100"
                      type="button"
                      data-modal-toggle="LoginModal"
                    >
                      Login
                    </button>
                    <button
                      className="inline-flex h-10 items-center px-6 py-1 text-sm font-medium bg-transparent focus:outline-none hover:text-orange-100"
                      type="button"
                      data-modal-toggle="RegModal"
                    >
                      Sign up
                    </button>
                    <button className="inline-flex h-10 items-center px-8 py-1 text-sm font-medium rounded-full shadow-sm bg-orange-100 focus:outline-none hover:shadow">
                      Sell your book
                    </button>
                  </div>
                  {/* after login  */}
                  {/* <div className="flex items-center space-x-3">
                    <Image src={Bell} height={25} width={75} />
                    <Image src={Avatar} height={40} width={40} />
                  </div> */}
                </div>
                <nav
                  className="hidden lg:py-2 px-1 lg:flex justify-between font-raleway"
                  aria-label="Global"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded-md py-2 px-1 whitespace-nowrap inline-flex items-center text-sm font-medium"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </>
          )}
        </Disclosure>
      </div>
      <div className="relative grid grid-cols-2 items-center justify-end max-w-7xl mx-auto">
        <h1 className="font-raleway font-bold text-4xl max-w-sm pb-4 text-center">
          World's 1st <br /> Books Marketplace
        </h1>
        <div className="relative">
          <Image src={Main} className="z-0.5" />
          {/* <div className="absolute flex justify-between">
            <button className=" inline-flex h-10 items-center px-4 py-1 text-sm font-medium bg-transparent focus:outline-none border-orange-100 hover:text-orange-100">
              Sell
            </button>
            <button className="inline-flex h-10 items-center px-6 py-1 text-sm font-medium bg-transparent focus:outline-none border-orange-100 hover:text-orange-100">
              Buy
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
