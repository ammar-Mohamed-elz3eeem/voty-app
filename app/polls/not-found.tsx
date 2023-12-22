import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center text-white">
      <div className="flex flex-col items-center">
        <div className="text-5xl">404 Not Found</div>
        <ExclamationCircleIcon className="w-32 h-32" />
      </div>
    </div>
  );
}

export default NotFound;
