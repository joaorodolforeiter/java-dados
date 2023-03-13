import type { ReactElement } from "react";
import { Cpu, DiceSix, House, Info } from "@phosphor-icons/react";
import colors from "tailwindcss/colors";
import Link from "next/link";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex h-screen flex-col justify-center">
      <NavBar />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-purple-600 via-transparent to-transparent px-6 shadow-md">
      <div className="flex gap-4">
        <Link href={"/"}>
          <House size={32} weight="fill" color={colors.purple[100]} />
        </Link>
        <Link href={"/sobre"}>
          <Info size={32} weight="fill" color={colors.purple[100]} />
        </Link>
        <Link href={"/loja"}>
          <Cpu size={32} weight="fill" color={colors.purple[100]} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="text-2xl font-bold text-purple-100">JavaDados</div>
        <DiceSix size={32} weight="fill" color={colors.purple[100]} />
      </div>
    </nav>
  );
}
