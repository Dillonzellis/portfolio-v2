import type { ChildrenProps } from "@/lib/types";

export const SectionHeader = ({ children }: ChildrenProps) => {
  return (
    <h2 className="pb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
};
