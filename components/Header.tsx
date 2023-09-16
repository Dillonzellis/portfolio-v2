import { navLinks } from "@/lib/data/nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="mx-auto mt-6 flex h-12 max-w-[40rem] items-center justify-around gap-2 rounded-full bg-white">
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
