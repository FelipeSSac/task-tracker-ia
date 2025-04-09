import { Button as HeadlessButton } from "@headlessui/react";
import ButtonProps from "./props";

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <HeadlessButton
      className="min-w-20 inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer"
      {...props}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
