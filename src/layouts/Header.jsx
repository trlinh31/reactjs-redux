import React from "react";
import { Link } from "react-router-dom";
import Profile from "@/components/Profile";
import Logo from "@/components/Logo";
import { menus } from "@/data/menu";
import SearchNav from "@/components/SearchNav";
import Cart from "@/components/Cart";

export default function Header() {
  return (
    <>
      <header className='shadow'>
        <div className='flex items-center justify-between container py-5'>
          <Logo />
          <nav>
            <ul className='flex items-center gap-x-10'>
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.path} className='font-bold uppercase'>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center gap-x-5'>
            <SearchNav />
            <Profile />
            <Cart />
          </div>
        </div>
      </header>
    </>
  );
}
