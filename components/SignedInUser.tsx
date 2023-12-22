import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRef, useState } from "react";
import DropDownProfile from "./DropDownProfile";

export default function SignedInUser() {
  const [open, setOpen] = useState(false);

  const showUserMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="inline-block">
      <div className="relative">
        <UserCircleIcon
          className="text-primary w-12 h-12"
          onClick={showUserMenu}
        />
        {open && <DropDownProfile />}
      </div>
    </div>
  );
}
