import  { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between item-center py-8">
          {/* logo section */}
          <div className="text-2xl flex flex-tems-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex item-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex item-center gap-4 ">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2  duration-200">
              <CiSearch className="" />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2  duration-200">
              <PiShoppingCartThin />
            </button>
            <button
              className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2  duration-200 hidden  md:block"
            >
              Login
            </button>
          </div>
          {/*  Mobile Hamburger menu section */}
          <div className="md:hidden" onClick={()=>setOpen(!open)} >
            <MdMenu className="text-4xl "/>
          </div>
         
        </div>
      </nav>
      {/*Mobile Sidebar section  */}
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
