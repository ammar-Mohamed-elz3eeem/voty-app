import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function Page() {
  return (
    <div className="h-screen w-screen flex-col flex gap-3 items-center justify-center">
      <h1 className="text-5xl font-bold">Forbidden</h1>
      <ExclamationTriangleIcon className="h-20 w-20" />
      <p className="text-xl">your role is not admin to access this page</p>
    </div>
  );
}

export default Page;
