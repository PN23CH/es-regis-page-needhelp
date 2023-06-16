import React from "react";
import {
  Bars3Icon,
  UserCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import esLogo50 from "@/public/es-logo50-50.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar w-4/5 bg-moss-green rounded-2xl mt-3">
      <div className="navbar sm:navbar-start">
        <Link href="/">
          <Image src={esLogo50} alt="eslogo" className="ml-3" />
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost sm:hidden">
          <Bars3Icon className="w-10 h-10 text-white" />
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-white rounded-box w-52 mt-[150px]"
          >
            <li>
              <Link href="/" className="text-[16px] text-hunter-green">
                <UserCircleIcon className="w-7 h-7" />
                เข้าสู่ระบบ
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[16px] text-hunter-green">
                <DocumentTextIcon className="w-7 h-7" />
                ลงชื่อเข้าใช้
              </Link>
            </li>
          </ul>
        </label>
      </div>
      <div className="navbar-end hidden sm:inline-flex gap-2 mr-2">
        <Link
          href="/"
          className="btn text-[16px] text-white bg-hunter-green border-0"
        >
          <UserCircleIcon className="w-7 h-7" />
          เข้าสู่ระบบ
        </Link>
        <Link
          href="/"
          className="btn text-[16px] text-white bg-hunter-green border-0"
        >
          <DocumentTextIcon className="w-7 h-7" />
          ลงชื่อเข้าใช้
        </Link>
      </div>
    </div>
  );
}
