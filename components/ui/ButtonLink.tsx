import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type LinkVariants = VariantProps<typeof LinkVariants>;

type MyLinkProps = LinkVariants & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkVariants = cva(
  "group text-lg font-medium font-semibold rounded-full flex items-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition",
  {
    variants: {
      intent: {
        dark: "bg-gray-900 text-white hover:bg-gray-950",
        light: "bg-white",
      },
      size: {
        small: "p-2",
        medium: "px-7 py-3",
      },
    },
    defaultVariants: {
      intent: "dark",
      size: "medium",
    },
  },
);

export function Button({
  intent,
  size,
  className,
  children,
  ...props
}: MyLinkProps) {
  return (
    <a
      className={cn(
        LinkVariants({
          className,
          intent,
        }),
      )}
      {...props}
    >
      {children}
    </a>
  );
}
