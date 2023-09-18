import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];
  return (
    <nav className="p-6 text-black bg-yellow-200">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`absolute py-6 md:py-2 md:static px-6 duration-1000 bg-yellow-200 shadow-lg md:shadow-none md:flex ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
