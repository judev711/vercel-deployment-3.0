// import React from 'react'
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const PRODUCTS = [
    {
      id: 1,
      link: "#",
      title: "Home",
    },
    {
      id: 2,
      link: "#",
      title: "Top Rated",
    },
    {
      id: 3,
      link: "#",
      title: "Kids Wears",
    },
    {
      id: 4,
      link: "#",
      title: "Electronique",
    },
  ]
    const products = [
      {
        id:1,
        link: "#",
        name: "Trending Products",
      },
      {
        id:2,
        link: "#",
        name: "Best Selling",
      },
      {
        id:3,
        link: "#",
        name: "Top Rated",
      },
    ]
    
  
  return (
    <div>
      {/* la navbar de haut */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="logo" width={45} />
              <h1 className="text-2xl font-extrabold">Theo Dev*711</h1>
            </div>
            {/* le bouton recherche et l'icone course */}
            <div className="flex  items-center  gap-2 ">
              <div className="relative max-sm:hidden">
                <input
                  type="search"
                  placeholder="Search. . ."
                  className="w-[200px] hover:w-[300px] transition-all
                  duration-300 rounded-full py-1 px-5 border-2 border-gray-300
                  outline-none"
                />
                <IoMdSearch className=" top-1/3 right-2 absolute text-gray-600" />
              </div>

              <div className="flex group items-center ">
                <button
                  onClick={() => alert("Service Non Disponible")}
                  className="bg-secondary rounded-full
                 px-3 py-1 text-white font-bold flex gap-3"
                >
                  <span className="hidden group-hover:inline-block">Order</span>
                  <FaCartShopping className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* En Dessous De la NavBar */}
      <div>
        <div className="flex justify-center">
          <ul
            className=" sm:flex gap-10
             pt-2 max-sm:underline "
          >
            {PRODUCTS.map((data) => (
              <li key={data.id} className="">
                <a
                  href={data.link}
                  className="hover:text-secondary
                 transition-all duration-300"
                >
                  {data.title}
                </a>
              </li>
            ))}
            <div className="flex items-center ">
              <li className="group ">
                <a
                  href="#"
                  className="flex items-center gap-1
                group-hover:text-secondary duration-300"
                >
                  Trending Products
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </a>

                <div
                  className="bg-white hidden z-[9]  group-hover:block absolute p-2
                    rounded-md"
                >
                  <ul className="">
                    {products.map((data) => (
                      <li key={data.id} className="">
                        <a
                          href={data.link}
                          className="hover:bg-primary/40
                          rounded-md p-3 duration-300 inline-block
                           "
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
