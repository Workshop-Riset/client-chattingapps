import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ menus, open, toggleSidebar }) => {
  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenu size={26} className="cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {Array.isArray(menus) &&
          menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                menu.margin && "mt-5"
              }`}
              style={{ color: "white" }} // Mengatur warna tautan menjadi putih
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open
                    ? "hidden"
                    : "absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit"
                }`}
              ></h2>
            </Link>
          ))}
        <button
          className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-red-500 hover:text-white rounded-md" style={{color : 'white', backgroundColor: 'red', marginTop : '375px'}}
        >
          <IoIosLogOut size={20} />
          {open && (
            <span className="ml-2 text-white-400">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
