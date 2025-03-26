import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex gap-2">
            <Image src="/logo.svg" alt="logo" height={32} width={38} />
            <h2>PrepWise</h2>
          </div>
        </Link>
        <div>
          <Image
            src="/user-avatar.png"
            alt="logo"
            height={32}
            width={38}
            className="rounded-full"
          />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
