"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddNewVote from "@/components/AddNewVote";
import Poll from "@/components/Poll";
import { getPollsByUserId } from "@/lib/actions";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const userPolls = await getPollsByUserId(session?.user.id);

  if (userPolls.length <= 0) {
    return (
      <div className="h-64 text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl">No Polls Found</h1>
        <ExclamationTriangleIcon className="w-16 h-16" />
        {session?.user && <Link href="/polls/new"><button className="btn btn-primary">Add new Poll</button></Link>}
      </div>
    );
  }
  return (
        <div className="flex flex-col w-full gap-4 text-white">
          <AddNewVote />
          {userPolls.map((poll) => (
            <Poll key={poll.id} poll={poll} />
          ))}
        </div>
  );
}
