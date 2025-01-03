import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={twMerge(
      "container mx-auto w-full",
      "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
      "min-w-[320px]",
      "max-w-[540px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]",
      className
    )}>
      {children}
    </div>
  );
};

export default Container;
