import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section = ({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) => {
  return (
    <section className={`relative ${className}`}>
      <Container className={twMerge("px-4", containerClassName)}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
