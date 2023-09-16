import type { ChildrenProps } from "@/lib/types";

export const SectionHeader = ({ children }: ChildrenProps) => {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
};
