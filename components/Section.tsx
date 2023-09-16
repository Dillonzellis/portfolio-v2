import type { ChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";

type SectionProps = ChildrenProps &
  React.HTMLAttributes<HTMLElement> & {
    className?: string;
  };

export const Section = ({ children, className }: SectionProps) => {
  return <section className={cn("py-8", className)}>{children}</section>;
};
