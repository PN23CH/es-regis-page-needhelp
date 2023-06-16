import React from "react";
import Link from "next/link";

export default function EsFooter() {
  return (
    <footer className="footer footer-center bg-hunter-green p-5">
      <div>
        <p className="text-[16px] leading-5 text-white">
          &#169; สงวนลิขสิทธิ์ 2565 บริษัท แนกซ์ โซลูชั่น จำกัด
        </p>
        <p className="text-[16px] leading-5 text-white">
          Version ขั้นต่ำของ Browser Chrome97 / Microsoft Edge11 / Firefox3.5 /
          IE9 / Safari4 / Opera10
        </p>
        <div className="flex">
          <Link
            href="/"
            className="text-[16px] leading-5 mx-[10px] text-white hover:text-mindaro-green"
          >
            นโยบายเว็บไซต์
          </Link>
          &#124;
          <Link
            href="/"
            className="text-[16px] leading-5 mx-[10px] text-white hover:text-mindaro-green"
          >
            นโยบายคุกกี้
          </Link>
        </div>
      </div>
    </footer>
  );
}
