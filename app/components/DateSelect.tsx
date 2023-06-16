import React from "react";
import * as Select from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import style from "@/app/style/regis.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const dateSelect = Array.from({ length: 31 }).map((_, i, a) => a.length - i);

export default function DateSelect() {
  return (
    <div>
      <Select.Root>
        <Select.Trigger
          className={`${style.SelectTrigger} inline-flex items-center justify-center rounded-md px-3 text-sm leading-none h-9 gap-1 bg-white text-drak-green focus:bg-neutral-300 outline-none`}
          aria-label="Date"
        >
          <Select.Value placeholder="วัน"></Select.Value>
          <Select.Icon className="text-dark-green w-3 h-3">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md">
            <Select.ScrollUpButton className="flex items-center justify-center h-[38px] bg-white text-dark-green cursor-default">
              <ChevronUpIcon className="w-3 h-3" />
            </Select.ScrollUpButton>
            <ScrollArea.Root className={`${style.ScrollAreaRoot}`} type="auto">
              <ScrollArea.Viewport
                className={`${style.ScrollAreaViewport}`}
                asChild
              >
                <Select.Group className="py-4 px-5">
                  <Select.Label className="text-hunter-green text-sm leading-4 font-semibold">
                    วัน
                  </Select.Label>
                  {dateSelect.map((dates) => (
                    <Select.SelectItem
                      value="date"
                      className="text-black text-sm font-semibold leading-4 mt-2 pt-2"
                      key={dates}
                    >
                      {dates}
                    </Select.SelectItem>
                  ))}
                </Select.Group>
              </ScrollArea.Viewport>

              {/* Scroll */}
              <ScrollArea.Scrollbar
                className="flex select-none p-1 bg-neutral-300 transition-colors duration-150 ease-out hover:bg-neutral-400 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="flex-1 bg-mindaro-green rounded-lg relative before:content-[''] before:absolute brfor:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[40px] before:min-h-[40px]" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Scrollbar
                className="flex select-none touch-none p-1 bg-neutral-300 transition-colors duration-150 ease-out hover:bg-neutral-400 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
                orientation="horizontal"
              >
                <ScrollArea.Thumb className="flex-1 bg-mindaro-green rounded-lg relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[40px] before:min-h-[40px]" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner className="bg-neutral-500" />
            </ScrollArea.Root>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
