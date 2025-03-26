import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div>
            <Image src="/logo.svg" alt="logo" height={32} width={38} />
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

      <div className="bg-gradient-to-b from-[#171532] to-[#08090D] rounded-2xl">
        <div className="container mx-auto px-4 py-8 flex justify-between items-start">
          <div className="max-w-xl pt-8 pl-8">
            <p className="text-4xl font-bold text-white">
              Get Interview Ready with Ai-
            </p>
            <p className="text-4xl font-bold text-white mb-4">
              Powered Pracitce & Feedback
            </p>
            <p>
              Practice real interview questions & get instant feedback
            </p>
            <Button className="mt-6 rounded-full font-semibold bg-[#CAC5FE] hover:bg-[#B8B2FF] text-black">
              Start an Interview
            </Button>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/robot.png"
              alt="robot"
              width={441}
              height={322}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Your Past Interviews</h3>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
