import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { motion } from "framer-motion";
import { WidgetForm } from "./WidgetFrom";

export function Widget() {
  return (
    <Popover
      id="widgetContainer"
      className="absolute flex flex-col items-end bottom-4 right-4 md:right-8 md:bottom-8"
    >
      <Popover.Panel>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{ opacity: 1, y: 8, scale: 1 }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          <WidgetForm />
        </motion.div>
      </Popover.Panel>

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
