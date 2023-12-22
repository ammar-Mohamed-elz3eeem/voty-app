"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import SignedInUser from "./SignedInUser";

export default function TopNav() {
  const { data: session } = useSession();
  const loginOrProfile = session?.user?.name ? (
    <SignedInUser />
  ) : (
    <Link href="/login" className="py-3 px-10 rounded-lg text-white bg-primary">
      Login / Register
    </Link>
  );

  return (
    <ul className="flex items-center">
      <li className="py-3 px-10 hover:border-b-2 border-primary transition-all">
        <Link href="/" className=" text-white">
          Home
        </Link>
      </li>
      <li className="py-3 px-10 ml-3 hover:border-b-2 border-primary transition-all">
        <Link href="/#about" className=" text-white">
          About
        </Link>
      </li>
      <li className="py-3 px-10 ml-3 hover:border-b-2 border-primary transition-all">
        <Link href="/#contact" className=" text-white">
          Contact
        </Link>
      </li>
      <li className="py-3 px-10 ml-3 hover:border-b-2 border-primary transition-all">
        <Link href="/polls" className=" text-white">
          Polls
        </Link>
      </li>
      <li className="py-3 px-10 ml-3">{loginOrProfile}</li>
    </ul>
  );
}
