import { navLinks } from "@/lib/data";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="mt-6 flex mx-auto bg-white justify-around gap-2 rounded-full h-12 items-center max-w-[40rem]">
          {navLinks.map((link) => (
            <li>
              <Link href={link.href} className="p-3">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
