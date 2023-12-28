import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <div className="flex flex-row lg:gap-[60vw] gap-16 justify-center item-center mt-6">
        <Link href='/'>
        <div className="lg:text-[2rem] text-1xl bg-gradient-to-r from-cyan-400 via-violet-600 to-violet-700 bg-clip-text text-transparent filter drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] font-mono ">Sabyasachi's Blog</div>
        </Link>

        <div className="flex justify-center items-center gap-11">
            <Link href='contact'>
            <div className="font-mono hover:text-violet-600 lg:text-2xl text-1xl">Contact</div>
            </Link>
            
          <Link href='/posts'>
          <div className="font-mono hover:text-violet-600 lg:text-2xl text-1xl">Posts</div>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
