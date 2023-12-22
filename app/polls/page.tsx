import AddNewVote from "@/components/AddNewVote";
import Poll from "@/components/Poll";
import TopNav from "@/components/TopNav";
import { getPolls } from "@/lib/actions";
import { ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

async function Page() {
  const polls = await getPolls();
  const session = await getServerSession(authOptions);
  
  if (polls.length <= 0) {
    return (
      <div className="h-64 text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl">No Polls Found</h1>
        <ExclamationTriangleIcon className="w-16 h-16" />
        {session?.user && <Link href="/polls/new"><button className="btn btn-primary">Add new Poll</button></Link>}
      </div>
    );
  }
  return (
    <div className="body">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 text-white">
          <AddNewVote />
          {polls.map((poll) => (
            <Poll key={poll.id} poll={poll} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
