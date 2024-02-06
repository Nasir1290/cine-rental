import React, { useState, useContext } from "react";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Sun from "./assets/icons/sun.svg";
import Moon from "./assets/icons/moon.svg";
import ShopingCart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext ,ThemeContext} from "./contexts";

export default function Header() {

  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const {darkMode,setDarkMode} = useContext(ThemeContext);

  const handleShowDetails = () => {
    setShowCart(true);
  };
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        {showCart && <CartDetails onCLose={() => setShowCart(false)} />}
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode?Sun:Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={ShopingCart}
                width="24"
                height="24"
                alt="shoping-cart"
                onClick={handleShowDetails}
              />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
