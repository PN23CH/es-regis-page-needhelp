"use client";
import { Sarabun } from "next/font/google";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import style from "@/app/style/regis.module.css";
import DateSelects from "../components/DateSelect";

const sarabun = Sarabun({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function Regis() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-10">
        <h1 className="text-hunter-green text-[48px] font-bold">ลงทะเบียน</h1>
      </div>
      <div>Circle Step</div>
      <div className="w-10/12 p-5 bg-moss-green/60 rounded-[30px] shadow-lg shadow-black/20 flex flex-col justify-start">
        <Form.Root className={`${sarabun.className}`}>
          <Form.Field name="register">
            <div className="gap-2 my-3 w-full sm:inline-flex items-center">
              <Form.Label className="md:flex-none w-auto">
                <p className="text-dark-green font-semibold">
                  เลขบัตรประจำตัวประชาชน
                </p>
              </Form.Label>
              <Form.Control className={`${style.idcardBox} h-10`} asChild>
                <input
                  className="box-border inline-flex w-11/12 grow"
                  type="idcard"
                  placeholder="กรอกเลขประจำตัวประชาชน 13 หลัก"
                  required
                />
              </Form.Control>
              <div className="sm:flex-none">
                <p className="text-black font-semibold">จำกัด 17 ตัวอักษร</p>
              </div>
            </div>
          </Form.Field>
          <Form.Field name="register">
            <div className="gap-2 my-3 w-full sm:inline-flex items-center">
              <Form.Label className="md:flex-none">
                <p className="text-dark-green font-semibold">ออกให้ ณ :</p>
              </Form.Label>
              <Form.Control className={`${style.idcardBox} h-10`} asChild>
                <input
                  className="box-border inline-flex w-11/12 grow"
                  type="idcarddate"
                  placeholder="ใส่สถานที่ที่ออกบัตร เช่น อำเภอเมือง"
                  required
                />
              </Form.Control>
              <div className="my-3 sm:my-0 md:inline-flex md:flex-none w-auto items-center">
                <Form.Label className="md:mr-3">
                  <p className="text-dark-green font-semibold">
                    ออกเมื่อวันที่ :
                  </p>
                </Form.Label>
                <Form.Control asChild>
                  <div>
                    {/* วัน */}
                    <DateSelects />

                    {/* เดือน 
                    <select
                      name="month"
                      id="month"
                      className="select select-bordered select-sm w-20 mr-1 bg-white"
                    >
                      <option value="month" disabled selected>
                        เดือน
                      </option>
                      <option value="month1" className="text-black">
                        มกราคม
                      </option>
                      <option value="month2" className="text-black">
                        กุมภาพันธ์
                      </option>
                      <option value="month3" className="text-black">
                        มีนาคม
                      </option>
                      <option value="month4" className="text-black">
                        เมษายน
                      </option>
                      <option value="month5" className="text-black">
                        พฤษภาคม
                      </option>
                      <option value="month6" className="text-black">
                        มิถุนายน
                      </option>
                      <option value="month7" className="text-black">
                        กรกฎาคม
                      </option>
                      <option value="month8" className="text-black">
                        สิงหาคม
                      </option>
                      <option value="month9" className="text-black">
                        กันยายน
                      </option>
                      <option value="month10" className="text-black">
                        ตุลาคม
                      </option>
                      <option value="month11" className="text-black">
                        พฤศจิกายน
                      </option>
                      <option value="month12" className="text-black">
                        ธันวาคม
                      </option>
                    </select>
                    {/* ปี 
                    <select
                      name="year"
                      id="year"
                      className="select select-bordered select-sm w-20 mr-1 bg-white"
                    >
                      <option value="year" disabled selected>
                        ปี
                      </option>
                      <option value="y2558" className="text-black">
                        2558
                      </option>
                      <option value="y2559" className="text-black">
                        2559
                      </option>
                      <option value="y2560" className="text-black">
                        2560
                      </option>
                      <option value="y2561" className="text-black">
                        2561
                      </option>
                      <option value="y2562" className="text-black">
                        2562
                      </option>
                      <option value="y2563" className="text-black">
                        2563
                      </option>
                      <option value="y2564" className="text-black">
                        2564
                      </option>
                      <option value="y2565" className="text-black">
                        2565
                      </option>
                      <option value="y2566" className="text-black">
                        2566
                      </option>
                    </select>*/}
                  </div>
                </Form.Control>
              </div>
            </div>
          </Form.Field>
        </Form.Root>
      </div>
    </div>
  );
}
