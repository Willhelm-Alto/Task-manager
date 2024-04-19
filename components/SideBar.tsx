"use client";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
function Project() {
  return (
    <li className="flex mt-2 hover:scale-110 ease-in duration-[250ms]  ">
      <Link href="/" className="flex flex-1">
        <div className="p-1 align-middle border-2 border-mainBorder rounded-l-lg">
          <Image
            src="/img-placeholder.png"
            width={32}
            height={32}
            alt="Icon Placeholder"
          />
        </div>
        <p className="border-2 border-mainBorder border-l-0 rounded-r-lg flex-1 p-1 flex items-center">
          Projeto
        </p>
      </Link>
    </li>
  );
}
export default function SideBar() {
  return (
    <div className="sidebar resize w-64 h-screen p-4 border-r-2 border-mainBorder">
      <p className="m-2 text-[85%]">PROJECTS</p>
      <ul className="mb-2">
        <Project />
        <Project />
        <Project />
        <Project />
      </ul>
      <Link href="/addProject" className="text-mainBorder hover:underline">
        + Add Project
      </Link>
    </div>
  );
}
