import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import { TfiLayoutSlider } from "react-icons/tfi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import Navigation from "../Config/Navigation";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Main = () => {
  const [open, setOpen] = useState(true);


  return (
    <div className="flex">
      <div
        className={` ${open ? "w-60" : "w-20 "
          } bg-blue-950 h-screen p-5  pt-8  duration-300 transition-all  fixed left-0 top-0 rounded-lg `}
      >
        <RxCross1
          className={open ? 'absolute cursor-pointer right-1 text-3xl top-2 text-white' : 'hidden'}
          onClick={() => setOpen(!open)}
        />
        <div onClick={() => setOpen(!open)} className={!open ? "flex gap-x-2 items-center" : "hidden"}>
          <GiHamburgerMenu className=" text-white text-3xl font-medium " />
        </div>
        <ul className="pt-6">
          <li><Link to={"/"} className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
            <MdDashboard className="text-3xl" />
            <span
              className={`${!open && "hidden"
                } flex items-center  text-xl  `}
            >
              Dashboard
            </span>
          </Link>
          </li>
          <li>
            <Link to={"/Usercheck"} className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-whi5e text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
              <FaUserCheck className="text-3xl" />
              <span
                className={`${!open && "hidden"
                  } flex items-center  text-xl  `}
              >
                User Request
              </span>
            </Link>
          </li>

          <li>  <Link to={"/addslider"} className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-whi5e text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
            <TfiLayoutSlider className="text-3xl" />
            <span
              className={`${!open && "hidden"
                } flex items-center  text-xl  `}
            >
              Slider
            </span>
          </Link>
          </li>

          <li><Link to={"/addpost"} className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-whi5e text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
            <TbLayoutGridAdd className="text-3xl" />
            <span
              className={`${!open && "hidden"
                } flex items-center  text-xl  `}
            >
              Add Post
            </span>
          </Link>
          </li>


          <Link to={"/viewpost"}>

            <li className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-whi5e text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
              <IoMdPersonAdd className="text-3xl" />
              <span
                className={`${!open && "hidden"
                  } flex items-center  text-xl  `}
              >
                View Post
              </span>
            </li>
          </Link>
          <li className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-whi5e text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
            <FaUserAltSlash className="text-3xl" />
            <span
              className={`${!open && "hidden"
                } flex items-center  text-xl  `}
            >
              Check userinfo
            </span>
          </li>
          <li className={"flex  rounded-md p-2   cursor-pointer hover:bg-light-whi5e text-gray-300 text-sm items-center gap-x-4 hover:bg-white mt-5  hover:text-blue-900 "}>
            <IoIosSettings className="text-3xl" />
            <span
              className={`${!open && "hidden"
                } flex items-center  text-xl  `}
            >
              Setting
            </span>
          </li>
        </ul>
      </div>
      <div style={{ marginLeft: `${open ? "250px" : "90px"}` }} className={`flex-1 p-${open ? "7" : "2"} overflow-y-auto`}>
        <Navigation />
      </div>
    </div>
  );
};
export default Main;
