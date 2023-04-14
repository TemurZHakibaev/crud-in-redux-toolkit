import React from "react";

function Navbar(props) {
  return (
    <nav className={" bg-gray-500"}>
      <ul className={"container px-4 py-5 flex justify-between items-center"}>
        <li>
          <ul className={"flex gap-8"}>
            <li className={"text-gray-200"}>Create Post</li>
            <li className={"text-gray-200"}>All Posts</li>
          </ul>
        </li>
        <li>
          <input
            className={
              "border px-4 py-2 outline-none rounded-lg text-gray-800 bg-gray-300"
            }
            placeholder={"search..."}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
