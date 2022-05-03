import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello Paulo</Popover.Panel>

      <Popover.Button className="group flex items-center h-12 px-3 rounded-full bg-brand-500 text-[#fff]">
        <ChatTeardropDots className="w-6 h-6" />
        <label className="overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs">
          <span className="pl-2 " />
          Feedback
        </label>
      </Popover.Button>
    </Popover>
  );
}
