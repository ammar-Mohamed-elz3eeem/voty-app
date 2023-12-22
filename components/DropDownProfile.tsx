import Link from "next/link";
import classes from "@/app/home.module.css";
import { signOut } from "next-auth/react";

function DropDownProfile() {
  return (
    <div className={`flex flex-col ${classes["dropdown-profile"]}`}>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/me/polls">My Polls</Link>
        </li>
        <li>
          <Link href="/me/">Profile</Link>
        </li>
        <hr />
        <li>
          <span className="cursor-pointer" onClick={() => signOut({redirect: true, callbackUrl: '/'})}>
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
}

export default DropDownProfile;
