import React from "react";
import gurukullogo from "../gurukullogo.png";
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header class="bg-white text-white flex items-center">
        <img className="w-20 h-20 object-cover rounded-full shadow-md ml-40"
          src={gurukullogo}
          alt="Description of the image"
        /><div className="typewriter"><b>Alumni Association of Gurukul</b></div>

        {/* <div class="flex items-center"> */}
          <div class="use-app-button">
            <div id="appName">Login</div>
          {/* </div> */}
          {/* <div class="text-xl text-black ml-4">Karmarajsinh G...</div> */}
        </div>
      </header>
      <header class="bg-blue-500 text-white p-4">
        <div class="container mx-auto flex justify-center items-center">
          <nav>
            <ul class="flex space-x-4 justify-center text-lg">
              <Link className="hover:underline" to="/Home">Home</Link>
              <Link className="hover:underline" to="/Events">Events</Link>
              <li className="hover:underline">News & Stories</li>
              <li className="hover:underline">Noticeboard</li>
              <li className="hover:underline">Introducing Flash Batchmates</li>
              <li className="hover:underline">Find Alumni</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Services</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
