"use client";

import type { PollType } from "@/lib/definitions";
import {
  InformationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Poll({ poll }: { poll: PollType }) {
  const { data: session } = useSession();

  return (
    <div className="border-4 border-primary rounded-md">
      <div className="flex flex-row gap-4 items-center h-24 px-5">
        <div>
          <InformationCircleIcon className="w-12 h-12" />
        </div>
        <div className="flex-1">
          <div className="">
            {poll.subject}
            <p className="text-base">Total votes: {poll.Votes && poll.Votes.length}</p>
          </div>
        </div>
        <div className="flex-col flex gap-4">
          {(session?.user?.role === "admin" || (session?.user && poll.creator && session?.user.id === poll.creator.id)) && (
            <div className="btn-group flex flex-nowrap justify-center flex-row gap-3">
              <div className="edit-poll">
                <Link href={`/polls/${poll.id}/edit`}>
                  <PencilIcon className="w-8 h-8" />
                </Link>
              </div>
              <div className="delete-poll">
                <TrashIcon className="w-8 h-8" />
              </div>
            </div>
          )}
          <div className="vote-cta">
            <Link href={`/polls/${poll.id}`}>
              <button className="btn btn-primary">Vote Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poll;
