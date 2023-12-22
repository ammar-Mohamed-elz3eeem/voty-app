"use client";

import { PencilIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { DMSerifDisplay, paduck } from "../fonts";

function Page() {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex flex-col gap-8">
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={300}
            height={300}
            alt="Profile image"
          />
        ) : (
          <UserCircleIcon className="w-64 h-64 text-white" />
        )}
        <button className="btn btn-primary">Change Profile Picture</button>
        <button className="text-white flex flex-row gap-3 items-center justify-center">
          <PencilIcon className="w-4 h-4 text-white" /> Edit Profile
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h4 className={`text-xl font-bold text-primary ${paduck.className}`}>
            Name
          </h4>
          <p
            className={`text-xl font-bold text-white ${DMSerifDisplay.className}`}
          >
            {session?.user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-12">
          <div className="flex flex-col">
            <h4
              className={`text-xl font-bold text-primary ${paduck.className}`}
            >
              Email
            </h4>
            <p
              className={`text-xl font-bold text-white ${DMSerifDisplay.className}`}
            >
              {session?.user?.email}
            </p>
          </div>
          <div className="flex flex-col">
            <h4
              className={`text-xl font-bold text-primary ${paduck.className}`}
            >
              Role
            </h4>
            <p
              className={`text-xl font-bold text-white ${DMSerifDisplay.className}`}
            >
              {session?.user?.role}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
