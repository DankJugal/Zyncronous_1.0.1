import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import { MenuIcon, XIcon, ZapIcon } from "lucide-react";
import React from "react";

function Logo({
  fontSize = "2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
      href="/"
    >
       <Link className="flex items-center justify-center" href="#">
        <ZapIcon className="h-8 w-8" />
        <span className="ml-2 text-white">Zyncronous</span>
      </Link>
    </Link>
  );
}

export default Logo;
